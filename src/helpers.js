export const repeat = (str, times) => (new Array(times + 1)).join(str);

export const pad = (num, maxLength) => repeat('0', maxLength - num.toString().length) + num;

export const formatTime = time => `${pad(time.getHours(), 2)}:${pad(time.getMinutes(), 2)}:${pad(time.getSeconds(), 2)}.${pad(time.getMilliseconds(), 3)}`;

const shouldUpdate = (lastArg, arg) => {
  const lastKeys = Object.keys(lastArg);
  const keys = Object.keys(arg);

  return lastKeys.length !== keys.length ||
    keys.some(key => arg[key] !== lastArg[key]);
};

export const memoize = (func) => {
  let lastArg = {};
  let lastResult;
  return (arg) => {
    if (shouldUpdate(lastArg, arg)) {
      lastResult = func(arg);
    }
    lastArg = arg;
    return lastResult;
  };
};
