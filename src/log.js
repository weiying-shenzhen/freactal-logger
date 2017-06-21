import { formatTime } from './helpers';

function log(entry, options) {
  const { collapsed = false } = options;

  if (collapsed) {
    console.groupCollapsed(`action ${entry.action} @ ${formatTime(entry.startedTime)}`);
  } else {
    console.group(`action ${entry.action} @ ${formatTime(entry.startedTime)}`);
  }
  console.log('%c prev state', 'color: #9e9e9e; font-weight: bold', entry.prevState);
  console.log('%c next state', 'color: #4caf50; font-weight: bold', entry.nextState);
  console.groupEnd();
}

export default log;
