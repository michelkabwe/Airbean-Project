<template>
  <div>
    <router-link to="/Order"></router-link>
    <img src="../assets/ourcoffeetop.svg" />
    <router-link to="/NavDropDown">
      <img src="../assets/navicon.svg" class="navIcon" />
    </router-link>

        <div v-if="cart" class="cartDropdown">
      <!-- cart dropdown contetn -->
     <div class="container">
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
    <div id="cart-button" @click="toStatus">Take My Money</div>
  </div>

     </div>
       <div @click="cart = !cart" class="cart-count">
         <span v-show="!count" id="hide" class="counter">{{count}}</span>
         <span v-show="count" class="counter">{{count}}</span>
       </div>
     
  <div>
    <h1>Meny</h1>
  </div>

<div>
	  <select v-model="selected" class="dropdown">
        <option disabled value="">Välj Kaffe</option>
        	  <option>Arabica</option>
          <option>Robusta</option>
      <option>Liberica</option>
  </select>
   <div class="listcontainer">
        <div v-if="selected == 'Arabica'">
        <div  v-for="k in getArabica" :key="k.id" >
          <AddCoffee :k="k" :abc="abc" @AddItems="AddItems(k)"/>
        </div>
        </div>  
        <div v-if="selected == 'Robusta'">
        <div  v-for="k in getRobusta" :key="k.id" >
           <AddCoffee :k="k" :abc="abc" @AddItems="AddItems(k)"/>
        </div>
        </div>  
        <div v-if="selected == 'Liberica'">
        <div  v-for="k in getLiberica" :key="k.id" >
           <AddCoffee :k="k" :abc="abc" @AddItems="AddItems(k)"/>
        </div>
        </div>
          <div v-else-if="selected == 'Alla Bönor'">
    <div v-for="k in kaffe" :key="k.id" >
        <AddCoffee :k="k" :abc="abc" @AddItems="AddItems(k)"/>
    </div>
    </div>
    <div v-else>
    <div v-for="k in kaffe" :key="k.id" >
       <AddCoffee :k="k" :abc="abc" @AddItems="AddItems(k)"/>
    </div>
    </div>
  </div>
 <img src="../assets/ourcoffeebottom.svg" />
</div>



  </div>
</template>

<script>
import AddCoffee from '@/components/AddCoffee.vue'
export default {
  components: {
    AddCoffee

  },
   data: function () {

        return {
           
            cart: false,
            priceTotal: 0,
            amtTotal: 0,
            selected:'',
            k:{}
        }
   },

  computed: {
    abc() {
      return this.$store.getters.kaffe;
    },
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
      count() {
   
            return this.$store.state.cartItemCount;
     
      },
       kaffe(){
             return this.$store.getters.kaffe;
         },
      
        getArabica(){
            return this.$store.getters.getCoffeeByBean('Arabica');
          },
       getRobusta(){
             return this.$store.getters.getCoffeeByBean('Robusta');
          },
       getLiberica(){
             return this.$store.getters.getCoffeeByBean('Liberica');
          },
    },
  
  methods: {
    AddItems(k) {
      this.$store.commit("Add_Order", k);
    },
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

.menystyle {
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: space-between;
}
button {
  color: white;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-top: 18px;
  background: black;
  margin-right: 10px;
}
#cart-button {

  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color:#fff;
  border-radius:2.5em;
  text-align: center;
  width: 150px;
  height: 50px;
  margin-bottom: 100px;



}
.cartDropdown {
    width: 350px;
    height:871px;
    list-style: none;
    overflow: scroll;
    color: #000;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    position: absolute;
    padding: 12px;
    padding-top: 64px;
    margin-left: auto;
    margin-right: auto;
    left: 10px;
    right: 10px;
    top: 8px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: #fff;
}

.cart-count {
    font-size: 15px;
    padding: 0 5px;
    margin-left: -35px;
    background-image: url("../assets/bag.svg");
    height: 80px;
    width: 80px;
    cursor: pointer;
    float: right;
    color: tomato;
    position: relative;
    top: -114px;
    z-index: 1;
}

#hide {
  display: none;
}

.counter {
    border: solid;
    border-radius: 50%;
    border-color: orange;
    width: 25px;
    height: 25px;
    display: inline-block;
    color: #fff;
    top: 0px;
    position: absolute;
    background: orange;
  

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
  margin-top: 15px;
}

h1 {
  font-family: serif;
  font-size: 3rem;
  margin-top: 50px;
}

.meny-title {
  font-family: serif;
  font-size: 3rem;
  margin-top: 50px;
  text-align: center;

}

.kaffestyle {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  background-color: white;
  border-radius: 4px;
  padding:1rem;
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
  flex-direction: column;
}


.navIcon {
  margin-right: 15rem;
}

h2 {
  font-family: "PT Serif";
  font-size: 20px;
}

p, .p.amount {
  font-family: "Work Sans";
  font-size: 12;
  margin-top: 15px;
}




</style>