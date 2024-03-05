// Clock

const digiclock = document.querySelector(".digiclock");
const digidate = document.querySelector(".digidate");
const timVisare = document.querySelector(".timvisare");
const minutVisare = document.querySelector(".minutvisare");
const sekundVisare = document.querySelector(".sekundvisare");

function logTime() {
  const nu = new Date();
  const timmar = nu.getHours();
  const minuter = nu.getMinutes();
  const sekunder = nu.getSeconds();

  const timGrad = (timmar % 12) * 30 + minuter * 0.5;
  const minutGrad = minuter * 6;
  const sekundGrad = sekunder * 6;

  timVisare.style.transform = `rotate(${timGrad}deg)`;
  minutVisare.style.transform = `rotate(${minutGrad}deg)`;
  sekundVisare.style.transform = `rotate(${sekundGrad}deg)`;

  digiclock.innerText = nu.toLocaleTimeString();
  digidate.innerText = nu.toDateString();
}

setInterval(logTime, 1000);
