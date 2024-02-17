import Chart from "./Chart/Chart";


const ExpencesChart = props => {


    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ];

    console.log(props.expenses)
    for (const expenses of props.expenses) {
        const expenseMonth = expenses.expenseDate.getMonth(); //starting at 0 in 
        chartDataPoints[expenseMonth].value += expenses.expenseAmount;
    }

    return <Chart datapoints={chartDataPoints}/>
    
}

export default ExpencesChart;