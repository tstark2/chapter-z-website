<template>
    <div>
        <h2>Sponsors</h2>
        <div class="contentGrid">
            <Sponsor v-for="sponsor in sponsors" :sponsor="sponsor" :key="sponsor.name" />
        </div>
    </div>
</template>

<script>
import Sponsor from "../Sponsor";
import Sponsors from "../../api/sponsors";

export default {
    name: "Sponsors",
    components: {
        Sponsor
    },
    data() {
        return {
            sponsors: Sponsors
        }
    }
}
</script>