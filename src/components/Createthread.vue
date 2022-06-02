<template>
  <v-app>
    <div>
      <v-btn width="950px" height="50px" class="ma-7 pt-4 pb-4" color="#fff">
        <span> Create Your Thread Here </span>
        <v-spacer></v-spacer>
        <v-icon> mdi-plus </v-icon>
      </v-btn>
    </div>
    <div>
      <v-card class="mx-auto" color="#fff" max-width="950px">
        <v-list-item>
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt=""
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Evan You</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          Turns out semicolon-less style is easier and safer in TS because most
          gotcha edge cases are type invalid as well.
        </v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-row align="center" justify="start">
              <v-icon class="mr-1"> mdi-heart-outline </v-icon>
              <span class="subheading mr-2">256</span>
              <span class="mr-1">·</span>
              <v-icon class="mr-1"> mdi-share-variant </v-icon>
              <span class="subheading">45</span>
            </v-row>
            <v-spacer></v-spacer>
            <v-row>
                <v-icon>mdi-comment</v-icon>
                <span>100 Comment</span>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "CreateThread",
};
</script>

<style></style>
