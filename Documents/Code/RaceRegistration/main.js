let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = true;
let runnerAge = 17;

if (earlyRegistration === true && runnerAge > 18) {
  raceNumber += 1000;
}

if (earlyRegistration && runnerAge > 18) {
  console.log(`Your race will start at 9:30am. Your number is ${raceNumber}`);
} else if (!earlyRegistration && runnerAge > 18) {
  console.log(`Your race will start at 11:00am. Your number is ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Your race will start at 12:30pm. Your number is ${raceNumber}`);
} else {
  console.log("See registration desk!");
}
