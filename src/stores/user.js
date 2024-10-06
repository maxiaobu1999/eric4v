import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      id: 0,
      token: '',
      name: '',
      userId: '',
      shopId: '',
      mobile: ''
    }
  },
  actions: {
    updateId (id) {
      this.id = id
    },
    updateName (name) {
      this.name = name
    },
    updateToken (token) {
      this.token = token
    },
    updateMobile (mobile) {
      this.mobile = mobile
    },
    updateShopId (shopId) {
      this.shopId = shopId
    },
    updateUserId (userId) {
      this.userId = userId
    }
  }
})
