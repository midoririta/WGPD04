var var2 = 321; //global var another layer can get but dangerous
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
        //cc.MenuItemFont.setFontSize(36);
        var menuItem2 = new cc.MenuItemFont("Item2",this.doItem2, this);
        var menuItem3 = new cc.MenuItemFont("Item3",this.doItem3, this);
        var menuItem4 = new cc.MenuItemFont("Item4",this.doItem4, this);
        var menuItem5 = new cc.MenuItemFont("Item5",this.doItem5, this);

        var menu = new cc.Menu(
            menuItem1, menuItem2,menuItem3, menuItem4, menuItem5);
        menu.alignItemsVertically();
        this.addChild(menu);

    },

    doItem1: function () {
        cc.director.pushScene(new Item1Scene());
    },
    doItem2: function () {

        cc.director.pushScene(new Item2Scene(100));
    },
    doItem3: function () {
        cc.director.pushScene(new Item3Scene());
    },
    doItem4: function () {
        cc.director.pushScene(new Item4Scene());
    },
    doItem5: function () {
        cc.director.pushScene(new Item5Scene());
    },


});

var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MenuLayer();
        this.addChild(layer);
    }
});
