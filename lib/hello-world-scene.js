import res from "resources";

const HelloWorldLayer = cc.Layer.extend({
  sprite:null,
  ctor() {
    this._super();
    const {winSize} = window.cc;

    // add a "close" icon to exit the progress. it's an autorelease object
    const closeItem = new cc.MenuItemImage(
      res.CloseNormal_png,
      res.CloseSelected_png,
      () => cc.log("Menu is clicked!"),
      this
    );

    closeItem.attr({
      x: winSize.width - 20,
      y: winSize.height - 20,
      anchorX: 0.5,
      anchorY: 0.5
    });

    const menu = new cc.Menu(closeItem);
    menu.x = 0;
    menu.y = 0;
    this.addChild(menu, 1);

    const helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
    helloLabel.x = winSize.width / 2;
    helloLabel.y = 0;
    this.addChild(helloLabel, 5);

    // add "HelloWorld" splash screen"
    this.sprite = new cc.Sprite(res.HelloWorld_png);
    this.sprite.attr({
      x: winSize.width / 2,
      y: winSize.height / 2,
      scale: 0.5,
      rotation: 180
    });
    this.addChild(this.sprite, 0);

    this.sprite.runAction(
      cc.sequence(
        cc.rotateTo(2, 0),
        cc.scaleTo(2, 1, 1)
      )
    );

    helloLabel.runAction(
      cc.spawn(
        cc.moveBy(2.5, cc.p(0, winSize.height - 40)),
        cc.tintTo(2.5,255,125,0)
      )
    );


    return true;
  }
});

const HelloWorldScene = cc.Scene.extend({
  onEnter() {
    this._super();
    const layer = new HelloWorldLayer();
    this.addChild(layer);
  }
});

export default HelloWorldScene;
