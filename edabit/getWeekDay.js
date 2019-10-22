const getDay = dateAsString => {
  const myDate = new Date(dateAsString); // something like: 2016-12-06T23:00:00.000Z
  console.log(myDate);

  const dayAsNum = myDate.getDay();

  console.log(dayAsNum);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  console.log(days[dayAsNum]);

  //const splitDay = dateAsString.split("/");
  //console.log(splitDay);
};

getDay("12/07/2016");
// getDay("09/04/2016") ➞ "Sunday"
// getDay("12/08/2011") ➞ "Thursday"
