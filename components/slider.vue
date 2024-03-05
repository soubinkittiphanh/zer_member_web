<template>
  <div>
    <v-carousel>
      <v-carousel-item src="https://www.xn--72cfaa3c9df7evc7a4a6gf0c0dm.com/wp-content/uploads/2022/06/brandname.jpg"
        cover></v-carousel-item>

      <v-carousel-item src="https://www.xn--72cfaa3c9df7evc7a4a6gf0c0dm.com/wp-content/uploads/2022/06/bikini.jpg"
        cover></v-carousel-item>

      <v-carousel-item src="https://www.xn--72cfaa3c9df7evc7a4a6gf0c0dm.com/wp-content/uploads/2022/06/Untitled-1.jpg"
        cover></v-carousel-item>
      <v-carousel-item
        src="https://www.xn--72cfaa3c9df7evc7a4a6gf0c0dm.com/wp-content/uploads/2022/06/%E0%B8%A2%E0%B8%B9%E0%B8%AD%E0%B8%B4.jpg"
        cover></v-carousel-item>
    </v-carousel>
    <v-sheet class="rounded-lg">
      <v-slide-group show-arrows center-active>
        <template v-slot:next>
          <v-icon color="primary">mdi-arrow-right</v-icon>
        </template>

        <template v-slot:prev>
          <v-icon color="primary">mdi-arrow-left</v-icon>
        </template>

        <v-slide-item v-for="(item, index) in 20" :key="index">
          <v-card width="100" class="ma-4">
            <v-img width="100" :src="xiaomiImage" class="pointer-cursor hover"></v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import XiaomiImage from '~/assets/img/products/product_1.jpg'
export default {
  name: 'slider',
  data() {
    return {
      xiaomiImage: XiaomiImage,
    }
  },
}
</script>

<style></style>
