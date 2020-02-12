import unfetch from 'unfetch';
import {IRestClient, IRestResult} from './interface';

class RestClient extends IRestClient {
    private fetch = unfetch;

    public async get<T>(url: string, options?: RequestInit): Promise<IRestResult<T>> {
        const response = await this.fetch(url, options);
        const {status} = response;
        const data = await response.json();
        return {data, status};
    }
}

export default RestClient;
