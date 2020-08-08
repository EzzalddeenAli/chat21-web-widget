export const environment = {
  production: true,
  version: require('../../package.json').version, // https://stackoverflow.com/questions/34907682/how-to-display-app-version-in-angular2

  remoteConfig: true, // for performance don't load settings from remote
  remoteConfigUrl: '/widget-config.json',
  loadRemoteTranslations: true,
 remoteTranslationsUrl: 'https://ersal-chat.herokuapp.com/',

  firebase: {
      apiKey: "AIzaSyDqdtylO2v88ZE6-GxGlL_pe_H6eww7IL4",
    authDomain: "yemen-food.firebaseapp.com",
    databaseURL: "https://yemen-food.firebaseio.com",
    projectId: "yemen-food",
    storageBucket: "yemen-food.appspot.com",
    messagingSenderId: "907903462252",
    appId: "1:907903462252:web:e00d381df1f9771ba32149",
    measurementId: "G-JZ4NQ4B2DB"
  },
  apiUrl: 'https://api.tiledesk.com/v2',
  tenant: 'tilechat',
  defaultLang : 'en',
  shemaVersion : '4'
};
