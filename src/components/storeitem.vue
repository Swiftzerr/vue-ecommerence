<template>
    <div class="wrapper">
        <div class="box">
            <img :src="img">
            <div class="text">
                <div class="title-box">{{ title }}</div>
                <div class="desc-box">{{ description }}</div>
                <div v-if="!sale" class="price-box">${{ price }}</div>
                <div v-else class="price-box">{{ price }}<div class="crossed-out">{{ beforeprice }}</div>
                </div>
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
        },
        sale: {
            type: Boolean,
            required: false
        },
        beforeprice: {
            type: Number,
            required: false
        }
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    margin: 20px 20px 20px 20px;
}

.box {
    width: 200px;
    border-radius: 5px;
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
    overflow: hidden;
    font-family: system-ui;
    transition: all 0.3s ease-in-out;
}

.box:hover {
    transform: scale(1.1);
    cursor: pointer;
}

img {
    width: 200px;
    height: 200px;
    object-fit: cover;
}

.title-box {
    font-size: 1.3em;
    font-weight: bold;
    border-bottom: #ccc 1px solid;
    padding-bottom: 5px;
}

.desc-box {
    display: -webkit-box;
    padding-top: 10px;
    height: 60px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 10px;
}

.text {
    padding: 10px;
}

.crossed-out {
    text-decoration: line-through;
    color: #B1B1B1;
    padding-left: 7px;
    display: inline
}

.price-box {
    display: flex;
    align-items: center;
    overflow: hidden
}
</style>