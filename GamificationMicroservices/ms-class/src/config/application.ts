const environment = process.env.ENVIRONMENT ? process.env.ENVIRONMENT : 'development';
const listenPort  = process.env.APPLICATION_PORT? parseInt(process.env.APPLICATION_PORT) : 3002;

const applicationSettings = {
  listenPort,
  environment,
  LOCAL_COUNTRY_CURRENCY: 'PEN'
}

export { applicationSettings }