        ��  ��                  Q  L   ��
 D H C _ E X T E R N A L _ J A V A S C R I P T       0 	        ﻿/*!
  This file is part of Bingle Proxy.
  Visit our website for license information.
  Copyright © Bingle Proxy - All rights reserved.
  Visit our website at: https://www.bingle.pw
 */

window.dhc = {

  call: function (funcID, args) { 

    // https://stackoverflow.com/a/2117523
    function uuidv4() {	 
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    var uuid = uuidv4();

    return new Promise((resolve, reject) => {
      	 
      function exec (message) {
        if (message.data.uuid === uuid) {
          window.chrome.webview.removeEventListener('message', exec);
		      if (message.data.success) {
		        resolve(message.data.result); 
		      } else { 
		        reject(message.data.result); 
		      } 
        }
      }	 

      window.chrome.webview.addEventListener('message', exec);
      window.chrome.webview.postMessage({id: funcID, uuid: uuid, data: args});
    });
  },

  hello: function () { return this.call(10001, {}) },
  isRuntime: function () { return this.call(10002, {}) },

  dialogs: {
    openFile: function (args) { return window.dhc.call(20001, args) },
    saveFile: function (args) { return window.dhc.call(20002, args) },
    selFolder: function (args) { return window.dhc.call(20003, args) }
  },

  files: {
    fileExists: function (args) { return window.dhc.call(30001, args) },
    deleteFile: function (args) { return window.dhc.call(30002, args) },
    writeTextFile: function (args) { return window.dhc.call(30003, args) },
    extractFile: function (args) { return window.dhc.call(30004, args) }
  },

  folders: {
    dirExists: function (args) { return window.dhc.call(40001, args) },
    deleteDir: function (args) { return window.dhc.call(40002, args) },
    getTempDir: function () { return window.dhc.call(40003, {}) },
    getUserDocumentsDir: function () { return window.dhc.call(40004, {}) },
    getUserDesktopDir: function () { return window.dhc.call(40005, {}) },
    getAppExecutableDir: function () { return window.dhc.call(40006, {}) },
    getAppDataDir: function () { return window.dhc.call(40007, {}) }
  },

  app: {
    close: function () { return window.dhc.call(50001, {}) },
    inFullscreen: function () { return window.dhc.call(50002, {}) },
    enterFullscreen: function () { return window.dhc.call(50003, {}) },
    exitFullscreen: function () { return window.dhc.call(50004, {}) },
    getArgs: function () { return window.dhc.call(50005, {}) }
  },

  window: {
    getStyle: function () { return window.dhc.call(60001, {}) },
    setStyle: function (args) { return window.dhc.call(60002, args) },
    getState: function () { return window.dhc.call(60003, {}) },
    setState: function (args) { return window.dhc.call(60004, args) },
    getTitle: function () { return window.dhc.call(60005, {}) },
    setTitle: function (args) { return window.dhc.call(60006, args) },
    getZoom: function () { return window.dhc.call(60007, {}) },
    setZoom: function (args) { return window.dhc.call(60008, args) },
    getSize: function () { return window.dhc.call(60009, {}) },
    setSize: function (args) { return window.dhc.call(60010, args) },
    getBorder: function () { return window.dhc.call(60011, {}) },
    setBorder: function (args) { return window.dhc.call(60012, args) }
  },

  shell: {
    execute: function (args) { return window.dhc.call(70001, args) },
    explore: function (args) { return window.dhc.call(70002, args) },
    command: function (args) { return window.dhc.call(70003, args) },
    windows: function () { return window.dhc.call(70004, {}) }
  },

  themes: {
    getTheme: function () { return window.dhc.call(80001, {}) },
    getThemes: function () { return window.dhc.call(80002, {}) },
    setTheme: function (args) { return window.dhc.call(80003, args) }
  },

  base64: {
    decodeToFile: function (args) { return window.dhc.call(90001, args) }
  },

  system: {
    logoff: function () { return window.dhc.call(11001, {}) },
    reboot: function () { return window.dhc.call(11002, {}) },
    shutdown: function () { return window.dhc.call(11003, {}) },
    macAddresses: function () { return window.dhc.call(11004, {}) },
    notification: function (args) { return window.dhc.call(11005, args) }
  },

  mainMenu: {
    setItems: function (args) { return window.dhc.call(12001, args) },
    updateItem: function (args) { return window.dhc.call(12002, args) }
  },

  registry: {
    writeValue: function (args) { return window.dhc.call(13001, args) },
    readValue: function (args) { return window.dhc.call(13002, args) },
    valueExist: function (args) { return window.dhc.call(13003, args) },
    deleteValue: function (args) { return window.dhc.call(13004, args) },
    keyExist: function (args) { return window.dhc.call(13005, args) },
    deleteKey: function (args) { return window.dhc.call(13006, args) }
  },

  trayMenu: {
    showIcon: function () { return window.dhc.call(14001, {}) },
    hideIcon: function () { return window.dhc.call(14002, {}) },
    setItems: function (args) { return window.dhc.call(14003, args) },
    updateItem: function (args) { return window.dhc.call(14004, args) }
  },

  events: {
    onCloseQuery: function () { window.dhc.app.close(); },
    onMainMenuItemClick: function (itemId) { },
    onTrayMenuItemClick: function (itemId) { },
    onTrayIconClick: function () { },
    onNotificationClick: function (notifName) { }
  }

}; // window.dhc   