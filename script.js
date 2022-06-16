score = 0;
cross = true;

audio = new Audio('game.mp3');
audiogo = new Audio('video.mp3');

setTimeout(() => {
    audio.play();
},100);

document.onkeydown = function(e){
    console.log("key code is" ,e.keyCode)
    if(e.keyCode == 38){
        dino = document.querySelector(".dino");
        dino.classList.add('animateDino');

        setTimeout(() => {
            dino.classList.remove('animateDino')
        },700);

    }

    if(e.keyCode == 39){
        dino = document.querySelector(".dino");
        dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dinoy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
        dino.style.left = dinox + 112 +"px";

    }

    if(e.keyCode == 37){
        dino = document.querySelector(".dino");
        dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dinoy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
        dino.style.left = (dinox - 112) +"px";

    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle')

    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    
    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);

    if(offsetX < 73 && offsetY < 52){
        document.onclick = function(){
            location.reload();
        }
        document.onkeydown = function(e){
            if(e.keyCode == 13){
                location.reload();
            }
        }
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() =>{
            audiogo.pause();
            audio.pause();
        },1000);
    }
    else if(offsetX < 145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        },1000);
        setTimeout(() =>{
        aniDur = parseFloat(window.getComputedStyle(dino,null).getPropertyValue('animation-duration'));
        newDur = aniDur - 0.1;
        obstacle.style.animatedDuration = newDur + 's'
        },500);
    } 
    
},10)

function updateScore(score){
    scoreCont.innerHTML = "Your Score: "+score;
}
