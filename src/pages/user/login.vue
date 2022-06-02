<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="8" sm="6">
        <v-card class="elevation-0 mt-12">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="12">
                  <v-card-text class="mt">
                    <v-img
                      :src="require('../../assets/login.svg')"
                      class="my-3"
                      contain
                      height="100"
                    />

                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="6">
                        <v-text-field
                          label="Email"
                          outlined
                          dense
                          :rules="emailRules"
                          color="blue"
                          autocomplete="false"
                          class="mt-16"
                        />

                        <v-text-field
                          label="Password"
                          outlined
                          dense
                          :rules="passRules"
                          color="blue"
                          autocomplete="false"
                          type="password"
                        />

                        <v-row>
                          <v-col cols="12" sm="7"> </v-col>
                        </v-row>
                
                        <v-btn color="primary" dark block elevation="5">Log in</v-btn>

                        <v-col cols="6" sm="12">
                          <span class="caption blue--text">Forgot password</span>
                        </v-col>

                        <h5 class="text-center grey--text mt-4 mb-3">
                          Don't have a moot account?
                        </h5>

                        <router-link to="/regist">
                        <v-btn color="error" dark block >Register</v-btn>
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
  </v-container>
</template>

<script>
  export default {
      name: "LoginView",
    data: () => ({
      valid: true,
      name: '',
      passRules: [
        v => !!v || 'Password is require',
        v => (v && v.length >= 8) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'email can not be empty',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      checkbox: false,
    }),

    methods: {
      
    },
  }
</script>
<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
