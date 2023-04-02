import { calcTimeObject, coloredText } from '../utils';
import { ColorKey, MILLISECONDS_IN } from '../constants';

const checkHours = (timestamp: number) => timestamp > MILLISECONDS_IN.HOUR;
const checkMinutes = (timestamp: number) => timestamp > MILLISECONDS_IN.MINUTE;
const checkSeconds = (timestamp: number) => timestamp > MILLISECONDS_IN.SECOND;

export const ETA = (timestamp: number, color: ColorKey = 'neutral'): string => {
  const { hours, minutes, seconds } = calcTimeObject(timestamp);

  const hoursString = checkHours(timestamp)
    ? `${coloredText(hours, color)}h `
    : '';
  const minutesString = checkMinutes(timestamp)
    ? `${coloredText(minutes, color)}m  `
    : '';
  const secondsString = checkSeconds(timestamp)
    ? `${coloredText(seconds, color)}s`
    : '';
  const leftString = secondsString ? ' left' : '';

  return `${hoursString}${minutesString}${secondsString}${leftString}`;
};
