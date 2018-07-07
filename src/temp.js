
var Yu01Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        return true;
    }
});

var Yu01Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Yu01Layer();
        this.addChild(layer);
    }
});

