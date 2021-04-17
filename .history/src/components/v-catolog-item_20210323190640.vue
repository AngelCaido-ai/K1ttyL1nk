<template>
    <div class="v-catalog-item">
        <img class="v-catalog-item-img" :src="require('../assets/images/'+ product_data.image)" alt="img">
        <p class="v-catalog-item__name">{{product_data.name}}</p>
        <p class="v-catalog-item__price">{{product_data.price}}</p>
        <button class="v-catalog-btn-to-cart btn" @click="addToCart">Add to cart</button>
    </div>
</template> 

<script>

export default{
    name: "v-catalog-item",
    components: {},
    props: {
        product_data: {
            type: Object,
            default(){
                return{}
            }
        }
    },
    data (){
        return{
        
        }
    },
    computed:{},
    methods: {
        addToCart(){
            this.$emit('addToCart',this.product_data)
        }
    }


}
</script>

<style lang="scss">
    .v-catalog-item{
        flex-basis: 25%;
        box-shadow: 0 0 8px 0;
        padding: 16px;
        margin-bottom: 16px;
        }
    .v-catalog-item-img{
        width: 300px;
    }
</style>