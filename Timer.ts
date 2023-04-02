import { Timestamp } from './Timestamp';

export type TimerArgs = { startDate?: Date };

export class Timer {
  constructor(args?: TimerArgs) {
    this.startTimestamp = +(args?.startDate ?? new Date());
  }

  private startTimestamp = 0;

  elapsedTime = (): string =>
    Timestamp.humanReadable(+new Date() - this.startTimestamp);
}
