import { bgColors, BGColorKey, colors, ColorKey } from '../constants';

const coloredText = (text: string | number, color: ColorKey): string =>
  `${colors[color]}${text}${colors.reset}`;

const coloredBrackets = (
  text: string | number,
  color: ColorKey = 'control',
): string => `${coloredText('[', color)}${text}${coloredText(']', color)}`;

export const colored = {
  text: coloredText,
  background: (text: string | number, color: BGColorKey): string =>
    `${bgColors[color]}${text}${bgColors.reset}`,
  diff: (diff: number): string => {
    if (diff > 0) {
      return coloredText(`+${diff}`, 'success');
    }

    if (diff < 0) {
      return coloredText(diff, 'fail');
    }

    return coloredText(diff, 'control');
  },
  progress: (
    [current, last]: [number, number],
    color: ColorKey = 'system',
  ): string =>
    coloredBrackets(`${current}${coloredText('/', color)}${last}`, color),
  brackets: coloredBrackets,
};
