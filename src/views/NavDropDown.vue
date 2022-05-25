<template>
  <nav>
    <a @click="$router.go(-1)" class="closebutton">
      <img src="../assets/close.svg" />
    </a>
    <ul>
      <li><router-link to="/KaffeMeny" exact>Menu</router-link></li>
      <li><hr /></li>
      <li><router-link to="/OurCoffee" exact>OurCoffee</router-link></li> 
      <li><hr /></li>     
      <li><router-link to="/OrderHist" exact>OrderHistory</router-link></li>
      <li><hr /></li>
      <li><router-link to="/OrderDelivery" exact>OrderStatus</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  min-height: 700px;
  background-color: #2f2926;
  align-items: center;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-top: 140px;
 
}

li {
  font-size: 2rem;
  font-family: serif;
  padding: 3px;
}

a {
  color: white;
  text-decoration: none;
  line-height: 120%;
}

hr {
  width: 80px;
  border: 2px solid #595451;
}

ul li a:hover::before {
  transform: scale(1.1);
  box-shadow: 0 0 15px #0d4dd6;
}

ul li a:hover {
  color: #eeff00;
  box-shadow: 0 0 5px #11cedb;
  text-shadow: 0 0 5px #0ab9ee;
}

.closebutton {
  height: 2rem;
  display:flex;
  margin-top: 10px;
  margin-left: 15px;
}
img {
  height: 2rem;
}

</style>
