import { colors, ColorKey } from '../constants';

export const coloredText = (text: string | number, color: ColorKey): string =>
  `${colors[color]}${text}${colors.reset}`;
