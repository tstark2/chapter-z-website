<template>
  <header>
    <div id="sponsors" ref="sponsors">
      <SponsorSlider v-for="ad in ads" :key="ad"></SponsorSlider>
    </div>
  </header>
</template>

<script>
import SponsorSlider from "./SponsorSlider";

export default {
  name: "SubHeader",
  components: {
    SponsorSlider,
  },
  data() {
    return {
      sponsorWidth: 0,
      ads: [],
    };
  },
  methods: {
    adCount() {
      const count = Math.floor(this.sponsorWidth / 280);
      console.log(count);
      for (let i = 0; i < count; i++) {
        this.ads.push(i);
      }
    },
  },
  mounted() {
    const sponsorSection = this.$refs.sponsors;

    this.$nextTick(function () {
      this.sponsorWidth = sponsorSection.clientWidth;
      this.adCount();
    });
  },
};
</script>

<style scoped>
header {
  width: 75vw;
  margin: 0 auto;
  padding: 6px 12px;
}

header img {
  height: 150px;
  width: auto;
}

#sponsors {
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  position: relative;
  overflow: hidden;
  width: 100%;
}

@media (max-device-width: 800px) {
  header {
    width: 90vw;
  }
}

@media (max-device-width: 576px) {
  header {
    /*grid-template-columns: repeat(2, 1fr);*/
  }

  #sponsors {
    justify-content: center;
  }

  header > a {
    display: flex;
    align-items: center;
  }

  header > a:last-of-type {
    justify-content: flex-end;
  }

  header > a img {
    height: 120px;
  }
}
</style>
