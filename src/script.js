// import {
//   buildMatchesTable,
//   rotateTeams,
// } from './algorithms/roundRobinTournament.js';

// let tournament = buildMatchesTable(6);

// console.log(tournament);

// let [reorderedArr1, reorderedArr2] = rotateTeams(
//   [1, 2, 3, 4, 5, 6],
//   [7, 8, 9, 10, 11, 12]
// );

// console.log(reorderedArr1, reorderedArr2);
// console.log(rotateTeams(reorderedArr1, reorderedArr2));

import BinarySearchTree from './data-structures/binary-search-tree.js';
const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(15);
tree.insert(7);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

const printKey = (value) => console.log(value);

console.log(tree);
tree.inOrderTraverse(printKey);

console.log(tree.search(1) ? 'Key 1 found' : 'Key 1 not found');
console.log(tree.search(8) ? 'Key 8 found' : 'Key 8 not found');
