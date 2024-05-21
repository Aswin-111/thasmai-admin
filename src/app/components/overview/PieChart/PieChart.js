"use client"

import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
//   import Chart from "react-apexcharts";
  import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

   
  // If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
  import dynamic from "next/dynamic";
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
   
  const chartConfig = {
    type: "pie",
    width: "100%",
    height: "100%",
    series: [19, 37, 26, 18, 12],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
        label : ["Distribution", "Donation", "Fees", "Ashram Appointments", "Expense"]
      },
      colors: ["#58C2D9", "#597EDD", "#26CC7C", "#d81b60", "#f59e0b"],
      legend: {
        show: false,
      },
    },
  };
   
  export default function PieChart() {
    return (
      <Card className="h-[100%]">
        {/* <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="h-[20%] flex flex-col gap-4 rounded-none md:flex-row md:items-center"
        >
          <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
            <Square3Stack3DIcon className="h-6 w-6" />
          </div>
          <div>
            <Typography variant="h6" color="blue-gray">
              Pie Chart
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="max-w-sm font-normal"
            >
              Visualize your data in a simple way using the
              @material-tailwind/react chart plugin.
            </Typography>
          </div>
        </CardHeader> */}
        <CardBody className="p-0 m-0 h-[100%] flex justify-center items-center">
          {/* <div className="m-0 W-[15%]"><button>Select Year</button></div> */}
          <Chart {...chartConfig} className="m-0 h-[100%]"/>
          <div className="">
            <div className="m-5 flex items-center ">
                <div className="h-3 w-3 m-2 bg-[#58C2D9]"></div>
                <Link href="">Distribution</Link>
            </div>
            <div className="m-5 flex items-center ">
                <div className="h-3 w-3 m-2 bg-[#597EDD]"></div>
                <Link href="">Donation</Link>
                    
            </div>
            <div className="m-5 flex items-center ">
                <div className="h-3 w-3 m-2 bg-[#26CC7C]"></div>
                <Link href="">Fees</Link>
                
            </div>
            <div className="m-5 flex items-center ">
                <div className="h-3 w-3 m-2 bg-[#d81b60]"></div>
                <Link href="">Ashram Appointments</Link>
            </div>
            <div className="m-5 flex items-center ">
                <div className="h-3 w-3 m-2 bg-[#f59e0b]"></div>
                <Link href="">Expense</Link>
            </div>

          </div>
        </CardBody>
      </Card>
    );
  }

