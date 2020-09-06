<template>
    <div>
        <MainHeader></MainHeader>
        <SubHeader></SubHeader>
        <main>
            <section></section>
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

@media (max-device-width: 800px) {
    main {
        grid-template-columns:1fr;
        width:90vw;
    }
}
</style>