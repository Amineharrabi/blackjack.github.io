let firstCard =getRandomCard2();
let secondCard =getRandomCard2();
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let isSplit = false
let message = ""
let cards = [firstCard , secondCard]
if (firstCard === secondCard) {isSplit= true}
firstCasinoHand = getRandomCard2()
let casinoHandsSum = firstCasinoHand
let money = 500 







function renderGame() {

    if (sum <= 20) {
        message = ("do you want to draw another card ?? ")
    } else if(sum === 21) {
        message = ("Wohooo , you got a blackjack !")
        hasBlackjack = true
        
    } else {
        message = ("ohh !  sorry you lost the game")
        isAlive = false
    }
    document.getElementById("message-el").innerHTML = (message)


    console.log("sex")
    startgamebutton.style.display = "none";
    let sumEL = document.querySelector("#h2")
    sumEL.textContent= (("Sum : ") + sum)

    let cardsEL = document.getElementById("h22")
    for (let i = 0 ; i < cards.length ; i++) {
        cardsEL.innerHTML = ("Cards : ")+ cards.join(' | ')

    }
    console.log(cards)

    document.getElementById("hit").innerHTML = ' <input type="button" onclick="newCard()" value="Add a Card" id="newcard"></input> ' // rendering the 'new card' button
    document.getElementById("stand").innerHTML = ' <input type="button" onclick="reveal()" value="stand" id="standCard"></input> ' // rendering the 'stand' button
    if (isSplit) {splitButton()}
    
    document.getElementById("casinoHands").innerHTML = "casino's hands :    " +   firstCasinoHand    
    
}
function newCard() {
    if (isAlive===true && hasBlackjack===false)  {
        let card = getRandomCard() ;
        if (card === 11 && sum > 11) {
            card = 1
        }
        sum +=parseFloat(card)
        cards.push(card)
        renderGame()
    }
    
}





function startGame(){
    if (money > 0) {

    
    firstCard =getRandomCard2();
    secondCard =getRandomCard2();
    sum = firstCard + secondCard
    hasBlackjack = false
    isAlive = true
    isSplit = false
    message = ""
    cards = [firstCard , secondCard]
    if (firstCard === secondCard) {isSplit= true}
    firstCasinoHand = getRandomCard2()
    casinoHandsSum = firstCasinoHand
    document.getElementById('anotherGame').innerHTML=''
    document.getElementById("money").innerHTML = ("your money = "+money)
    
    renderGame()
    }
    else {
        document.getElementById("message-el").innerHTML= ('DAMN YOU ARE BROKE .. CLICK THE RESET BUTTON TO START OVER')
    }
}


function getRandomSymbol() {
    let symbol = ["♤","♡","♢","♧"]
    randomNumber = Math.floor( Math.random()*4 ) 
    return (symbol[randomNumber])

}



function getRandomCard(  ) {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber + getRandomSymbol()
    }
}
function getRandomCard2(  ) {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function splitButton() {
    document.getElementById("split").innerHTML = ' <input type="button" onclick="" value="Split" id="splitCard"></input> ' // rendering the 'Split' button
}
function reveal() {
    console.log("stand clicked")
    let casinoHands = [firstCasinoHand]
    while (casinoHandsSum <= 17) {
        card = getRandomCard2()
        casinoHandsSum += card
        casinoHands.push(card)
    document.getElementById("casinoHands").innerHTML = "casino's hands :    " +   casinoHands.join(' | ')
    
    }
    console.log("sum of casino hand XX = "+casinoHandsSum)
    console.log(" your sum is XX "+sum)
    if (sum > 21 ) {
        message = ("OH noo !  You Lost this Game ")
        document.getElementById("message-el").innerHTML = (message)
        money = money - 100
    }
        else if (sum < casinoHandsSum && casinoHandsSum < 21	) {
        message = ("OH noo !  You Lost this Game ")
        document.getElementById("message-el").innerHTML = (message)
        money = money - 100
    }

        else if (sum < casinoHandsSum && casinoHandsSum > 21) {
        message = ("Yess !  You Won this Game ")
        document.getElementById("message-el").innerHTML = (message)
        money = money + 100

    }
        else if (sum < casinoHandsSum && casinoHandsSum < 21) {
        message = ("OH noo !  You Lost this Game ")
        document.getElementById("message-el").innerHTML = (message)
        money = money - 100

    }
        else if (sum === casinoHandsSum && sum < 21) {
        message = ("It looks like a draw !")
        document.getElementById("message-el").innerHTML = (message)
        money = money

    }

    document.getElementById("anotherGame").innerHTML = ' <input type="button" onclick="startGame()" value="Play another Game" id="anotherGame"></input> ' // rendering the 'another game' button
    


}







function darkmode() {
    var element = document.body;
    
    
    if  (document.getElementById('title').innerHTML === '🃏 White Jack 🃏') 
    {
        element.classList.toggle("dark-mode");
        document.getElementById('title').innerHTML = '🃏 Black Jack 🃏'
    }
    else
    {
        element.classList.toggle("dark-mode");
        document.getElementById('title').innerHTML = '🃏 White Jack 🃏'
    }
    
}

