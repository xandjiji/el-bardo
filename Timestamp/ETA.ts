import { calcTimeObject, colored } from '../utils';
import { ColorKey, MILLISECONDS_IN } from '../constants';

const checkHours = (timestamp: number) => timestamp > MILLISECONDS_IN.HOUR;
const checkMinutes = (timestamp: number) => timestamp > MILLISECONDS_IN.MINUTE;
const checkSeconds = (timestamp: number) => timestamp > MILLISECONDS_IN.SECOND;

export const ETA = (timestamp: number, color: ColorKey = 'neutral'): string => {
  const { hours, minutes, seconds } = calcTimeObject(timestamp);

  const hoursString = checkHours(timestamp)
    ? `${colored.text(hours, color)}h `
    : '';
  const minutesString = checkMinutes(timestamp)
    ? `${colored.text(minutes, color)}m `
    : '';
  const secondsString = checkSeconds(timestamp)
    ? `${colored.text(seconds, color)}s`
    : '';
  const leftString = secondsString ? ' left' : '';

  return `${hoursString}${minutesString}${secondsString}${leftString}`;
};
