import { bgColors, BGColorKey } from '../constants';

export const coloredBackground = (
  text: string | number,
  color: BGColorKey,
): string => `${bgColors[color]}${text}${bgColors.reset}`;
