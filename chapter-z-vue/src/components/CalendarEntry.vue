<template>
    <div class="event">
        <p class="title"></p>
        <a href="" class="location">
            <i class="fas fa-map-marker-alt"></i>
        </a>
        <div class="dateTime">
            <a href="" class="date">
                <i class="fas fa-calendar-alt"></i>
            </a>
            <a href="" class="time">
                <i class="fas fa-clock"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "CalendarEntry"
}
</script>

<style scoped>
.event {
    border-radius:5px;
    padding:6px 12px;
    margin-bottom:10px;
    background-color:var(--purple);
}

.event .title {
    font-weight:bold;
    color:var(--yellow);
    font-family:var(--displayFont);
    margin-top:0;
}

.event .dateTime {
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:var(--white);
    font-size:0.9em;
}

.event .dateTime p, .event .dateTime a {
    margin-bottom:0;
    margin-top:10px;
}

.event i {
    margin-right:5px;
}

.event a {
    color:var(--white);
    text-decoration:none;
}

.event a:hover {
    color:var(--yellow);
    text-decoration:underline;
}
</style>