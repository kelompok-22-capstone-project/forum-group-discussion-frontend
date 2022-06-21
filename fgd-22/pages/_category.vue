<template>
  <v-app>
    <v-div class="ma-8">
        <h1>{{$route.params.category}}</h1>
        <p>All about "{{$route.params.category}}" activities are show in this page  </p>
    
        <Cards/>
    </v-div>
  </v-app>
</template>

<script>
export default {
layout:'deafult',
name:'category'
}
</script>

<style>

</style>