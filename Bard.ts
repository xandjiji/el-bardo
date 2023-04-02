import { TerminalStream } from './TerminalStream';
import { TimeFormatter, Timestamp } from './Timestamp';
import { colored } from './utils';
import { Broadcaster } from './constants';

const TAB = colored.text(' └> ', 'control');

export class Bard {
  private stream = new TerminalStream();
  private readonly timeFormatter?: TimeFormatter;

  constructor(config?: { timeFormatter?: TimeFormatter }) {
    this.timeFormatter = config?.timeFormatter;
  }

  public log = (message: string) => {
    this.stream.log(message);
  };

  public broadcast: Broadcaster = (text, color) => {
    const message = `${Timestamp.now(color, this.timeFormatter)} ${text}`;
    this.log(message);
  };

  public tabBroadcast: Broadcaster = (text, ...args) => {
    this.broadcast(`${TAB} ${text}`, ...args);
  };

  public setFooterText = this.stream.setFooterText;
}

export const bard = new Bard();
