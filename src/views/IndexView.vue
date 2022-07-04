<template>
  <div class="about">
    <div class="row">

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-4 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Barang Masuk</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{{ barang_masuk }}</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-cart-flatbed fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-4 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Barang Keluar</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{{ barang_keluar }}</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-truck-moving fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-4 col-md-6 mb-4">
            <div class="card border-left-info shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Stock Barang
                            </div>
                            <div class="row no-gutters align-items-center">
                                <div class="col-auto">
                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{{ stock }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-boxes-stacked fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  </div>

  <div class="row">

    <div class="col-lg-12">

        <div class="card shadow mb-4">
            <div class="card-body">
              <p class="text-center h6 my-3">
                SISTEM INFORMASI INVENTORY STOK PADA PT.DINAMIKA ANUGERAH BERBASIS WEB
              </p>
              <p class="text-center">
                    PROGRAM STUDI TEKNIK INFORMATIKA <br>
                    JURUSAN TEKNIK INFORMATIKA <br>
                    POLITEKNIK NEGERI BATAM <br>
                    BATAM
                    2022
              </p>

              <p class="text-center"><b>Eni Tamsika Malau	( 3311811013 )</b> </p>

              <hr class="my-3">

              <ol>
                <li>Tujuan Aplikasi</li>
                <ul>
                  <li>Dapat membangun sebuah sistem informasi yang mencakup keseluruhan item dan stok pada perusahaan agar perusahaan dapat lebih mudah melakukan pengawasan dan pengontrolan persediaan stok secara cepat dan efisien dibandingkan dengan pencatatan manual.
                  </li>

                  <li>
                    Dapat merancang sistem informasi inventori pengeluaran barang dan penerimaan baranng yang berbasis web
                  </li>

                  <li>
                    Dapat menciptakan kemudahan dalam pengolahan data yang akurat dan data yang available.
                  </li>

                  <li>
                    Untuk mengimplementasikan data pemasukan dan penerimaan barang yang terkomputerosasi 
                  </li>
                </ul>

                <li class="mt-3">Manfaat</li>
                <p>
                  Diharapkan dari sistem informasi ini dapat membantu admin gudang dalam mempermudah proses pencatatan penerimaan barang dan pengeluaran barang. Dimana sistem yang akan dibuat mencakup input data, hasil output, sisa stok, dan membantu kegiatan gudang lainya, seperti memberi alert untuk barang yang ada minimum stoknya.
                </p>
              </ol>

            </div>
        </div>

    </div>

</div>

  </div>
</template>

<script>
import DataBarang from '@/services/DataBarang'
export default {
  data() {
      return {
          barang_masuk : 0,
          barang_keluar: 0,
          stock: 0
      }
  },
  methods: {

    getData(){
        DataBarang.total()
        .then((data) => {
            if(data.data){
              this.barang_masuk = data.data[0].barang_masuk
              this.barang_keluar = data.data[0].barang_keluar
              this.stock = data.data[0].stock
            }
        })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
