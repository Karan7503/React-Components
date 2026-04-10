import {

  Chart as ChartJS,

  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,

  Tooltip,
  Legend

} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(

  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,

  Tooltip,
  Legend

);

const data = {

  labels: ["Jan", "Feb", "Mar", "Apr"],

  datasets: [

    {

      label: "Performance",

      data: [65, 75, 70, 90],

      borderColor: "blue"

    }

  ]

};

export default function LineChart(){

  return(

    <div className="w-[500px]">

      <Line data={data} />

    </div>

  );

}