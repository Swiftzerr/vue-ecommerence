<script lang="ts">
import storeitem from '@/components/storeitem.vue'

export default {
  components: {
    storeitem
  },
}
</script>

<template>
  <main>
    <storeitem
      img="https://s3.amazonaws.com/pocket-curatedcorpusapi-prod-images/b57c05ba-5668-468f-b4c3-727796f2c368.jpeg"
      title="Test Item 1" description="This is a test item" price=999.99>
    </storeitem>
  </main>
</template>
