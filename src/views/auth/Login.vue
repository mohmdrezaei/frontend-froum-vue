<template>
<!--  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col class="pa-10" cols="12" md="8" lg="6">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field label="Email" v-model="email" prepend-icon="mdi-account" type="email" :rules="emailRules"></v-text-field>
              <v-text-field label="Password" v-model="password" prepend-icon="mdi-lock" type="password" :rules="passwordRules"></v-text-field>
              <v-checkbox label="Remember me" v-model="remember"></v-checkbox>
              <v-btn color="primary" block class="mt-4" @click="doLogin" type="submit">Login</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="$router.push('/forgot')">Forgot password</v-btn>
            <v-btn color="primary" text @click="$router.push('/register')">Create an account</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>-->
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Login in to Your Account</h4>
                    <h6 class="text-center grey--text mb-4">Log in to your account so you can continue building
                      <br>and editing your onboarding flows
                    </h6>
                    <v-row align="center" justify="center">

                      <v-col cols="12" sm="8">
                        <v-form >
                        <v-text-field label="Email"
                                      v-model="form.email"
                                      outlined dense color="blue"
                                      autocomplete="false"
                                     :error="errors.email"
                                      :error-messages="errors.email"
                        ></v-text-field>
                        <v-text-field label="Password"
                                      v-model="form.password"
                                      outlined dense color="blue"
                                      type="password"
                                      autocomplete="false"
                                      :error="errors.password"
                                      :error-messages="errors.password"
                        ></v-text-field>
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox label="Remember Me" class="mt-n1" color="blue"></v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption blue--text">Forgot Password</span>
                          </v-col>
                        </v-row>
                        <v-btn color="blue" dark block tile @click="doLogin">Login</v-btn>
                        <h5 class="text-center grey--text mt-4 mb-3">Or Log in using</h5>
                        <div class="d-flex justify-space-between align-center mx-10 mb-16">
                          <v-btn depressed outlined color="grey">
                            <v-icon color="red">fab fa-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="blue">fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                          </v-btn>
                        </div>
                        </v-form>
                      </v-col>

                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" sm="6" class="blue rounded-bl-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Don't Have an Account Yet?</h3>
                      <h6 class="text-center">Lets get you all set up so you can start creating your first <br>
                        onboarding experience
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step++">SIGN UP</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>

            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" sm="6" class="blue rounded-br-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Already Signed up?</h3>
                      <h6 class="text-center">SignLog in to your account so you can continue building and <br>
                        editing your onboarding flows
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step--">Log in</v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Sign Up for an  Account</h4>
                    <h6 class="text-center grey--text mb-4">
                      Let's get you all set up so you can start creation your
                      first onboading experience
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-text-field label="Name"
                                      outlined dense
                                      color="blue"
                                      autocomplete="false"
                                      v-model="name"

                        ></v-text-field>
                        <v-text-field label="Email"
                                      outlined dense
                                      color="blue"
                                      autocomplete="false"
                                      v-model="form.email"

                        ></v-text-field>
                        <v-text-field label="Password"
                                      outlined dense
                                      color="blue"
                                      type="password"
                                      autocomplete="false"
                                      v-model="form.password"

                        ></v-text-field>
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox label="I Accept AAE" class="mt-n1" color="blue"></v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption blue--text ml-n4">Terms & Conditions</span>
                          </v-col>
                        </v-row>
                        <v-btn color="blue" dark block tile @click="register">Sign up</v-btn>
                        <h5 class="text-center grey--text mt-4 mb-3">Or Sign up using</h5>
                        <div class="d-flex justify-space-between align-center mx-10 mb-11">
                          <v-btn depressed outlined color="grey">
                            <v-icon color="red">fab fa-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="blue">fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                          </v-btn>
                        </div>
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
import {loginRequest, registerRequest} from "@/requests/Auth";
import Axios from "@/axios";
import router from "@/router";

export default {

  data() {
    return {
      isLoading: false,
      name: null,
      form:{
        email: null,
        password: null,
      },
      remember: false,
      errors: {
      email: null,
      password: null,

    },


      step:1
    }
  },
  methods: {
    register() {
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,

      }

      registerRequest(formData).then(res => {
        this.$router.push('/')
      }).catch(err => {
        console.error(err)
      })
    },
   async doLogin() {
     await Axios.get('http://froum.test/api/csrf-cookie').then(res => {
        return Axios.post(`auth/login`, this.form).then(res => {
          if (res.data.success){
            localStorage.setItem('token',res.data.token)
            this.$router.push('/')
          }
        }).catch(err => {
          if (err.response.status === 422){
            this.errors = err.response.data.errors
          }
        })
      })
    },
    props: [
      'step'
    ],
  }
}
</script>

<style scoped>
.v-application .rounded-bl-xl{
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl{
  border-bottom-right-radius: 300px !important;
}
</style>