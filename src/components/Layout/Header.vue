<template>
  <v-app>
    <v-app-bar
      color="white"
      :clipped-left="clipped"
      :clipped-right="clipped"
      app
    >
      <v-btn text disabled>
        <img src="@/assets/moot.png" height="50" />
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
      <v-btn depressed color="primary" class="rounded-lg mr-5"> Login </v-btn>
      <v-btn rounded depressed color="error" class="rounded-lg">
        Register
      </v-btn>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name:"HeaderView",
  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: true,
    clipped: true,
    fixed: true,
    links: [
      ["mdi-monitor", "Home"],
      ["mdi-message-text", "Your Thread"],
    ],
    kategori: [{ text: "makanan" }, { text: "mikinin" }, { text: "mukunun" }],
  }),
};
</script>
