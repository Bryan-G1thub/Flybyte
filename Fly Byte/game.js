class mainScene{

    preload(){
        this.load.image('frog', 'assets/frog.png');
        this.load.image('fly', 'assets/fly.png');
    }

    create(){
        this.frog = this.physics.add.sprite(100, 100, 'frog');
        this.fly = this.physics.add.sprite(300, 300, 'fly');
        this.score = 0;
        let style = {font: '20px Arial', fill: '#fff'};
        this.scoreText = this.add.text(20, 20, 'score: '+ this.score, style);
        this.arrow = this.input.keyboard.createCursorKeys();
        
    }

    update(){
        if (this.arrow.right.isDown){
            this.frog.x +=3;
        } else if(this.arrow.left.isDown){
            this.frog.x -=3;
        }
        if (this.arrow.down.isDown){
            this.frog.y+=3;
        } else if(this.arrow.up.isDown){
            this.frog.y-=3
        }
        if(this.physics.overlap(this.frog, this.fly)){
            this.hit();
        }
    }
    hit(){
        this.fly.x = Phaser.Math.Between(100, 600);
        this.fly.y = Phaser.Math.Between(100, 300);
        this.score += 10;
        this.scoreText.setText('score: '+this.score);
    }

}
new Phaser.Game({
    width: 700,
    height: 400,
    backgroundColor: '#3498db',
    scene: mainScene,
    physics: {default: 'arcade'},
    parent: 'game',

});