<template>
  <v-div class="grey lighten-5">
    <v-row no-gutters>
      <v-col md="6">
        <v-card class="ma-8 pa-6 rounded-lg" color="primary" link>
          <v-list-item three-line class="white--text">
            <v-list-item-content>
              <div class="mb-2">Total User</div>
              <v-list-item-title class="text-h5 mb-1"> 190 </v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar size="80">
              <v-icon size="74" color="#ffff">mdi-account</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card class="ma-8 pa-6 rounded-lg" color="primary" link>
          <v-list-item three-line class="white--text">
            <v-list-item-content>
              <div class="mb-2">Total Threads</div>
              <v-list-item-title class="text-h5 mb-1"> 190 </v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar size="80">
              <v-icon size="74" color="#ffff">mdi-note-outline</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col md="6">
        <v-card class="ma-8 pa-6 rounded-lg" color="error" link>
          <v-list-item three-line class="white--text">
            <v-list-item-content>
              <div class="mb-2">Total Moderator</div>
              <v-list-item-title class="text-h5 mb-1"> 190 </v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar size="80">
              <v-icon size="74" color="#ffff">mdi-account-edit</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card class="ma-8 pa-6 rounded-lg" color="error" link>
          <v-list-item three-line class="white--text">
            <v-list-item-content>
              <div class="mb-2">Total Report</div>
              <v-list-item-title class="text-h5 mb-1"> 190 </v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar size="80">
              <v-icon size="74" color="#ffff">mdi-alert-circle-outline</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-div>
</template>

<script>
export default {
  layout: "admin",
};
</script>

<style scoped></style>
