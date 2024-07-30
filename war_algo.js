//TO DO implement test cases

//Test Case 1:

let playerOneCards1 = [5, 1, 13, 10, 11, 3, 2, 10, 4, 12, 5, 11, 10, 5, 7, 6, 6, 11, 9, 6, 3, 13, 6, 1, 8, 1] 
let playerTwoCards1 = [9, 12, 8, 3, 11, 10, 1, 4, 2, 4, 7, 9, 13, 8, 2, 13, 7, 4, 2, 8, 9, 12, 3, 12, 7, 5]

// Challenge outputs
// Test Case 1: 1

//Test Case 2:

// let playerOneCards1 = [3, 11, 6, 12, 2, 13, 5, 7, 10, 3, 10, 4, 12, 11, 1, 13, 12, 2, 1, 7, 10, 6, 12, 5, 8, 1] 
// let playerTwoCards1 = [9, 10, 7, 9, 5, 2, 6, 1, 11, 11, 7, 9, 3, 4, 8, 3, 4, 8, 8, 4, 6, 9, 13, 2, 13, 5]

// Challenge outputs
// Test Case 2: 2

//Test Case 3:

// let playerOneCards1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] 
// let playerTwoCards1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// Challenge outputs
// Test Case 3: 0


// The card game War
const war = (player1, player2) => {
    let count = 0
    while ((player2.length != 0) && (player1.length != 0) ) {
    count ++
        //Step 1: (this is a battle)each player reveals the top card of their deck
        // If the cards are of equal value, it's war!
        if (player1[0] == player2[0]) {
            subwar(player1, player2, minLength = 4, index = 0, subWarCard = 3, numberOfCards = 3)   
        } else {
            battle(player1, player2)
        }
    }
    // in case one player has zero cards left
    if (player2.length == 0) {
        return 1
    }
    if (player1.length == 0) {
        return 2
    }
    return `Somethiing weird happened... player1 ${player1}, player2 ${player2}`
    //call the battle result
    
}

const battle = (player1, player2) => {
    if (player1[0] > player2[0]) {
        takecards(player1, player2)
        console.log(`player 1 wins, ${player1}`)
    } else if (player2[0] > player1[0]) {
        takecards(player2, player1)
        console.log(`player 2 wins, ${player2}`)
    } else if (player2[0] == player1[0]) {
        subwar(player1, player2)
        return "war"
    }
}

//Both players place their next three cards face down, then a card face-up.  
//The owner of the higher face-up card wins the war and adds all cards on the table to the bottom of their deck.

const subwar = (player1, player2, minLength, index, subWarCard, numberOfCards) => {
    // TO DO: Implement If, when a war begins...
    //...either player does not have enough cards for the war, both players reduce the number of cards to allow the war to complete (e.g. if P2 has only three cards remaining, both players play two cards down and one card up. If P2 has only one card remaining, no cards are played face-down and each player only plays one card up).
    //...either player has no cards remaining, the other player wins.
    //...both players have no cards remaining, the game is a draw (this is exceptionally rare in random games).
    console.log('subwar beggining', player1, player2)
    if ((player1.length >= minLength) && (player2.length >= minLength)) {
        console.log('second subwar has to happen')
        if (player1[subWarCard] > player2[subWarCard]) {
            player1.push(...player1.splice(index, numberOfCards))
            player1.push(...player2.splice(index, numberOfCards))
        } else if (player2[subWarCard] > player1[subWarCard]) {
            player2.push(...player2.splice(index, numberOfCards))
            player2.push(...player1.splice(index, numberOfCards))
            console.log('subwar has ended', player1, player2)
        } else if (player2[subWarCard] == player1[subWarCard]) {
            subSubWar(player1, player2, minLength += 3, index += 3, subWarCard += 3, numberOfCards)
        }
    } else {
        console.log('not enough cards')
    }
    console.log('subwar in now over', player1, player2)
}
//If a card is higher  : add both cards to the bottom of your deck. the winner's card is added to the bottom the winner's deck first, then the loser's card.
const takecards = (winner, looser) => {
    //the winner's card is added to the bottom the winner's deck first
    winner.push(winner.shift())
    // then the loser's card
    winner.push(looser.shift())
    return [winner, looser]
}

console.log(war(playerOneCards1, playerTwoCards1)) 
