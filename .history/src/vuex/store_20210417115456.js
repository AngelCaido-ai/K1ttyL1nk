import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        hashtag: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, hashtag) => {
            state.hashtag = hashtag;
        },
        SET_CART: (state, hashtag) => {
            let isProductExists = false;
            if (state.cart.length) {
                state.cart.map(function (item) {
                    if (item.article === hashtag.article) {
                        isProductExists = true;
                        item.quantity++;
                    }
                })
                if (!isProductExists) {
                    state.cart.push(hashtag);
                }
            } else {
                state.cart.push(hashtag);
            }
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        },
        INCREMENT: (state, index) =>{
            state.cart[index].quantity++
        },
        DECREMENT: (state, index) =>{
            if(state.cart[index].quantity > 1){
            state.cart[index].quantity--
        }
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({
            commit
        }) {
            return axios('https://dka-develop.ru/api?type=hashtag', {
                    method: "GET",
                    
                })
                .then((hashtag) => {
                    commit('SET_PRODUCTS_TO_STATE', hashtag.data);
                    console.log(hashtag)
                    return hashtag;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        INCREMENT_CART_ITEM({commit}, index){
            commit('INCREMENT', index)
        },
        DECREMENT_CART_ITEM({commit}, index){
            commit('DECREMENT', index)
        },
        ADD_TO_CART({
            commit
        }, product) {
            commit('SET_CART', product);
        },
        DELETE_FROM_CART({
            commit
        }, index) {
            commit('REMOVE_FROM_CART', index)
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.hashtag;
        },
        CART(state) {
            return state.cart;
        }
    }
});

export default store;