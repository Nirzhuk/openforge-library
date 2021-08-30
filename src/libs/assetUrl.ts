
const isDev = process.env.NODE_ENV !== 'production'

const assetEnvUrl = isDev ? '' : '/openforge-library'

export const srcEnvUrl = isDev ? '' : 'https://nirzhuk.github.io/openforge-library/' // NEED TO REFACTOR WITH ENV VARIABLES

export default assetEnvUrl;

