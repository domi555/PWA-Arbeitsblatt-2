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
    <h3>Willkommen bei der Service Worker Untersuchung!</h3>
    <ButtonGet @get="fetchData"></ButtonGet>
    <CardView
      :serverAddress="serverAddress"
      :employees="employees"
      @del="delEmployee"
    ></CardView>
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
      serverAddress: process.env.VUE_APP_SERVER,
    };
  },
  created() {
    document.addEventListener('swUpdated', this.updateAvailable, {
      once: true,
    });
  },
  methods: {
    async fetchData() {
      // console.log(this.serverAddress);
      const result = await axios({
        url: `${this.serverAddress}/employees`,
        method: 'GET',
      });
      this.employees = result.data;
      // console.log(this.employees);
      console.log('fetchData called');
    },
    async delEmployee(e) {
      await axios({
        url: `${this.serverAddress}/employees/${e.id}`,
        method: 'DELETE',
      });
      this.fetchData();
      console.log('delEmployee called');
    },
    updateAvailable() {
      alert('Update vorhanden, bitte App neu starten!');
    },
  },
};
</script>

<style></style>
