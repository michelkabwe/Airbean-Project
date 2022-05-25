<template>
  <section>
    <router-link to="/OrderHist"></router-link> 
    <span>Ordernummer XAB{{ random() }}</span>
    <img src="../assets/orderdelivery.svg" />
    <div>
      <h1>Din beställning är på väg!</h1>
      <span> 15 minuter</span>
    </div>
    <button @click="Goto_hist">Ok, cool!</button>
  </section>
</template>

<script>
export default { 
methods:{
    Goto_hist(){
      this.$router.push("OrderHist");
      },
    random() {
      return Math.floor(Math.random() * 1000000 + 1);
    }
}  
}

</script>

<style scoped>
section {
  background-color: #e5674e;
  color: white;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 500px;
  align-items: center;
  font-family: sans-serif;
}

span {
  letter-spacing: 0.07rem;
}
span:first-child {
  color: #f7d1ca;
}

h1 {
  font-family: serif;
  margin-top: 0;
  font-size: 2.3rem;
  line-height: 120%;
}

span:last-child {
  font-size: 1.2rem;
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
}
</style>