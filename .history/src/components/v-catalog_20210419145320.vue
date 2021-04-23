<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="v-catalog_link_to_cart">Cart:</div>
    </router-link>
    <vCatalogItem
        v-for="product in this.PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
    />
    <div v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </div>
    <div v-else>
      <div v-if="loading">Loading...</div>
    </div>
    {{ info }}
  </div>
</template>

<script>
import axios from 'axios';
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
  data() {
    return {
      info: null,
      loading: true,
      errored: false
    };
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
    axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => {
          this.info = response.data.bpi;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
  },
  watch: {},
};
</script>

<style lang="scss">
.v-catalog {
  margin: 0 auto 50px;
  @media (min-width: 420px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    box-sizing: border-box;
    margin: 0 -1% 50px;
  }
}

.v-catalog_link_to_cart {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 16px;
  border: solid 1px gray;
}
</style>