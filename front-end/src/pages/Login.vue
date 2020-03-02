<template>
    <q-page style="background-image: url(../statics/login-bg.jpg)">
    <q-dialog
            v-model="login"
            persistent
    >
        <q-card style="width: 700px; max-width: 80vw;">
            <q-card-section>
                <div class="text-h6">Login to your account</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-form
                        @submit="onSubmit"
                        @reset="onReset"
                        class="q-gutter-md"
                >
                    <q-input
                            filled
                            type="email"
                            v-model="data.email"
                            label="Your email *"
                            hint="Enter your email"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please enter your email']"/>
                    <q-input
                            filled
                            type="password"
                            v-model="data.password"
                            label="Your password *"
                            hint="Enter your password"
                            lazy-rules
                            :rules="[val => val && val.length>=8 || 'Please enter your password']"/>
                    <div>
                        <q-btn label="Submit" type="submit" color="primary"/>
                        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                    </div>
                </q-form>
            </q-card-section>
        </q-card>
    </q-dialog>
    </q-page>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                login:true,
                name: null,
                age: null,
                accept: false,
                data:{
                    email:'',
                    password:'',
                    remember_me:false
                }
            }
        },
        methods: {
            onSubmit () {
                let self = this;
                self.$store.dispatch('userLogin',self.data).then(function (data) {
                    if (data){
                        if (data.message){
                            self.$q.notify({
                                color: 'red-5',
                                textColor: 'white',
                                icon: 'warning',
                                message: data.message
                            })
                        } else {
                            self.$q.notify({
                                color: 'green-4',
                                textColor: 'white',
                                icon: 'cloud_done',
                                message: 'Logging in.....'
                            });
                            window.location.href = "/"
                        }
                    } else {
                        self.$q.notify({
                            color: 'red-5',
                            textColor: 'white',
                            icon: 'warning',
                            message: 'Please check input again!'
                        })
                    }
                })
            },
            onReset () {
                let self = this;
                self.data.email = null;
                self.data.password = null;
            }
        }
    }
</script>

<style scoped>

</style>