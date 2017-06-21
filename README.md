# Logger for freactal

## Table of contents
* [Install](#install)
* [Usage](#usage)
* [Options](#options)
* [Recipes](#recipes)
  * [Log only in development](#log-only-in-development)
* [To Do](#to-do)
* [License](#license)

## Install
`npm i --save freactal-logger`

## Usage
```javascript
import { provideState } from 'freactal';
import logger from 'freactal-logger';

// Logger with default options
provideState({
  middleware: [logger]
});
```

Or you can create your own logger with custom [options](#options):
```javascript
import { provideState } from 'freactal';
import { createLogger } from 'freactal-logger';

const logger = createLogger({
  // ...options
});

provideState({
  middleware: [logger]
});
```

## Options
```javascript
{
  collapsed, // the log group is collapsed or not.
}
```

### Options description

#### __collapsed (Boolean)__
Takes a boolean to inidicate the log group should be collapsed or not.

*Default: `false`*

## Recipes
### Log only in development
```javascript
import { provideState } from 'freactal';
import logger from 'freactal-logger';


const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

provideState({
  middleware: middlewares,
});
```

## To Do
- [ ] Improve performance
- [ ] Write tests
- [ ] Support more options

Feel free to create PR for any of those tasks!

## License
MIT
