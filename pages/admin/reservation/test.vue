<template>
    <div>
      <div class="days-row">
        <div
          v-for="(item, index) in daysOfMonth"
          :key="'day-' + index"
          class="day-cell"
          :class="{ 'highlight': item.day >= 2 && item.day <= 5 }">
          {{ item.dayName }}
        </div>
      </div>
      <div class="dates-row">
        <div
          v-for="(item, index) in daysOfMonth"
          :key="'date-' + index"
          class="date-cell"
          :class="{ 'highlight': item.day >= 2 && item.day <= 5 }">
          {{ item.day }}
        </div>
      </div>
    </div>
  </template>
  

<script>
export default {
  data() {
    return {
      currentMonth: new Date().getMonth(), // Assuming you want the current month
      currentYear: new Date().getFullYear(),
    };
  },
  computed: {
    daysOfMonth() {
      const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
      let daysArray = [];
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(this.currentYear, this.currentMonth, day);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' }); // This will give you the day name
        daysArray.push({ day, dayName });
      }
      return daysArray;
    },
  },
};
</script>
<style>
.days-row, .dates-row {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
}

.day-cell, .date-cell {
  min-width: 30px; /* Ensure enough space for each cell */
  text-align: center; /* Center content */
  margin-right: 10px; /* Space between cells */
}

.highlight {
  background-color: yellow;
}
</style>
