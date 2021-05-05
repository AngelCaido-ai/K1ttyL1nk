<template>
  <div class="v-select">
  <p class="title" @click="areOptionsVisible = !areOptionsVisible">Select</p>
    <div class="options" v-if="areOptionsVisible">
      <p v-for="option in options"
      :key="option.value"
      @click="selectOption(option)">
      {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props:{
    options:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      areOptionsVisible: false
    }
  },
  methods:{
    selectOption(option){
      this.$emit('select', option)
    }
  }
}

</script>

<style>
  .v-select{
    position: relative;
    width: 200px;
    cursor: pointer;
    margin: 0;
  }
  .title {
    border: solid 1px #2c3e50;
  }
  .options{
    border: solid 1px #2c3e50;
    position: absolute;
    top: 30px;
    right: 0;
    width: 100%;
  }
  .options p:hover{
    background-color: #666666;
  }
</style>