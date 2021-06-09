<template>
  <canvas ref="myChart" width="800" ></canvas>
</template>

<script>
import api from '../plugins/axios.js'

const xlabel = []
const data_set = []

export default {
  name: 'monthly-sales-chart',  

  data(){


      return {
          chartData: {
            labels: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
            datasets: [
                {
                    label: xlabel,
                    data: data_set
                },
                {
                    label: 'XRP',
                    data: [0.2012, 0.2015, 0.2016, 0.2013, 0.2011, 0.2012, 0.2015, 0.2014, 0.2016, 0.2014, 0.2011, 0.2013, 0.2014, 0.2011, 0.2013, 0.2014, 0.2012, 0.2011, 0.2013, 0.2012, 0.2015, 0.2016, 0.2013, 0.2014, 0.2015]
                },
                {
                    label: 'COTI',
                    data: [0.2011, 0.2013, 0.2015, 0.2014, 0.2013, 0.2011, 0.2014, 0.2013, 0.2015, 0.2013, 0.2012, 0.2011, 0.2012, 0.2013, 0.2012, 0.2012, 0.2014, 0.2012, 0.2011, 0.2013, 0.2014, 0.2016, 0.2012, 0.2015, 0.2014]
                }
            ]
        },

        options: {
            layout: {
                padding: {
                    left: 2,
                    right: 5,
                    top: 0,
                    bottom: 10
                }
            }
        }
        
      }
  },  
    
  async mounted() {
  
    await new Chart(this.$refs.myChart, {    
      
      type: 'line',
      data: this.chartData,
      options: this.options

    });

  },

  async created() {

    this.getMessages()

  },

  methods: {

    getMessages() {
      const ylabel = []
    //await api.get('/social-links.json').then(response => {
     api.get('/doge.json').then(response => {
        xlabel.push(response.data.map(({ label }) => label))
        this.ylabel = response.data.map(({ data }) => data)
        //data_set.push(response.data.map(({ data }) => data))
        data_set.push(this.ylabel[0])
        console.log(data_set)
        
    }).catch(e => {
        this.errors.push(e)
    });
    }
  }
  
}

</script>

<style>

</style>