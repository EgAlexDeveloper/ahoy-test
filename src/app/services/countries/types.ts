import { HttpSuccessResponse } from "src/app/shared/models/HttpSuccessResponse";

export interface ContriesResponse extends HttpSuccessResponse {
    response: string[]
};

export type Country = {
    id: number;
    name: string;
};
