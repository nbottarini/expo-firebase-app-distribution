[![npm](https://img.shields.io/npm/v/expo-firebase-app-distribution.svg)](https://www.npmjs.com/package/expo-firebase-app-distribution)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI Status](https://github.com/nbottarini/expo-firebase-app-distribution/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/nbottarini/expo-firebase-app-distribution/actions)

# expo-firebase-app-distribution
Expo plugin for firebase app distribution

## Installation

Npm:
```
$ npm install --save expo-firebase-app-distribution @react-native-firebase/app @react-native-firebase/app @react-native-firebase/app-distribution 
```

Yarn:
```
$ yarn add expo-firebase-app-distribution @react-native-firebase/app @react-native-firebase/app @react-native-firebase/app-distribution
```

Add plugins to your app.json:
```json
{
  "expo": {
    "android": {
      "googleServicesFile": "./google-services.json",
      "package": "com.mycorp.myapp"
    },
    "ios": {
      "googleServicesFile": "./GoogleService-Info.plist",
      "bundleIdentifier": "com.mycorp.myapp"
    },
    "plugins": [
      "@react-native-firebase/app",
      "expo-firebase-app-distribution"
    ]
  }
}
```

## Usage

Please refer to React Native Firebase App Distribution [docs](https://rnfirebase.io/app-distribution/usage).
