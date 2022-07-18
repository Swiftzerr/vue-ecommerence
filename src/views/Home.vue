<script lang="ts">
import storeitem from '@/components/storeitem.vue'
import { db } from '@/main'
import { collection, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      products: null,
    }
  },
  components: {
    storeitem
  },
  created() {
    const getProducts = async () => {
      let query = await getDocs(collection(db, "products"));
      this.products = query.docs.map(doc => doc.data());
    }
    getProducts();
  }
}
</script>

<template>
  <main>
    <storeitem v-for="product in products" :img="product.imageUrl" :title="product.displayName"
      :description="product.descriptionShort" :price="product.price" :sale="product.sale"
      :beforeprice="product.beforePrice">
    </storeitem>
  </main>
</template>
