document.addEventListener("DOMContentLoaded", ()=>{
    let startBtn = document.querySelector("#startBtn");
    startBtn.addEventListener("click",()=>{

        const playground = document.getElementById("playground"); 
        let cardArray = [
            {
                name: "cheeseburger",
                img : "./images/cheeseburger.png"
            },
            {
                name: "fries",
                img : "./images/fries.png"
            },
            {
                name: "hotdog",
                img : "./images/hotdog.png"
            },
            {
                name: "ice-cream",
                img : "./images/ice-cream.png"
            },
            {
                name: "milkshake",
                img : "./images/milkshake.png"
            },
            {
                name: "pizza",
                img : "./images/pizza.png"
            },
            {
                name: "cheeseburger",
                img : "./images/cheeseburger.png"
            },
            {
                name: "fries",
                img : "./images/fries.png"
            },
            {
                name: "hotdog",
                img : "./images/hotdog.png"
            },
            {
                name: "ice-cream",
                img : "./images/ice-cream.png"
            },
            {
                name: "milkshake",
                img : "./images/milkshake.png"
            },
            {
                name: "pizza",
                img : "./images/pizza.png"
            },
        ]
        let cardChosen = [];
        let cardChosenId = [];
        let result = 0;
        cardArray = cardArray.sort(()=>0.5-Math.random());
        function createBoard(){
            for(let i =0; i<cardArray.length; i++){
                const img = document.createElement("img");
                img.setAttribute("src","./images/blank.png");
                img.classList.add("card-width");
                img.setAttribute("data-id",i);
                img.addEventListener("click",flipCard);
                playground.appendChild(img);
            }
        }
        function flipCard(){
            let card = this;
            let cardId = card.getAttribute("data-id");
            card.setAttribute("src",cardArray[cardId].img);
            cardChosen.push(cardArray[cardId]);
            cardChosenId.push(cardId);
            if(cardChosenId.length ===2){
                setTimeout(checkAnswer , 500);
            }
        }
    
        function checkAnswer(){
            let cards = document.querySelectorAll("img");
            if(cardChosenId[0] === cardChosenId[1]){
                cards[cardChosenId[0]].setAttribute("src", "./images/blank.png");
                cards[cardChosenId[1]].setAttribute("src", "./images/blank.png");
            }
            else if(cardChosen[0].name === cardChosen[1].name){
                cards[cardChosenId[0]].setAttribute("src", "./images/white.png");
                cards[cardChosenId[1]].setAttribute("src", "./images/white.png");
                cards[cardChosenId[0]].removeEventListener("click",flipCard)
                cards[cardChosenId[1]].removeEventListener("click",flipCard)
                result++;
            }
            else{
                cards[cardChosenId[0]].setAttribute("src", "./images/blank.png");
                cards[cardChosenId[1]].setAttribute("src", "./images/blank.png");
            }
            cardChosen = [];
            cardChosenId = [];
            if(result === cardArray.length/2){
                let resultElem = document.querySelector("#result");
                resultElem.textContent = "You Won"
                playground.innerHTML = "";
            }
        }
    
        createBoard();
    })
})