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
        text
        placeholder="Search"
        hide-details
        rounded
        solo-inverted
        class="rounded-lg"
        append-icon="mdi-magnify"
        v-model="search"
        v-on:keyup.enter="searchThread"
      >
      </v-text-field>
      <v-spacer></v-spacer>

      <div v-if="role === 'user'">
        <v-btn
          to="/"
          rounded
          depressed
          color="error"
          class="rounded-lg"
          @click="logout"
          >Logout</v-btn
        >
      </div>
      <div v-else>
        <v-btn to="/login" depressed color="primary" class="rounded-lg mr-5">
          Login
        </v-btn>

        <v-btn to="/regist" rounded depressed color="error" class="rounded-lg"
          >Register</v-btn
        >
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" app class="mx-5">
      <template v-slot:prepend>
        <v-list-item two-line class="mb-10 mt-5 ml-2 mr-2">
          <v-list-item-avatar color="grey">
            <v-icon dark> mdi-account-circle </v-icon>
          </v-list-item-avatar>
          <div v-if="role === 'user'">
            <v-list-item-content>
              <v-card
                flat
                class="overflow-auto"
                width="150"
                link
                :to="{
                  name: 'user-profile',
                  params: { index: myUsername },
                }"
              >
                <v-list-item-title class="font-weight-medium">{{
                  myUsername
                }}</v-list-item-title>
                <v-list-item-subtitle class="text-caption">{{
                  myEmail
                }}</v-list-item-subtitle>
              </v-card>
            </v-list-item-content>
          </div>
          <div v-else>
            <v-list-item-content>
              <v-list-item-title class="font-weight-medium"
                >Guest</v-list-item-title
              >
              <v-list-item-subtitle>-</v-list-item-subtitle>
            </v-list-item-content>
          </div>
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
        <v-dialog max-width="1000px" v-model="dialog">
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

          <v-card>
            <v-card-text>
              <v-container>
                <v-row align="center">
                  <v-col>
                    <h1>Create Thread</h1>
                  </v-col>
                  <v-col md="3">
                    <select class="select" v-model="categoryID">
                      <option value="" selected disabled hidden>
                        Category
                      </option>
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
    selection: 1,
    drawer: true,
    dialog: false,
    clipped: true,
    fixed: true,
    role: null,
    search: "",
    title: "",
    description: "",
    categoryID: "",
  }),

  methods: {
    async searchThread() {
      this.$store.commit("general/search/threads", this.search);
      this.$router.push("/searchFound");
    },
    async submit() {
      const response = await this.$axios
        .$post(
          "/threads",
          {
            title: this.title,
            description: this.description,
            categoryID: this.categoryID,
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
          (this.dialog = false), alert("Create Thread Success");
        })
        .catch((err) => {
          console.log(err);
          alert("Create Thread Failed");
        });
      console.log(response);
    },
    logout() {
      document.cookie =
        "auth._token.local" +
        "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      document.cookie =
        "auth.strategy" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      localStorage.removeItem("role");
      localStorage.removeItem("auth._token.local");
      localStorage.removeItem("auth._refresh_token.local");
      localStorage.removeItem("auth.strategy");
      this.role = null;
      this.$router.push("/");
    },
  },

  computed: {
    categoryList() {
      return this.$store.state.general.getcategory.category;
    },
    role() {
      return localStorage.getItem("role");
    },
    myUsername() {
      return this.$store.state.general.getuser.myUsername;
    },
    myEmail() {
      return this.$store.state.general.getuser.myEmail;
    },
  },

  mounted() {
    this.$store.dispatch("general/getcategory/getCategoriesData");
    this.$store.dispatch("general/getuser/getMyData");
    if (localStorage.role === "user") {
      this.role = localStorage.getItem("role");
    } else {
      console.log("role already set");
    }
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
.select {
  margin: 10px;
  width: 100%;
  min-width: 15ch;
  max-width: 30ch;
  border: 1px solid var(--select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #eee, #eee 33%);
}
</style>
