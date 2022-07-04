<template>
  <div>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Data Barang</h1>
    </div>
    <div class="row">
        <div class="col-md-12 mb-4">
            <data-barang />
        </div>
    </div>
  </div>
</template>

<script>
import DataBarang from '@/components/DataBarang.vue'
export default {
    components: {
        'data-barang' : DataBarang
    }
}
</script>

<style>

</style>