# react-logical

> A collection of components for reducing inline logic in your React apps

## Installation

Add `react-logical` to your project:

```bash
$ yarn add react-logical
```

Or with npm:

```bash
$ npm install --save react-logical
```

## Usage

We rarely want to display a blank string, so when a prop gets passed down,
we inevitably have to do some checks. This can introduce pockets of curly
braces with error prone boolean logic and ternary statements.

Instead of writing this:

```javascript
import React from 'react';

const Greeting = ({ name }) => {
  return (
    <h1>
      {'Hello, '}
      {name && name.length > 0 ? name : 'World'}
      {'!'}
    </h1>
  );
}
```

Import `String` and write this:

```javascript
import React from 'react';
import { String } from 'react-logical';

const Greeting = ({ name }) => {
  return (
    <h1>
      {'Hello, '}
      <String str={name} blankStr={'World'} />
      {'!'}
    </h1>
  );
}
```

We've removed a ternary statement from the component and made it more
declarative. Yay!

## Development

```bash
$ git clone https://github.com/jbranchaud/react-logical
$ cd react-logical
$ yarn # or npm install
```

## Testing

```bash
$ yarn test
```

## License

&copy; 2018 Josh Branchaud

This repository is licensed under the MIT license. See `LICENSE` for
details.
