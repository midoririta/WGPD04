
var Item2Layer = cc.Layer.extend({
    sprite:null,
    ctor:function (data) {

        this._super();
        cc.log("Itwm2Layer:" +data);
        cc.log("Itwm2Layer:var2=" +var2);
        this.initMenu();

        return true;
    },

    initMenu: function () {
        var back = new cc.MenuItemImage(
            res.back_normal_png,
            res.back_selected_png,
            res.back_disselect_png,
            this.back, this
        );

        var menu = new cc.Menu(back);
        this.addChild(menu);
    },

    back: function () {
        cc.director.popScene();
    },
});

var Item2Scene = cc.Scene.extend({
    mydata: null,
    ctor: function(data){
      this._super();
      this.mydata = data;
      cc.log("item2Scene:ctor():"+data);
      var layer = new Item2Layer(data);//傳到上面的ctor
      this.addChild(layer);
    },
    // onEnter:function () {
    //     //this._super();
    //     cc.log("item2Scene:onEnter()"+this.mydata); //ctor才可以傳參數
    //     // var layer = new Item2Layer();
    //     // this.addChild(layer);
    // }
});

