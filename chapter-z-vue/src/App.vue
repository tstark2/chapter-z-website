<template>
    <div>
        <MainHeader></MainHeader>
        <SubHeader></SubHeader>
        <main>
            <router-view></router-view>
            <CalendarAside></CalendarAside>
        </main>
        <AppFooter></AppFooter>
    </div>
    
</template>

<script>
import MainHeader from "./components/MainHeader";
import SubHeader from "./components/SubHeader";
import AppFooter from "./components/AppFooter";
import CalendarAside from "./components/CalendarAside";

export default {
    name: "App",
    components: {
        MainHeader,
        SubHeader,
        CalendarAside,
        AppFooter
    },
    created() {
        document.title = "Illinois Chapter Z GWRRA";
    }
}
</script>

<style>
:root {
    --purple: #2e1e5c;
    --yellow: #eca706;
    --displayFont: 'Roboto Slab';
    --textFont: 'Roboto';
    --textColor: #111;
    --white:#eee;
    --scriptFont:'Merienda One';
    --adCount:1;
}

body {
    margin:0;
    font-family:var(--textFont);
    color:var(--textColor);
    background-color:var(--white);
}

main {
    width:75vw;
    margin:0 auto;
    display:grid;
    grid-template-columns:1fr 20vw;
    gap:12px;
    padding:6px 12px;
    min-height:calc(100vh - 408px);
}

h2 {
    font-family:var(--displayFont);
}

main h2 {
    margin-top:0;
    font-size:3em;
}

#gwrraText {
    font-size:2em;
}

.subheading {
    font-size:1.5em;
    color:var(--purple);
    font-family:var(--scriptFont);
}

.purple {
    color:var(--purple);
}

.covid {
    color:#f00;
    font-weight:bold;
    font-size:1.05em;
}

#trialMembership img {
    max-width:100%;
    height:auto;
}

.contentGrid {
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    gap:10px;
}

.contentGrid div, .contentGrid > a {
    border:1px solid var(--textColor);
    border-radius:5px;
    padding:6px 12px;
    text-align:center;
    box-sizing:border-box;
}

@media (max-device-width: 800px) {
    .contentGrid, main {
        grid-template-columns:1fr;
        width:90vw;
    }
}
</style>