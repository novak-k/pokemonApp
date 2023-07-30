import { render } from '@testing-library/react';
import { ProgressComponent } from '../components/progressComponent';

const mockData = {
  hp: 80,
  attack: 60,
  defense: 70,
  spAttack: 75,
  spDefense: 85,
  speed: 90,
};

describe('ProgressComponent', () => {
  test('renders the component with data', () => {
    const { getByText } = render(<ProgressComponent data={mockData} />);

    // Check if the text labels are present
    expect(getByText('HP')).toBeInTheDocument();
    expect(getByText('Attack')).toBeInTheDocument();
    expect(getByText('Defense')).toBeInTheDocument();
    expect(getByText('Sp. Attack')).toBeInTheDocument();
    expect(getByText('Sp. Defense')).toBeInTheDocument();
    expect(getByText('Speed')).toBeInTheDocument();
  });

  test('renders the component with no data', () => {
    const { getByTestId } = render(<ProgressComponent />);

    // Test for empty values
    const progressHp = getByTestId("progressHp");
    expect(progressHp.textContent).toBe("%");

    const progressAttack = getByTestId("progressAttack");
    expect(progressAttack.textContent).toBe("%");

    const progressDefense = getByTestId("progressDefense");
    expect(progressDefense.textContent).toBe("%");

    const progressSpAttack = getByTestId("progressSpAttack");
    expect(progressSpAttack.textContent).toBe("%");

    const progressSpDefense = getByTestId("progressSpDefense");
    expect(progressSpDefense.textContent).toBe("%");

    const progressSpeed = getByTestId("progressSpeed");
    expect(progressSpeed.textContent).toBe("%");
  });
});
