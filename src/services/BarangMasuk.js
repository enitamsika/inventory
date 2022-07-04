import http from '@/http-common'
const url = '/barang_masuk'

class BarangMasukService {
    data = async () => {
        return await http.get(url);
    }

    addData = (data) => {
        return http.post(url, data);
    }

    editData = (id,data) => {
        return http.put(url+'/'+id, data);
    }

    hapusData = (id) => {
        return http.delete(url+'/'+id);
    }

}

export default new BarangMasukService;