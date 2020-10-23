score=0;
cross=true;

audio=new Audio('music/music.mp3');
audiogo=new Audio('music/gameover.mp3');

setTimeout(()=>{
			audio.play();
		},1000);

document.onkeydown=function(e){
	console.log("keycode is:",e.keyCode)
	if(e.keyCode==38){
		mario=document.querySelector('.mario');
		mario.classList.add('animateMario');
		setTimeout(()=>{
			mario.classList.remove('animateMario')
		},700);
	}
		if(e.keyCode==39){
		mario=document.querySelector('.mario');
		marioX=parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
		mario.style.left = marioX+112+"px";
		}
		if(e.keyCode==37){
		mario=document.querySelector('.mario');
		marioX=parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
		mario.style.left = (marioX-112)+"px";
		}

	}
	setInterval(()=>{
       mario=document.querySelector('.mario');
       gameover=document.querySelector('.gameover');
       obstacle=document.querySelector('.obstacle');

       dx=parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'));
       dy=parseInt(window.getComputedStyle(mario,null).getPropertyValue('top'));

       ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
       oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

       offsetX = Math.abs(dx-ox);
       offsetY = Math.abs(dy-oy);
       if(offsetX<73 && offsetY<52){
       	gameover.style.visibility='visible';
       	obstacle.classList.remove('obstacleAni');
       	audiogo.play();
       	setTimeout(()=>{
			audiogo.pause();
			audio.pause();
		},1000);

       }

      else if(offsetX <145 && cross){
       	score+=100;
       	updateScore(score);
       	cross=false;
       	setTimeout(() => {
       		cross=true;
       	},1000);
       }
       setTimeout(()=>{
	   anidur =parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
       newdur = anidur-0.8;
        obstacle.style.animationDuration=newdur +'s';
		},500);

       
       
		},10);
	function updateScore(score){
      scoreCont.innerHTML = "Your score:"+ score;
	}
	
