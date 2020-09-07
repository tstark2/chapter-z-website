<template>
    <div>
        <h2>Links</h2>
        <section>
            <Link v-for="link in links" :link="link" :key="link.name" />
        </section>
    </div>
</template>

<script>
import Link from "../Link";
import Links from "../../api/links";

export default {
    name: "Links",
    components: {
        Link
    },
    data() {
        return {
            links: Links
        }
    }
}
</script>

<style scoped>
section {
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    gap:10px;
}
</style>