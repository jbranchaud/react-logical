import React from 'react';
import renderer from 'react-test-renderer';

import String from '../lib/components/String';

it('renders with no props', () => {
  const tree = renderer.create(<String />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders with a string', () => {
  const tree = renderer.create(<String str={'Logical'} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders with a blank string', () => {
  const tree = renderer
    .create(<String str={''} blankStr={'Fallthrough'} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders with no string', () => {
  const tree = renderer.create(<String blankStr={'Fallthrough'} />).toJSON();
  expect(tree).toMatchSnapshot();
});
