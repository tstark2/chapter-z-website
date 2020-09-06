<template>
    <aside>
        <section>
            <h2>Upcoming Events</h2>
            <div id="events">
                <CalendarEntry></CalendarEntry>
                <CalendarEntry></CalendarEntry>
                <CalendarEntry></CalendarEntry>
                <CalendarEntry></CalendarEntry>
                <CalendarEntry></CalendarEntry>
            </div>
        </section>
    </aside>    
</template>

<script>
import CalendarEntry from "./CalendarEntry";

export default {
    name: "CalendarAside",
    components: {
        CalendarEntry
    }
}
</script>

<style scoped>
aside {
    background-color:var(--white);
    color:var(--purple);
}

aside section {
    position:sticky;
    top:0px;
}

aside h2 {
    font-size:1.75em;
}
</style>