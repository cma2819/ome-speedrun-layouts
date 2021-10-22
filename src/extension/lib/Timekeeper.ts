import { Run, Segment, Timer } from 'livesplit-core'

export type TimeStatus = 'in_progress' | 'paused' | 'finished';

const TimerPhase = {
  notRunning: 0,
  running: 1,
  ended: 2,
  paused: 3,
} as const;

export class Timekeeper {

  protected livesplit: Timer;

  constructor() {
    const run = Run.new();
    run.pushSegment(Segment.new('Finish'));

    const timer = Timer.new(run);
    if (!timer) {
      throw new Error('Failed to create livesplit timer!');
    }

    this.livesplit = timer;
  }

  start(): void {
    this.livesplit.reset(false);
    this.livesplit.start();
  }

  pause(): void {
    this.livesplit.pause();
  }

  resume(): void {
    this.livesplit.resume();
  }

  finish(): void {
    this.livesplit.split();
  }

  get status(): TimeStatus {
    switch (this.livesplit.currentPhase()) {
    case TimerPhase.paused:
      return 'paused';
    case TimerPhase.running:
      return 'in_progress';
    default:
      return 'finished';
    }
  }

  get currentTime(): string {
    const totalSeconds = this.currentTimeSeconds;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return ((hours > 0) ? hours.toString().padStart(2, ('0')) + ':' : '')
      + `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  get currentTimeSeconds(): number {
    return this.livesplit.currentTime().realTime()?.totalSeconds() || 0;
  }
}