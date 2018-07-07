
var Item5Layer = cc.Layer.extend({
    ball: null,
    dx: parseInt(Math.random()*2)==0?4:-4,
    dy: parseInt(Math.random()*2)==0?4:-4,
    ang: 0,
    ctor:function () {

        this._super();
        this.ball = new cc.Sprite(res.ball_png);
        this.ball.x = cc.winSize.width/2;
        this.ball.y = cc.winSize.height/2;
        this.addChild(this.ball);

        //this.ball.runAction(cc.rotateTo(1,179));

        this.ball.schedule(this.ballUpdate,0.01, cc.RepeatForever,1);

        return true;
    },

    ballUpdate: function(){
        var layer = this.getParent(); //this is a ball.png

        if(this.x - this.width/2 <= 0 ||
        this.x+this.width/2 >= cc.winSize.width){
            layer.dx *= -1;
            if(layer.dy >0){
                layer.ang += layer.dx>0?90:-90;
            }
            else{
                layer.ang -= layer.dx>0?90:-90;
            }
            this.runAction(cc.rotateTo(0.5,layer.ang));
        }
        if(this.y - this.height/2 <= 0 ||
            this.y+this.height/2 >= cc.winSize.height){
            layer.dy *= -1;
            if(layer.dx > 0){
                layer.ang -= layer.dy>0?90:-90;
            }
            else{
                layer.ang += layer.dy>0?90:-90;
            }
            this.runAction(cc.rotateTo(0.5,layer.ang));
        }

        this.x += layer.dx;
        this.y += layer.dy;

    },

    update: function () {

    },

});

var Item5Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Item5Layer();
        this.addChild(layer);
    }
});

