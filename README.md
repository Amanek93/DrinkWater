#### Android dev:  [![Build status](https://build.appcenter.ms/v0.1/apps/29045a2a-f338-4ea5-a4c1-c38b67aa0f2b/branches/dev/badge)](https://appcenter.ms)
#### IOS dev:  [![Build status](https://build.appcenter.ms/v0.1/apps/fb055002-82ed-4705-a67b-a7735b7c0931/branches/dev/badge)](https://appcenter.ms)

# This is official Lightsoft Mobile DrinkWater App
https://lightsoft.pl

It consists of the most common libraries used in react-native development.
For static type checking we use **TypeScript** instead of facebooks flow, due to flows server eating a lot of resources on windows.

## Dependency Manager

We use yarn across all our React-Native projects.

https://yarnpkg.com/lang/en/

## Set Up

* run `yarn install`
* then go for `yarn pod`
* you are good to go :)

## Included libraries

Here's a list of libraries included in this App

### React-Native

React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components.

https://facebook.github.io/react-native/

### RxJS

Reactive Extensions Library for JavaScript.

https://rxjs-dev.firebaseapp.com/

### Redux + React Redux + Reselect + Redux Observable

Redux is a predictable state container for JavaScript apps.

https://github.com/reduxjs/redux
https://github.com/reduxjs/react-redux


Reselect is simple “selector” library for Redux.

https://github.com/reduxjs/reselect


Redux Observable is RxJS 6-based middleware for Redux. Compose and cancel async actions to create side effects and more.
https://redux-observable.js.org/

### React Navigation
* **Components built for iOS and Android**
  Platform-specific look-and-feel with smooth animations and gestures.

* **Completely customizable**
  If you know how to write apps using JavaScript you can customize any part of React Navigation.

### Ramda

A practical functional library for JavaScript programmers.

https://ramdajs.com/

### Jest

Javascript testing library.

https://jestjs.io/

### React Native Vector Icons

Perfect for buttons, logos and nav/tab bars. Easy to extend, style and integrate into your project.

https://github.com/oblador/react-native-vector-icons

## Coding guide

We use **prettier** for code styling, which properties are defined in _.prettierrc_.

For code readability, maintainability, and functionality errors we use **TSLint**, which properies are defined in _tsconfig.json_.

Make sure to add those extensions to your IDE to keep the standard.

For VSCode their names are:
* **Prettier - Code formatter**
* **TSLint**

## Scripts

There are some scripts already included in this DrinkWater App, you can run them using **yarn script_name**.

* **pod** - installs CocoaPods
* **android** - runs app android on device or emulator
* **androidG** - generates android .apk
* **start** - starts react natives packager
* **lint** - runs linter to check for code and typing errors

## Maintainig

Some things can break due to rapid changes in some libraries.
If this repository doesn't work properly on fresh build try using exact package versions from **package.json** without "^".

## Environment variables

Global API variables are defined in the `@config/settings.ts` file. Including the:

* **API**: https://testAPI

## Troubleshooting
1. After installing new dependency, when you see an iOS build failed error `'realm/util/optional.hpp' file not found`
   please:
* remove node_modules and ios/Pods folders,
* then run `yarn install` again
2. If you are running ios app on real device and the react natives packager is not starting automatically, run `yarn start` before all.
 
