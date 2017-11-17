
var GameState = {
  preload: function(){
    this.load.image('background', './assets/forest-background.png');
    this.load.image('bunny', './assets/bunny.png');
    this.load.image('chicken', './assets/chicken.png');
    this.load.image('monkey', './assets/monkey.png');
    this.load.image('mouse', './assets/mouse.png');
    this.load.image('pig', './assets/pig.png');
    game.load.image('missile', './assets/missile.png')

  },
  create: function() {
    this.background = this.game.add.sprite(0,0, 'background');
    this.bunny = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'bunny')
    this.bunny.anchor.setTo(0.5);
    this.bunny.scale.setTo(0.5);

    this.chicken = this.game.add.sprite(180,210, 'chicken');
    this.chicken.scale.setTo(0.5);


    this.monkey = this.game.add.sprite(600,150, 'monkey');
    this.monkey.anchor.setTo(0.5);
    this.monkey.scale.setTo( -1, 1); //flip x -- flip y (1, -1)

    this.mouse = this.game.add.sprite(400,350, 'mouse');
    this.mouse.scale.setTo(.2);
    this.mouse.angle = 45;

    // this.missile = this.game.add.sprite(40, 200, 'missile');
    // this.missile.scale.setTo(.2);
    // this.missile.angle = 45;

    this.missileGroup = game.add.group();
    game.input.onDown.add(this.addMissile, this);

  },
  addMissile: function() {
    if (this.missileGroup.length > 1 ){
      return;
    }
    var missile = this.missileGroup.create(game.input.x,game.height-100,'missile');
    missile.width= game.width * .25;
    missile.height=game.height * .25;
  },
  update: function() {
    this.missileGroup.forEach(function(item) {
      item.y-=3;
      if (item.y < 0) {
        item.destroy();
      }
    }.bind(this));

  }
};

//Initialize the phaser framework
var game = new Phaser.Game(717, 404, Phaser.AUTO);


game.state.add('GameState', GameState);
game.state.start('GameState');
