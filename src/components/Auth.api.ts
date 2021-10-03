import axios, {AxiosRequestConfig} from 'axios'
export interface Credentials{
    username: string;
    password: string;
}

interface LoginResponse{
    created: string;
    id: string;
    token: string;
    username:string;
}

export const onLogin = async(data:Credentials)=>{
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: 'http://localhost:4000/auth/signIn',
        data
    }
    return axios.request<LoginResponse>(requestConfig);
    
    
    
}


export const onRegister = async(data: any) =>{

    console.log('Data', data);
    const requestConfig: AxiosRequestConfig = {
        method:'post',
        url: 'http://localhost:4000/auth/signUp',
        data: data
    }

    try{
        const response = await axios.request(requestConfig);
        console.log(response);
    }catch (e:any){
        console.log(e.response);
        return e;
    }
    
    
}

//store token in localstorage
// sss