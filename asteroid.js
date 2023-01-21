class Asteroid extends PIXI.Sprite {
  
    
    constructor(asteroidTexture) {
        super(asteroidTexture);
        console.log('Add randomization for asteroid sprite');
        // let asteroid = PIXI.Sprite.from('/img/asteroid-01.png');
         this.anchor.set(0.5);
         this.x = Math.random() * 800;
         this.y = 100;
        // this.y = asteroid.y;
        // this.velocity = (Math.random() * 10) + 10;
        // app.stage.addChild(asteroid);
    }
  
    introduceSelf() {
        console.log(`Hi!` + this.velocity);
    }

    // moveAsteroid(asteroid) {
    //     .y = 0;
    // }


    checkIfOutOfBounds() {
        //console.log('checking out of bounds');
    }
  
  }