export interface ApiResponse<T> {
    offset: number;
    limit: number;
    count: number;
    total: number;
    results: Array<T>;
}
