// The file contents for the current environment will overwrite these during build2.
// The build2 system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build2 --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// tslint:disable-next-line:max-line-length
// import { firebaseConfig } from '../environments/firebase-config'; // please comment on this line when changing the values ​​of firebase {}

export const environment = {
  production: false,
  version: require('../../package.json').version, // https://stackoverflow.com/questions/34907682/how-to-display-app-version-in-angular2
  remoteConfig: true,
  remoteConfigUrl: '/widget-config.json',
  remoteTranslationsUrl: 'https://ersal-chat.herokuapp.com/',
  loadRemoteTranslations: true,
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
  apiUrl: 'https://ersal-chat.herokuapp.com/',
  tenant: 'tilechat',
  defaultLang : 'en',
  shemaVersion : '1'
};
