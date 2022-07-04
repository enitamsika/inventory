<template>
  <div>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Barang Keluar</h1>
    </div>
    <div class="row">
        <div class="col-md-12 mb-4">
            <barang-keluar />
        </div>
    </div>
  </div>
</template>

<script>
import BarangKeluar from '@/components/BarangKeluar.vue'
export default {
    components: {
        'barang-keluar' : BarangKeluar
    }
}
</script>

<style>

</style>