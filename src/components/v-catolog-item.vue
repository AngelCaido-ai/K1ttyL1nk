<template>
  <div class="v-catalog-item">
    <div class="v-catalog-item_img">
      <img :src="require('../assets/images/' + product_data.image)" alt="img" />
    </div>
    <p class="v-catalog-item_name">{{ product_data.name }}</p>
    <p class="v-catalog-item_price">{{ product_data.price }}</p>
    <button class="v-catalog-item_btn" @click="addToCart">
      в корзину
    </button>
  </div>
</template> 

<script>
export default {
  name: "v-catalog-item",
  components: {},
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
};
</script>

<style lang="scss">
.v-catalog-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0 15px;
  border-radius: 5px;
  max-width: 280px;
  box-sizing: border-box;
  flex: none;
  padding: 20px 15px;
  border: 1px #666 solid;
  text-align: center;
  @media (min-width: 420px){
    width: 48%;
    margin: 0 1% 15px;
    max-width: 400px;
  }
  @media (min-width: 620px){
    width: 31.33%;
  }
  @media (min-width: 1020px){
    width: 23%;
  }
  &_img {
    flex: 1;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    justify-content: center;
    img {
      width: auto;
      height: auto;
      max-height: 180px;
    }
  }
  &_name {
    font-size: 20px;
    line-height: 1.4;
    font-weight: 700;
    margin-bottom: 10px;
    color: black;
  }
  &_price {
    font-size: 16px;
    line-height: 1.4;
    margin-bottom: 16px;
    color: #666;
  }
  &_btn {
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px transparent solid;
    outline: none;
    width: 150px;
    text-align: center;
    font-size: 16px;
    line-height: 1;
    color: white;
    padding: 10px 10px 12px;
    text-transform: uppercase;
    cursor: pointer;
    display: block;
    margin: 0 auto;
    background-color: darkred;
    box-shadow: none;
    &:hover {
      background-color: coral;
    }
  }
}
</style>