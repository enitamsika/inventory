<template>
    <div>
    <div id="wrapper">

        <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <b-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-boxes-stacked"></i>
                </div>
                <div class="sidebar-brand-text mx-3">INVENTORY</div>
            </b-link>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item">
                <b-link class="nav-link" to="/dashboard">
                    <i class="fas fa-fw fa-tachometer-alt mr-2"></i>
                    <span>Dashboard</span></b-link>
            </li>

            <!-- Nav Item - Charts -->
            <li class="nav-item">
                <b-link class="nav-link" to="/data_barang">
                    <i class="fas fa-fw fa-chart-area mr-2"></i>
                    <span>Data Barang</span></b-link>
            </li>

            <!-- Nav Item - Tables -->
            <li class="nav-item">
                <b-link class="nav-link" to="/barang_masuk">
                    <i class="fas fa-fw fa-table mr-2"></i>
                    <span>Barang Masuk</span></b-link>
            </li>

            
            <!-- Nav Item - Tables -->
            <li class="nav-item">
                <b-link class="nav-link" to="/barang_keluar">
                    <i class="fas fa-fw fa-table mr-2"></i>
                    <span>Barang Keluar</span></b-link>
            </li>

            
            <!-- Nav Item - Tables -->
            <li class="nav-item">
                <b-link class="nav-link" @click.stop="logout">
                    <i class="fa-solid fa-right-from-bracket mr-2"></i>
                    <span>Logout</span></b-link>>
            </li>            

        </ul>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    <h5 class="text-bold mx-3">PT.DINAMIKA ANUGERAH</h5>

                </nav>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <router-view> </router-view>

                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; 2022 - Eni Tamsika Malau</span>
                    </div>
                </div>
            </footer>
            <!-- End of Footer -->

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->    

   
</div>

</template>

<script>
    export default {
        methods: {
            logout() {
                this.$bvModal.msgBoxConfirm("Anda yakin untuk keluar ?",
                    {
                        noCloseOnBackdrop: true,
                        noCloseOnEsc: true,
                        buttonSize: 'sm'
                    })
                    .then((res) => {
                        if(res) {
                            localStorage.clear();
                            this.$router.push({name: 'home'});
                        }
                    })
            },

        }
    }
</script>