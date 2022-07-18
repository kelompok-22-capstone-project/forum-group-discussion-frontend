<template>
  <div class="ma-6">
    <v-card class="d-flex justify-space-between mb-16" flat tile>
      <h2 style="color: grey">List Report</h2>
    </v-card>
    <div>
      <v-card flat>
        <v-row class="pl-4 pb-3">
          <v-col>
            <h5 cols="2">Username</h5>
          </v-col>
          <v-col cols="3">
            <h5>Report Reason</h5>
          </v-col>
          <v-col cols="2">
            <h5>Report by (Moderator)</h5>
          </v-col>
          <v-col cols="3">
            <h5>From (Title Thread)</h5>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>
        <v-divider></v-divider>
        <div v-for="report in reports" :key="report.ID" link>
          <v-row align="center">
            <v-col cols="2" class="pl-7 pt-5">
              <p>{{ report.username }}</p>
            </v-col>
            <v-col cols="3" class="pl-7">
              <v-btn
                text
                class="no-uppercase pa-0 justify-start"
                :to="{
                  name: 'admin-reportPage-detail',
                  params: { report: report.username },
                }"
              >
                {{ report.reason }}
              </v-btn>
            </v-col>
            <v-col cols="2" class="pl-6 pt-5">
              <p>{{ report.moderatorUsername }}</p>
            </v-col>
            <v-col cols="3" class="pl-5 pt-5">
              <p>{{ report.threadTitle }}</p>
            </v-col>
            <v-col cols="2" >
              <v-btn-toggle v-model="selected" tile group>
                <v-btn
                  text
                  color="error"
                  :value="report.username"
                  @click.stop="dialog = true"
                >
                  <v-icon color="error">mdi-delete-outline</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
      </v-card>
      <div class="mt-10">
        <template>
          <v-row justify="start">
            <v-dialog v-model="dialog" max-width="465">
              <v-card class="pa-3">
                <v-card-title class="text-h6">
                  <p>
                    Are you sure want to
                    <span style="color: #ff5252"> ban </span> this user ?
                  </p>
                </v-card-title>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn text @click="dialog = false"> Cancel </v-btn>

                  <v-btn
                    color="error"
                    class="rounded-lg"
                    @click="dialog = false"
                    @click.prevent="ban"
                  >
                    Yes!, ban user
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "adminReportPage",
  layout: "admin",

  data() {
    return {
      dialog: false,
      selected: null,
      // reports: [],
    };
  },

  computed: {
    reports() {
      return this.$store.state.general.getreport.reports;
    },
  },

  mounted() {
    this.$store.dispatch("general/getreport/getReportData");
  },

  methods: {
    async ban() {
      const response = await this.$axios
        .$put(`/users/${this.selected}/banned`,{}, {
          headers: {
            "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          alert("Ban User Success");
          location.reload();
        })
        .catch((err) => {
          console.log(err);
          alert("Ban User Failed");
        });
      console.log(response);
    },
  },
};
</script>

<style scope>
.no-uppercase {
  text-transform: unset !important;
}
</style>
