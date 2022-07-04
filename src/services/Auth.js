import http from '@/http-common'
const url = '/auth'

class AuthService {
    login = async (data) => {
        return await http.post(url+'/login', data);
    }

}

export default new AuthService;