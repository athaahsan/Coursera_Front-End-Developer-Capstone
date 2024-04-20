import React from 'react';
import { render } from '@testing-library/react';
import MyMain from './MyMain';

test('renders MyMain component without crashing', () => {
  render(<MyMain />);
});
