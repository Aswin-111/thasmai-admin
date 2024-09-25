// import React from 'react'

// function DateFormatter({ date }) {
//     var dateArray = date.split("-");
//     const newDate = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
//   return (
//     <span>{ newDate }</span>
//   )
// }

// export default DateFormatter

import React from 'react';

function DateFormatter({ date }) {
  // Convert the date to a string if it isn't already
  const dateString = String(date);

  // Split the string by hyphen
  const dateArray = dateString.split("-");
  
  // Check if the date is in the correct format
  if (dateArray.length !== 3) {
    return <span> {" "} </span>;
  }

  // Rearrange the date format to DD-MM-YYYY
  const newDate = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
  
  return <span>{newDate}</span>;
}

export default DateFormatter;
