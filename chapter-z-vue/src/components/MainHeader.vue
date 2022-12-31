<template>
  <header>
    <div>
      <router-link to="/">
        <picture>
          <source
            srcset="../assets/img/Z_Logo_EWMA_Large_Round_transparent.webp"
            type="image/webp"
          />
          <img src="../assets/img/Z_Logo_EWMA_Large_Round_transparent.png" />
        </picture>
      </router-link>

      <h1>Illinois Chapter Z</h1>
      <button id="menuButton" @click="openNav">
        <i class="fas fa-bars"></i>
      </button>
      <nav ref="nav">
        <router-link @click.native="closeNav" to="/">Home</router-link>
        <router-link @click.native="closeNav" to="/about">About Us</router-link>
        <router-link @click.native="closeNav" to="/staff">Staff</router-link>
        <a
          @click="closeNav"
          href="https://www.facebook.com/ILChapterZ/photos/"
          target="_blank"
          >Photos</a
        >
        <router-link @click.native="closeNav" to="/newsletters"
          >Newsletters</router-link
        >
        <a
          @click="closeNav"
          href="https://calendar.google.com/calendar/embed?src=il.chapter.z%40gmail.com&ctz=America%2FChicago"
          target="_blank"
          >Calendar</a
        >
        <router-link @click.native="closeNav" to="/sponsors"
          >Sponsors</router-link
        >
        <router-link @click.native="closeNav" to="/links">Links</router-link>
        <a @click="closeNav" href="mailto:cd@il-chapter-z.org">Contact Us</a>
        <a href="#" @click="closeNav" id="closeMenuButton">Close Menu</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  methods: {
    openNav() {
      const nav = this.$refs.nav;
      nav.classList.add("open");
    },
    closeNav() {
      const nav = this.$refs.nav;
      nav.classList.remove("open");
    },
  },
};
</script>

<style scoped>
header {
  background-color: var(--purple);
}

header div {
  width: 75vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 0 20px;
  position: relative;
}

#menuButton,
#closeMenuButton {
  display: none;
}

nav {
  grid-column-start: 2;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  padding-bottom: 5px;
}

nav a {
  color: var(--white);
  text-decoration: none;
  margin-right: 20px;
}

nav a:hover {
  color: var(--yellow);
}

nav a[href="#close"] {
  display: none;
}

header div img {
  height: 150px;
  width: auto;
  transform: translateY(10px);
}

h1 {
  font-family: var(--displayFont);
  color: var(--white);
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 3em;
}

@media (max-device-width: 800px) and (orientation: portrait),
  (max-width: 1024px) and (orientation: landscape) {
  header div {
    grid-template-columns: 120px 1fr 40px;
    width: 90vw;
  }

  header div img {
    height: 120px;
    transform: translateY(0);
  }

  #menuButton {
    display: flex;
    background-color: transparent;
    border: 0;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    font-size: 1.25em;
  }

  nav {
    position: fixed;
    right: 0;
    top: 0;
    background-color: var(--purple);
    width: 0;
    flex-direction: column;
    padding: 0;
    height: 100vh;
    overflow: hidden;
    transition: width 1s padding 1s;
    z-index: 3;
  }

  #closeMenuButton {
    display: block;
    color: var(--yellow);
  }

  nav.open {
    width: 33vw;
    padding: 6px 12px;
    border-left: 5px solid var(--yellow);
  }

  nav a {
    margin-bottom: 20px;
    font-size: 1.5em;
  }

  h1 {
    font-size: 2em;
    /* white-space:nowrap; */
    text-align: center;
  }
}

@media (max-device-width: 576px) {
  header div {
    grid-template-columns: 75px 1fr 40px;
  }

  header div img {
    height: 75px;
  }

  h1 {
    font-size: 1em;
  }

  nav.open {
    width: 50vw;
  }
}
</style>
