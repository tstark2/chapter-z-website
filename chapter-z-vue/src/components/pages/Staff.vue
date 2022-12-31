<template>
  <div>
    <h2>Officers &amp; Staff</h2>
    <div class="contentGrid">
      <StaffMember
        v-for="member in staff"
        :member="member"
        :key="member.title"
      />
    </div>
  </div>
</template>

<script>
import Staff from "../../api/staff";
import StaffMember from "../StaffMember";

export default {
  name: "Staff",
  components: {
    StaffMember,
  },
  data() {
    return {
      staff: Staff,
    };
  },
};
</script>
