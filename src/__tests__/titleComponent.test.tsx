import { render } from '@testing-library/react';
import { TitleComponent } from '../components/titleComponent';

describe('titleComponent', () => {
  test('renders title and image correctly', () => {
    const titleData = {
      title: 'Sample Title',
      sprite: 'path/to/sprite.png',
    };

    const { getByText, getByAltText } = render(<TitleComponent data={titleData} />);

    // Check if the title is rendered with the correct text
    const titleElement = getByText(titleData.title.toUpperCase());
    expect(titleElement).toBeInTheDocument();

    // Check if the image is rendered with the correct alt text
    const imageElement = getByAltText('pokemon image');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', titleData.sprite);
  });

  test('renders without data', () => {
    const { getByTestId } = render(<TitleComponent />);

    // Check if the component renders without data
    const title = getByTestId("title");
    expect(title.textContent).toBe("");

    const img = getByTestId("titleImg");
    expect(img.getAttribute('src')).toBeNull();
  });
});
