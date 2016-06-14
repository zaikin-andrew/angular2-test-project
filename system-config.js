/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {};
/** User packages configuration. */
var packages = {};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    'angular2-jwt',
    // App specific barrels.
    'app',
    'app/shared',
    'app/+users',
    'app/+user',
    'app/+user-form',
    'app/+vk',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    if (barrelName == 'angular2-jwt')
        return cliSystemConfigPackages[barrelName] = { main: 'angular2-jwt' };
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'angular2-jwt': 'vendor/angular2-jwt',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map