<template>
  <div
    id="app"
    class="
      container
      d-flex
      flex-column
      justify-content-center
      align-items-center
      mt-5
    "
  >
    <ButtonGet @get="fetchData"></ButtonGet>
    <CardView :employees="employees" @del="delEmployee"></CardView>
  </div>
</template>

<script>
import ButtonGet from '@/components/ButtonGet.vue';
import CardView from '@/components/CardView.vue';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    ButtonGet,
    CardView,
  },
  data() {
    return {
      employees: [],
    };
  },
  async created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const result = axios({
        url: 'https://palatin-employees.herokuapp.com/employees',
        method: 'GET',
      });
      this.employees = result.data;
      console.log('fetchData called');
    },
    delEmployee(employees) {
      const result = axios({
        url: `https://palatin-employees.herokuapp.com/employees/${employees.id}`,
        method: 'DELETE',
      });
      this.employees = result.data;
      console.log('delEmployee called');
    },
  },
};
</script>

<style></style>
