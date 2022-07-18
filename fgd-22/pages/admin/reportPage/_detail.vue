<template>
  <div class="ma-8">
    <v-card class="d-flex justify-space-between mb-16" flat tile>
      <h2 style="color: grey">Detail User</h2>
    </v-card>
    <div v-for="report in reports" :key="report.ID">
      <div v-if="report.ID === $route.params.report">
        <v-row align="center">
          <v-col cols="3">
            <p class="font-weight-medium">User :</p>
          </v-col>
          <v-col cols="3">
            <p>{{ report.username }}</p>
          </v-col >
        </v-row>
        <v-row align="center">
          <v-col cols="3">
            <p class="font-weight-medium">Report reason :</p>
          </v-col>
          <v-col cols="3">
            <p>{{ report.reason }}</p>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="3">
            <p class="font-weight-medium">Report by :</p>
          </v-col>
          <v-col cols="3">
            <p>{{ report.moderatorUsername }}</p>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="3">
            <p class="font-weight-medium">From Thread (Title Thread) :</p>
          </v-col>
          <v-col cols="3">
            <p>{{ report.threadTitle }}</p>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="3">
            <p class="font-weight-medium">Comment :</p>
          </v-col>
          <v-col cols="3">
            <p>{{ report.comment }}</p>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="3">
            <p class="font-weight-medium">Date Comment :</p>
          </v-col>
          <v-col cols="3">
            <p>{{ report.commentPublishedOn }}</p>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="ma-10">
      <template>
        <v-row justify="end">
          <v-btn
            color="error"
            class="rounded-lg"
            dark
            @click.stop="dialog = true"
          >
            Ban User
          </v-btn>

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
</template>

<script>
export default {
  name: "detailReportPage",
  layout: "admin",
  data() {
    return {
      dialog: false,
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
        .$put(`/users/${this.$route.params.report}/banned`,{}, {
          headers: {
            "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          alert("Ban User Success");
          this.$router.push("/admin/report");
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

<style></style>
