import "babel-core/polyfill";
import {values} from "lodash";
import HelloWorldScene from "hello-world-scene";
import res from "resources";

window.startApp = (cc) => {
        // Pass true to enable retina display, disabled by default to improve performance
    cc.view.enableRetina(false);
    // Adjust viewport meta
    cc.view.adjustViewPort(true);
    // Setup the resolution policy and design resolution size
    cc.view.setDesignResolutionSize(800, 450, cc.ResolutionPolicy.SHOW_ALL);
    // The game will be resized when browser size change
    cc.view.resizeWithBrowserSize(true);
    //load resources
    cc.LoaderScene.preload(values(res), () => {
        cc.director.runScene(new HelloWorldScene());
    });
};
