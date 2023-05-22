function matchParticipants(hostsArr, visitorsArr) {
  const hosts = Array.from(hostsArr);
  const visitors = Array.from(visitorsArr);

  let pairings = [];
  while (hosts.length) {
    const hosting = hosts.shift();
    const visitor = visitors.shift();

    if (hosting && visitor) {
      const match = [hosting, visitor];
      pairings.push(match);
    }
  }
  return pairings;
}

export function reorderHouse(arr, newItem) {
  let reordered = Array.from(arr);
  for (let i = reordered.length - 1; i > 0; i--) {
    reordered[i + 1] = reordered[i];
  }

  reordered[1] = newItem;

  return reordered;
}

export function rotateTeams(hostings, visitors) {
  let reorderedHostings = Array.from(hostings);
  let reorderedVisitors = Array.from(visitors);

  reorderedVisitors[reorderedVisitors.length] = reorderedHostings.pop();
  reorderedHostings = reorderHouse(
    reorderedHostings,
    reorderedVisitors.shift()
  );

  return [reorderedHostings, reorderedVisitors];
}

export function buildMatchesTable(numberOfTeams) {
  let numberOfRounds = numberOfTeams - 1;
  let teams = Array.from({ length: numberOfTeams }, (_, index) => index + 1);

  if (numberOfTeams % 2 !== 0) {
    teams.push(null);
  }

  let hosts = teams.slice(0, numberOfTeams / 2);
  let visitants = teams.slice(numberOfTeams / 2).reverse();

  if (numberOfTeams % 2 !== 0) {
    visitants.push(null);
  }

  const allRounds = [];
  for (let round = 0; round < numberOfRounds - 1; round++) {
    allRounds.push(matchParticipants(hosts, visitants));
    [hosts, visitants] = rotateTeams(hosts, visitants);
  }

  return allRounds;
}
