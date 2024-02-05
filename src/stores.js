// src/stores.js
import { writable } from 'svelte/store';

export const tournamentData = writable({ numPlayers: 4, matches: [] });

export function generateMatches(numPlayers) {
    const matches = [];
    for (let i = 0; i < numPlayers / 2; i++) {
        matches.push({ player1: `Player ${2 * i + 1}`, player2: `Player ${2 * i + 2}` });
    }
    tournamentData.set({ numPlayers, matches });
}
