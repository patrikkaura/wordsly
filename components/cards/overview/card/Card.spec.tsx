import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  let props = {
    id: '1',
    name: 'Card 1',
    rating: 3,
    numberOfWords: 100,
  };

  it('should match snapshot', () => {
    render(<Card {...props} />);

    expect(screen.getByTestId('word-card-container')).toMatchSnapshot();
  });

  it('render zero stars', () => {
    render(<Card {...props} rating={0} />);

    expect(screen.getByTestId('word-card-stars-container')).toMatchSnapshot();
  });

  it('should render five stars', () => {
    render(<Card {...props} rating={5} />);

    expect(screen.getByTestId('word-card-stars-container')).toMatchSnapshot();
  });
});
