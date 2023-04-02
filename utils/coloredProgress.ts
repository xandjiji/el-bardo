import { coloredText } from './coloredText';
import { brackets } from './brackets';
import { ColorKey } from '../constants';

export const coloredProgress = (
  [current, last]: [number, number],
  color: ColorKey = 'system',
): string => brackets(`${current}${coloredText('/', color)}${last}`, color);
