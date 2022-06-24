<template>
  <v-app>
    <v-app-bar
      color="white"
      :clipped-left="clipped"
      :clipped-right="clipped"
      app
    >
      <v-btn text disabled>
        <img src="/img/logo.svg" height="50" />
      </v-btn>
      <v-spacer></v-spacer>

      <v-text-field
        dense
        flat
        placeholder="Search"
        hide-details
        rounded
        solo-inverted
        class="rounded-lg"
        append-icon="mdi-magnify"
      >
      </v-text-field>
      <v-spacer></v-spacer>

      <!-- <div v-if="login === true"> -->
      <v-btn to="/login" depressed color="primary" class="rounded-lg mr-5">
        Login
      </v-btn>

      <v-btn to="/regist" rounded depressed color="error" class="rounded-lg"
        >Register</v-btn
      >
      <!-- </div> -->
      <!-- <div v-else>
        <v-btn to="/" rounded depressed color="error" class="rounded-lg"
          >Logout</v-btn
        >
      </div> -->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" app class="mx-5">
      <template v-slot:prepend>
        <v-list-item two-line class="mb-10 mt-5 ml-2 mr-2">
          <v-list-item-avatar color="grey">
            <v-icon dark> mdi-account-circle </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-weight-medium"
              >Guest</v-list-item-title
            >
            <v-list-item-subtitle>-</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-spacer></v-spacer>

      <v-hover>
        <v-btn
          width="225px"
          elevation="0"
          to="/"
          class="justify-start rounded-lg no-uppercase btn-hover"
        >
          <v-icon>mdi-home-outline</v-icon>
          <span class="ml-4">Home</span>
        </v-btn>
      </v-hover>

      <v-hover>
        <v-btn
          width="225px"
          to="user/thread"
          elevation="0"
          class="justify-start rounded-lg no-uppercase btn-hover"
        >
          <v-icon>mdi-file-document-outline</v-icon>
          <span class="ml-4">Your Thread</span>
        </v-btn>
      </v-hover>
      <div class="ml-5 mr-5 mb-6 mt-6">
        <h4 style="color: #000">Category</h4>
        <v-list v-for="list in categoryList" :key="list.ID">
          <v-btn
            :to="{ name: 'category', params: { category: list.name } }"
            width="225px"
            elevation="0"
            class="justify-start rounded-lg no-uppercase btn-hover"
          >
            {{ list.name }}
          </v-btn>
        </v-list>
      </div>

      <v-hover>
        <v-btn
          width="225px"
          elevation="0"
          class="justify-start rounded-lg no-uppercase btn-hover mb-6"
        >
          <v-icon>mdi-crown-outline</v-icon>
          <span class="ml-4">Ranking</span>
        </v-btn>
      </v-hover>
      <v-hover>
        <v-dialog>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              width="225px"
              elevation="0"
              class="justify-start rounded-lg no-uppercase btn-hover"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-plus</v-icon>
              <span class="ml-4">Create Thread</span>
            </v-btn>
          </template>

          <v-card class="pa-5">
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
      </v-hover>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data: () => ({
    loading: false,
    selection: 1,
    drawer: true,
    clipped: true,
    fixed: true,
    kategori: [{ text: "Makanan" }, { text: "Mikinin" }, { text: "Mukunun" }],
    cards: ["Today", "Yesterday"],
    category: [],
  }),

  computed: {
    categoryList() {
      return this.$store.state.general.getcategory.category;
    },
  },

  mounted(){
    this.$store.dispatch('general/getcategory/getCategoriesData')
  },

    created() {
    const response = this.$axios
      .$get("/categories", {
        headers: {
          "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        this.category = response.data.categories;
        console.log("data:");
        console.log(response.data.categories);
      })
      .catch((err) => {
        console.log(err);
        // alert("Register Failed");
      });
    console.log(response);
  },
};
</script>

<style scoped>
.no-uppercase {
  text-transform: unset !important;
}
.btn-hover {
  color: #1976d2 !important;
  background-color: #fff !important ;
}
.btn-hover:hover {
  color: #fff !important;
  background-color: #1976d2 !important ;
}
</style>
