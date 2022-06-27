<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="8" sm="6">
        <v-card class="elevation-0 mt-12">
          <v-window>
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="12">
                  <v-card-text class="mt">
                    <v-row justify="center">
                      <v-col cols="12" sm="6">
                        <v-img
                          class="mx-auto"
                          max-width="150px"
                          src="img/welcome.svg"
                        ></v-img>
                        <v-img
                          class="mx-auto"
                          max-width="100px"
                          max-height="50px"
                          src="img/logo.svg"
                        ></v-img>
                        <v-text-field
                          label="User Name"
                          outlined
                          dense
                          :rules="userRules"
                          color="blue"
                          autocomplete="false"
                          class="mt-16"
                          v-model="username"
                        />

                        <v-text-field
                          label="Password"
                          outlined
                          dense
                          :rules="passRules"
                          color="blue"
                          autocomplete="false"
                          type="password"
                          v-model="password"
                        />

                        <v-row>
                          <v-col cols="12" sm="7"> </v-col>
                        </v-row>

                        <v-btn
                          @click="handleLoginClicked"
                          color="primary"
                          dark
                          block
                          elevation="5"
                          >Log in</v-btn
                        >

                        <v-col cols="6" sm="12">
                          <span class="caption blue--text"
                            >Forgot password</span
                          >
                        </v-col>

                        <h5 class="text-center grey--text mt-4 mb-3">
                          Don't have a moot account?
                        </h5>

                        <router-link to="/regist">
                          <v-btn color="error" dark block>Register</v-btn>
                        </router-link>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: "empty",
  name: "LoginPage",
  data: () => ({
    valid: true,
    username: "",
    userRules: [(v) => !!v || "email can not be empty"],
    password: "",
    passRules: [
      (v) => !!v || "Password is require",
      (v) => (v && v.length >= 8) || "Name must be less than 10 characters",
    ],
    checkbox: false,
  }),

  // httpHeaders: () => ({
  //   "Content-Type": "application/json",
  //   "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
  // }),

  methods: {
    async handleLoginClicked() {
      // const user = {
      //   username: this.username,
      //   password: this.password,
      // };

      //       console.log(this.username);
      //       console.log(this.password);

      //       var url = "https://moot-rest-api.herokuapp.com/api/v1/login";

      //       var xhr = new XMLHttpRequest();
      //       xhr.open("POST", url);

      //       xhr.setRequestHeader("accept", "application/json");
      //       xhr.setRequestHeader(
      //         "API-Key",
      //         "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j"
      //       );
      //       xhr.setRequestHeader("Content-Type", "application/json");

      //       xhr.onreadystatechange = function () {
      //         if (xhr.readyState === 4) {
      //           console.log(xhr.status);
      //           console.log(xhr.responseText);
      //         }
      //       };

      //       var data = `{
      //   "username": "admin",
      //   "password": "kelompok22"
      // }`;

      //       xhr.send(data);

      try {
        const response = await this.$auth.loginWith(
          "local",
          { username: "admin", password: "kelompok22" },
          {
            headers: {
              "API-Key": "2ry3HBOBLi1YkCma49pdnH3RpMguwgNZ1bvU2eqCOzZg2y0g2j",
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        if (response.data.success) {
          this.$router.replace({ name: "user" });
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
