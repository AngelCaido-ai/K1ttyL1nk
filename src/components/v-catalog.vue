<template>
  <div class="v-catalog">
    <p>Selected options: {{selected}}</p>
    <v-select
        :options="categories"
        @select="sortByCategories"
        :selected="selected"
    />

    <vCatalogItem
        v-for="product in this.filteredProducts"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
    />
  </div>
</template>

<script>
import vCatalogItem from "./v-catolog-item";
import {mapActions, mapGetters} from "vuex";
import vSelect from './v-select'

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
    vSelect,
  },
  props: {},
  data(){
    return{
    categories:[
      {name:"Все", value:"All"},
      {name:"Мужские", value:"М"},
      {name:"Женские", value:"Ж"},
    ],
      selected:'Все',
      sortedProducts:[]
    }
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
    filteredProducts(){
      if(this.sortedProducts.length){
        return this.sortedProducts
    }else{
       return this.PRODUCTS
    }
    }
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortByCategories(category){
      this.sortedProducts = [];
      let vm = this;
      this.PRODUCTS.map(function (item){
        if (item.category === category.name){
          vm.sortedProducts.push(item);
        }
      })
      this.selected = category.name;
    }
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