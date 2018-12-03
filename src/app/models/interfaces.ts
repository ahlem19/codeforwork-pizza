export interface Iconfig {
    local: {
        rootUrl: string,
        remote: string
    };
}
export interface IresultAuth {
    message: string;
    error: 0 | 1;
    token: string;
}
