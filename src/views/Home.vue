<template>
  <section class="home" @click="navigateToNav">
    <img class="left" src="../assets/homeleft.svg" />
    <img src="../assets/homelogo.svg" />
    <img class="right" src="../assets/homeright.svg" />
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  // components: {
  //   HelloWorld
  // }
  methods: {
    navigateToNav() {
      this.$router.push("/NavDropDown");
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  min-height: 500px;
  background-color: #0e927d;
  max-width: 390px;
}

.left {
  margin-right: -97px;
}

.right {
  margin-left: -97px;
}
</style>
