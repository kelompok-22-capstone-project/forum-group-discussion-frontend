<template>
  <div>
    <v-row no-gutters>
      <v-col md="6">
        <v-card class="ma-8 pa-6 elevation-0">
          <v-list-item>
            <v-card
              class="rounded-circle justify-center pa-3 ma-4"
              color="error"
            >
              <v-icon size="75">mdi-account</v-icon>
            </v-card>

            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1"
                >User 1
              </v-list-item-title>
              <v-list-item-subtitle>@user1</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card class="d-flex align-end justify-end ma-8 pa-6 elevation-0">
          <v-card class="pa-3 ma-4 elevation-0">
            <p class="text-right">123 <b>Thread</b></p>
            <p class="text-right">444 <b>Followers</b></p>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <div>
      <h2 class="mt-mb-8 pa-6 grey--text">Your Thread</h2>
      <cards />
    </div>
  </div>
</template>

<script>
import Cards from "../../components/Cards.vue";

export default {
  name: "profilePage",
  components: { Cards },
};
</script>