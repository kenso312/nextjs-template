import { render, screen } from '@testing-library/react';
import ComponentTemplate from '@/components/_template';

describe('ComponentTemplate', () => {
  it('renders the text', () => {
    render(<ComponentTemplate text="Welcome" />);

    const text = screen.getByText(/Welcome/i);

    expect(text);
  });
});
