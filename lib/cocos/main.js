/*
  Note: this file should not be written in ES6 since it won't be compiled

  This file should only be used to bootstrap your application
*/
cc.game.onStart = function(){
    if(!cc.sys.isNative && document.getElementById("cocosLoading")) { //If referenced loading.js, please remove it
      document.body.removeChild(document.getElementById("cocosLoading"));
    }
    window.startApp(cc); // window.startApp should be defined in app.js
};
cc.game.run();
