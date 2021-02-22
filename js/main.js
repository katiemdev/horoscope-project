//A horoscope app where the user can enter their birthday and get their horoscope. There should be minimum 12 unique horoscopes.

//get input from user (day and month)
//return horoscope that corresponds with the month and day specified. Use conditionals. For day numbers, say 'less than' or 'greater than'.

/*
♈ Aries (Ram): March 21–April 19
♉ Taurus (Bull): April 20–May 20
♊ Gemini (Twins): May 21–June 21
♋ Cancer (Crab): June 22–July 22
♌ Leo (Lion): July 23–August 22
♍ Virgo (Virgin): August 23–September 22
♎ Libra (Balance): September 23–October 23
♏ Scorpius (Scorpion): October 24–November 21
♐ Sagittarius (Archer): November 22–December 21
♑ Capricornus (Goat): December 22–January 19
♒ Aquarius (Water Bearer): January 20–February 18
♓ Pisces (Fish): February 19–March 20 */


document.querySelector('button').addEventListener('click', horoscope);

let aries = `Aries, you will have good luck!`
let taurus = `Taurus, you will have bad luck!`
let gemini = `Gemini, you will have good luck!`
let cancer = `Cancer, you will have bad luck!`
let leo = `Leo, you will have good luck!`
let virgo = `Virgo, you will have bad luck!`
let libra = `Libra, you will have good luck!`
let scorpio = `Scorpio, you will have bad luck!`
let sagittarius = `Sagittarius, you will have good luck!`
let capricorn = `Capricorn, you will have bad luck!`
let aquarius = `Aquarius, you will have good luck!`
let pisces = `Pisces, you will have bad luck!`

function horoscope() {
  let month = document.getElementById('month').value;
  let day = document.getElementById('day').value;
  let output = document.getElementById('outputHere');

  output.innerText = " ";

  if(month == "Mar" && day >= 21) {
    output.innerText = `${aries}`
  } else if (month == "Apr" && day <= 19) {
    output.innerText = `${aries}`
  } else if (month == "Apr" && day >= 20) {
    output.innerText = `${taurus}`
  } else if (month == "May" && day <= 20) {
  output.innerText = `${taurus}`
  } else if (month == "May" && day >= 21) {
      output.innerText = `${gemini}`
  } else if (month == "Jun" && day <= 21) {
      output.innerText = `${gemini}`
  } else if (month == "Jun" && day >= 22) {
      output.innerText = `${cancer}`
  } else if (month == "Jul" && day <= 22) {
      output.innerText = `${cancer}`
  } else if (month == "Jul" && day >= 23) {
      output.innerText = `${leo}`
  } else if (month == "Aug" && day <= 22) {
      output.innerText = `${leo}`
  } else if (month == "Aug" && day >= 23) {
      output.innerText = `${virgo}`
  } else if (month == "Sep" && day <= 22) {
      output.innerText = `${virgo}`
  } else if (month == "Sep" && day >= 23) {
      output.innerText = `${libra}`
  } else if (month == "Oct" && day <= 23) {
      output.innerText = `${libra}`
  } else if (month == "Oct" && day >= 24) {
      output.innerText = `${scorpio}`
  } else if (month == "Nov" && day <= 21) {
      output.innerText = `${scorpio}`
  } else if (month == "Nov" && day >= 22) {
      output.innerText = `${sagittarius}`
  } else if (month == "Dec" && day <= 21) {
      output.innerText = `${sagittarius}`
  } else if (month == "Dec" && day >= 22) {
      output.innerText = `${capricorn}`
  } else if (month == "Jan" && day <= 19) {
      output.innerText = `${capricorn}`
  } else if (month == "Jan" && day >= 20) {
      output.innerText = `${aquarius}`
  } else if (month == "Feb" && day <= 18) {
      output.innerText = `${aquarius}`
  } else if (month == "Feb" && day == 28) {
      output.innerText = `LEAP YEAR BABY!`
  } else if (month == "Feb" && day > 29) {
      output.innerText = `Not a valid birthday!`
  } else if (month == "Feb" && day >= 19) {
        output.innerText = `${pisces}`
  } else if (month == "Mar" && day <= 20) {
        output.innerText = `${pisces}`
}
}
