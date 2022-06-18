import axios, { AxiosRequestConfig } from "axios";

// config
import { HOST_API } from "../config";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
    baseURL: HOST_API,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || "Something went wrong")
);

// ----------------------------------------------------------------------

const headers = <T>(accessToken?: string, accept?: string): AxiosRequestConfig<T> => ({
    headers: { "x-access-token": accessToken ?? "", accept: accept ?? "application/json" },
});

export const GET = async <T>(path: string, accessToken?: string, accept?: string): Promise<T> => {
    const response = await axios.get(`${HOST_API}${path}`, headers(accessToken, accept));
    return response.data;
};

// export const POST = async <B, T>(path: string, data: B, accessToken?: string, accept?: string): Promise<T> => {
//     const response = await axios.post(`${HOST_API}${path}`, data, headers(accessToken, accept));
//
//     return response.data;
// };
//
// export const PUT = async <B, T>(path: string, data: B, accessToken?: string, accept?: string): Promise<T> => {
//     const response = await axios.put(`${HOST_API}${path}`, data, headers(accessToken, accept));
//     return response.data;
// };

// const DELETE = async (path: string, accessToken?: string, accept?: string) => {
//     const response = await axios.delete(`${SERVER_URL}${path}`, headers(accessToken, accept));
//     return response.data;
// };

export default axiosInstance;
