import config, { ConfigEndpointType } from '../config';

function getUrlWithParamsConfig(endpointConfig: ConfigEndpointType, query: object) {
  let url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {
      ...query,
    },
  };
  return url;
}

export default getUrlWithParamsConfig;
