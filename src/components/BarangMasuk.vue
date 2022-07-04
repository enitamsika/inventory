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

    <b-modal v-model="forms" centered hide-footer title="Tambah Barang Masuk" size="xl" no-close-on-backdrop>
        <b-container>
            <b-row>
                <b-col sm="3" class="mb-3">
                    <label for="kode_barang">Kode Barang</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input type="text" v-model="bm.kode_barang" placeholder="Masukan Kode Barang"></b-form-input>
                </b-col>

                <b-col sm="3" class="mb-3">
                    <label for="kode_barang">Nama Barang</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input type="text" v-model="bm.nama_barang" placeholder="Masukan Nama Barang"></b-form-input>
                </b-col>

                <b-col sm="3" class="mb-3">
                    <label for="kode_barang">Jumlah Barang</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input type="number" v-model="bm.jumlah" placeholder="Masukan Jumlah Barang"></b-form-input>
                </b-col>

                <b-col sm="3" class="mb-3">
                    <label for="kode_barang">Satuan Barang</label>
                </b-col>
                <b-col sm="9">
                    <b-form-input type="text" v-model="bm.satuan" placeholder="Masukan Satuan Barang"></b-form-input>
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
import BarangMasuk from '@/services/BarangMasuk'
export default {
    name: 'BarangMasukComponent',
    data() {
        return {
            forms: false,
            fields: [
                'No',
                {key : 'kode_barang', label: 'Kode Barang'},
                {key : 'nama_barang', label: 'Nama Barang'},
                {key : 'jumlah', label: 'Jumlah'},
                {key : 'satuan', label: 'Satuan'},
                'Actions'
            ],
            items : [],
            bm: [],
            editBtn: false,
            editID : null,
            hapusID : null,
            konfirmasi: false
        }
    },
    methods: {
        getData() {
            BarangMasuk.data()
            .then((data) => {
                if (data.data.length > 0) {
                    this.items = data.data
                }
            })
        },

        addData() {
            const bm = this.bm
            const kode_barang = bm.kode_barang ? bm.kode_barang : ''
            const nama_barang = bm.nama_barang ? bm.nama_barang : ''
            const jumlah = bm.jumlah ? bm.jumlah : ''
            const satuan = bm.satuan ? bm.satuan : ''

            const data = {
                kode_barang : kode_barang,
                nama_barang : nama_barang,
                jumlah : jumlah,
                satuan : satuan
            }

            BarangMasuk.addData(data)
            .then(() => {
                this.getData()
                this.forms = false
            })

            this.reset()

        },

        edit(data) {
            this.editID = data.item._id
            this.bm.kode_barang = data.item.kode_barang
            this.bm.nama_barang = data.item.nama_barang
            this.bm.jumlah = data.item.jumlah
            this.bm.satuan = data.item.satuan
            this.forms = true
            this.editBtn = true

        },

        reset() {
            this.bm.kode_barang = ''
            this.bm.nama_barang = ''
            this.bm.jumlah = ''
            this.bm.satuan = ''
            this.editBtn = false

        },

        editData() {
            const bm = this.bm
            const id = this.editID
            const kode_barang = bm.kode_barang ? bm.kode_barang : ''
            const nama_barang = bm.nama_barang ? bm.nama_barang : ''
            const jumlah = bm.jumlah ? bm.jumlah : ''
            const satuan = bm.satuan ? bm.satuan : ''

            const data = {
                kode_barang : kode_barang,
                nama_barang : nama_barang,
                jumlah : jumlah,
                satuan : satuan
            }

            BarangMasuk.editData(id,data)
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
            BarangMasuk.hapusData(id)
            .then(() => {
                this.getData()
                this.konfirmasi = false
               
                this.$bvToast.toast('Data Berhasil dihapus', {
                title: `Informasi`,
                variant: 'info',
                solid: true
                })
            })
        }
    },
    mounted() {
        this.getData();
    }
}
</script>

<style>

</style>