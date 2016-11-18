# HaBaby README

## Developer Setup

### Setup Ionic platform

Set up Ionic 2 and Cordova.

[http://ionicframework.com/docs/v2/getting-started/installation/](http://ionicframework.com/docs/v2/getting-started/installation/)

* Install Node.js **6** using Mac installer from https://nodejs.org/en/
* Install cordova and ionic using npm: sudo npm install -g cordova ionic
* The current version as of 12 Nov 2016 should be ionic 2.1.8 (run ionic -v)
* You may need to install command-line deployment tools:
```
xcode-select --install
sudo npm install -g --unsafe-perm=true ios-deploy
```
* You will also need XCode and Android Development Studio

### Project Setup

(this was already done to generate this repository, so you don't need to do it to start, but this is just documented here in case we ever need to do it again)

http://ionicframework.com/docs/v2/getting-started/tutorial/

This command generates the project:

$ ionic start HaBaby --v2

Not everything gets checked into git, so each developer needs to run **npm install** to fill out some of the work files.

### Running the app

In the browser:

$ ionic serve

#### iOS

In the iOS Simulator:

$ ionic emulate ios -lc

On an iOS Device (plugged into USB)

Run the HaBaby.xcodeproj project in the platforms/ios folder in XCode.

Make sure your account is set up and the team/provisioning profile in Settings->General.  You can have it generate a provisioning profile even with a free Developer account: [http://stackoverflow.com/questions/4952820/test-ios-app-on-device-without-apple-developer-program-or-jailbreak](http://stackoverflow.com/questions/4952820/test-ios-app-on-device-without-apple-developer-program-or-jailbreak)

#### Android

* Install JDK 8 (http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
* Set up paths in ~/.bash_profile, e.g.:
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_112.jdk/Contents/Home
export ANDROID_HOME=/Users/derek/Library/Android/sdk/
* Add Android target: ionic platform add android

Run in Simulator
* Download desired System Image by running: /Users/derek/Library/Android/sdk/tools/android sdk
* Create an Android Virtual Device by running: /Users/derek/Library/Android/sdk/tools/android avd
* ionic build android
* ionic emulate android

When running on a device, make sure it is already plugged in via USB, and that you OK the dialog to allow USB debugging.

* ionic run android



