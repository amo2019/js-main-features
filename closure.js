function makeGreeting(language) {
  return function (firstName, lastName) {
    if (language === "en") {
      console.log(`Hello ${firstName} ${lastName}`);
    }
    if (language === "de") {
      console.log(`Hallo ${firstName} ${lastName}`);
    }
  };
}

const englishGreeting = makeGreeting("en");
const spanishhGreeting = makeGreeting("de");

englishGreeting("Tom", "Hardy");
spanishhGreeting("Katherine", "Heiser");
