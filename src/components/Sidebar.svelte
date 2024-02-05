<script>
  import { tournamentData, generateMatches } from '../stores.js';

  let numPlayers = '8'; // Ensure this matches the option value exactly

  // Function to update the bracket when the selection changes
  function updateBracket() {
    generateMatches(numPlayers);
  }

  // Watch for changes in numPlayers to update the bracket
  $: updateBracket(), numPlayers;
</script>

<div class="w-64 bg-gray-800 text-white p-5">
  <h2 class="text-lg font-semibold">Tournament Settings</h2>
  <div class="space-y-4">
    <div>
      <label for="numPlayers" class="block">Number of Players</label>
      <select bind:value={numPlayers} id="numPlayers" class="mt-1 p-2 w-full bg-gray-700 border-none rounded text-white">
        <option value="8">8</option>
        <option value="16">16</option>
      </select>
    </div>
  </div>
</div>
