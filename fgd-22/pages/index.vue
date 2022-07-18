<template>
  <v-app>
    <div app>
      <v-card
        class="mx-auto mr-8 ml-8 mt-6 pa-0 rounded-lg"
        elevation="5"
        block
      >
        <v-dialog v-model="dialog" max-width="1000px">
          <template v-slot:activator="{ on, attrs }" class="d-block">
            <v-btn
              height="60px"
              block
              class="mx-auto"
              text
              v-bind="attrs"
              v-on="on"
            >
              <span> Let's Make a thread </span>
              <v-spacer></v-spacer>
              <v-icon> mdi-plus </v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-text>
              <v-container>
                <v-row align="center">
                  <v-col>
                    <h1>Create Thread</h1>
                  </v-col>
                  <v-col md="3">
                    <select class="select" v-model="categoryID">
                      <option value="" selected disabled hidden>
                        Category
                      </option>
                      <option
                        v-for="list in categoryList"
                        :key="list.ID"
                        :value="list.ID"
                      >
                        {{ list.name }}
                      </option>
                    </select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-textarea
                    label="Title Thread"
                    v-model="title"
                    solo
                    color="primary"
                    required
                    height="50px"
                  ></v-textarea>
                </v-row>
                <v-row>
                  <v-textarea
                    label="Make ur thread"
                    height="300px"
                    v-model="description"
                    solo
                    required
                    full-width
                  ></v-textarea>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="submit"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </div>
    <div v-for="thread in threads" :key="thread.ID">
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
  </v-app>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      categoryID: "",
      title: "",
      description: "",
      threads: [],
      dialog: false,
    };
  },
  computed: {
    categoryList() {
      return this.$store.state.general.getcategory.category;
    },
    myRole() {
      return localStorage.getItem("role");
    },
  },

  mounted() {
    this.$store.dispatch("general/getcategory/getCategoriesData");
  },

  async created() {
    await this.$axios
      .$get(`/guest/threads`, {
        headers: {
          "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.list);
        this.threads = res.data.list;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  methods: {
    async submit() {
      const response = await this.$axios
        .$post(
          "/threads",
          {
            title: this.title,
            description: this.description,
            categoryID: this.categoryID,
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
          (this.dialog = false), alert("Create Thread Success");
          location.reload();
        })
        .catch((err) => {
          console.log(err);
          alert("Create Thread Failed");
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
.select {
  margin: 10px;
  width: 100%;
  min-width: 15ch;
  max-width: 30ch;
  border: 1px solid var(--select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #eee, #eee 33%);
}
</style>
