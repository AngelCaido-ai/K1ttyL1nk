<template>
  <b-navbar style="margin-bottom: 60px;" toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand class="logo" href="#">
      <img src="../assets/images/logo.png" alt="Kitten">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-avatar variant="secondary"></b-avatar>
      </b-navbar-nav>
    </b-collapse>
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <b-button size="sm" class="my-2 my-sm-0 v-catalog_link_to_cart" type="submit">Cart: {{ CART.length }}</b-button>
    </router-link>
  </b-navbar>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "v-nav-bar",

  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
}


</script>

<style scoped>
.v-catalog_link_to_cart{
  color: rgba(255, 255, 255, 0.5);
  margin-left: 10px;
}

.logo img{
  max-width: 175px;
}
</style>