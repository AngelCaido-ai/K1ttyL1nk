<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="v-catalog_link_to_cart">Cart: {{ CART.length }}</div>
    </router-link>
    <button type="button" @click="getHeshtags">Грузить</button>
    <ul>
      <li v-for="hashtag in hashtags"> {{hashtag}}</li>
    </ul>
    <vCatalogItem
      v-for="product in this.PRODUCTS"
      :key="product.article"
      :product_data="product"
      @addToCart="addToCart"
    />
  </div>
</template>

<script>
import vCatalogItem from "./v-catolog-item";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    getHeshtags(){
      axios.get('https://dka-develop.ru/api?type=hashtag')
    },
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
  watch: {},
};
</script>

<style lang="scss">
.v-catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.v-catalog_link_to_cart {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 16px;
  border: solid 1px gray;
}
</style>