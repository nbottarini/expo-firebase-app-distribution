import { ConfigPlugin, WarningAggregator, withProjectBuildGradle } from '@expo/config-plugins'

const appDistributionClassPath = 'com.google.firebase:firebase-appdistribution-gradle'
const appDistributionVersion = '4.0.1'

/**
 * Update `<project>/build.gradle` by adding google-services dependency to buildscript
 */
export const withBuildscriptDependency: ConfigPlugin = config => {
    return withProjectBuildGradle(config, config => {
        if (config.modResults.language === 'groovy') {
            config.modResults.contents = setBuildscriptDependency(config.modResults.contents)
        } else {
            WarningAggregator.addWarningAndroid(
                'expo-firebase-app-distribution',
                `Cannot automatically configure project build.gradle if it's not groovy`,
            )
        }
        return config
    })
}

export function setBuildscriptDependency(buildGradle: string) {
    // TODO: Find a more stable solution for this
    if (!buildGradle.includes(appDistributionClassPath)) {
        return buildGradle.replace(
            /dependencies\s?{/,
            `dependencies {
        classpath '${appDistributionClassPath}:${appDistributionVersion}'`,
        )
    }

    return buildGradle
}