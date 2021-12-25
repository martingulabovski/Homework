let question = prompt("Age converter, dog or human?");

if (question == "dog") {
  let dogAge = prompt("How old is your dog?");
  // Defining early years. The first two years of a dog's life count as 10.5 human years.....example, a dog which is 5 years old is approximately 35 “human years.” Depends on the breed and size of the dog.
  // This is based on an assumption that dogs live to about 10 and humans live to about 70, on average.
  let earlyYears = 2;
  earlyYears = earlyYears * 10.5;

  let laterYears = dogAge - 2;
  laterYears = laterYears * 5;

  myDogsAgeInHumanYears = earlyYears + laterYears;
  myDogsName = "Doggo";

  alert(
    `My name is ${myDogsName}. I am ${dogAge} years old in dog years which is ${myDogsAgeInHumanYears} years old in human years.`
  );
} else if (question == "human") {
  let myAge = prompt("How old are you?");
  let twoDogYearsToOneHumanYear = 10.5;
  let laterYears = myAge / twoDogYearsToOneHumanYear;

  myAgeInDogYears = laterYears * 1.8;
  myName = "Martin";
  alert(
    `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
  );
}
