<template>
  <section class="my-profil-background">
    <router-link to="/NavDropDown">
      <img src="../assets/navicon.svg" class="IconNavigation" />
    </router-link>
    <router-link to="/OrderHist"></router-link>
    <img src="../assets/ourcoffeetop.svg" />
    <div class="login-container">
      <img src="../assets/myprofilelogo.svg" />
      <h1>Välkommen till AirBean-familjen!</h1>
      <p>
        Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
      </p>
      <form @submit.prevent="onSubmit(profile)">
        <label for="name">Name</label>
        <input type="text" v-model="profile.name" name="name" />
        <label for="email">Email</label>
        <input type="text" v-model="profile.email" name="email" />
        <label>
          <input class="radio-button" type="radio" name="radio" />
          GDPR OK!
        </label>

        <input type="submit" value="Brew Me a Cup" />
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        id: 1,
        name: null,
        email: null,
      },
    };
  },
  computed: {
    abc() {
      return this.$store.getters.user;
    },
  },
  methods: {
    onSubmit(profile) {
      this.$store.commit("Add_User", profile);
      this.$router.push("OrderHist");
    },
  },
};
</script>

<style scoped>
.IconNavigation {
  margin-right: 19rem;
  margin-top: 0.5rem;
}
.my-profil-background {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #2f2926;
  max-width: 375px;
  align-items: center;
  height: 100%;
}
.login-container {
  background-color: #f3e4e1;
  margin: -35px 15px 15px 15px;
  padding: 35px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  font-family: sans-serif;
}
div > img {
  width: 50px;
  align-self: center;
}

h1 {
  font-family: serif;
  margin: 0 0 15px 0;
  font-size: 2.3rem;
  line-height: 100%;
}
p {
  margin: 0 0 50px 0;
  letter-spacing: 0.07rem;
  font-size: 0.9rem;
  line-height: 150%;
}

form {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  text-align: left;
}

label {
  font-size: 0.7rem;
  margin-bottom: 3px;
  font-family: sans-serif;
}

input {
  padding: 9px;
  border-radius: 5px;
  border: #2f2926 solid 1px;
  font-size: 0.9rem;
  background-color: #f3e4e1;
  margin-bottom: 20px;
}

.radio-button {
  margin-bottom: 50px;
}

input:last-of-type {
  background-color: #2f2926;
  color: white;
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
