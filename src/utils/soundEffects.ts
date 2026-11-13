// Web Audio API Synthesizer for '또로롱' correct chime, wrong tone, and pass fanfare + applause

class SoundEffectsManager {
  private ctx: AudioContext | null = null;
  public muted: boolean = false;

  private getContext(): AudioContext | null {
    if (this.muted) return null;
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  /**
   * '또로롱~' 맑고 경쾌한 정답 효과음 (C5 - E5 - G5 - C6 아르페지오 차임벨)
   */
  public playCorrectChime() {
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    const step = 0.075;

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * step);

      const startTime = now + idx * step;
      const duration = idx === notes.length - 1 ? 0.45 : 0.22;

      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.24, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration + 0.02);
    });
  }

  /**
   * 오답 시 부드러운 안내음
   */
  public playWrongTone() {
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const freqs = [280, 220];

    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.12);

      const startTime = now + idx * 0.12;
      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.16, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.22);
    });
  }

  /**
   * 합격 기준(80점/90점/100점) 달성 시 축하 팡파르 + 박수 효과음
   */
  public playPassCelebration() {
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // 1. 축하 팡파르 멜로디
    const fanfareNotes = [
      { freq: 523.25, delay: 0.0, dur: 0.14 }, // C5
      { freq: 659.25, delay: 0.12, dur: 0.14 }, // E5
      { freq: 783.99, delay: 0.24, dur: 0.14 }, // G5
      { freq: 1046.5, delay: 0.36, dur: 0.35 }, // C6
      { freq: 783.99, delay: 0.65, dur: 0.15 }, // G5
      { freq: 1046.5, delay: 0.82, dur: 0.65 }, // C6
    ];

    fanfareNotes.forEach((n) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(n.freq, now + n.delay);

      const st = now + n.delay;
      gain.gain.setValueAtTime(0.001, st);
      gain.gain.exponentialRampToValueAtTime(0.25, st + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, st + n.dur);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(st);
      osc.stop(st + n.dur + 0.03);
    });

    // 2. 박수 소리 합성 (Filtered Noise Claps)
    const clapCount = 18;
    for (let i = 0; i < clapCount; i++) {
      const clapTime = now + 0.25 + i * 0.09 + (Math.random() * 0.04 - 0.02);
      this.triggerSingleClap(ctx, clapTime);
    }
  }

  private triggerSingleClap(ctx: AudioContext, startTime: number) {
    const bufferSize = ctx.sampleRate * 0.08;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.022));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1100 + Math.random() * 500, startTime);
    filter.Q.setValueAtTime(1.8, startTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.14, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.075);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(startTime);
    noise.stop(startTime + 0.08);
  }
}

export const soundEffects = new SoundEffectsManager();
