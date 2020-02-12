export interface IRestResult<T> {
    readonly data: T;
    readonly status: number;
}

export abstract class IRestClient {
    abstract async get<T>(url: string, options?: RequestInit): Promise<IRestResult<T>>;
}
