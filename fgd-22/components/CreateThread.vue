<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          width="1550px"
          height="60px"
          class="ma-7 pt-4 pb-4"
          color="#fff"
          elevation="5"
          v-bind="attrs"
          v-on="on"
        >
          <span> Let's Make a thread </span>
          <v-spacer></v-spacer>
          <v-icon> mdi-plus </v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-col cols="12" sm="6" md="12">
          <v-card-title>
            <span class="text-h5">User Profile</span>
          </v-card-title>
        </v-col>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="2" sm="6" md="12">
                <v-text-field
                  label="Title"
                  placeholder="Title"
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="2" md="12">
                <v-textarea
                  outlined
                  name="input-7-4"
                  label="Description"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  //layout
  layout: "admin",

  //meta
  head() {
    return {
      title: "Add New Product - Administrator",
    };
  },

  components: {
    "ckeditor-nuxt": () => {
      if (process.client) {
        return import("@blowstack/ckeditor-nuxt");
      }
    },
  },

  data() {
    return {
      //state thread
      thread: {
        title: "string",
        description: "string",
        categoryID: "string",
      },
      //state validation
      validation: [],
      //config CKEDITOR
      editorConfig: {
        removePlugins: ["Title"],
      },
    };
  },

  //hook "asyncData"
  async asyncData({ store }) {
    //get list all categories
    await store.dispatch("admin/category/getListAllCategories");
  },

  //computed
  computed: {
    //categories
    categories() {
      return this.$store.state.admin.category.categories;
    },
  },

  methods: {
    //handle file upload

    //method "storeThread"
    async storeProduct() {
      //define formData
      let formData = new FormData();

      formData.append("title", this.thread.title);
      formData.append("description", this.thread.description);
      formData.append("categoryID", this.thread.categoryID);

      //sending data to action "storeThread" vuex
      await this.$store
        .dispatch("web/threads/storeThread", formData)

        //success
        .then(() => {
          //sweet alert
          this.$swal.fire({
            title: "BERHASIL!",
            text: "Data Berhasil Disimpan!",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });

          //redirect route "admin-products"
          // this.$router.push({
          //   name: "admin-products",
          // });
        })

        //error
        .catch((error) => {
          //assign error to state "validation"
          this.validation = error.response.data;
        });
    },
  },
};
</script>