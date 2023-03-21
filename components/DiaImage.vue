<template>
  <v-card>
    <v-card-title> Image preview </v-card-title>
    <v-img :src="iUrl || 'No image'"> </v-img>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text color="blue darken-1" @click.prevent="$emit('closeDia')">
        <!-- <i class="fas fa-trash-alt"></i> -->
        ປິດ
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ['iUrl'],
}
</script>