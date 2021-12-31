var friends = ["Aneki", "Quell", "Clarity", "Sleepy", "Roghar", "DM Crimson"];

// We need 2 teams - team1 and team2
var team1 = new Array();
var team2 = new Array();

// for (var i = 0; i < friends.length; i++) {
//     if (i % 2 == 0) {
//         // if the index is even, add the person to team 1
//         team1.push(friends[i]);
//     } else {
//         // otherwise add them to team 2
//         team2.push(friends[i]);
//     }
// }

// for (var i = 0; i < friends.length; i++) {
//     if (i % 2 == 0) {
//         // if the index is even, add the person to team 1
//         team1.unshift(friends[i]);
//     } else {
//         // otherwise add them to team 2
//         team2.unshift(friends[i]);
//     }
// }

for (var i = 0; i < friends.length; i++) {
    if (i % 2 == 0) {
        // if the index is even, add the person to team 1
        team1[team1.length] = friends[i];
    } else {
        // otherwise add them to team 2
        team2[team2.length] = friends[i];
    }
}

console.log(team1);
console.log(team2);