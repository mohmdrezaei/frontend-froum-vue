<template>
<v-container>
  <v-row
  justify="center"
  content="center"
  >
    <v-col
    cols="12"
    md="8"
    >
      <v-card
      outlined
      >
        <v-card-title>
          <h2>Laravel Error</h2>
        </v-card-title>
        <v-card-text>
          <v-row >
            <v-col>
              <p class="darken-3">mohammad rezaei</p>
            </v-col>
            <v-col class="text-right">
              <p class="darken-3">2022/12/22 22:30</p>
            </v-col>
          </v-row>
          <vue-markdown>
            # My Markdown Test
            :)
            [Google](https://google.com)
          </vue-markdown>
        </v-card-text>
      </v-card>

    </v-col>

    <v-col
    cols="12" md="8"
    >
      <v-row>
        <v-col><h2>Replies : </h2></v-col>
        <v-col
        class="text-right">
          <v-btn
          ripple
          color="green"
          dark
          >
            Reply
          </v-btn>
        </v-col>
      </v-row>

    </v-col>
    <v-col
        cols="12"
        md="8"
    >
      <v-card
          outlined
      >
        <v-card-title>

          <v-list-item>

              <v-avatar
                  color="orange"
                  size="62"
              >mr</v-avatar>
            <v-list-item-content class="ml-6">
              <v-list-item-title class="subtitle-1 font-weight-bold mb-1">
                mohammad rezaei
              </v-list-item-title>
              <v-list-item-subtitle class="caption">2022/12/22 22:30</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-title>
        <v-card-text>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis dolore doloremque ducimus enim error eveniet exercitationem ipsa, nemo nihil odit perspiciatis quis, repellendus sequi soluta, tempore tenetur voluptate voluptates. Beatae eaque molestias soluta. Ab at dicta doloremque illo laudantium molestiae voluptatem. Accusantium dignissimos eum illo modi non quaerat quibusdam, recusandae, sequi sit soluta ullam velit, voluptatum! Natus, quas quos.</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>

import VueMarkdown from "vue-markdown/src/VueMarkdown"
export default {
  name: "SingleThread",
  components:{
    VueMarkdown
  }
}
</script>

<style scoped>

</style>