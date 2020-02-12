// Must only depend on interface
import {IRestClient} from '../../service/restClient/interface';
import {SampleResponse} from '../interface';

class ExampleAdapter {
    private readonly client: IRestClient;

    constructor(client: IRestClient) {
        this.client = client;
    }

    async getExampleTodo(): Promise<SampleResponse> {
        const {data} = await this.client.get<SampleResponse>('https://jsonplaceholder.typicode.com/todos/1');
        return data;
    }
}

export default ExampleAdapter;
