import log from './log';
import { memoize } from './helpers';

const createLogger = (options = {}) => memoize(freactalCxt => Object.assign({}, freactalCxt, {
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
}));

export default createLogger;
