import log from './log';

const createLogger = (options = {}) => freactalCxt => Object.assign({}, freactalCxt, {
  effects: Object.keys(freactalCxt.effects).reduce((memo, key) => {
    memo[key] = (...args) => freactalCxt.effects[key](...args).then((nextState) => {
      const logEntry = {};
      logEntry.startedTime = new Date();
      logEntry.prevState = freactalCxt.state;
      logEntry.action = key;
      logEntry.nextState = nextState;
      log(logEntry, options);

      return nextState;
    });
    return memo;
  }, {}),
});

const defaultLogger = createLogger();

export { createLogger, defaultLogger as logger };
export default defaultLogger;
