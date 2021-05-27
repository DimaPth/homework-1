import Url from 'url';
import { ConfigEndpointType } from '../config';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoint: ConfigEndpointType, query: object): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));

  console.log(uri);
  return await fetch(uri).then((res) => res.json());
}

export default req;
