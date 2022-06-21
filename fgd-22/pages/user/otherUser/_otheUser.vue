<template>
  <v-div>
    <v-row no-gutters justify="end">
      <v-col md="6">
        <v-card class="mt-8 pt-6 pr-6 pl-6 elevation-0">
          <v-list-item>
            <v-card
              class="rounded-circle justify-center pa-3 ma-4"
              color="primary"
            >
              <v-icon size="75">mdi-account</v-icon>
            </v-card>

            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1"
                >User 2
              </v-list-item-title>
              <v-list-item-subtitle>@user2</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card class="d-flex align-end justify-end mt-8 pt-6 pr-6 pl-6 elevation-0">
          <v-card class="pa-3 ma-4 elevation-0">
            <p class="text-right">123 <b>Thread</b></p>
            <p class="text-right">444 <b>Followers</b></p>
          </v-card>
        </v-card>
      </v-col>
      <v-div> 
          <v-card class="mb-8 mr-14 elevation-0 align-end">
            <v-btn color="primary" class="rounded-lg pa-4 no-uppercase">
                <span>Follow</span>
                <v-icon size="20px">mdi-plus</v-icon>
            </v-btn>
          </v-card>
      </v-div>
    </v-row>
    <v-row>
        
    </v-row>


    <v-divider></v-divider>

    <v-div>
      <h2 class="mt-mb-8 pa-6 grey--text">NamaUser Thread</h2>
      <cards />
    </v-div>
  </v-div>
</template>

<script>
import Cards from "../../../components/Cards.vue";

export default {
  name: "otherUserPage",
  components: { Cards },
};
</script>

<style scoped>
.no-uppercase {
  text-transform: unset !important;
}
</style>
