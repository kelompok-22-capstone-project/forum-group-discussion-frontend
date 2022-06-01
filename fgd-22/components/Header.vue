<template>
  <v-app>
    <v-app-bar
      color="white"
      :clipped-left="clipped"
      :clipped-right="clipped"
      app
    >
      <v-btn text disabled>
        <img src="~/assets/moot.png" height="50" />
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

    <v-navigation-drawer v-model="drawer" :clipped="clipped" app>
      <template v-slot:prepend>
        <v-list-item two-line class="mt-5 mb-5 ml-2 mr-2">
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

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <v-row>
          <v-col v-for="card in cards" :key="card" cols="12">
            <v-card>
              <v-subheader>{{ card }}</v-subheader>

              <v-list two-line>
                <template>
                  <ul v-for="n in 6" :key="n">
                    <v-list-item>
                      <v-list-item-avatar color="grey darken-1">
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>Message {{ n }}</v-list-item-title>

                        <v-list-item-subtitle>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Nihil repellendus distinctio similique
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>

                    <v-divider
                      v-if="n !== 6"
                      :key="`divider-${n}`"
                      inset
                    ></v-divider>
                  </ul>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-navigation-drawer v-model="drawer" :clipped="clipped" app right>
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>

        <div>john@vuetifyjs.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
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
