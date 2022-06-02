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
                      :src="require('../../assets/regist.svg')"
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
                          placeholder="e.g lets.moot@example.com"
                          :rules="emailRules"
                          color="blue"
                          autocomplete="false"
                          class="mt-16"
                        />
                        <v-text-field
                          label="Display Name"
                          outlined
                          dense
                          placeholder="e.g Calry Nimbu"
                          :rules="nameRules"
                          color="blue"
                          autocomplete="false"
                          type="text"
                        />

                        <v-text-field
                          label="Username"
                          outlined
                          dense
                          placeholder="e.g @let's.moot"
                          :rules="userRules"
                          color="blue"
                          autocomplete="false"
                          type="text"
                        />

                        <v-text-field
                          label="Password"
                          outlined
                          dense
                          placeholder="careful, follow the require"
                          :rules="passRules"
                          color="blue"
                          autocomplete="false"
                          type="password"
                        />
                        
                        <v-row>
                          <v-col cols="12" sm="7"> </v-col>
                        </v-row>
                
                        <v-btn color="primary" dark block elevation="5">Register</v-btn>

                        <v-col cols="6" sm="12">
                          <span class="caption blue--text"
                            >Forgot password</span>
                        </v-col>

                        <h5 class="text-center grey--text mt-4 mb-3">
                          have an moot account?
                        </h5>

                        <router-link to="/">
                        <v-btn color="error" dark block>LOGIN</v-btn>
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
      name: "RegisterView",
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      userRules: [
        v => !!v || 'Username is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      passRules: [
        v => !!v || '**Require: 8 latters',
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
