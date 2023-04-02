import { log, setFooterText } from './index';
import { colored, progressBar } from './utils';
import { Timestamp } from './Timestamp';
import { ColorKey } from './constants';

export type TrackETAConstructor = { totalTasks?: number; taskName?: string };

export class TrackETA {
  constructor({ taskName = 'Task', totalTasks = 1 }: TrackETAConstructor) {
    this.taskName = taskName;
    this.startTimestamp = +new Date();
    this.totalTasks = totalTasks;

    this.setText(
      colored.text(
        `${this.taskName} is ${this.getReadablePercentage()} completed`,
        'reset',
      ),
    );
  }

  private taskName = 'Task';

  private startTimestamp = 0;

  private currentTask = 0;

  private totalTasks = 1;

  private percentageCompleted = 0;

  private getReadablePercentage = () =>
    colored.text(`${(this.percentageCompleted * 100).toFixed(2)}%`, 'system');

  private setText = (text: string) =>
    setFooterText(`${progressBar(this.percentageCompleted)} ${text}`);

  private updateETA = () => {
    const elapsedTime = +new Date() - this.startTimestamp;
    const tasksLeft = this.totalTasks - this.currentTask;
    const estimatedTimeLeft = (elapsedTime * tasksLeft) / this.currentTask;

    if (tasksLeft) {
      this.setText(
        colored.text(
          `${
            this.taskName
          } is ${this.getReadablePercentage()} completed. ${Timestamp.ETA(
            estimatedTimeLeft,
          )}`,
          'reset',
        ),
      );
    }
  };

  public setCurrentTask = (newTask: number): void => {
    this.currentTask = newTask;
    this.percentageCompleted = this.currentTask / this.totalTasks;
    this.updateETA();
  };

  public incTask = (): void => {
    this.currentTask += 1;
    this.setCurrentTask(this.currentTask);
  };

  public getProgress = (color: ColorKey = 'system'): string =>
    colored.progress([this.currentTask, this.totalTasks], color);

  finish = (): void => {
    log(
      `${progressBar(this.percentageCompleted, 'success')} ${
        this.taskName
      } was ${this.getReadablePercentage()} completed in ${Timestamp.humanReadable(
        +new Date() - this.startTimestamp,
      )}\n`,
    );
    setFooterText('');
  };
}
