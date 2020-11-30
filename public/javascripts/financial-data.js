axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json`)
    .then(response => {
     console.log(response.data);
     printChartData(response.data);
 })
    .catch(err => {
        console.log(err)
    })

    // function

    const printChartData = responseData => {
        const dailyData = responseData.bpi;
        console.log('daily data: ', dailyData);
        // data for the x axis
        const dates = Object.keys(dailyData);
        console.log(dates);
        // data for the y axis
        const prices = dates.map(date => {
            return dailyData[date];
        });
        console.log('Bitcoin Prices: ', prices);
        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [
                    {
                        label: "Bitcoin Chart",
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: prices
                    }
                ]
            }
        })
    }
