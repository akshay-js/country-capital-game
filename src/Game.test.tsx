import { userEvent } from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import Game from './Game'; 

describe('Game component UTs', () => {
  // Test to check if the game title is rendered
  it('should render the game title', () => {
    render(<Game countryObject={{}} />);
    expect(screen.getByText('Match the Country with Capital or Capital with Country')).toBeInTheDocument();
  });

  // Test to check if clicking on a card updates the game state
  it('should update game state when clicking on a card', async () => {
    render(<Game countryObject={{ "Country 1": "Capital 1", "Country 2": "Capital 2" }} />);
    const card = screen.getByText('Country 1'); // Replace with the text of the first card
    userEvent.click(card);
    await waitFor(() => {
      const flippedCard = screen.getByText('Country 1');
      // Replace with the text of the first card after it's flipped
      expect(flippedCard).toHaveClass('active'); // Assuming 'active' class is applied when card is flipped
      // Add more assertions to check game state after clicking on a card
    });
  });

  // Test to check if the game ends when all pairs are matched
  it('should end the game when all pairs are matched', async () => {
    render(<Game countryObject={{ "Country 1": "Capital 1" }} />);
    // Write code to simulate matching all pairs
    // Assert that the "You have won the Game" message is rendered
    const country = screen.getByText('Country 1'); // Replace with the text of the first card
    userEvent.click(country);
    await waitFor(() => {

      const capital = screen.getByText('Capital 1'); // Replace with the text of the first card
      userEvent.click(capital);
    });

    
    await waitFor(() => {
      const flippedCountry = screen.getByText('Country 1');
      expect(flippedCountry).toHaveClass('green');

      const flippedCapital = screen.getByText('Capital 1');
      expect(flippedCapital).toHaveClass('green');

      // expect(screen.getByText('You have won the Game')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.queryByText('You have won the Game')).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  // Add more tests as needed to cover different aspects of the game functionality
});
