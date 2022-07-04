<template>
  <div>
    <b-card>
        <b-card-title class="text-right">
            <b-btn variant="primary" @click="(forms = true) && (editBtn = false)" size="sm">add new</b-btn>
        </b-card-title>
        <hr>
        <b-card-body>
            <b-table v-if="items.length > 0" ref="barang_masuk" :items="items" :fields="fields" bordered striped responsive="sm">
                <template #cell(No) = "data">
                    {{ data.index +1 }}
                </template>
                <template #cell(Actions) = "data">
                    <b-btn size="sm" class="mr-2" @click="edit(data)"> 
                        <i class="fa fa-edit"></i>
                    </b-btn>
                    <b-btn size="sm" variant="danger" @click="hapus(data)"> 
                        <i class="fa fa-trash"></i>
                    </b-btn>
                </template>
            </b-table>
            <b-alert v-else show> 
                <i class="fa fa-info mr-2"></i>
                Data is Empty !
            </b-alert>
        </b-card-body>
    </b-card>

    <b-modal v-model="forms" centered hide-footer title="Tambah Barang Keluar" size="xl" no-close-on-backdrop>
        <b-container>
            <b-row>
                <b-col sm="3" class="mb-3">
                    <label for="kode_barang">Kode Barang</label>
                </b-col>
                <b-col sm="9">
                  <b-form-select :options="dataBarang" v-model="bk.kode_barang" text-field="kode_barang" value-field="kode_barang" @change="stockCheck"></b-form-select>
                </b-col>

                <b-col sm="3" class="mb-3">
                    <label for="kode_barang">Nama Pelanggan</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input type="text" v-model="bk.nama_pelanggan" placeholder="Masukan Nama Pelanggan"></b-form-input>
                </b-col>

                <b-col sm="3" class="mb-3" v-show="stock > 0">
                    <label for="kode_barang">Stock Tersedia</label>
                </b-col>
                <b-col sm="9" v-show="stock > 0">
                    <b-form-input type="number" disabled v-model="stock"></b-form-input>
                </b-col>

                <b-col sm="3" class="mb-3">
                    <label for="kode_barang">Jumlah Barang</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input type="number" v-model="bk.jumlah" placeholder="Masukan Jumlah Barang" @input="checkJumlahBarang"></b-form-input>
                </b-col>

                <b-col sm="12" class="text-right mt-3">
                    <b-btn class="mr-2" size="sm" @click="reset">Reset</b-btn>
                    <b-btn variant="primary" size="sm" v-show="!editBtn" @click="addData">Save</b-btn>
                    <b-btn variant="primary" size="sm" v-show="editBtn" @click="editData">Update</b-btn>
                </b-col>
            </b-row>
        </b-container>
    </b-modal>

    <b-modal v-model="konfirmasi" centered no-close-on-backdrop title="Konfirmasi">
        <p class="subtitle">Anda yakin menghapus data ini?</p>
        <template #modal-footer>
            <b-btn size="sm" variant="secondary" @click="konfirmasi = false">Batal</b-btn>
            <b-btn size="sm" @click="hapusData" variant="danger">Hapus</b-btn>
        </template>
    </b-modal>
  </div>
</template>

<script>
import BarangKeluar from '@/services/BarangKeluar'
import BarangMasuk from '@/services/BarangMasuk'
export default {
    name: 'BarangKeluarComponent',
    data() {
        return {
            forms: false,
            fields: [
                'No',
                {key : 'kode_barang', label: 'Kode Barang'},
                {key : 'nama_pelanggan', label: 'Nama Pelanggan'},
                {key : 'jumlah_barang', label: 'Jumlah'},
                'Actions'
            ],
            items : [],
            bk: [],
            editBtn: false,
            editID : null,
            hapusID : null,
            konfirmasi: false,
            dataBarang: [],
            stock: 0
        }
    },
    methods: {
        getData() {
            BarangKeluar.data()
            .then((data) => {
                if (data.data.length > 0) {
                    this.items = data.data
                }
            })

            BarangMasuk.data()
            .then((data) => {
              this.dataBarang = data.data
            })
        },

        addData() {
            const bk = this.bk
            const kode_barang = bk.kode_barang ? bk.kode_barang : ''
            const nama_pelanggan = bk.nama_pelanggan ? bk.nama_pelanggan : ''
            const jumlah = bk.jumlah ? bk.jumlah : ''

            const data = {
                kode_barang : kode_barang,
                nama_pelanggan : nama_pelanggan,
                jumlah_barang : jumlah,
            }

            BarangKeluar.addData(data)
            .then(() => {
                this.getData()
                this.forms = false
            })

            this.reset()

        },

        edit(data) {
            this.editID = data.item._id
            this.bk.kode_barang = data.item.kode_barang
            this.bk.nama_pelanggan = data.item.nama_pelanggan
            this.bk.jumlah = data.item.jumlah_barang
            this.forms = true
            this.editBtn = true

        },

        reset() {
            this.bk.kode_barang = ''
            this.bk.nama_pelanggan = ''
            this.bk.jumlah = ''
            this.editBtn = false
            this.stock = 0

        },

        editData() {
            const bk = this.bk
            const id = this.editID
            const kode_barang = bk.kode_barang ? bk.kode_barang : ''
            const nama_pelanggan = bk.nama_pelanggan ? bk.nama_pelanggan : ''
            const jumlah = bk.jumlah ? bk.jumlah : ''

            const data = {
                kode_barang : kode_barang,
                nama_pelanggan : nama_pelanggan,
                jumlah_barang : jumlah,
            }

            BarangKeluar.editData(id,data)
            .then(() => {
                this.getData()
                this.forms = false
            })
        },

        hapus(data) {
            this.konfirmasi = true
            this.hapusID = data.item._id
        },

        hapusData() {
            const id = this.hapusID
            BarangKeluar.hapusData(id)
            .then(() => {
                this.getData()
                this.konfirmasi = false
               
                this.$bvToast.toast('Data Berhasil dihapus', {
                title: `Informasi`,
                variant: 'info',
                solid: true
                })
            })
        },

        stockCheck(){
            var kode_barang = this.bk.kode_barang;
            BarangKeluar.stock(kode_barang)
            .then((data) => {
                this.stock = data.data.stock;
            })
        },

        checkJumlahBarang() {
            if (this.bk.jumlah > this.stock) {
                this.$bvToast.toast('Jumlah barang melebihi dari stock yang tersedia', {
                    title: `Informasi`,
                    variant: 'danger',
                    solid: true
                })
            }
        }
    },
    mounted() {
        this.getData();
    }
}
</script>

<style>

</style>