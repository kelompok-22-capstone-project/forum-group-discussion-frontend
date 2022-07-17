<template>
  <div class="ma-6">
    <v-card class="d-flex justify-space-between mb-5" flat tile>
      <h2 style="color: grey">Thread</h2>
    </v-card>
    <v-card flat>
      <v-card-actions>
        <v-list-item v-if="thread.ID === myID" class="grow">
          <v-list-item-avatar color="grey">
            <v-icon>mdi-account</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
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
            </v-list-item-title>
            <v-list-item-subtitle>
              <p plain text class="justify-start pl-1 no-uppercase">
                {{ thread.publishedOn }}
              </p>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-else class="grow">
          <v-list-item-avatar color="grey">
            <v-icon>mdi-account</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <v-btn
                plain
                text
                class="justify-start pa-1 no-uppercase"
                :to="{
                  name: 'user-profile',
                  params: { index: thread.creatorUsername },
                }"
              >
                <h4>
                  {{ thread.creatorUsername }}
                </h4>
              </v-btn>
            </v-list-item-title>
            <v-list-item-subtitle>
              <p plain text class="justify-start pl-1 no-uppercase">
                {{ thread.publishedOn }}
              </p>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-btn
            text
            color="error"
            v-if="myID === thread.creatorID"
            @click="remove"
          >
            <v-icon>mdi-delete-outline</v-icon>
            <span>Delete Thread</span>
          </v-btn>
        </v-list-item>
      </v-card-actions>
      <v-card-action>
        <v-list-item>
          <v-btn
            :to="{
              name: 'category',
              params: { category: thread.categoryName },
            }"
            small
            rounded
            outlined
            color="indigo"
          >
            {{ thread.categoryName }}
          </v-btn>
        </v-list-item>
      </v-card-action>
    </v-card>
    <v-card flat class="ma-6">
      <h2 class="mb-3">{{ thread.title }}</h2>
      <p>{{ thread.description }}</p>
      <v-row class="mb-3">
        <v-col cols="1">
          <v-btn color="dark" class="justify-start pa-1" plain @click="like">
            <v-icon>mdi-thumb-up-outline</v-icon>
            <span class="subheading mr-2">{{ thread.totalLike }}</span>
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn
            color="dark"
            class="justify-start pa-1 no-uppercase"
            plain
            @click="followThread"
          >
            <v-icon>mdi-bookmark-outline</v-icon>
            <span>{{ thread.totalFollower }}</span>
            <span> Follow this tread</span>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="mb-3">
        <v-col cols="5">
          <h4 class="mr-1">Moderator :</h4>
          <span
            v-for="moderator in thread.moderators"
            :key="moderator.moderatorID"
          >
            {{ moderator.username }},
          </span>
        </v-col>
        <v-col cols="7">
          <!-- <div
            v-for="moderator in thread.moderators"
            :key="moderator.moderatorID"
          > -->
          <v-card
            flat
            class="d-flex justify-end"
            v-if="myEmail === firstModerator"
          >
            <v-dialog max-width="600px" v-model="dialog">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  class="rounded-lg no-uppercase"
                  v-bind="attrs"
                  v-on="on"
                >
                  Add or Remove Moderator
                </v-btn>
              </template>

              <v-card class="pa-3 black--text">
                <v-card-text>
                  <v-container>
                    <v-row align="center">
                      <v-col>
                        <h2 class="mb-2">Add as Moderator</h2>
                        <v-divider></v-divider>
                      </v-col>
                    </v-row>
                    <v-row v-for="user in userList" :key="user.username">
                      <v-col cols="1">
                        <v-radio-group v-model="moderatorAccess">
                          <v-radio :value="user.username"> </v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col>
                        <h4>{{ user.username }}</h4>
                        <p>{{ user.email }}</p>
                      </v-col>
                      <v-col>
                        <v-card
                          flat
                          class="d-flex justify-end no-uppercase"
                          v-for="moderator in thread.moderators"
                          :key="moderator.moderatorID"
                        >
                          <v-btn
                            width="120px"
                            class="rounded-lg"
                            color="error"
                            disabled
                            @click="removeAccess"
                            v-if="moderator.email === user.email"
                          >
                            Moderator
                          </v-btn>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="error"
                    outlined
                    width="120px"
                    class="rounded-lg"
                    text
                    @click="dialog = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    width="120px"
                    class="rounded-lg"
                    color="error"
                    @click="removeAccess"
                  >
                    <v-icon color="white">mdi-minus</v-icon>
                    <span>Remove</span>
                  </v-btn>
                  <v-btn
                    width="120px"
                    class="rounded-lg"
                    color="primary"
                    @click="addAccess"
                  >
                    <v-icon color="white">mdi-plus</v-icon>
                    <span>Add</span>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card>
          <!-- </div> -->
        </v-col>
      </v-row>
    </v-card>
    <v-card flat class="ma-6">
      <h2 style="color: grey">Comment</h2>
      <v-textarea
        v-if="myRole === 'user'"
        solo
        v-on:keyup.enter="submitComment"
        v-model="comment"
      ></v-textarea>
    </v-card>
    <div>
      <v-card v-for="comment in comments" :key="comment.ID" class="ma-6">
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
                  params: { index: comment.username },
                }"
              >
                {{ comment.username }}
              </v-btn>
            </v-list-item-content>
            <div>
              <p class="mt-3">
                {{ comment.publishedOn }}
              </p>
              <v-card
                flat
                class="d-flex justify-end"
                v-for="moderator in thread.moderators"
                :key="moderator.moderatorID"
              >
                <v-dialog max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-model="removeTagDialogs[comment.ID]"
                      v-if="moderator.email === myEmail"
                      :retain-focus="false"
                      color="error"
                      class="mr-1 mb-1 no-uppercase"
                      v-bind="attrs"
                      v-on="on"
                      >Report</v-btn
                    >
                  </template>
                  <v-card>
                    <v-card-title class="black--text text-center"
                      >Report User</v-card-title
                    >
                    <v-card-text>
                      <v-icon color="error">mdi-shield-alert-outline</v-icon>
                      <span>Help us understand whats happening</span>
                    </v-card-text>
                    <v-card-text>
                      <v-btn-toggle v-model="reportReason">
                        <v-btn
                          rounded-lg
                          outlined
                          value="Hate Speech"
                          color="indigo"
                          class="no-uppercase"
                        >
                          Hate Speech
                        </v-btn>

                        <v-btn
                          rounded-lg
                          outlined
                          value="Harrasment"
                          color="indigo"
                          class="no-uppercase"
                        >
                          Harrasment
                        </v-btn>

                        <v-btn
                          rounded-lg
                          outlined
                          value="Violance"
                          color="indigo"
                          class="no-uppercase"
                        >
                          Violance
                        </v-btn>

                        <v-btn
                          rounded-lg
                          outlined
                          value="Scam and Fake Information"
                          color="indigo"
                          class="no-uppercase"
                        >
                          Scam and Fake Information
                        </v-btn>
                      </v-btn-toggle>
                    </v-card-text>
                    <v-card-text>
                      <p>
                        <v-row align="end" class="ml-0">
                          Username :
                          <v-checkbox
                            hide-details
                            class="pl-1"
                            v-model="reportUsername"
                            :value="comment.username"
                          ></v-checkbox>
                          {{ comment.username }}
                        </v-row>
                      </p>
                      <p>Report reason : {{ reportReason }}</p>
                      <p>
                        <v-row align="end" class="ml-0">
                          Report this user
                          <v-checkbox
                            hide-details
                            class="pl-1"
                            v-model="reportComment"
                            :value="comment.ID"
                          ></v-checkbox>
                        </v-row>
                      </p>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn color="error" @click="report"
                        >Yes, Report this user
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card>
            </div>
          </v-list-item>
        </v-card-actions>
        <v-card-actions>
          <v-list-item>
            <v-input>{{ comment.comment }} </v-input>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      reportUsername: "",
      reportComment: "",
      reportReason: "",
      removeTagDialogs: {},
      dialog: false,
      role: "",
      moderatorAccess: "",
      thread: [],
      firstModerator: "",
      comments: [],
      comment: "",
    };
  },
  async created() {
    await this.$axios
      .$get(`/guest/threads/${this.$route.params.index}`, {
        headers: {
          "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        this.thread = res.data;
        this.firstModerator = res.data.moderators[0].email;
      })
      .catch((err) => {
        console.log(err);
      });

    await this.$axios
      .$get(`/guest/threads/${this.$route.params.index}/comments`, {
        headers: {
          "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.list);
        this.comments = res.data.list;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  computed: {
    myID() {
      return this.$store.state.general.getuser.myID;
    },
    myEmail() {
      return this.$store.state.general.getuser.myEmail;
    },
    userList() {
      return this.$store.state.general.getuser.users;
    },
    myRole() {
      return localStorage.getItem("role");
    },
  },

  mounted() {
    this.$store.dispatch("general/getuser/getUserData");
  },

  methods: {
    async submitComment() {
      const response = await this.$axios
        .$post(
          `/threads/${this.$route.params.index}/comments`,
          { comment: this.comment },
          {
            headers: {
              "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          alert("Comment Success");
          this.comment = "";
          this.$axios
            .$get(`/guest/threads/${this.$route.params.index}/comments`, {
              headers: {
                "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              console.log(res.data.list);
              this.comments = res.data.list;
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
          alert("Comment Failed");
        });
      console.log(response);
    },
    async remove() {
      const response = await this.$axios
        .$delete(`/threads/${this.$route.params.index}`, {
          headers: {
            "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          alert("Delete Thread Success");
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
          alert("Delete Thread Failed");
        });
      console.log(response);
    },
    async removeAccess() {
      const response = await this.$axios
        .$put(
          `/threads/${this.$route.params.index}/moderators/remove`,
          {
            username: this.moderatorAccess,
          },
          {
            headers: {
              "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          alert("Remove Access Success");
          this.$axios
            .$get(`/guest/threads/${this.$route.params.index}`, {
              headers: {
                "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              console.log(res.data);
              this.thread = res.data;
              this.firstModerator = res.data.moderators[0].email;
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
          alert("Remove Access Failed");
        });
      console.log(response);
    },
    async addAccess() {
      const response = await this.$axios
        .$put(
          `/threads/${this.$route.params.index}/moderators/add`,
          {
            username: this.moderatorAccess,
          },
          {
            headers: {
              "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          alert("Add Access Success");
          this.$axios
            .$get(`/guest/threads/${this.$route.params.index}`, {
              headers: {
                "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              console.log(res.data);
              this.thread = res.data;
              this.firstModerator = res.data.moderators[0].email;
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
          alert("Add Access Failed");
        });
      console.log(response);
    },
    async report() {
      const response = await this.$axios
        .$post(
          `/reports`,
          {
            username: this.reportUsername,
            commentID: this.reportComment,
            reason: this.reportReason,
          },
          {
            headers: {
              "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          alert("Report Success");
          this.$axios
            .$get(`/guest/threads/${this.$route.params.index}`, {
              headers: {
                "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              console.log(res.data);
              this.thread = res.data;
              this.firstModerator = res.data.moderators[0].email;
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
    async like() {
      const response = await this.$axios
        .$put(
          `/threads/${this.$route.params.index}/like`,
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
            .$get(`/guest/threads/${this.$route.params.index}`, {
              headers: {
                "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              console.log(res.data);
              this.thread = res.data;
              this.firstModerator = res.data.moderators[0].email;
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
    async followThread() {
      const response = await this.$axios
        .$put(
          `/threads/${this.$route.params.index}/follow`,
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
            .$get(`/guest/threads/${this.$route.params.index}`, {
              headers: {
                "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              console.log(res.data);
              this.thread = res.data;
              this.firstModerator = res.data.moderators[0].email;
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
};
</script>

<style scoped>
.no-uppercase {
  text-transform: unset !important;
}
</style>
