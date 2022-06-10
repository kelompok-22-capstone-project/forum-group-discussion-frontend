<template>
  <v-app>
    <v-app-bar
      color="white"
      :clipped-left="clipped"
      :clipped-right="clipped"
      app
    >
      <v-btn text disabled>
        <img src="img/logo.svg" height="50" />
      </v-btn>
      <v-spacer></v-spacer>
      <v-responsive max-width="500">
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
      <v-spacer></v-spacer>

      <v-btn to="/login" depressed color="primary" class="rounded-lg mr-5">
        Login
      </v-btn>

      <v-btn to="/regist" rounded depressed color="error" class="rounded-lg"
        >Register</v-btn
      >
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

      <v-list v-for="[icon, text] in links" :key="icon" link class="ml-2 mr-2">
        <v-hover v-slot="{ hover }">
          <v-btn
            width="225px"
            elevation="0"
            class="justify-start rounded-lg"
            :style="{
              'background-color': hover ? '#ff5252' : '#fff',
              color: hover ? '#fff' : '#ff5252',
            }"
          >
            <v-icon>{{ icon }}</v-icon>
            <span class="ml-4">{{ text }}</span>
          </v-btn>
        </v-hover>
      </v-list>

      <v-spacer></v-spacer>

      <div class="mt-10 ml-5 mr-5">
        <h4 style="color: #1d3557">Category</h4>
        <v-list
          v-for="list in kategori"
          :key="list.text"
          link
          v-model="selection"
        >
          <v-hover v-slot="{ hover }">
            <v-btn
              width="200px"
              elevation="0"
              class="justify-start pl-2 pr-2 ml-3 rounded-lg no-uppercase"
              :style="{
                'background-color': hover ? '#1976D2' : '#fff',
                color: hover ? '#fff' : '#1976D2',
              }"
              >{{ list.text }}</v-btn
            >
          </v-hover>
        </v-list>
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
  name: "DefaultLayout",
  data: () => ({
    loading: false,
    selection: 1,
    drawer: true,
    // active: true,
    clipped: true,
    fixed: true,
    links: [
      ["mdi-monitor", "Home"],
      ["mdi-message-text", "Your Thread"],
    ],
    kategori: [{ text: "Makanan" }, { text: "Mikinin" }, { text: "Mukunun" }],
    cards: ["Today", "Yesterday"],
  }),
};
</script>

<style scoped>
.no-uppercase {
  text-transform: unset !important;
}
</style>
