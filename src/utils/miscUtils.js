const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEPT",
  "OCT",
  "NOV",
  "DEC"
];

export function getNodeUID(keysAvail, pattern = "xxxxxxx") {
  const uuid = pattern.replace(/[xy]/g, function(c) {
    let r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
  if (keysAvail.indexOf(uuid) == -1) {
    return uuid;
  } else {
    getNodeUID(keysAvail);
  }
}

export function formatDate(dateVal) {
  let newDate = new Date(dateVal);

  let sMonth = months[newDate.getUTCMonth()];
  let sDay = newDate.getUTCDate();
  let sYear = newDate.getUTCFullYear();
  let sHour = newDate.getUTCHours();
  let sMinute = newDate.getUTCMinutes();
  let sAMPM = "AM";

  let iHourCheck = parseInt(sHour);

  if (iHourCheck > 12) {
    sAMPM = "PM";
    sHour = iHourCheck - 12;
  } else if (iHourCheck === 0) {
    sHour = "12";
  }
  sMinute = sMinute === 0 ? `${sMinute}0` : sMinute;
  return `${sDay} ${sMonth} ${sYear} ${sHour}:${sMinute}${sAMPM}`;
}