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
            axis: 'y',
            labels: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
            datasets: [
                {
                    label: xlabel,
                    data: data_set,
                    backgroundColor: "rgba(54,73,93,.3)",
                    borderColor: "#36495d",
                    borderWidth: 1,
                    tension: 0.1
                },
                {
                    label: 'XRP',
                    data: [0.2012, 0.2015, 0.2016, 0.2013, 0.2011, 0.2012, 0.2015, 0.2014, 0.2016, 0.2014, 0.2011, 0.2013, 0.2014, 0.2011, 0.2013, 0.2014, 0.2012, 0.2011, 0.2013, 0.2012, 0.2015, 0.2016, 0.2013, 0.2014, 0.2015],
                    backgroundColor: "rgba(154,73,193,.3)",
                    borderColor: "#36495d",
                    borderWidth: 1,
                    tension: 0.1
                },
                {
                    label: 'COTI',
                    data: [0.2011, 0.2013, 0.2015, 0.2014, 0.2013, 0.2011, 0.2014, 0.2013, 0.2015, 0.2013, 0.2012, 0.2011, 0.2012, 0.2013, 0.2012, 0.2012, 0.2014, 0.2012, 0.2011, 0.2013, 0.2014, 0.2016, 0.2012, 0.2015, 0.2014],
                    backgroundColor: "rgba(54,73,93,.3)",
                    borderColor: "#36495d",
                    borderWidth: 1,
                    tension: 0.1
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
            },
            indexAxis: 'y',
            scales: {
              y: {
                  stacked: false,
                  beginAtZero: true
              }
          }
        },
        ylabel: 'old'
        
      }
  },  
    
  async mounted() {
  
    await new Chart(this.$refs.myChart, {    
      
      type: 'line',
      data: this.chartData,
      options: this.options

    });
    //this.chartData = {...this.chartData, ...{}}

  },
  computed:{
    getLabel:{
      get(){
        alert(this.ylabel)
        return `${this.ylabel}`
      }
    }
  },

  async created() {

    this.getMessages()
    //this.setOptions()

  },

  methods: {

    async getMessages(){
      const ylabel = []
    //await api.get('/social-links.json').then(response => {
     await api.get('/doge.json').then(response => {
        xlabel.push(response.data.map(({ label }) => label))
        this.ylabel = response.data.map(({ data }) => data)
        data_set.push(response.data.map(({ data }) => data)[0])
        //data_set.push([0.2011, 0.2013, 0.2015, 0.2014, 0.2013, 0.2011, 0.2014, 0.2013, 0.2015, 0.2013, 0.2012, 0.2011, 0.2012, 0.2013, 0.2012, 0.2012, 0.2014, 0.2012, 0.2011, 0.2013, 0.2014, 0.2016, 0.2012, 0.2015, 0.2014])
        //data_set = [0.2011, 0.2013, 0.2015, 0.2014, 0.2013, 0.2011, 0.2014, 0.2013, 0.2015, 0.2013, 0.2012, 0.2011, 0.2012, 0.2013, 0.2012, 0.2012, 0.2014, 0.2012, 0.2011, 0.2013, 0.2014, 0.2016, 0.2012, 0.2015, 0.2014]
        //console.log(data_set)          
      }).catch(e => {
          this.errors.push(e)
      });
      alert(data_set)
        //this.$refs.myChart.update()
    },

    async setOptions(){
      //const dados = []
      await api.get('/doge.json').then(response => {
        this.ylabel = response.data.map(({ data }) => data)
        data_set.push(this.ylabel[0])
        //this.ylabel = this.dados
        //alert(data_set)
        //return {dados}
        //console.log(data_set)          
      }).catch(e => {
          this.errors.push(e)
      });
      //this.ylabel = [0.2012, 0.2015, 0.2016, 0.2013, 0.2011, 0.2012, 0.2015, 0.2014, 0.2016, 0.2014, 0.2011, 0.2013, 0.2014, 0.2011, 0.2013, 0.2014, 0.2012, 0.2011, 0.2013, 0.2012, 0.2015, 0.2016, 0.2013, 0.2014, 0.2015]
      //alert(this.ylabel)
      return data_set
    },

    async dogeCoin(){
      await api.get('/doge.json').then(response => {
        this.ylabel = response.data.map(({ data }) => data)[0]
      }).catch(e => {
          this.errors.push(e)
      });
      for(var i=0;i<this.ylabel.length;i++){
        //alert(this.ylabel[i])
        data_set.push(this.ylabel[i]);
      }
      //this.$refs.myChart.update()
      //alert(`${this.ylabel}`)      
      //return `${this.ylabel}`;
    }

   

  }
  
}

</script>

<style>

</style>