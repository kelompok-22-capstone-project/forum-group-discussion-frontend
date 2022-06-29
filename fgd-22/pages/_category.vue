<template>
  <v-app>
    <div class="ma-8">
      <h1>{{ $route.params.category }}</h1>
      <div v-for="list in categoryList" :key="list.ID">
        <div v-if="$route.params.category === list.name">
          <p>{{ list.description }}</p>
        </div>
      </div>

      <Cards />
    </div>
  </v-app>
</template>

<script>
export default {
  layout: "deafult",
  name: "category",

  computed: {
    categoryList() {
      return this.$store.state.general.getcategory.category;
    },
  },

  mounted() {
    this.$store.dispatch("general/getcategory/getCategoriesData");
    return console.log('call success')
  },
};
</script>

<style></style>
