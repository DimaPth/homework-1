import config, { ConfigEndpointType } from '../config';

function getUrlWithParamsConfig(endpointConfig: ConfigEndpointType) {
  let url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
  };
  return url;
}

export default getUrlWithParamsConfig;
