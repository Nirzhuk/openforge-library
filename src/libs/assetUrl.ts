
const isDev = process.env.NODE_ENV !== 'production'

const assetEnvUrl = isDev ? '' : '/openforge-library/'

  export default assetEnvUrl