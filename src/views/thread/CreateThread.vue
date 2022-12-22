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
        >
          <v-card-title>
            <h2>Create New Thread</h2>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                  label="title"
                  name="title"
                  type="text"
                  outlined
              ></v-text-field>
              <v-textarea
                  outlined
                  name="content"
                  label="content"
              ></v-textarea>

              <v-select
                  label="channel"
                  outlined
              ></v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
                ripple
                dark
                color="primary"
                class="ml-4 mb-4"
            >
              submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CreateThread"
}
</script>

<style scoped>

</style>