export const formatTime = (unixDate) => {
  let date = new Date(unixDate * 1000);
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  let formattedTime =
    date.getHours() + ":" + minutes.slice(-2) + ":" + seconds.slice(-2);
  return formattedTime;
};

export const formatDate = (unixDate) => {
  let date = new Date(unixDate * 1000);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let dayOfWeek = days[date.getDay()];
  let dayOfMonth = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  let formattedDate = dayOfWeek + " " + dayOfMonth + "-" + month + "-" + year;
  return formattedDate;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
