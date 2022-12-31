<template>
  <a :href="link.href">
    <picture>
      <source :srcset="webpString" type="image/webp" />
      <img :src="srcString" :srcset="pngString" :alt="link.title" />
    </picture>
    <p>{{ link.title }}</p>
  </a>
</template>

<script>
export default {
  name: "Link",
  props: {
    link: Object,
  },
  computed: {
    webpString() {
      let string = "";
      for (const res of this.link.resolutions) {
        string += `${require(`../assets/img/links/${this.link.picture}@${res}x.webp`)} ${res}x, `;
      }

      return string;
    },
    pngString() {
      let string = "";
      for (const res of this.link.resolutions) {
        string += `${require(`../assets/img/links/${this.link.picture}@${res}x.png`)} ${res}x, `;
      }

      return string;
    },
    srcString() {
      return require(`../assets/img/links/${this.link.picture}@1x.png`);
    },
  },
};
</script>

<style scoped>
a {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--textColor);
  border-radius: 5px;
  padding: 6px 12px;
  text-align: center;
  text-decoration: none;
  color: var(--textColor);
}

a:hover {
  color: var(--yellow);
  text-decoration: underline;
}

a img {
  height: 150px;
  width: auto;
}
</style>
