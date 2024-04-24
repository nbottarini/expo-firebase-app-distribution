import { ConfigPlugin, createRunOncePlugin, withPlugins } from '@expo/config-plugins'
import { withApplyDistPlugin } from './android/applyPlugin'
import { withBuildscriptDependency } from './android/buildscriptDependency'

const withRnFirebaseAppDistribution: ConfigPlugin = config => {
    return withPlugins(config, [withBuildscriptDependency, withApplyDistPlugin])
}

const pak = require('@react-native-firebase/app-distribution/package.json')
export default createRunOncePlugin(withRnFirebaseAppDistribution, pak.name, pak.version)
