<template>
    <div>

  
    <div class="menystyle">
      <div>
        <button @click="$emit('AddItems',k)">+</button>
      </div>
      <div class="Kaffename" @click="showModal">
        <h2>
          {{ k.name }}
        </h2>
        <p>{{ k.desc }}</p>
      </div>
      <div class="kaffeprice">
        <h3>{{ k.price }}kr</h3>
      </div>
    </div>
       <Modal
      v-show="isModalVisible"
      @close="closeModal"
    :k="k"/>
    </div>
</template>
<script>
import Modal from '@/components/Modal.vue';
export default {
  components:{
    Modal,

  },
    props:{
        k:Object,
        
    },
    data() {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
    
    
}
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
  font-size: 1rem;
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