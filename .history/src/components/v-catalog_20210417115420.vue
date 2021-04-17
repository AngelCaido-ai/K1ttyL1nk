<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="v-catalog_link_to_cart">Cart: {{ CART.length }}</div>
    </router-link>
    {{this.hashtag}}
    <vCatalogItem
      v-for="hashtag in this.PRODUCTS"
      :key="hashtag.article"
      :product_data="hashtag"
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