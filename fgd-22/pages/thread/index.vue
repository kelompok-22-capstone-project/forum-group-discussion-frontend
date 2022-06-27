<template>
  <v-div>
    <v-row justify="center" align="center">
      <v-card class="mx-auto rounded-lg" max-width="1550" elevation="0">
        <v-card-text class="text-h3" style="max-width: 1400px">
          7 Fitur Penting di Smarthpone yang Bisa Memanjakan Para Gamerssssss
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

            <v-btn small rounded outlined color="indigo"> Teknologi </v-btn>
          </v-list-item>
        </v-card-actions>

        <v-card-text class="text-h8 font-weight-black">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
            tortor at auctor urna nunc id cursus. Egestas maecenas pharetra
            convallis posuere morbi leo urna molestie. Pulvinar elementum
            integer enim neque. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames. Vel fringilla est ullamcorper eget
            nulla facilisi etiam dignissim. Sem et tortor consequat id porta
            nibh venenatis cras. Tellus mauris a diam maecenas sed enim ut.
            Rhoncus mattis rhoncus urna neque viverra justo. Convallis a cras
            semper auctor neque vitae tempus quam. Accumsan sit amet nulla
            facilisi. Cursus euismod quis viverra nibh cras. Ut venenatis tellus
            in metus. Egestas dui id ornare arcu odio ut sem. Rutrum quisque non
            tellus orci ac auctor.
          </p>
          <p>
            Neque viverra justo nec ultrices. Nec feugiat in fermentum posuere.
            Nam aliquam sem et tortor consequat id porta nibh. Eu tincidunt
            tortor aliquam nulla facilisi cras fermentum. Egestas integer eget
            aliquet nibh praesent tristique magna. Nulla aliquet enim tortor at
            auctor urna nunc. Donec ac odio tempor orci. Sem nulla pharetra diam
            sit amet nisl suscipit adipiscing bibendum. Nam at lectus urna duis
            convallis convallis. Eget est lorem ipsum dolor. Commodo sed egestas
            egestas fringilla phasellus faucibus. Enim nulla aliquet porttitor
            lacus luctus accumsan tortor. Eu augue ut lectus arcu bibendum at
            varius vel pharetra.
          </p>
          <p>
            tellus at urna condimentum mattis pellentesque. Sit amet est
            placerat in egestas erat imperdiet sed euismod. Quam vulputate
            dignissim suspendisse in est ante in. A iaculis at erat pellentesque
            adipiscing commodo elit at imperdiet. Nisl suscipit adipiscing
            bibendum est ultricies integer. Erat nam at lectus urna duis
            convallis convallis tellus. Facilisi cras fermentum odio eu feugiat
            pretium nibh. Aliquet porttitor lacus luctus accumsan tortor. Non
            odio euismod lacinia at quis. Enim sit amet venenatis urna cursus.
            Auctor eu augue ut lectus arcu bibendum at varius. Ut pharetra sit
            amet aliquam id diam maecenas ultricies. Hendrerit dolor magna eget
            est lorem ipsum dolor sit amet. Duis tristique sollicitudin nibh
            sit. Porttitor rhoncus dolor purus non enim praesent elementum
            facilisis leo.
          </p>
        </v-card-text>

        <v-card-actions>
          <v-col cols="12" sm="3">
            <v-btn icon color="dark">
              <v-icon>mdi-thumb-up-outline</v-icon>
            </v-btn>
            <span class="subheading mr-2">256</span>

            <v-btn icon color="dark">
              <v-icon>mdi-bookmark-outline</v-icon>
            </v-btn>
            <span class="subheading mr-2">45 Follow this tread</span>
          </v-col>
        </v-card-actions>

        <v-card-actions>
          <v-card-text
            class="text-h8 font-weight-black d-inline-block text-truncate"
          >
            Moderator : Arbaan Nisa, Luthfi
          </v-card-text>

          <v-btn
            class="ma-2"
            :loading="loading"
            :disabled="loading"
            color="primary"
            @click="loader = 'loading'"
          >
            Add as Moderator
          </v-btn>
        </v-card-actions>

        <v-card-action>
          <v-card-text class="text-h5" style="max-width: 1400px">
            Comments
          </v-card-text>

          <v-textarea outlined name="input-7-4" label="Comment"></v-textarea>
        </v-card-action>

        <v-card-action>
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

            <v-btn
              class="ma-2"
              :loading="loading"
              :disabled="loading"
              color="error"
              @click="loader = 'loading'"
            >
              Report
            </v-btn>
          </v-list-item>

          <v-card-text class="text-h8 font-weight-black">
            <p>Tidak setuju sih sama opinimu</p>
          </v-card-text>
        </v-card-action>


        <v-divider class="mx-4"></v-divider>

        <v-card-action>
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

            <v-btn
              class="ma-2"
              :loading="loading"
              :disabled="loading"
              color="error"
              @click="loader = 'loading'"
            >
              Report
            </v-btn>
          </v-list-item>

          <v-card-text class="text-h8 font-weight-black">
            <p>Tidak setuju sih sama opinimu</p>
          </v-card-text>
        </v-card-action>

        
        <v-divider class="mx-4"></v-divider>
      </v-card>
    </v-row>
  </v-div>
</template>

<script>
export default {
  name: "DetailThread",
};
</script>
