
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('sprite', './assets/rocket.png');
    game.load.image('monkey', './assets/monkey.png');



}

var monkey;
var sprite;
var sprite1;
var sprite2;
var sprite3;
var sprite4;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#0072bc';

    monkey = game.add.sprite(400, 300, 'arrow');
    monkey.anchor.setTo(0.5, 0.5);

    sprite1 = game.add.sprite(150, 150, 'arrow');
    sprite1.anchor.setTo(0.1, 0.5);

    sprite2 = game.add.sprite(200, 500, 'arrow');
    sprite2.anchor.setTo(0.1, 0.5);

    sprite3 = game.add.sprite(400, 200, 'arrow');
    sprite3.anchor.setTo(0.1, 0.5);

    sprite4 = game.add.sprite(600, 400, 'arrow');
    sprite4.anchor.setTo(0.1, 0.5);


    //  Enable Arcade Physics for the sprite
    game.physics.enable(sprite, Phaser.Physics.ARCADE);
    game.physics.enable(monkey, Phaser.Physics.ARCADE);

    //  Tell it we don't want physics to manage the rotation
    sprite.body.allowRotation = false;

}

function update() {
  sprite1.rotation = game.physics.arcade.angleToPointer(sprite1);
  sprite2.rotation = game.physics.arcade.angleToPointer(sprite2);
  sprite3.rotation = game.physics.arcade.angleToPointer(sprite3);
  sprite4.rotation = game.physics.arcade.angleToPointer(sprite4);


    monkey.rotation = game.physics.arcade.moveToPointer(monkey, 60, game.input.activePointer, 500);

}
