<template>
  <div class="v-catalog">
   {{info}}
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
    axios
              .get("https://dka-develop.ru/api?type=hashtag")
              .then(response => {
                this.info = response;
              })
              .catch(error => {
                console.log(error);
                this.errored = true
              })
              .finally(() => this.loading = false)  
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