# Angular-Collection

Collection of Angular Materials, Projects and Tips

Install Node JS using NVM - Node Version Manager - `nvm install <new version> --reinstall-packages-from=<oldversion>`

Set currect LTS Node version as default in all shell sessions - `nvm alias default <new version>`

Install and Update Angular Cli - `npm install -g @angular/cli`

New Angular Project - `ng new <my-dream-app>`

Start the Developement Server of that Project - `ng serve`

To update the port and hostname of the default Angular Live Developement Server

```json
"serve": {
  "builder": "@angular-devkit/build-angular:dev-server",
  "options": {
    "browserTarget": "Assignment1ProductList:build",
    "host": "0.0.0.0",
    "port": 8080
  }
}
```
