<template>
  <section class="my-profile-history">
    <router-link to="/NavDropDown">
      <img src="../assets/navicon.svg" class="IconOrder" />
    </router-link>
    <img src="../assets/ourcoffeetop.svg" />
    <img src="../assets/myprofilepicture.svg" class="IconProfile" />
    <section v-for="(k, index) in user" :key="index" class="kaffestyle">
      <h2 class="name">{{ k.name }}</h2>
      <h2 class="email">{{ k.email }}</h2>
    </section>

    <section v-for="(k, index) in hist" :key="index" class="kaffestyle">
      <h1>Orderhistorik</h1>
      <section class="display">
        <section>
          <h2 class="randnum">XAB{{ random() }}</h2>
          <p>total ordersumma</p>
          <p>_ _ _ _ _ _ _ _</p>
        </section>
        <section>
          <p>{{ new Date().toLocaleString() }}</p>
          <p>{{ hist[index] }}</p>
          <p>_ _ _ _ _ _ _ _</p>
        </section>
      </section>
    </section>
    <div>
      <span class="spend">Totalt spenderat</span>
      <span>{{ hist.reduce(sum) }}</span>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    hist() {
      return this.$store.getters.history;
    },
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    random() {
      return Math.floor(Math.random() * 1000000 + 1);
    },
    sum(total, num) {
      return total + num;
    },
  },
};
</script>

<style scoped>
.my-profile-history {
  background-color: #2f2926;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}
.IconOrder{
  margin-right: 300px;
  margin-top: 10px;
}
.IconProfile{
  width: 100px;
  height: 100px;
  align-self: center;
  padding: 20px;
}

h2 {
  margin: 0;
  padding: 2px;
  letter-spacing: 0.07rem;
}
.name {
  font-size: 2.3rem;
  font-family: serif;
}
.email {
  color: #c0bebe;
  font-size: 1rem;
  font-family: sans-serif;
  font-weight: normal;
}
h1 {
  font-family: "serif";
  font-size: 2.3rem;
  line-height: 120%;
  padding: 0;
  text-align: left;
}
.randnum {
  font-family: "Work Sans";
  font-size: 14px;
}
p {
  font-family: "Work Sans";
  font-size: 12px;
}
.spend {
  font-family: "Work Sans";
  font-size: 14px;
  text-align: left;
  align-items: flex-start;
}
.display {
  display: flex;
  justify-content: space-between;
  /* margin: 20px; */
  height: 100%;
}

.kaffestyle {
  padding: 30px;
}
</style>