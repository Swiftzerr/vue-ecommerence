<template>
    <div class="wrapper">
        <div class="box">
            <img :src="img">
            <div class="text">
                <div class="title-box">{{ title }}</div>
                <div>{{ description }}</div>
                <div>${{ price }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'storeitem',
    props: {
        img: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.wrapper {
    width: 200px;
}

.box {
    width: 200px;
    border-radius: 5px;
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
    overflow: hidden;
    font-family: system-ui;
}

img {
    width: 200px;
    height: 200px;
    object-fit: cover;
}

.title-box {
    font-size: 1.2em;
    font-weight: bold;
}

.text {
    padding: 10px;
}
</style>