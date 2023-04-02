import { colored } from '../utils';
import { ColorKey } from '../constants';

const separator = colored.text(':', 'control');

const defaultTimeFormatter = (date: Date, color: ColorKey = 'reset') =>
  date
    .toLocaleTimeString('en-US', {
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    })
    .split(':')
    .map((time) => colored.text(time, color))
    .join(separator);

export type TimeFormatter = typeof defaultTimeFormatter;

export const now = (
  color: ColorKey = 'reset',
  timeFormatter: TimeFormatter = defaultTimeFormatter,
): string => colored.brackets(timeFormatter(new Date(), color), 'control');
