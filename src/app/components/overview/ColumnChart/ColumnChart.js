// "use client"

// import {
//     Card,
//     CardBody,
//     CardHeader,
//     Typography,
//   } from "@material-tailwind/react";
//   // import Chart from "react-apexcharts";
//   import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
   
//   // If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
//   import dynamic from "next/dynamic";
//   const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
   
//   const chartConfig = {
//     type: "bar",
//     height: 200,
//     series: [
//       {
//         name: "New Users",
//         data: [100, 400, 300, 320, 500, 350, 400, 275, 500],
//       },
//     ],
//     options: {
//       chart: {
//         toolbar: {
//           show: false,
//         },
//       },
//       title: {
//         show: "",
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       colors: ["#5799FD"],
//       plotOptions: {
//         bar: {
//           columnWidth: "40%",
//           borderRadius: 2,
//         },
//       },
//       xaxis: {
//         axisTicks: {
//           show: false,
//         },
//         axisBorder: {
//           show: false,
//         },
//         labels: {
//           style: {
//             colors: "#616161",
//             fontSize: "12px",
//             fontFamily: "inherit",
//             fontWeight: 400,
//           },
//         },
//         categories: [
//           "Apr",
//           "May",
//           "Jun",
//           "Jul",
//           "Aug",
//           "Sep",
//           "Oct",
//           "Nov",
//           "Dec",
//         ],
//       },
//       yaxis: {
//         labels: {
//           style: {
//             colors: "#616161",
//             fontSize: "12px",
//             fontFamily: "inherit",
//             fontWeight: 400,
//           },
//         },
//       },
//       grid: {
//         show: false,
//         borderColor: "#dddddd",
//         strokeDashArray: 5,
//         xaxis: {
//           lines: {
//             show: true,
//           },
//         },
//         padding: {
//           top: 5,
//           right: 20,
//         },
//       },
//       fill: {
//         opacity: 0.8,
//       },
//       tooltip: {
//         theme: "dark",
//       },
//     },
//   };
   
//   export default function ColumnChart() {
//     return (
//       <Card className="h-full">
//         {/* <CardHeader
//           floated={false}
//           shadow={false}
//           color="transparent"
//           className="flex flex-col gap-4 rounded-none md:flex-row md:items-center h-[20%]"
//         >
//           <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
//             <Square3Stack3DIcon className="" />
//           </div>
//           <div>
//             <Typography variant="" color="blue-gray">
//               Thasmai
//             </Typography>
//             <Typography
//               variant="small"
//               color="gray"
//               className="max-w-sm font-normal"
//             >
//               Visualize your data in a simple way using the
//               @material-tailwind/react chart plugin.
//             </Typography>
//           </div>
//         </CardHeader> */}
//         <CardBody className="p-0 pb-0 h-full">
//           <Chart {...chartConfig} />
//         </CardBody>
//       </Card>
//     );
//   }





// "use client"

// import {
//     Card,
//     CardBody,
//     CardHeader,
//     Typography,
//   } from "@material-tailwind/react";
//   // import Chart from "react-apexcharts";
//   import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
   
//   // If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
//   import dynamic from "next/dynamic";
//   const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
   
//   const chartConfig = {
//     type: "bar",
//     height: 200,
//     series: [
//       {
//         name: "New Users",
//         data: [100, 400, 300, 320, 500, 350, 400, 275, 500],
//       },
//     ],
//     options: {
//       chart: {
//         toolbar: {
//           show: false,
//         },
//       },
//       title: {
//         show: "",
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       colors: ["#5799FD"],
//       plotOptions: {
//         bar: {
//           columnWidth: "40%",
//           borderRadius: 2,
//         },
//       },
//       xaxis: {
//         axisTicks: {
//           show: false,
//         },
//         axisBorder: {
//           show: false,
//         },
//         labels: {
//           style: {
//             colors: "#616161",
//             fontSize: "12px",
//             fontFamily: "inherit",
//             fontWeight: 400,
//           },
//         },
//         categories: [
//           "Apr",
//           "May",
//           "Jun",
//           "Jul",
//           "Aug",
//           "Sep",
//           "Oct",
//           "Nov",
//           "Dec",
//         ],
//       },
//       yaxis: {
//         labels: {
//           style: {
//             colors: "#616161",
//             fontSize: "12px",
//             fontFamily: "inherit",
//             fontWeight: 400,
//           },
//         },
//       },
//       grid: {
//         show: false,
//         borderColor: "#dddddd",
//         strokeDashArray: 5,
//         xaxis: {
//           lines: {
//             show: true,
//           },
//         },
//         padding: {
//           top: 5,
//           right: 20,
//         },
//       },
//       fill: {
//         opacity: 0.8,
//       },
//       tooltip: {
//         theme: "dark",
//       },
//     },
//   };
   
//   export default function ColumnChart() {
//     return (
//       <Card className="h-full">
//         <CardHeader
//           floated={false}
//           shadow={false}
//           color="transparent"
//           className="flex flex-col gap-4 rounded-none md:flex-row md:items-center h-[20%]"
//         >
          
         
//         </CardHeader>
//         <CardBody className="p-0 pb-0 h-full">
//           <Chart {...chartConfig} />
//         </CardBody>
//       </Card>
//     );
//   }


import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody, 
  CardHeader,
} from "@material-tailwind/react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ColumnChart() {
  
  const [interval, setInterval] = useState("monthly"); // Default interval
  
  const [chartData, setChartData] = useState({
    type: "bar",
    height: 200,
    series: [],
    options: {
      // Options here

      
               chart: {
                 toolbar: {
                   show: true,
                 }, 
               },
               title: {
                 show: "",
               },
               dataLabels: {
                 enabled: false,
               },
               colors: ["#5799FD"],
              //  plotOptions: {
              //    bar: {
              //      columnWidth: "40%",
              //      borderRadius: 2,
              //    },
              //  },
               xaxis: {
                 axisTicks: {
                   show: false,
                 },
                 axisBorder: {       
                   show: false,
                 },
                 labels: {
                   style: {
                     colors: "#616161",
                     fontSize: "12px",
                     fontFamily: "inherit",
                     fontWeight: 400,
                   },
                 },
                 categories: [
                   "Apr",
                   "May",
                   "Jun",
                   "Jul",
                   "Aug",
                   "Sep",
                   "Oct",
                   "Nov",
                   "Dec",
                 ],
               },
               yaxis: {
                 labels: {
                   style: {
                     colors: "#616161",
                     fontSize: "12px",
                     fontFamily: "inherit",
                     fontWeight: 400,
                   },
                 },
               },
               grid: {
                 show: false,
                 borderColor: "#dddddd", 
                 strokeDashArray: 5,
                 xaxis: {
                   lines: {
                     show: true,
                   },
                 },
                 padding: {
                   top: 5,
                   right: 20,
                 },
               },
               fill: {
                 opacity: 0.8,
               },
               tooltip: {
                 theme: "dark",
               },
    },   
  });


  
  // Fetch data based on the selected interval
  useEffect(() => {
    fetchData(interval);
  }, [interval]);

  const fetchData = async (interval) => {
    // Simulated data fetching based on the interval
    let newData = [];
    switch (interval) {
      case "year":
        newData = [200, 500, 400, 600, 800, 700, 900, 1000, 1200];
        break;
      case "month":
        newData = [100, 400, 300, 320, 500, 350, 400, 275, 500];
        break;
      
      default:
        newData = [100, 400, 300, 320, 500, 350, 400, 275, 500];
    }
    // Update chart data
    setChartData(prevState => ({  
      ...prevState,
      series: [{ data: newData }]
    }));
  };

  const handleIntervalChange = (e) => {
    setInterval(e.target.value);
  };

  return (
    <Card className="h-full">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center h-[20%]"
      >
        <div>
          <select
            value={interval}
            onChange={handleIntervalChange}
            className="px-3 py-2 border rounded-md bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >   
            <option value="yearly">Year</option>
            <option value="monthly">Month</option>
            
          </select>
        </div>
      </CardHeader>
      <CardBody className="p-0 pb-0 h-full">
        <Chart {...chartData} />
      </CardBody>
    </Card>
  );
}
           



// "use client"


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   Card,
//   CardBody,
//   CardHeader,
// } from "@material-tailwind/react";
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// export default function ColumnChart() {
  
//   const [interval, setInterval] = useState("monthly"); // Default interval
//   const [chartData, setChartData] = useState({
//     type: "bar",
//     height: 200,
//     series: [],
//     options: {
//       // Options here
//     },
//   });

//   useEffect(() => {
//     fetchData(interval);
//   }, [interval]);

//   const fetchData = async (interval) => {
//     let newData = [];
//     switch (interval) {
//       case "yearly":
//         newData = [200, 500, 400, 600, 800, 700, 900, 1000, 1200];
//         break;
//       case "monthly":
//         const currentDate = new Date();
//         const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
//         const year = currentDate.getFullYear();
//         try {
//           const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/superAdmin/register-count?month=${month}&year=${year}`);
//           const monthlyData = response.data; // Assuming the API response contains the monthly data
//           newData = monthlyData.map(item => item.value); // Assuming the API response contains an array of objects with a 'value' property
//         } catch (error) {
//           console.error("Error fetching monthly data:", error);
//         }
//         break;
//       case "weekly":
//         newData = [50, 100, 80, 120, 200, 150, 180, 100, 250];
//         break;
//       default:
//         newData = [100, 400, 300, 320, 500, 350, 400, 275, 500];
//     }
//     // Update chart data
//     setChartData(prevState => ({
//       ...prevState,
//       series: [{ data: newData }]
//     }));
//   };

//   const handleIntervalChange = (e) => {
//     setInterval(e.target.value);
//   };

//   return (
//     <Card className="h-full">
//       <CardHeader
//         floated={false}
//         shadow={false}
//         color="transparent"
//         className="flex flex-col gap-4 rounded-none md:flex-row md:items-center h-[20%]"
//       >
//         <div>
//           <select
//             value={interval}
//             onChange={handleIntervalChange}
//             className="px-3 py-2 border rounded-md bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >   
//             <option value="yearly">Yearly</option>
//             <option value="monthly">Monthly</option>
//             <option value="weekly">Weekly</option>
//           </select>
//         </div>
//       </CardHeader>
//       <CardBody className="p-0 pb-0 h-full">
//         <Chart {...chartData} />
//       </CardBody>
//     </Card>
//   );
// }