import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {

  labels: ["Math", "Science", "English"],

  datasets: [

    {
      label: "Average Marks",

      data: [78, 65, 82],

      backgroundColor: [
        "rgba(54,162,235,0.6)",
        "rgba(75,192,192,0.6)",
        "rgba(255,159,64,0.6)"
      ]

    }

  ]

};

export default function BarChart(){

  return(

    <div className="w-[500px]">

      <Bar data={data} />

    </div>

  );

}