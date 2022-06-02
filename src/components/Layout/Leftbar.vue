<template>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" app>
      <template v-slot:prepend>
        <v-list-item two-line class="mb-5 mt-5 ml-2 mr-2">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list class="ml-2 mr-2">
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list class="ml-2 mr-2">
        <v-list-item v-for="list in kategori" :key="list.text" link>
          <v-list-item-icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ list.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  name:"LeftBar",
  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: true,
    clipped: true,
    fixed: false,
    links: [
      ["mdi-monitor", "Home"],
      ["mdi-message-text", "Your Thread"],
    ],
    kategori: [{ text: "makanan" }, { text: "mikinin" }, { text: "mukunun" }],
  }),
};
</script>
