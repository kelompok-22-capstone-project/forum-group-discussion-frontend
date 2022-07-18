<template>
<v-card elevation="0" max-width="800" class="mx-auto">
    <v-card-text class="text-sm-left text-h3 d-inline-block text-truncate" style="max-width: 1400px"> Rangking</v-card-text>


  <v-card
    class="d-flex justify-space-around mb-6"
    :color="$vuetify.theme.dark ? 'white' : 'white-4'"
    flat
    tile
    elevation="0"
  >



    <v-card class="pa-2 rounded-lg" outlined tile>
      <v-card
        class="justify-space-between mb-6"
        max-width="300"
        max-height="200"
        elevation="0"
      >
        <v-card-text>
          <v-row justify="space-around">
            <v-avatar size="120">
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
                class="pa-2"
              />
            </v-avatar>
          </v-row>
          
          <p></p>
          <p class="text-h4 text--primary">User 1</p>
          <p>@User 1</p>
          
        </v-card-text>
        
      </v-card>
      
    </v-card>

    <v-card class="pa-2 rounded-lg" outlined tile>
      <v-card
        class="justify-space-between mb-6"
        max-width="300"
        max-height="200"
        elevation="0"
      >
        <v-card-text>
          <v-row justify="space-around">
            <v-avatar size="120">
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
                class="pa-2"
              />
            </v-avatar>
          </v-row>
          <p></p>
          <p class="text-h4 text--primary">User 2</p>
          <p>@User 2</p>
        </v-card-text>
      </v-card>
    </v-card>

    <v-card class="pa-2 rounded-lg" outlined tile>
      <v-card
        class="justify-space-between mb-6"
        max-width="300"
        max-height="200"
        elevation="0"
      >
        <v-card-text>
          <v-row justify="space-around">
            <v-avatar size="120">
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
                class="pa-2"
              />
            </v-avatar>
          </v-row>
          <p></p>
          <p class="text-h4 text--primary">User 3</p>
          <p>@User 3</p>
        </v-card-text>
      </v-card>
    </v-card>
    
  </v-card>
    <v-card-text class="text-start text-h3 d-inline-block text-truncate" style="max-width: 1400px"> Rangking User</v-card-text>

<v-card>
  <v-card class="rounded-lg" outlined tile>
      
        <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Evan You</v-list-item-title>
          <v-list-item-subtitle class="text--disable">Evan You</v-list-item-subtitle>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          
          <span class="mr-1">·</span>
          <v-icon class="mr-1">
            mdi-crown
          </v-icon>
          <span class="subheading">4</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
      </v-card>
    </v-card>

    
</v-card>
  

</template>

<script>
import Cards from "../../components/Cards.vue";

export default {
  name: "rangkingPage",
  components: { Cards },
};
</script>