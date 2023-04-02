import { logger } from './Logger';

export * from './TrackETA';
export * from './Timer';
export { colored } from './utils';

export const { log, broadcast, tabBroadcast, setFooterText } = logger;
