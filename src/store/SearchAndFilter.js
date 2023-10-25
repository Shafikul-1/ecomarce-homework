import axios from 'axios';
import { reactive, watch } from 'vue';

const searchFilter = reactive({
  getfetchData: [],
  inputData: '',
  
  async fetchData() {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      this.getfetchData = response.data.products;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

});

watch(() => searchFilter.inputData, (newValue) => {
  searchFilter.filteredData = searchFilter.getfetchData.filter(item => item.title.toLowerCase().includes(newValue.toLowerCase()));
});

searchFilter.fetchData();

export { searchFilter };
