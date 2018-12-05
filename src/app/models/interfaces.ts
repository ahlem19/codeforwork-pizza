export interface IConfig {
    local: {
        rootUrl: string,
        remote: string
    };
}
export interface IResultAuth {
    message: string;
    error: 0 | 1;
    token: string;
}
