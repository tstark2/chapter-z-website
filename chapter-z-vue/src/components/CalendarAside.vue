<template>
  <aside>
    <section>
      <h2>Upcoming Events</h2>
      <div id="events" v-if="events">
        <CalendarEntry
          v-for="event in events"
          :event="event"
          :key="event.id"
        ></CalendarEntry>
      </div>
    </section>
  </aside>
</template>

<script>
import CalendarEntry from "./CalendarEntry";
const URL = "";

export default {
  name: "CalendarAside",
  components: {
    CalendarEntry,
  },
  data() {
    return {
      events: [],
    };
  },
  methods: {
    async getCalendarEvents() {
      const response = await fetch(`${URL}/api/calendar`);

      if (response.ok) {
        const result = await response.json();
        this.events = result.items;
      }
    },
  },
  created() {
    this.getCalendarEvents();
  },
};
</script>

<style scoped>
aside {
  background-color: var(--white);
  color: var(--purple);
}

aside section {
  position: sticky;
  top: 0px;
}

aside h2 {
  font-size: 1.75em;
}
</style>
