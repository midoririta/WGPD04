var var1 = 100;
var MenuLayer = cc.Layer.extend({
    item2: null,
    ctor:function () {
        this._super();


        this.initMenu();

        return true;
    },

    initMenu: function () {
        cc.MenuItemFont.setFontSize(52);
        var menuItem1 = new cc.MenuItemFont("Item1",this.doItem1, this); //callback不需()
        cc.MenuItemFont.setFontSize(36);
        var menuItem2 = new cc.MenuItemFont("Item2",this.doItem2, this);
        cc.MenuItemFont.setFontSize(48);
        var menuItem3 = new cc.MenuItemFont("Item3",this.doItem3, this);
        var menuItem4 = new cc.MenuItemFont("Item4",this.doItem4, this);

        var menu = new cc.Menu(
            menuItem1, menuItem2,menuItem3, menuItem4);
        menu.alignItemsVertically();
        this.addChild(menu);

    },

    doItem1: function () {
        cc.director.pushScene(new Item1Scene());
    },
    doItem2: function () {
        cc.log("doitem2()");
        if(this.item2 == null) {
            cc.log("doitem2():null");
            this.item2 = new Item2Scene(123);
        }
        cc.director.pushScene(this.item2);
    },
    doItem3: function () {
        cc.log("doItem3");
    },
    doItem4: function () {
        cc.log("doItem4");
    },


});

var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MenuLayer();
        this.addChild(layer);
    }
});
