import {
  buildMatchesTable,
  rotateTeams,
} from './algorithms/roundRobinTournament.js';

let tournament = buildMatchesTable(6);

console.log(tournament);

let [reorderedArr1, reorderedArr2] = rotateTeams(
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12]
);

console.log(reorderedArr1, reorderedArr2);
console.log(rotateTeams(reorderedArr1, reorderedArr2));
