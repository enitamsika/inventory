import http from '@/http-common'
const url = '/data_barang'

class DataBarangService {
    data = async () => {
        return await http.get(url);
    }

    total = async () => {
        return await http.get(url+'/total');
    }

}

export default new DataBarangService;