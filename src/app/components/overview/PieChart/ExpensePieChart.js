"use client";
 
import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
// import Chart from "react-apexcharts";
import Link from "next/link";
import axios from 'axios';
import {toast} from 'react-hot-toast';
 
 
// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
 
 
 
export default function ExpensePieChart() {
 
 
 
  const [ pieChartData, setPieChartData ] = useState([]);
 
  const dataValues = pieChartData.map((i, index) => {
      return(
          i.value
      )
  });
 
  console.log(pieChartData);
 
 
  useEffect(() => {
 
    const fetchData = async () => {
 
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superadmin/expensePiechart`);
            console.log(response);
            setPieChartData(response.data.summary);
 
        } catch (error) {
            console.error('Error fetching data:', error);
            toast.error("Error loading piechart data")

        }
        return() => {
          return
        }
 
    };
 
    fetchData();
}, []);
 
 
  const chartConfig = {
    type: "pie",
    width: 220,
    height: 220,
    series: dataValues,
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
      },
      colors: ["#597EDD", "#f59e0b"],
      legend: {
        show: false,
      },
    },
  };
 
 
 
  return (
    <Card className="w-full h-full">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="h-[15%] m-0 p-2 flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div>
          <Typography variant="h6" color="blue-gray">
            Financial
          </Typography>
 
        </div>
      </CardHeader>
 
 
      <CardBody className="h-[85%] m-0 p-0 px-2  flex flex-col md:flex-row justify-around items-center">
        {
          pieChartData[0] ? (
            <Chart {...chartConfig} />
 
          ) : (
            <div className="w-32 h-32 flex justify-center items-center">
              <span className="w-full h-full loading loading-spinner text-[#5799FD]"></span>
            </div>
          )
        }
 
        <div className="w-full md:w-[50%] h-full">
          <div className="m-2 flex items-center ">
              <div className="h-3 w-3 m-2 bg-[#58C2D9]"></div>
              <Link href="" className="text-sm text-black">Distribution</Link>
          </div>
          <div className="m-2 flex items-center ">
              <div className="h-3 w-3 m-2 bg-[#f59e0b]"></div>
              <Link href="" className="text-sm text-black">Ashramam Expense</Link>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
