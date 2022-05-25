<template>
  <section>
    <img src="../assets/ourcoffeetop.svg" />
    <router-link to="/NavDropDown">
      <img src="../assets/navicon.svg" class="navIcon" />
    </router-link>
    <div class="container">
      <h1>Vårt kaffe</h1>
      <p>
        Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
        grounds dripper, crema, strong whipped, variety extra iced id lungo half
        and half mazagran. Pumpkin spice.
      </p>
      <p>
        Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich
        aftertaste, con panna milk black, arabica white rich beans single shot
        extra affogato. So affogato macchiato sit extraction instant grinder
        seasonal organic, turkish single shot, single origin, and robusta strong
        to go so dripper. Viennese froth, grounds caramelization skinny aromatic
        cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait
        flavour cultivar ut bar instant kopi-luwak.
      </p>
      <p>
        Roast id macchiato, single shot siphon mazagran milk fair trade est
        aroma a half and half and, so, galão iced to go, whipped as cream cup
        pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half
        and half at, that, percolator macchiato trifecta and body as arabica
        dripper. In galão black java milk sit trifecta, robusta, acerbic café au
        lait instant shop latte. Seasonal bar shop filter aroma id, crema,
        affogato viennese cultivar aftertaste, seasonal, percolator cream black,
        galão flavour, milk aromatic turkish skinny crema.
      </p>
      <img src="../assets/eva.svg" />
      <h2>Eva Cortado</h2>
      <p>VD & Grundare</p>
    </div>
    <img src="../assets/ourcoffeebottom.svg" />
  </section>
</template>

<style scoped>

.navIcon {
  margin-left: 1rem;
  margin-top: 0.5rem;
}
section {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.container {
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2f2926;
}

h1 {
  align-self: flex-start;
  font-size: 3rem;
  font-family: serif;
  margin: 0;
}

p:first-of-type {
  font-weight: bold;
}

p {
  line-height: 160%;
  font-family: sans-serif;
}

div > img {
  width: 100px;
}

h2 {
  margin: 10px 0 0 0;
}

p:last-of-type {
  margin: 0 0 30px 0;
}
</style>
