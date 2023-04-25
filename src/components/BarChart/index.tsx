import { useRef, useEffect, useState } from "react";
import { Chart, registerables } from 'chart.js';
import { NumberUtils } from "@react-force/number-utils";

import "./styles.css";

interface Props {
    chartData: number[];
}


const BarChart = ({ chartData }: Props) => {
    Chart.register(...registerables);

    const formatData = {
      labels: ["Dia X", "Dia Y", "Dia Z"],
      datasets: [
        {
          label: 'Dataset 1',
          data: [3,7,4],
          backgroundColor: 'rgb(54, 162, 235)',
          stack: 'Stack 0',
        },
        {
          label: 'Dataset 2',
          data: [8,5,4],
          backgroundColor: 'rgb(90, 60, 100)',
          stack: 'Stack 0',
        },
        {
          label: 'Dataset 3',
          data: [7,2,6],
          backgroundColor: 'rgb(200, 60, 100)',
          stack: 'Stack 1',
        },
      ]
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
                interaction: {
                  intersect: false,
                },
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
                  x: {
                    stacked: true,
                  },
                  y: {
                    stacked: true
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
  


