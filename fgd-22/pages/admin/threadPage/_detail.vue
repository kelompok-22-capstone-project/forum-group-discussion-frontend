<template>
  <div class="ma-8">
    <v-card class="d-flex justify-space-between mb-16" flat tile>
      <h2 style="color: grey">Detail Thread</h2>
    </v-card>
    <v-row align="center">
      <v-col cols="3">
        <h4>Creator :</h4>
      </v-col>
      <v-col cols="3">
        <h4>{{ thread.creatorName }}</h4>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="3">
        <h4>Category :</h4>
      </v-col>
      <v-col>
        <p>{{ thread.categoryName }}</p>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="3">
        <h4>Title Thread :</h4>
      </v-col>
      <v-col>
        <h4>{{ thread.title }}</h4>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="3">
        <h4>Content Thread :</h4>
      </v-col>
      <v-col>
        <p>{{ thread.description }}</p>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col cols="3">
        <h4>Date Published :</h4>
      </v-col>
      <v-col>
        <p>{{ thread.publishedOn }}</p>
      </v-col>
    </v-row>
    <div class="ma-10">
      <template>
        <v-row justify="end">
          <v-btn color="error" class="rounded-lg" dark @click.stop="dialog = true">
            Delete Thread
          </v-btn>

          <v-dialog v-model="dialog" max-width="465">
            <v-card class="pa-3">
              <v-card-title class="text-h6">
                <p>
                  Are you sure want to
                  <span style="color: #ff5252"> delete </span> this thread ?
                </p>
              </v-card-title>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text @click="dialog = false"> Cancel </v-btn>

                <v-btn
                  color="error"
                  class="rounded-lg"
                  @click="dialog = false"
                  @click.prevent="remove"
                >
                  Yes!, delete thread
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
  name: "detailPage",
  layout: "admin",
  data() {
    return {
      dialog: false,
      thread: [],
    };
  },

  async created() {
    await this.$axios
      .$get(`/threads/${this.$route.params.detail}`, {
        headers: {
          "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        this.thread = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  methods: {
    async remove() {
      const response = await this.$axios
        .$delete(`/threads/${this.$route.params.detail}`, {
          headers: {
            "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          alert("Delete Thread Success");
          this.$router.push("/admin/thread");
        })
        .catch((err) => {
          console.log(err);
          alert("Delete Thread Failed");
        });
      console.log(response);
    },
  },
};
</script>

<style></style>
