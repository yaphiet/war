//function to fill an array with 52 numbers
//  import cards-css from cc4 resources
/*var suits = ["spades", "hearts", "clubs", "diamonds"];
         var cardFace = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
         var cards = [];
         var players = [[],[]];
        var firstRun = true;
         var fightButton = document.querySelector("#btnBattle");
    
         // event listeners
        fightButton.addEventListener('click',battle);

        // functions
        function battle() {
            if (firstRun){
                firstRun = false;
                buildCards();
            }
        console.log('works');
        } // cards
        function buildCards() {
            cards = [];
            for(s in suits){
                var suitsNew = suits[s][0].toUpperCase();
                for (n in cardFace){
                    var card = {
                        suit:suits[s],
                        num:cardFace[n],
                        cardValue:parseInt(n) +2,
                        icon:suitNew

                    }
                    cards.push(card);
                }
            }         
            console.log(cards);   
        }


// array for card shuffle
    function shuffleArray(array){
        for(var x = array.length -1;x>0;x--){
            var ii = Math.floor(Math.random() * (x+1));
            var temp = array[x];

        }
        return array;
    }

    */
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
// initialize variables

var warArray = [], playerHand = [], compHand = [];
var playdeck = '', computerDeck = '', playerCard = '', compCard = '';
// gameboard class

// function to split shuffled deck in half


        //push card to each 'hand' array


        //set current card for each hand




//function to compare both face up cards or current cards

        //if players card value is higher than the computer's card value, player1 wins
        
        //updates results

        //pushes current cards from both hands to the back of the plaers hand

        //removes current card fro the front of each deck

        //update cards and check for winner

    //if players current card is the same as the computers current card value a "WAR!" occurs (a tie)




//function to take cards from each deck and put into war array

    //if not enough cards left to draw 4 cards, draw as many cards as possible

        //if computer has less than 4 cards

        //if player1 has less than 4 cards

    //else - if both decks have more than 4 cards


//create battle mode loop


//check for card battle winner


//remove current card from the front of each deck


//update card counts
