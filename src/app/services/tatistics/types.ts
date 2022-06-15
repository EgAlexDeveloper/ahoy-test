import { HttpSuccessResponse } from "src/app/shared/models/HttpSuccessResponse";

export enum ResultType {
    // 'deaths' = 'deaths',
    'recovered' = 'recovered',
    'active' = 'active',
    'new' = 'new',
    'critical' = 'critical',
    'M_pop' = 'M_pop',
    'total' = 'total'
}

export type ChartData = {
    name: string,
    value: number | string
}

export type SingleResult = {
    name: ResultType | 'deaths',
    data: ChartData[]
};

export interface StatisticsResponse extends HttpSuccessResponse {
    parameters: string[],
    response: Statistic[]
};

export type Statistic = {
    continent: string;
    country: string;
    cases: { [key in ResultType]: number },
    deaths: {
        new: string,
        M_pop: string,
        total: number
    },
    day: string,
    time: Date
};