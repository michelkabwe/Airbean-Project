/* eslint-disable vue/return-in-computed-property */
/* eslint-disable vue/no-side-effects-in-computed-properties */
<template>
  <div class="container">
    <router-link to="/NavDropDown">
      <img src="../assets/navicon.svg" class="IconNavigation" />
    </router-link>
    <router-link to="/OrderDelivery"></router-link>
    <router-link to="/Profil"></router-link>
    <div class="total_amt">
      <p class="p_amt">{{ total_amt }}{{ amtTotal }}</p>
    </div>
    <h1>Din beställning</h1>
    <div v-for="(k, index) in order" :key="index" class="kaffestyle">
      <div>
        <h2>{{ k.name }}_ _ _ _ _ _ _</h2>

        <p>{{ k.price }}Kr</p>
      </div>
      <div>
        <p class="amount">
          {{ k.amount }}
        </p>
      </div>
    </div>
    <div class="priceT">
      <div>
        <h1>Total:</h1>
        <p>inkl moms + drönarleverans</p>
      </div>
      <div>
        <h1>{{ sum }} {{ priceTotal }}Kr</h1>
      </div>
    </div>
    <button @click="toStatus">Take My Money</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      priceTotal: 0,
      amtTotal: 0,
    };
  },
  computed: {
    order() {
      return this.$store.getters.order;
    },
    // eslint-disable-next-line vue/return-in-computed-property
    sum() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.priceTotal = this.order.reduce(function (prev, cur) {
        return prev + cur.price * cur.amount;
      }, 0);

      console.log("Total ", this.priceTotal);
    },
    // eslint-disable-next-line vue/return-in-computed-property
    total_amt() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.amtTotal = this.order.reduce(function (prev, cur) {
        return prev + cur.amount;
      }, 0);
    },
  },
  methods: {
    toStatus() {
      this.$store.getters.order.splice(0, this.$store.getters.order.length);
      this.$store.commit("Add_Hist", this.priceTotal);

      if (this.$store.getters.user.length > 0) {
        this.$router.push("OrderDelivery");
      } else {
        this.$router.push("Profil");
      }
    },
  },
};
</script>

<style scoped>
.IconNavigation{
  margin-right: 18rem;
  margin-top: 1rem;
}
.container {
  background-color: #439174;
  
}

.kaffestyle {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  background-color: white;
}

h2 {
  font-family: "PT Serif";
  font-size: 20px;
}

p {
  font-family: "Work Sans";
  font-size: 12;
  margin-top: 15px;
}

p.amount {
  font-family: "Work Sans";
  font-size: 12;
  margin-top: 15px;
}

.total_amt {
  color: white;
  float: right;
  margin-right: 20px;
  background-color: black;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  text-align: center;
}

.p_amt {
  margin-top: 10px;
}

.priceT {
  display: flex;
  justify-content: space-between;
  font-family: "PT Serif";
  font-size: 19px;
  margin: 15px;
}

button {
  border-radius: 50px;
  padding: 15px 50px;
  font-family: serif;
  font-weight: bold;
  font-size: 1.6rem;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: black;
  color: white;
  margin-bottom: 2rem;
}
</style>
