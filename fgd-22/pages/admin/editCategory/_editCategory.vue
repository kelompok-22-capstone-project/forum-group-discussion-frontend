<template>
  <div class="ma-8">
    <v-card class="d-flex justify-space-between" flat tile>
      <h2 style="color: grey">Edit Category</h2>
    </v-card>
    <div v-for="category in categoryList" :key="category.ID">
      <div v-if="category.ID === $route.params.editCategory">
        <v-container fluid>
          <v-row class="mt-8">
            <v-textarea
            required
              class="rounded-lg"
              solo
              no-resize
              v-model="name"
              background-color="grey lighten-2"
              height="50px"
              :label="category.name"
            ></v-textarea>
          </v-row>
          <v-row>
            <v-textarea
              class="rounded-lg"
              solo
              required
              v-model="description"
              background-color="grey lighten-2"
              :label="category.description"
            ></v-textarea>
          </v-row>
        </v-container>
        <v-card elevation="0" class="d-flex justify-end mb-6" text>
          <v-btn color="error" class="rounded-lg mr-4" to="/admin/category"
            >Cancel</v-btn
          >
          <v-btn color="primary" class="rounded-lg" @click.prevent="submit"
            >Edit Category</v-btn
          >
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      name: "",
      description: "",
    };
  },
  computed: {
    categoryList() {
      return this.$store.state.general.getcategory.category;
    },
  },

  mounted() {
    this.$store.dispatch("general/getcategory/getCategoriesData");
  },

  methods:{
        async submit() {
      const response = await this.$axios
        .$put(
          `/categories/${this.$route.params.editCategory}`,
          {
            name: this.name,
            description: this.description,
          },
          {
            headers: {
              "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.$router.push("/admin/category");
          alert("Edit Category Success");
        })
        .catch((err) => {
          console.log(err);
          location.reload();
          alert("Edit Category Failed");
        });
      console.log(response);
    },
  }
};
</script>

<style></style>
