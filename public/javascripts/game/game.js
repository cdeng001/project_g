
class Game{

    constructor(){
        this.config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            scene: {
                preload: this.preload,
                create: this.create,
                update: this.update
            }
        };
        
        this.game = new Phaser.Game(this.config);
    }
    
    preload ()
    {
    }
    
    create ()
    {
    }
    
    update ()
    {
    }
}