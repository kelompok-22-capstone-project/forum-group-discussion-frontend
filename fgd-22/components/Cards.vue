<template>
  <v-card class="mx-auto" max-width="1550" >
    

    <v-card-text class="text-h3 font-weight-black">
      7 Fitur Penting di Smarthpone yang Bisa Memanjakan Manusia
    </v-card-text>

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
        </v-list-item-content>
        
        <v-row align="center" justify="end">
            <div class="text-center">
                <v-btn rounded color="primary" dark>Rounded Button</v-btn>
            </div>
        </v-row>

      </v-list-item>
    </v-card-actions>

    <v-card-text class="text-h8 font-weight-bold">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </v-card-text>

    <v-card-actions>
        <v-icon class="mr-1">mdi-thumb-up-outline</v-icon>
        <span class="subheading mr-2">256</span>
        <span class="mr-1">·</span>
        <v-icon class="mr-1">mdi-share-variant</v-icon>
        <span class="subheading">45</span>
    </v-card-actions>

  </v-card>
</template>

<script>
  export default {
    data: () => ({
      reveal: false,
    }),
  }
</script>