<template>
   <div class="py-5">

    <div class="container my-5 py-4">

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6 mb-4">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h5 text-gray-900 mb-1">SISTEM INFORMASI INVENTORY</h1>
                                        <h1 class="h6 text-gray-900 mb-4">PT.DINAMIKA ANUGERAH</h1>
                                    </div>
                                    <hr>
                                    <b-form class="user" method="post" @submit.prevent="login">
                                        <div class="form-group">
                                            <input type="text" class="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Username..." required v-model="username">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user" v-model="password"
                                                id="exampleInputPassword" placeholder="Password" required>
                                        </div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck">
                                                <label class="custom-control-label" for="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <b-btn class="btn btn-primary btn-user btn-block" type="submit">
                                            Login
                                        </b-btn>
                                    </b-form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

      </div>
    </div>
</template>

<style scoped>
.bg-login-image{
  background-image: url('@/assets/icon1.png');
  background-position: center;
  background-size: 90%;
  background-repeat: no-repeat  ;
}
</style>


<script>
import Auth from '@/services/Auth'
export default {
  name: 'HomeView',
  data() {
    return {
        username: '',
        password: ''
    }
  },
  methods:{
    login() {
        const data = {
            'username' : this.username,
            'password' : this.password
        }

        Auth.login(data)
        .then((data) => {
            if(data.data.accessToken){
                localStorage.setItem('token', data.data.accessToken)
                localStorage.setItem('username', data.data.username)
                localStorage.setItem('id', data.data.id)

                this.$bvToast.toast('Login success', {
                    title: `Informasi`,
                    variant: 'success',
                    solid: true
                })

                document.location.href = "/dashboard";
            }
        }).catch(() => {
            this.$bvToast.toast('Login failed !', {
                title: `Informasi`,
                variant: 'danger',
                solid: true
            })
        })
    }
  }
}
</script>
