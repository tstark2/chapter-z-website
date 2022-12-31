<template>
  <div>
    <a :href="sponsor.website" target="_blank">
      <picture>
        <source :srcset="webpString" type="image/webp" />
        <img :src="srcString" :srcset="pngString" :alt="sponsor.name" />
      </picture>
    </a>
    <p class="name">{{ sponsor.name }}</p>
    <a :href="makeMapLink">
      {{ sponsor.address.street }}
      <br />
      {{ sponsor.address.city }},
      {{ sponsor.address.state }}
      {{ sponsor.address.zip }}
    </a>
    <a :href="`tel:${sponsor.phone}`">{{ sponsor.phone }}</a>
    <a class="linkContainer" :href="sponsor.website">{{ sponsor.website }}</a>
  </div>
</template>

<script>
export default {
  name: "Sponsor",
  props: {
    sponsor: Object,
  },
  computed: {
    webpString() {
      return `${require(`../assets/img/sponsors/${this.sponsor.logo}@1x.webp`)} 1x,
             ${require(`../assets/img/sponsors/${this.sponsor.logo}@2x.webp`)} 2x,
             ${require(`../assets/img/sponsors/${this.sponsor.logo}@3x.webp`)} 3x`;
    },
    pngString() {
      return `${require(`../assets/img/sponsors/${this.sponsor.logo}@2x.png`)} 2x,
            ${require(`../assets/img/sponsors/${this.sponsor.logo}@3x.png`)} 3x`;
    },
    srcString() {
      return require(`../assets/img/sponsors/${this.sponsor.logo}@1x.png`);
    },
    makeMapLink() {
      const location = `${this.sponsor.address.street} ${this.sponsor.address.city} ${this.sponsor.address.state} ${this.sponsor.address.zip}`;
      return encodeURI(
        `https://www.google.com/maps/search/?api=1&query=${location}`
      );
    },
  },
};
</script>

<style scoped>
.name {
  font-size: 1.5em;
}

.address p {
  margin: 0;
}

a {
  display: block;
  margin: 16px 0;
  color: var(--purple);
  text-decoration: none;
}

a:hover {
  color: var(--yellow);
  text-decoration: underline;
}

.linkContainer {
  word-break: break-all;
}
</style>
