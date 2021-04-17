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
        width: 21%;
    margin: 0 2% 15px;
    border-radius: 5px;
    min-width: 280px;
    box-sizing: border-box;
    flex: none;
        padding: 16px;
        }
    .v-catalog-item-img{
        width: 100%;
        height: auto;
    }
</style>