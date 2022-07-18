<template>
  <div app>
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn
              block
              height="60px"
              class="ma-8 pt-4 pb-4"
              color="#fff"
              elevation="5"
              v-bind="attrs"
              v-on="on"
            >
              <span> Let's Make a thread </span>
              <v-spacer></v-spacer>
              <v-icon> mdi-plus </v-icon>
            </v-btn>
        </template>          <v-card>
            <v-card-text>
              <v-container>
                <v-row align="center">
                  <v-col>
                    <h1>Create Thread</h1>
                  </v-col>
                  <v-col md="3">
                    <select class="select" v-model="categoryID">
                      <option
                        v-for="list in categoryList"
                        :key="list.ID"
                        :value="list.ID"
                      >
                        {{ list.name }}
                      </option>
                    </select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-textarea
                    label="Title Thread"
                    v-model="title"
                    solo
                    color="primary"
                    required
                    height="50px"
                  ></v-textarea>
                </v-row>
                <v-row>
                  <v-textarea
                    label="Make ur thread"
                    height="300px"
                    v-model="description"
                    solo
                    required
                    full-width
                  ></v-textarea>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="submit"> Save </v-btn>
            </v-card-actions>
          </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  //layout
  layout: "default",
  data() {
    return {
      dialog: false,
    };
  },

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
  mounted() {
    this.$store.dispatch("general/getcategory/getCategoriesData");
  },

  //computed
  computed: {
    categoryList() {
      return this.$store.state.general.getcategory.category;
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
