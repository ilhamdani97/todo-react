import { API, axiosRequest } from "../utils/api";

export async function getList(size: string) {
    
    const response = await axiosRequest({
        method: 'GET',
        url: API.getTodoList,
        params: {
            limit: size
        }
    })

    return response?.data || null;

}