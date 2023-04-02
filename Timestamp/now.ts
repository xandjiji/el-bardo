import { colored } from '../utils';
import { ColorKey } from '../constants';

const separator = colored.text(':', 'control');

export const now = (color: ColorKey = 'reset'): string => {
  const splitTimestamp = new Date()
    .toLocaleTimeString('en-US', {
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    })
    .split(':')
    .map((time) => colored.text(time, color));

  return colored.brackets(splitTimestamp.join(separator), 'control');
};
