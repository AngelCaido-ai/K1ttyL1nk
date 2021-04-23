<template>
    <div class="v-main-wrapper">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        
    </div>
</template>

<script>

export default{
    name: "v-main-wrapper",
    props: {},
    data (){
        return{
            title: "KittyLink"
        }
    },
    computed:{},
    methods: {},
    watch:{},

}
</script>

<style>
.v-main-wrapper {
    max-width: 1400px;
    margin: 0 auto;
}
</style>