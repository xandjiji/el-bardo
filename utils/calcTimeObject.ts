import { TimeObject, MILLISECONDS_IN } from '../constants';

export const calcTimeObject = (timestamp: number): TimeObject => {
  let millisecondsLeft = timestamp;

  const hours = Math.floor(millisecondsLeft / MILLISECONDS_IN.HOUR);

  millisecondsLeft -= hours * MILLISECONDS_IN.HOUR;
  const minutes = Math.floor(millisecondsLeft / MILLISECONDS_IN.MINUTE);

  millisecondsLeft -= minutes * MILLISECONDS_IN.MINUTE;
  const seconds = Math.floor(millisecondsLeft / MILLISECONDS_IN.SECOND);

  return { hours, minutes, seconds };
};
