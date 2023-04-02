import { coloredText } from './coloredText';
import { ColorKey } from '../constants';

export const brackets = (
  text: string | number,
  color: ColorKey = 'control',
): string => `${coloredText('[', color)}${text}${coloredText(']', color)}`;
