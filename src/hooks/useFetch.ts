import {useEffect, useReducer} from "react";

const createFetcher = <T = Response>(
    url: string,
    method: "GET" | "POST" | "PUT" = "GET",
    otherConfig?: Omit<RequestInit, "method" | "headers">,
): Promise<T> =>
    fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        ...otherConfig,
    }).then(async (response) => await (response.json() as Promise<T>));

export type UseFetchResult<T> = {
    loading: boolean;
    error: boolean;
    data: T | null;
};

const initialState: UseFetchResult<any> = {
    data: null,
    loading: true,
    error: false,
};

type StartAction = {type: "start"};
type SuccessAction<T> = {type: "success"; payload: T};
type ErrorAction = {type: "fail"};

const reducer = <T>(
    _state: UseFetchResult<T>,
    action: StartAction | SuccessAction<T> | ErrorAction,
) => {
    switch (action.type) {
        case "start":
            return {...initialState};
        case "success":
            return {
                error: false,
                loading: false,
                data: action.payload,
            };
        case "fail":
            return {
                error: true,
                loading: false,
                data: null,
            };
        default:
            return {...initialState};
    }
};

type UseFetch = <T extends any>(url: string) => UseFetchResult<T>;

const useFetch: UseFetch = <T>(url: string) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({type: "start"});

        createFetcher<T>(url)
            .then((res) => {
                dispatch({type: "success", payload: res});
            })
            .catch(() => {
                dispatch({type: "fail"});
            });
    }, [url]);

    return state;
};

export default useFetch;
