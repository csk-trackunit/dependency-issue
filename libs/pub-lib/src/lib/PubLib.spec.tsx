import { render } from '@testing-library/react';

import PubLib from './PubLib';

describe('PubLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PubLib />);
    expect(baseElement).toBeTruthy();
  });
});
