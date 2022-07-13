<template>
  <div class="ma-12">
    <div>
      <h1>Create Category</h1>
    </div>
    <div>
      <v-container fluid>
        <v-row class="mt-8">
          <v-textarea
            class="rounded-lg"
            solo
            required
            no-resize
            v-model="name"
            background-color="grey lighten-2"
            height="50px"
            label="Title Category"
          ></v-textarea>
        </v-row>
        <v-row>
          <v-textarea
            class="rounded-lg"
            solo
            required
            v-model="description"
            background-color="grey lighten-2"
            label="Description"
          ></v-textarea>
        </v-row>
      </v-container>
      <v-card elevation="0" class="d-flex justify-end mb-6" text>
        <v-btn color="error" class="rounded-lg mr-4" to="/admin/category"
          >Cancel</v-btn
        >
        <v-btn color="primary" class="rounded-lg" @click.prevent="submit">Create Category</v-btn>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "createCategoryPage",
  layout: "admin",
  data() {
    return {
      name: "",
      description: "",
    };
  },
  methods: {
    async submit() {
      const response = await this.$axios
        .$post(
          "/categories",
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
          alert("Create Category Success");
        })
        .catch((err) => {
          console.log(err);
          this.$router.push("/admin/createCategory");
          alert("Create Category Failed");
        });
      console.log(response);
    },
  },
};
</script>

<style></style>
