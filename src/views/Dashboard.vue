<script lang="ts">
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthStore } from '@/stores/auth'

export default {
    async mounted() {
        const authStore = await useAuthStore()

        if (authStore.user === null) {
            console.log("User is not logged in")
            this.$router.push('/dashboard/login')
        }
    },
}
</script>

<template>

</template>