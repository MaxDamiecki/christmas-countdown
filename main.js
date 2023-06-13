
const countDown = () => {
  const countDate = new Date('December 25, 2023 00:00:00').getTime();
  const currentTime = new Date().getTime();
  const diff = countDate - currentTime;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24

  const textDay = Math.floor(diff / day);
  const textHour = Math.floor((diff % day) / hour);
  const textMinute = Math.floor((diff % hour) / minute);
  const textSecond = Math.floor((diff % minute) / second);

  document.getElementById("day").innerHTML = textDay;
  document.getElementById("hour").innerHTML = textHour;
  document.getElementById("minute").innerHTML = textMinute;
  document.getElementById("second").innerHTML = textSecond;
};

setInterval(countDown,1000);
