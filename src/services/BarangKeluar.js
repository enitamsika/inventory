import http from '@/http-common'
const url = '/barang_keluar'

class BarangKeluarService {
    data = async () => {
        return await http.get(url);
    }

    total = async () => {
        return await http.get(url+'/total');
    }

    stock = async (kode_barang) => {
        return await http.get('/data_barang/stock/'+kode_barang);
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

export default new BarangKeluarService;