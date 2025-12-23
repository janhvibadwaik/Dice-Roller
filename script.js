function rollDice(){
            const diceImage=document.getElementById("dice-image");
            const resultElement = document.getElementById("result");
            const randomNum=Math.floor(Math.random()*6)+1;
            resultElement.innerText = `Hurray! You rolled the dice and got: ${randomNum}`;

            if(randomNum===1){
                diceImage.src="one.png";
            }else if(randomNum===2){
                diceImage.src="two.png";
            }else if(randomNum===3){
                diceImage.src="three.png";
            }else if(randomNum===4){
                diceImage.src="four.png";
            }else if(randomNum===5){
                diceImage.src="five.png";
            }else{
                diceImage.src="six.png";
            }
        }