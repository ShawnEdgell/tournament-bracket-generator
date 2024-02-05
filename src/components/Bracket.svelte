<script>
  import { tournamentData } from '../stores.js';

  let matches = [];

  tournamentData.subscribe($tournamentData => {
    matches = $tournamentData.matches;
  });
</script>

<style>
  /* Ensures the bracket section takes full width with controlled padding */
  .bracket-section {
    padding: 0 1rem; /* Adjust the horizontal padding as needed */
    max-width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between; /* Space between left and right but not affecting the edge alignment */
    min-height: 100vh; /* Optional: For vertical centering */
    align-items: center; /* Optional: For vertical centering */
  }

  .matches-container {
    width: 100%; /* Ensure containers take the full available width */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem; /* Adjust gap between matches within each side */
  }

  .match {
    border: 2px solid #ddd;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    margin: auto; /* Keeps the match width controlled and centered within its column */
    max-width: 300px; /* Adjust the maximum width of matches */
  }

  /* Specific targeting might be needed if you want to adjust the first and last match alignment or spacing further */
</style>

<div class="bracket-section">
  <div class="matches-container">
    {#each matches as match, index}
      <div class="match">
        <p>{match.player1} vs {match.player2}</p>
      </div>
    {/each}
  </div>
</div>
