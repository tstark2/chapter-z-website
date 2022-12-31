<template>
  <div class="event">
    <p class="title">{{ event.summary }}</p>
    <a :href="makeMapLink" class="location" target="_blank">
      <i class="fas fa-map-marker-alt"></i>
      {{ event.location }}
    </a>
    <div class="dateTime">
      <a :href="event.htmlLink" class="date" target="_blank">
        <i class="fas fa-calendar-alt"></i>
        {{ getDateTime.date }}
      </a>
      <p class="time">
        <i class="fas fa-clock"></i>
        {{ getDateTime.time }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarEntry",
  props: {
    event: Object,
  },
  computed: {
    getDateTime() {
      const date = new Date(this.event.start.dateTime);
      return {
        date: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
        time: date.toLocaleTimeString("en-US").replace(":00 ", " "),
      };
    },
    makeMapLink() {
      return encodeURI(
        `https://www.google.com/maps/search/?api=1&query=${this.event.location}`
      );
    },
  },
};
</script>

<style scoped>
.event {
  border-radius: 5px;
  padding: 6px 12px;
  margin-bottom: 10px;
  background-color: var(--purple);
}

.event .title {
  font-weight: bold;
  color: var(--yellow);
  font-family: var(--displayFont);
  margin-top: 0;
}

.event .dateTime {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
  font-size: 0.9em;
}

.event .dateTime p,
.event .dateTime a {
  margin-bottom: 0;
  margin-top: 10px;
}

.event i {
  margin-right: 5px;
}

.event a {
  color: var(--white);
  text-decoration: none;
}

.event a:hover {
  color: var(--yellow);
  text-decoration: underline;
}
</style>
