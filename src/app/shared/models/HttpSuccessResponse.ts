export interface HttpSuccessResponse {
    errors: [],
    parameters: any[],
    response: any[],
    results: number
}

export interface HttpGetSuccessResponse extends HttpSuccessResponse {
    get: string
}
