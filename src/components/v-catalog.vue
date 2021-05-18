<template>
  <div class="v-catalog">
    <p>Selected options: {{selected}}</p>
    <v-select
        :options="categories"
        @select="sortByCategories"
        :selected="selected"
    />
    <div class="range-slider">
      <input type="range" min="0" max="1000" step="10" v-model.number="minPrice" @change="setRangeSlider">
      <input type="range" min="0" max="1000" step="10" v-model.number="maxPrice" @change="setRangeSlider">
      <div class="range-values">
        <p>Min: {{minPrice}}</p>
        <p>Max: {{maxPrice}}</p>
      </div>
    </div>
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
      sortedProducts:[],
      minPrice: 0,
      maxPrice: 1000
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
    setRangeSlider(){
      if (this.minPrice > this.maxPrice){
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.sortByCategories()
    },
    sortByCategories(category){
      let vm= this;
      this.sortedProducts = [...this.PRODUCTS];
        vm.sortedProducts = vm.sortedProducts.filter(function (item){
          return item.price >= vm.minPrice && item.price <= vm.maxPrice
        })
      if(category){
        this.sortedProducts = [...this.PRODUCTS];
            vm.sortedProducts = vm.sortedProducts.filter(function (e){
              vm.selected === category.name;
              return e.category === category.name
            })
      }
    }
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
    this.sortByCategories()
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
.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}
.range-slider svg, .range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
}
input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
</style>