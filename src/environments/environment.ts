// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDYO9gj5aNl9_DX7Ley_N1vf3313vgvhmo",
    authDomain: "domotic-32db8.firebaseapp.com",
    projectId: "domotic-32db8",
    storageBucket: "domotic-32db8.appspot.com",
    messagingSenderId: "591044876447",
    appId: "1:591044876447:web:e693ebb953522a0560aaaa",
    measurementId: "G-0G2Y6N4GBE"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
