import { ConfigPlugin } from '@expo/config-plugins'
import { WarningAggregator, withAppBuildGradle } from 'expo/config-plugins'

export const appDistributionPlugin = 'com.google.firebase.appdistribution'

export const withApplyDistPlugin: ConfigPlugin = config => {
    return withAppBuildGradle(config, config => {
        if (config.modResults.language === 'groovy') {
            config.modResults.contents = applyPlugin(config.modResults.contents)
        } else {
            WarningAggregator.addWarningAndroid(
                'expo-firebase-app-distribution',
                `Cannot automatically configure app build.gradle if it's not groovy`,
            )
        }
        return config
    })
}

export function applyPlugin(appBuildGradle: string) {
    const perfPattern = new RegExp(`apply\\s+plugin:\\s+['"]${appDistributionPlugin}['"]`)
    if (!appBuildGradle.match(perfPattern)) {
        appBuildGradle += `\napply plugin: '${appDistributionPlugin}'`
    }
    return appBuildGradle
}
