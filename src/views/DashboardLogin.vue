<script lang="ts">
import { signInWithEmailAndPassword } from "@firebase/auth"
import { auth } from '@/main'
import { useAuthStore } from "@/stores/auth"

export default {
    data() {
        return {
            email: null,
            password: null
        }
    },
    methods: {
        async signIn() {
            const authStore = useAuthStore()
            signInWithEmailAndPassword(auth, this.email, this.password).then((newuser) => {
                authStore.newUser(newuser.user)
                this.$router.push('/dashboard')
            }).catch(error => {
                console.log(error)
            })
        }
    },
}
</script>

<template>
    <div class="wrapper">
        <!-- Login form -->
        <div class="login-form">
            <div class="login-form-body">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRotfTvDzCbA1ZF2tE3wn8MYrzE4cRMlbVEEA&usqp=CAU"
                    style="padding-top: 30px; padding-bottom: 50px;">
                <form>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" v-model="password">
                    </div>
                    <button type="button" @click="signIn">Login</button>
                </form>
                <img style="width: 100%; height: 400px; padding-top: 50px;"
                    src="https://media.discordapp.net/attachments/945847076753928222/997987993119895582/IMG_1296.png">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.thebody {
    background-color: red;
    color: white;
}

.login-form-body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.form-control {
    margin-left: 10px;
}
</style>