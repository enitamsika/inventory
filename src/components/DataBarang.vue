<template>
  <div>
    <b-card>
        <b-card-body v-show="items">
            <b-table :items="items" :fields="fields" hover bordered thead-class="text-center">
                <template #cell(no) = "data">
                    <div class="text-center">
                        {{ data.index + 1 }}
                    </div>
                </template>
            </b-table>
        </b-card-body>

        <b-alert variant="info" v-show="!items">
            <i class="fa fa-info mr-2"></i>
            Data is empty !
        </b-alert>
    </b-card>
  </div>
</template>

<script>
import DataBarang from '@/services/DataBarang'
export default {
    name: 'DataBarang',
    data() {
        return {
            fields: [
                'No',
                {key : 'kode_barang', label: 'Kode Barang'},
                {key : 'nama_barang', label: 'Nama Barang'},
                {key : 'barang_masuk', label: 'Barang Masuk'},
                {key : 'barang_keluar', label: 'Barang Keluar'},
                {key : 'stock', label: 'Stock'},
                {key : 'satuan', label: 'Satuan'},
            ],
            items: []
        }
    },
    methods: {
        getDataBarang() {
            DataBarang.data()
            .then((data) => {
                if (data.data.length > 0) {
                    this.items = data.data;
                }
            })
        }
    },
    mounted() {
        this.getDataBarang();
    }
}
</script>

<style>

</style>