import {logger, consoleTransport} from 'react-native-logs';

// TODO: ADD TYPES
const config = {
    levels: {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3,
    },
    transport: consoleTransport,
    transportOptions: {
        colors: {
            info: 'blueBright',
            warn: 'yellowBright',
            error: 'redBright',
        },
        extensionColors: {
            root: 'magenta',
            home: 'green',
        },
    },
};

type loggerTypes = 'trace' | 'info' | 'error';

export const log = logger.createLogger<loggerTypes>(config);
