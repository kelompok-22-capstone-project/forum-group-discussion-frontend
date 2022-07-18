<template>
  <div>
    <div v-if="myID === userData.userID">
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
                  >{{ userData.username }}
                </v-list-item-title>
                <v-list-item-subtitle>{{
                  userData.email
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col md="6">
          <v-card class="d-flex align-end justify-end ma-8 pa-6 elevation-0">
            <v-card class="pa-3 ma-4 elevation-0">
              <p class="text-right">{{ userData.totalThread }} <b>Thread</b></p>
              <p class="text-right">
                {{ userData.totalFollower }} <b>Followers</b>
              </p>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <div>
        <h2 class="pt-6 pl-6 pr-6 pb-0 grey--text">Your Thread</h2>
        <div v-for="thread in userThreads" :key="thread.ID">
          <v-card
            class="mx-auto mr-8 ml-8 mt-6 pa-4 rounded-lg"
            elevation="5"
            block
          >
            <v-btn
              text
              plain
              :to="{ name: 'user-threads', params: { index: thread.ID } }"
              class="text-h4 text-bold font-weight-medium black--text no-uppercase"
              style="max-width: 1400px, color:#000"
            >
              {{ thread.title }}
            </v-btn>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey">
                  <v-icon>mdi-account</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-btn
                    plain
                    text
                    class="justify-start pa-1 no-uppercase"
                    :to="{
                      name: 'user-profile',
                      params: { index: thread.creatorUsername },
                    }"
                  >
                    {{ thread.creatorUsername }}
                  </v-btn>
                </v-list-item-content>
                <v-btn
                  small
                  rounded
                  outlined
                  color="indigo"
                  :to="{
                    name: 'category',
                    params: { category: thread.categoryName },
                  }"
                >
                  {{ thread.categoryName }}
                </v-btn>
              </v-list-item>
            </v-card-actions>

            <v-card class="overflow-hidden" flat>
              <v-btn
                plain
                text
                class="text-h8 font-weight-bold no-uppercase"
                :to="{
                  name: 'user-threads',
                  params: { index: thread.ID },
                }"
              >
                {{ thread.description }}
              </v-btn>
            </v-card>

            <v-card-actions>
              <v-row>
                <v-col cols="1" class="mr-2">
                  <v-btn
                    color="dark"
                    plain
                    :to="{
                      name: 'user-threads',
                      params: { index: thread.ID },
                    }"
                  >
                    <v-icon>mdi-thumb-up-outline</v-icon>
                    <span class="subheading mr-2">{{ thread.totalLike }}</span>
                  </v-btn>
                </v-col>
                <v-col cols="1">
                  <v-btn
                    color="dark"
                    plain
                    :to="{
                      name: 'user-threads',
                      params: { index: thread.ID },
                    }"
                  >
                    <v-icon>mdi-bookmark-outline</v-icon>
                    <span class="subheading mr-2"
                      >{{ thread.totalFollower }} Follow this tread</span
                    >
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </div>
    <div v-else>
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
                  >{{ userData.username }}
                </v-list-item-title>
                <v-list-item-subtitle>{{
                  userData.email
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col md="6">
          <v-card class="d-flex align-end justify-end ma-8 pa-6 elevation-0">
            <v-card class="pa-3 ma-4 elevation-0">
              <p class="text-right">{{ userData.totalThread }} <b>Thread</b></p>
              <p class="text-right">
                {{ userData.totalFollower }} <b>Followers</b>
              </p>
              <div>
                <v-btn
                  color="primary"
                  class="rounded-lg pa-4 no-uppercase"
                  @click="followUser"
                >
                  <span>Follow / Unfollow</span>
                </v-btn>
              </div>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
      <v-row> </v-row>
      <v-divider></v-divider>
      <div>
        <h2 class="pt-6 pl-6 pr-6 pb-2 grey--text">
          {{ userData.username }} Thread
        </h2>
        <div v-for="thread in userThreads" :key="thread.ID">
          <v-card
            class="mx-auto mr-8 ml-8 mt-6 pa-4 rounded-lg"
            elevation="5"
            block
          >
            <v-btn
              text
              plain
              :to="{ name: 'user-threads', params: { index: thread.ID } }"
              class="text-h4 text-bold font-weight-medium black--text no-uppercase"
              style="max-width: 1400px, color:#000"
            >
              {{ thread.title }}
            </v-btn>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey">
                  <v-icon>mdi-account</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-btn
                    plain
                    text
                    class="justify-start pa-1 no-uppercase"
                    :to="{
                      name: 'user-profile',
                      params: { index: thread.creatorUsername },
                    }"
                  >
                    {{ thread.creatorUsername }}
                  </v-btn>
                </v-list-item-content>
                <v-btn
                  small
                  rounded
                  outlined
                  color="indigo"
                  :to="{
                    name: 'category',
                    params: { category: thread.categoryName },
                  }"
                >
                  {{ thread.categoryName }}
                </v-btn>
              </v-list-item>
            </v-card-actions>

            <v-btn
              plain
              text
              class="text-h8 font-weight-bold no-uppercase"
              :to="{
                name: 'user-threads',
                params: { index: thread.ID },
              }"
            >
              {{ thread.description }}
            </v-btn>

            <v-card-actions>
              <v-row>
                <v-col cols="1" class="mr-2">
                  <v-btn
                    color="dark"
                    plain
                    :to="{
                      name: 'user-threads',
                      params: { index: thread.ID },
                    }"
                  >
                    <v-icon>mdi-thumb-up-outline</v-icon>
                    <span class="subheading mr-2">{{ thread.totalLike }}</span>
                  </v-btn>
                </v-col>
                <v-col cols="1">
                  <v-btn
                    color="dark"
                    plain
                    :to="{
                      name: 'user-threads',
                      params: { index: thread.ID },
                    }"
                  >
                    <v-icon>mdi-bookmark-outline</v-icon>
                    <span class="subheading mr-2"
                      >{{ thread.totalFollower }} Follow this tread</span
                    >
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      userData: [],
      userThreads: [],
    };
  },
  computed: {
    myID() {
      return this.$store.state.general.getuser.myID;
    },
  },
  methods: {
    async followUser() {
      const response = await this.$axios
        .$put(
          `/users/${this.$route.params.index}/follow`,
          {},
          {
            headers: {
              "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.$axios
            .$get(`/guest/users/${this.$route.params.index}`, {
              headers: {
                "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              console.log(res.data, "user username");
              this.userData = res.data;
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(response);
    },
  },
  async created() {
    await this.$axios
      .$get(`/guest/users/${this.$route.params.index}`, {
        headers: {
          "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data, "user username");
        this.userData = res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    await this.$axios
      .$get(`/guest/users/${this.$route.params.index}/threads`, {
        headers: {
          "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.list, "user threads");
        this.userThreads = res.data.list;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scope>
.no-uppercase {
  text-transform: unset !important;
}
</style>
