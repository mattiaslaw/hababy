# HaBaby README

## Developer Setup

### Setup Ionic platform

Set up Ionic 2 and Cordova.

[http://ionicframework.com/docs/v2/getting-started/installation/](http://ionicframework.com/docs/v2/getting-started/installation/)

* Install Node.js 4.6.1 using Mac installer from nodejs.org
* Install cordova and ionic using npm: sudo npm install -g cordova ionic
* You may need to install command-line deployment tools:
```
xcode-select --install
sudo npm install -g --unsafe-perm=true ios-deploy
```

### Project Setup

(this was already done to generate this repository, so you don't need to do it to start, but this is just documented here in case we ever need to do it again)

http://ionicframework.com/docs/v2/getting-started/tutorial/

This command generates the project:

$ ionic start HaBaby --v2
