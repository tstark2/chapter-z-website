<template>
    <header>
        <a href="http://gwrra.org/">
            <picture>
                <source srcset="../assets/img/gwrraSeal/gwrraSeal@1x.webp 1x,
                    ../assets/img/gwrraSeal/gwrraSeal@2x.webp 2x,
                    ../assets/img/gwrraSeal/gwrraSeal@3x.webp 3x" 
                type="image/webp">

                <img src="../assets/img/gwrraSeal/gwrraSeal@1x.png" srcset="
                    ../assets/img/gwrraSeal/gwrraSeal@2x.png 2x,
                    ../assets/img/gwrraSeal/gwrraSeal@3x.png 3x
                " alt="GWRRA Seal">
            </picture>
        </a>

        <div id="sponsors">
            <SponsorSlider></SponsorSlider>
            <SponsorSlider></SponsorSlider>
        </div>

        <a href="http://gwrra-ildistrict.com/index.html">
            <picture>
                <source srcset="../assets/img/ilSeal/ilSeal@1x.webp 1x,
                    ../assets/img/ilSeal/ilSeal@2x.webp 2x,
                    ../assets/img/ilSeal/ilSeal@3x.webp 3x" 
                type="image/webp">

                <img src="../assets/img/ilSeal/ilSeal@1x.png" srcset="
                    ../assets/img/ilSeal/ilSeal@2x.png 2x,
                    ../assets/img/ilSeal/ilSeal@3x.png 3x
                " alt="Illinois GWRRA Seal">
            </picture>
        </a>
    </header>
</template>

<script>
import SponsorSlider from "./SponsorSlider";

export default {
    name: "SubHeader",
    components: {
        SponsorSlider
    }
}
</script>

<style scoped>
header {
    width:75vw;
    margin: 0 auto;
    display:grid;
    grid-template-columns:150px 1fr 150px;
    gap:5px;
    padding:6px 12px;
}

header img {
    height:150px;
    width:auto;
}

#sponsors {
    height:150px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    padding:3px;
    position:relative;
    overflow:hidden;
}

@media (max-device-width: 800px) {
    header {
        width:90vw;
    }
}

@media (max-device-width: 576px) {
    header {
        grid-template-columns: repeat(2, 1fr);
    }

    #sponsors {
        order:3;
        grid-column-start:span 2;
    }

    header > a {
        display:flex;
        align-items:center;
    }

    header > a:last-of-type {
        justify-content:flex-end;
    }

    header > a  img {
        height:120px;
    }
}
</style>