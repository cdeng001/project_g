
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
    
    preload (){
        this.load.image('lab_tiles', 'images/lab_tileset_cut.png');
        this.load.tilemapTiledJSON('lab_map', 'javascripts/game/maps/lab.json');
    }
    
    create (){
        var map = this.make.tilemap({ key: 'lab_map' });

        // The first parameter is the name of the tileset in Tiled and the second parameter is the key
        // of the tileset image used when loading the file in preload.
        var tiles = map.addTilesetImage('lab_tiles', 'lab_tiles');

        // You can load a layer from the map using the layer name from Tiled, or by using the layer
        // index (0 in this case).
        console.log(map);
        map.layers.forEach((e,i) => {
            map.createStaticLayer(i, tiles, 0, 0);
        });
        //var layer = map.createStaticLayer(1, tiles, 0, 0);

        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        var cursors = this.input.keyboard.createCursorKeys();
        var controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            speed: 0.5
        };
        this.controls = new Phaser.Cameras.Controls.Fixed(controlConfig);

        var help = this.add.text(16, 16, 'Arrow keys to scroll', {
            fontSize: '18px',
            padding: { x: 10, y: 5 },
            backgroundColor: '#000000',
            fill: '#ffffff'
        });
        help.setScrollFactor(0);
    }
    
    update (time, delta){
        this.controls.update(delta);
    }
}
