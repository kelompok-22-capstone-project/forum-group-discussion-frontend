<template>
  <div class="ma-6">
    <v-card class="d-flex justify-space-between mb-16" flat tile>
      <h2 style="color: grey">List Category</h2>
      <v-btn color="primary rounded-lg" to="/admin/createCategory">
        Create Category
      </v-btn>
    </v-card>
    <div>
      <v-card flat>
        <v-row class="pl-4 pb-3">
          <v-col cols="5">
            <h5>Categories</h5>
          </v-col>
          <v-col cols="5">
            <h5>Description</h5>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
        <v-divider></v-divider>
        <div v-for="category in categoryList" :key="category.ID">
          <v-row>
            <v-col cols="5" class="pl-7 pt-7">
              <span>{{ category.name }}</span>
            </v-col>
            <v-col cols="5" class="pl-4 pt-7">
              <span>{{ category.description }}</span>
            </v-col>
            <v-col cols="1" class="pt-5">
              <v-btn
                text
                tile
                :to="{
                  name: 'admin-editCategory-editCategory',
                  params: { editCategory: category.ID },
                }"
              >
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="1">
              <v-btn-toggle v-model="selected" tile group>
                <v-btn
                  text
                  color="error"
                  :value="category.ID"
                  @click.stop="dialog = true"
                >
                  <v-icon color="error">mdi-delete-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
      </v-card>
      <div class="mt-10">
        <template>
          <v-row justify="start">
            <v-dialog v-model="dialog" max-width="465">
              <v-card class="pa-3">
                <v-card-title class="text-h6">
                  <p>
                    Are you sure want to
                    <span style="color: #ff5252"> delete </span> this category ?
                  </p>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text @click="dialog = false"> Cancel </v-btn>
                  <v-btn
                    color="error"
                    class="rounded-lg"
                    @click="dialog = false"
                    @click.prevent="remove"
                  >
                    Yes!, delete category
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "adminCategoryPage",
  layout: "admin",

  data() {
    return {
      page: 9,
      pageCount: 1,
      itemsPerPage: 3,
      dialog: false,
      selected: null,
    };
  },

  methods: {
    async remove() {
      const response = await this.$axios
        .$delete(`/categories/${this.selected}`, {
          headers: {
            "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          alert("Delete Category Success");
          this.$store.dispatch("general/getcategory/getCategoriesData");
        })
        .catch((err) => {
          console.log(err);
          alert("Delete Category Failed");
        });
      console.log(response);
    },
  },

  computed: {
    categoryList() {
      return this.$store.state.general.getcategory.category;
    },
  },

  mounted() {
    this.$store.dispatch("general/getcategory/getCategoriesData");
  },
};
</script>

<style></style>
