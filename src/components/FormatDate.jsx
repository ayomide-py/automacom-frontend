function formatDate(originalDate) {
  const dateObj = new Date(originalDate);

  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  const ampm = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 || 12;

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
  const month = months[dateObj.getMonth()];
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();

  const formattedDate = `${month} ${day}, ${year} at ${formattedHours}:${minutes
    .toString()
    .padStart(2, "0")} ${ampm}`;

  return formattedDate;
}

export default formatDate;
