const currentDate = new Date();

const months = [
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม",
];

const formattedDate = () =>
  `${currentDate.getDate()} ${months[currentDate.getMonth()]} ${
    currentDate.getFullYear() + 543
  } เวลา ${currentDate.getHours()}:${currentDate.getMinutes()} น.`;