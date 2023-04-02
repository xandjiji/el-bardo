import { TerminalStream } from './TerminalStream';
import { Timestamp } from './Timestamp';
import { colored } from './utils';
import { Broadcaster } from './constants';

const TAB = colored.text(' └> ', 'control');

class Logger {
  private stream = new TerminalStream();

  public log = (message: string) => {
    this.stream.log(message);
  };

  public broadcast: Broadcaster = (text, color) => {
    const message = `${Timestamp.now(color)} ${text}`;
    this.log(message);
  };

  public tabBroadcast: Broadcaster = (text, ...args) => {
    this.broadcast(`${TAB} ${text}`, ...args);
  };

  public setFooterText = this.stream.setFooterText;
}

export const logger = new Logger();
