import axios, { AxiosInstance } from 'axios';
import { User } from '../../types/user';

const URL = 'https://jsonplaceholder.typicode.com/users';

class ApiUser { 
    public instance: AxiosInstance;

    constructor(url: string) {
        this.instance = axios.create({ 
            baseURL: url,
        });
    }

    public async getUserById(id: number): Promise<User> { 
        const response = await this.instance.get(`/${id}`) as User;

        return response;
    }
}

export const ApiUserConstructor = new ApiUser(URL);