let hrBox = document.getElementById("hr"),
minBox = document.getElementById("min"),
secBox = document.getElementById("sec")

let endDate = new Date(2023, 8, 17, 2, 36)

function count() {
  let today = new Date(),
  currentTime = today.getTime()

  let remaining = endDate - currentTime

  let oneMin = 60 * 1000,
  oneHour = 60 * oneMin

  let zeroes = (num) => (num < 10 ? `0${num}` : num)

  if(endDate < today) {
    clearInterval(i)

  } else {
    let hrs = Math.floor(remaining / oneHour)
    let mins = Math.floor((remaining % oneHour) / oneMin)
    let secs = Math.floor((remaining % oneMin) / 1000)

    hrBox.textContent = zeroes(hrs)
    minBox.textContent = zeroes(mins)
    secBox.textContent = zeroes(secs)
  }
}

let i = setInterval(count, 1000)
count()