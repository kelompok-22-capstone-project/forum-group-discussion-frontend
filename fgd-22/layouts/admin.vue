<template>
  <v-app>
    <v-app-bar
      color="white"
      :clipped-left="clipped"
      :clipped-right="clipped"
      app
    >
      <v-btn text disabled class="no-uppercase">
        <h1 style="color: #1976d2">Admin</h1>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" app class="mx-5">
      <v-list-item two-line class="mb-10 mt-5 ml-2 mr-2">
        <v-list-item-avatar color="grey">
          <v-icon dark> mdi-account-circle </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="font-weight-medium" style="color: #131f4b"
            >admin</v-list-item-title
          >
          <v-list-item-subtitle style="color: #678ef0"
            >@admin</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-spacer></v-spacer>

      <div>
        <v-hover v-slot="{ hover }">
          <v-btn
            text
            :to="{ name: 'admin-dashboard' }"
            width="225px"
            class="justify-start no-uppercase ml-5 mb-3"
            :style="{
              'background-color': hover ? '#1976D2' : '#fff',
              color: hover ? '#fff' : '#1976D2',
            }"
          >
            <v-icon class="mr-3">mdi-home-outline</v-icon>
            <span>Dashboard</span>
          </v-btn>
        </v-hover>
        <v-hover v-slot="{ hover }">
          <v-btn
            text
            :to="{ name: 'admin-category' }"
            width="225px"
            class="justify-start no-uppercase ml-5 mb-3"
            :style="{
              'background-color': hover ? '#1976D2' : '#fff',
              color: hover ? '#fff' : '#1976D2',
            }"
          >
            <v-icon class="mr-3">mdi-shape-outline</v-icon>
            <span>Category</span>
          </v-btn>
        </v-hover>
        <v-hover v-slot="{ hover }">
          <v-btn
            text
            :to="{ name: 'admin-report' }"
            width="225px"
            class="justify-start no-uppercase ml-5"
            :style="{
              'background-color': hover ? '#1976D2' : '#fff',
              color: hover ? '#fff' : '#1976D2',
            }"
          >
            <v-icon class="mr-3">mdi-message-alert-outline</v-icon>
            <span>Report</span>
          </v-btn>
        </v-hover>
        <v-hover v-slot="{ hover }">
          <v-btn
            text
            :to="{ name: 'admin-thread' }"
            width="225px"
            class="justify-start no-uppercase ml-5 mb-3"
            :style="{
              'background-color': hover ? '#1976D2' : '#fff',
              color: hover ? '#fff' : '#1976D2',
            }"
          >
            <v-icon class="mr-3">mdi-file-document-outline</v-icon>
            <span>Thread</span>
          </v-btn>
        </v-hover>
      </div>

      <v-spacer></v-spacer>

      <div class="logoutbtn">
        <v-hover v-slot="{ hover }">
          <v-btn
            text
            @click.prevent="logout"
            width="225px"
            class="justify-start no-uppercase ml-5"
            :style="{
              'background-color': hover ? '#ff5252' : '#fff',
              color: hover ? '#fff' : '#ff5252',
            }"
          >
            <v-icon class="mr-3">mdi-logout</v-icon>
            <span>Logout</span>
          </v-btn>
        </v-hover>
      </div>
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
  name: "AdminLayout",
  data: () => ({
    loading: false,
    selection: 1,
    drawer: true,
    // active: true,
    clipped: true,
    fixed: true,
  }),

  methods: {
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

      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.no-uppercase {
  text-transform: unset !important;
}
.logoutbtn {
  position: fixed;
  bottom: 10%;
}
</style>
