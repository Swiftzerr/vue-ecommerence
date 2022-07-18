import type { User } from '@firebase/auth'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return { user: null as User | null }
  },
  actions: {
    newUser(user: User) {
      this.user = user
    },
    nullUser() {
        this.user = null
    }
  },
})
