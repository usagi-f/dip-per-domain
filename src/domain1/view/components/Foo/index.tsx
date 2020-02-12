import * as React from 'react';
import {SampleResponse} from '../../../interface';
import RestClient from '../../../../service/restClient';
import Adapter from '../../../adapter';

const initialData: SampleResponse = {
    id: 0,
    userId: 0,
    title: '',
    completed: false,
};

const clientService = new RestClient();
const ExampleAdapter = new Adapter(clientService);

const Foo: React.FC = () => {
    const [data, setData] = React.useState<SampleResponse>(initialData);

    React.useEffect((): void => {
        (async (): Promise<void> => {
            const todo = await ExampleAdapter.getExampleTodo();
            setData(todo);
        })();
    }, [data]);

    return (
        <>
            <div>{data.id}</div>
            <div>{data.userId}</div>
            <div>{data.title}</div>
            <div>{data.completed}</div>
        </>
    );
};

export default Foo;
