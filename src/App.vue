<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>


      <router-link to="/login">
        <v-btn
            text
        >
          <span class="mr-2">Login</span>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/">
        <v-btn
            text
        >
          <span class="mr-2">Home</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <v-fab-transition>
       <v-btn

           color="primary"
           fab
           large
           dark
           bottom
           left
           class="v-btn--example mb-6 ml-6"
           :to="{name : 'create thread'}"
       >
         <v-icon>mdi-plus</v-icon>
       </v-btn>
    </v-fab-transition>
  </v-app>
</template>

<script>

import Axios from "./axios";

export default {
  name: 'App',

  data: () => ({
    step:1
  }),

  mounted() {
    Axios.get('threads').then(response => {
      console.log(response)
    });
  }
};
</script>
