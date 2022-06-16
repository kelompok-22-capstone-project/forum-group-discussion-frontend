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
      <v-spacer></v-spacer>
      <v-responsive max-width="500" class="mr-2">
        <v-text-field
          label="Search"
          dense
          flat
          elevation="5"
          hide-details
          solo-inverted
        >
        </v-text-field>
      </v-responsive>
      <v-btn flat depressed color="light-grey">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" app class="mx-5">
      <v-list-item two-line class="mb-10 mt-5 ml-2 mr-2">
        <v-list-item-avatar color="grey">
          <v-icon dark> mdi-account-circle </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="font-weight-medium" style="color: #131f4b"
            >admin 1</v-list-item-title
          >
          <v-list-item-subtitle style="color: #678ef0"
            >@admin1</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-spacer></v-spacer>

      <div>
        <v-hover v-slot="{ hover }">
          <v-btn
            text
            width="225px"
            class="justify-start no-uppercase ml-5 mb-3"
            :style="{
              'background-color': hover ? '#1976D2' : '#fff',
              color: hover ? '#fff' : '#1976D2',
            }"
          >
            <v-icon class="mr-3">mdi-home</v-icon>
            <span>Dashboard</span>
          </v-btn>
        </v-hover>
        <v-hover v-slot="{ hover }">
          <v-btn
            text
            width="225px"
            class="justify-start no-uppercase ml-5 mb-3"
            :style="{
              'background-color': hover ? '#1976D2' : '#fff',
              color: hover ? '#fff' : '#1976D2',
            }"
          >
            <v-icon class="mr-3">mdi-account</v-icon>
            <span>User</span>
          </v-btn>
        </v-hover>
        <v-hover v-slot="{ hover }">
          <v-btn
            text
            width="225px"
            class="justify-start no-uppercase ml-5 mb-3"
            :style="{
              'background-color': hover ? '#1976D2' : '#fff',
              color: hover ? '#fff' : '#1976D2',
            }"
          >
            <v-icon class="mr-3">mdi-format-line-spacing</v-icon>
            <span>Category</span>
          </v-btn>
        </v-hover>
        <v-hover v-slot="{ hover }">
          <v-btn
            text
            width="225px"
            class="justify-start no-uppercase ml-5"
            :style="{
              'background-color': hover ? '#1976D2' : '#fff',
              color: hover ? '#fff' : '#1976D2',
            }"
          >
            <v-icon class="mr-3">mdi-alert-circle-outline</v-icon>
            <span>Report</span>
          </v-btn>
        </v-hover>
      </div>

      <v-spacer></v-spacer>

      <div class="logoutbtn">
        <v-hover v-slot="{ hover }">
          <v-btn
            text
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
