import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import Swal from "sweetalert2";
import { ErrorDataResponse } from "../models/error-data-response";


export const apiInstance: AxiosInstance = axios.create({
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

apiInstance.interceptors.response.use((response: AxiosResponse) => {
    return response.data;
}, (error: AxiosError) => {
    const errorApiResponse: ErrorDataResponse = error?.response?.data
    if (!errorApiResponse?.message) {
        console.error(`No se pudo consumir servicio por -> ${error.message} `);
    }
    const apiError: string = errorApiResponse?.message ?  errorApiResponse?.message : 'No pudimos procesar la transacci\u00f3n, por favor intentalo nuevamente';
    Swal.fire({ icon: 'error', title: 'Oops...', text: apiError })
    return Promise.reject(apiError);
});
