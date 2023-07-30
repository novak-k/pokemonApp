import { render } from '@testing-library/react';
import { DescriptionComponent } from '../components/descriptionComponent';

const mockData = {
  id: 25,
  height: 70,
  weight: 800,
  abilities: ['Ability 1', 'Ability 2'],
  type: ['bug', 'electric', 'notype'],
};

describe('DescriptionComponent', () => {
  test('renders the component with data', () => {
    const { getByText } = render(<DescriptionComponent data={mockData} />);

    // Test for rendered texts
    expect(getByText('#25')).toBeInTheDocument();
    expect(getByText(/7m/i)).toBeInTheDocument();
    expect(getByText(/80kg/i)).toBeInTheDocument();
    expect(getByText('Ability 1')).toBeInTheDocument();
    expect(getByText('Ability 2')).toBeInTheDocument();
    expect(getByText('BUG')).toBeInTheDocument();
    expect(getByText('ELECTRIC')).toBeInTheDocument();
    expect(getByText('NOTYPE')).toBeInTheDocument();
  });

  test('renders the component with no data', () => {
    const { getByTestId } = render(<DescriptionComponent />);

    // Test for empty values
    const abilities = getByTestId("abilities");
    expect(abilities.textContent).toBe("")

    const type = getByTestId("type");
    expect(type.textContent).toBe("");

    const id = getByTestId("id");
    expect(id.textContent).toBe("#");

    const height = getByTestId("height");
    expect(height.textContent).toBe("");

    const weight = getByTestId("weight");
    expect(weight.textContent).toBe("");
  });
});
