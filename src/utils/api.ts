import axios from "axios";

const URL = 'https://dummyjson.com/';
export const API = {
    getTodoList: `${URL}todos`
};

interface PropsRequest {
    url?: string;
    method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
    payload?: any;
    params?: any;
}
export const axiosRequest = async ({
    url,
    method,
    payload,
    params
}: PropsRequest) => {
    try {
        const response = await axios(
            {
                method: method,
                url: url,
                data: payload,
                params
            }
        );

        return response;
 
    } catch (e: any) {
        window.alert('Error API')
       
    }
}