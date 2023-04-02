import { calcTimeObject, coloredText } from '../utils';
import { ColorKey } from '../constants';

export const humanReadable = (
  timestamp: number,
  color: ColorKey = 'neutral',
): string => {
  const { hours, seconds, minutes } = calcTimeObject(timestamp);

  const hoursString = hours
    ? `${coloredText(hours, color)} ${hours > 1 ? 'hours' : 'hour'}, `
    : '';
  const minutesString = minutes
    ? `${coloredText(minutes, color)} ${
        minutes > 1 ? 'minutes' : 'mintue'
      } and `
    : '';
  const secondsString = seconds
    ? `${coloredText(seconds, color)} ${seconds > 1 ? 'seconds' : 'second'}`
    : '';

  return `${hoursString}${minutesString}${secondsString}`;
};
