<template>
  <div>
    <h2>Newsletters</h2>
    <div id="newsletters">
      <Newsletter
        v-for="letter in newsletters"
        :newsletter="letter"
        :key="letter.name"
      />
    </div>
    <p>
      See archived Newsletters
      <a
        target="_blank"
        href="https://drive.google.com/drive/folders/1bsjJUNzVpVtM_MACU3Qq_jIxh0_wk8aQ"
        >here</a
      >
    </p>
  </div>
</template>

<script>
import Newsletter from "../Newsletter";
const URL = "";

export default {
  name: "Newsletters",
  components: {
    Newsletter,
  },
  data() {
    return {
      newsletters: [],
    };
  },
  methods: {
    async getNewsletters() {
      const response = await fetch(`${URL}/api/newsletters`);

      if (response.ok) {
        const result = await response.json();
        this.newsletters = result.files;
      }
    },
  },
  created() {
    this.getNewsletters();
  },
};
</script>

<style scoped>
#newsletters {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
