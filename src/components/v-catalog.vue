<template>
  <div class="v-catalog">
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
import {mapActions, mapGetters} from "vuex";

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  props: {},
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
  watch: {},
};
</script>

<style lang="scss">
.v-catalog {
  margin: 0 auto 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  box-sizing: border-box;
  @media (min-width: 420px) {
    margin: 0 -1% 50px;
  }
}
</style>