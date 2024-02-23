import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = props => {

    const dataPointValues = props.datapoints.map(dataPoint => dataPoint.value);
    
    const totalMaximum = Math.max(...dataPointValues);

    return (

        <div className="chart">
            {props.datapoints.map(dataPoints =>
                <ChartBar
                    key={dataPoints.label}
                    value={dataPoints.value}
                    maxValue={totalMaximum}
                    label={dataPoints.label}
                />)}
        </div>
    );

};

export default Chart;