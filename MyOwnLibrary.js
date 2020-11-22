function bounceOff(gameobj1,gameobj2){
    if(gameobj1.x-gameobj2.x<gameobj2.width/2+gameobj1.width/2
      && gameobj2.x-gameobj1.x<gameobj2.width/2+gameobj1.width/2)
      {
      gameobj2.velocityX = gameobj2.velocityX * (-1);
      gameobj1.velocityX = gameobj1.velocityX * (-1);
  
      }
      if(gameobj1.y-gameobj2.y<gameobj2.height/2+gameobj1.height/2
      &&gameobj2.y-gameobj1.y<gameobj2.height/2+gameobj1.height/2){
        gameobj2.velocityY = gameobj2.velocityY * (-1);
        gameobj1.velocityY = gameobj1.velocityY * (-1);
  
  
    }
  }

  function isTouching(obj1,obj2){
    if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
      && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
      && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
    return true;
  }
  else {
   return false;
  }
  }