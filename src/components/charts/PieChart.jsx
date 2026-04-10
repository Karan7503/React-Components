import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(

  ArcElement,
  Tooltip,
  Legend

);

const data = {

  labels: ["Pass", "Fail"],

  datasets: [

    {

      data: [80, 20],

      backgroundColor: [

        "rgba(75,192,192,0.6)",

        "rgba(255,99,132,0.6)"

      ]

    }

  ]

};

export default function PieChart(){

  return(

    <div className="w-[400px]">

      <Pie data={data} />

    </div>

  );

}