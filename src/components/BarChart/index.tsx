import { useRef, useEffect, useState } from "react";
import { Chart, registerables } from 'chart.js';

import "./styles.css";

interface Props {
    chartData: number[];
}


const BarChart = ({ chartData }: Props) => {
    Chart.register(...registerables);

    // helper function to format chart data since you do this twice
    const formatData = {
      labels: [
        'Horas de uso parado',
        'Horas de uso em movimento'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50],
        backgroundColor: [
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };
  
    // use a ref to store the chart instance since it it mutable
    const chartRef = useRef<Chart | null>(null);
  
    // callback creates the chart on the canvas element
    const canvasCallback = (canvas: HTMLCanvasElement | null) => {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "bar",
          data: formatData,
          options: {
                responsive: true,
                plugins: {
                  legend: {
                      position: 'bottom',
                  },
                  title: {
                      display: false,
                      text: 'Gráfico por período total de dias'
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
            }
        });
      }
    };
  
    // effect to update the chart when props are updated
    useEffect(() => {
      // must verify that the chart exists
      if (chartRef.current) {
        chartRef.current.data = formatData;
        chartRef.current.update();
      }
  
      // cleanup function - I had to remove this as it was causing errors
      return () => {
        chartRef.current?.destroy();
      };
    }, [chartData]);
  
    return (
      <div className="self-center w-1/2">
        <div className="overflow-hidden">
          <canvas ref={canvasCallback}></canvas>
        </div>
      </div>
    );
  };
  
  // want to see some changes in the props on order to test MyChart
  export default () => {
    const [data, setData] = useState([]);
  
    return (
      <div>
        <BarChart chartData={data} />
      </div>
    );
  };
  


