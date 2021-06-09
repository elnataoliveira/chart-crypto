<template>
  <canvas ref="myChart" height="350" ></canvas>
</template>

<script>

export default {
  name: 'monthly-sales-chart',
  mounted() {
    new Chart(this.$refs.myChart, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11, 0]
        }
        ,
        {
          label: "bar",
          backgroundColor: "#f3aa60",
          data: [45, 11, 25, 37, 15, 78, 22, 65, 35, 23, 17, 15, 0]

        }
      ]
      },
      options: {
        layout: {
            padding: {
                left: 5,
                right: 20,
                top: 0,
                bottom: 5
            }
        }
    }

    });
  }
}

</script>

<style>

</style>