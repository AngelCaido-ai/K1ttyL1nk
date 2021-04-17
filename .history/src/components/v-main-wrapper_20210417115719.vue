<template>
    <div class="main-wrapper">
        <p>{{title}}</p>
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
            hashtag,
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
    max-width: 600px;
    margin: 0 auto;
}
</style>