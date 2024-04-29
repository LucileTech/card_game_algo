// The card game War
const war = (arr1, arr2, breakOut) => {
  
	let result
	let winner
	let cardsWon
  
	while (result === undefined) {

		// If Player 1 has no cards, set the result to 2 to exit the while loop and indicate Player 2 has won
		if (arr1.length === 0) {

			result = 2

		// If Player 2 has no cards, set the result to 1 to exit the while loop and indicate Player 1 has won	
		} else if (arr2.length === 0) {

			result = 1

		// If Player 1's card is greater than Player 2's card
		} else if (arr1[0] > arr2[0]) {
			
			// Add both cards to the bottom of Player 1's deck, remove from the top of both players decks, and continue the game from the start	
			arr1.push(arr1.splice(0, 1)[0], arr2.splice(0, 1)[0])

			// If a true value has been passed into the recursive use of the function, exit the loop because Player 1 has won  the war
			if (breakOut) return 1 
		
		// If Player 2's card is greater than Player 1's card
		} else if (arr1[0] < arr2[0]) {
		
			// Add both cards to the bottom of Player 2's deck, remove from the top of both players decks, and continue the game from the start
			arr2.push(arr2.splice(0, 1)[0], arr1.splice(0, 1)[0])
			
			// If a true value has been passed into the recursive use of the function, exit the loop because Player 1 has won the war
			if (breakOut) return 2
		
		// If players have equal cards, initiate a war	
		} else if (arr1[0] === arr2[0]) {
		
			// If both players have at least four cards remaining
			if (arr1.slice(0 + 1).length >= 4 && arr2.slice(0 + 1).length >= 4) {
				
				// Recursively pass the cards, beginning from the "face up" card, into a new battle sequence 
				// Pass in `true` to indicate the recursion should end after the first battle is won
				winner = war(arr1.slice(4), arr2.slice(4), true)
				// Add the necessary cards to the winner's deck
				cardsWon = addCardsWon(winner, 4, arr1, arr2)
				// Replace the full decks with the newly ordered decks
				arr1 = cardsWon[0]
				arr2 = cardsWon[1]
				// Exit the loop when a winner is resolved from recursive battles
				result = winner

			// If one player has only three cards remaining
			} else if (arr1.slice(0 + 1).length >= 3 && arr2.slice(0 + 1).length >= 3) {

				// Recursively pass the cards, beginning from the "face up" card, into a new battle sequence
				// Pass in `true` to indicate the recursion should end after the first battle is won
				winner = war(arr1.slice(3), arr2.slice(3))
				// Add the necessary cards to the winner's deck
				cardsWon = addCardsWon(winner, 3, arr1, arr2, true)
				// Replace the full decks with the newly ordered decks
				arr1.concat(cardsWon[0])
				arr2.concat(cardsWon[1])
				// Exit the loop when a winner is resolved from recursive battles
				result = winner
				
			// If one player has only two cards remaining
			} else if (arr1.slice(0 + 1).length >= 2 && arr2.slice(0 + 1).length >= 2) {

				// Recursively pass the cards, beginning from the "face up" card, into a new battle sequence
				// Pass in `true` to indicate the recursion should end after the first battle is won
				winner = war(arr1.slice(2), arr2.slice(2))
				// Add the necessary cards to the winner's deck
				cardsWon = addCardsWon(winner, 2, arr1, arr2, true)
				// Replace the full decks with the newly ordered decks
				arr1.concat(cardsWon[0])
				arr2.concat(cardsWon[1])
				// Exit the loop when a winner is resolved from recursive battles
				result = winner

			// If one player has only one card remaining
			} else if (arr1.slice(1).length >= 1 && arr2.slice(1).length >= 1) {
				
				// Recursively pass the cards, beginning from the "face up" card, into a new battle sequence
				// Pass in `true` to indicate the recursion should end after the first battle is won
				winner = war(arr1.slice(0 + 1), arr2.slice(0 + 1)) 
				// Add the necessary cards to the winner's deck
				cardsWon = addCardsWon(winner, 1, arr1, arr2, true)
				// Replace the full decks with the newly ordered decks
				arr1.concat(cardsWon[0])
				arr2.concat(cardsWon[1])
				// Exit the loop when a winner is resolved from recursive battles
				result = winner
			
			// Else, exit the loop and indicate a tie	
			} else {

				result = 0

			} 

		}

	}
  
	// Return 1 for a Player 1 win, 2 for a Player 2 Win, or 0 for a tie
	return result 
  
}
  
// Helper function for adding cards to the bottom of the deck after a War is won
const addCardsWon = (result, num, playerOne, playerTwo) => {

	// If Player 1 wins the war, add face down cards then face up card to the bottom of their deck and remove from the top of the deck
	if (result === 1) {
	  
	  for (let i = 1; i <= num; i++) {
		playerOne.push(playerOne[i])
	  }

	// Next add Player 2's face down cards then face up card to the bottom of Player 1's deck and remove from the top of Player 2's deck
	  for (let i = 1; i <= num; i++) {
		playerOne.push(playerTwo.push[i])
	  }

	// Then add the original equal cards that triggered the war to the bottom of Player 1's deck
		playerOne.push(playerOne[0])
		playerOne.push(playerTwo[0])
	
	// If Player 2 wins the war, follow the same process but add the cards to the bottom of Player 2's deck  
	} else if (result === 2) {
	  
	  for (let i = 1; i <= num; i++) {
		playerTwo.push(playerTwo.push[i])
	  }

	  for (let i = 1; i <= num; i++) {
		playerTwo.push(playerOne.push[i])
	  }

	  	playerTwo.push(playerTwo[0])
	  	playerTwo.push(playerOne[0])
	 
	}

	// Return the decks in their new order
	return [playerOne, playerTwo]

}


// Test Cases  
const playerOneCards1 = [5, 1, 13, 10, 11, 3, 2, 10, 4, 12, 5, 11, 10, 5, 7, 6, 6, 11, 9, 6, 3, 13, 6, 1, 8, 1]
const playerTwoCards1 = [9, 12, 8, 3, 11, 10, 1, 4, 2, 4, 7, 9, 13, 8, 2, 13, 7, 4, 2, 8, 9, 12, 3, 12, 7, 5]

const playerOneCards2 = [3, 11, 6, 12, 2, 13, 5, 7, 10, 3, 10, 4, 12, 11, 1, 13, 12, 2, 1, 7, 10, 6, 12, 5, 8, 1]
const playerTwoCards2 = [9, 10, 7, 9, 5, 2, 6, 1, 11, 11, 7, 9, 3, 4, 8, 3, 4, 8, 8, 4, 6, 9, 13, 2, 13, 5]

const playerOneCards3 = [1, 2, 3, 4, 5,  6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const playerTwoCards3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


console.log(war(playerOneCards1,  playerTwoCards1)) // expect 1
console.log(war(playerOneCards2, playerTwoCards2)) // expect 2
console.log(war(playerOneCards3, playerTwoCards3)) // expect 0