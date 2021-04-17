<template>
  <div class="v-catalog-item">
    <div class="v-catalog-item-img">
      <img :src="require('../assets/images/' + product_data.image)" alt="img" />
    </div>
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">{{ product_data.price }}</p>
    <button class="v-catalog-btn-to-cart btn" @click="addToCart">
      Add to cart
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
  width: 23%;
  margin: 0 1% 15px;
  border-radius: 5px;
  min-width: 280px;
  box-sizing: border-box;
  flex: none;
  padding: 16px;
  border: 1px #666 solid;
}
.v-catalog-item-img {
  flex: 1;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    height: auto;
  }
}
</style>