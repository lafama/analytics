/**
 * Node implementation
 */

const pluginName = 'simple-analytics'

const noOp = () => console.log(`No ${pluginName} node implementation`)

export default function simpleAnalyticsPlugin(userConfig) {
  // Allow for userland overides of base methods
  return {
    name: pluginName,
    config: {},
    initialize: noOp,
  }
}
