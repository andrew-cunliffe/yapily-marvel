import { ApiResponse } from './api-response';

export interface ApiWrapper<T> {
    data: ApiResponse<T>;
}
