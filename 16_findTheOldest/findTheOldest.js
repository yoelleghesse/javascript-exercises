const findTheOldest = function(array) {
  let currentYear = new Date().getFullYear();

  // Compute age for each person and keep reference to person
  let oldestPerson = array.reduce((oldest, person) => {
    let age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    return age > oldest.age ? { person, age } : oldest;
  }, { person: null, age: 0 });

  return oldestPerson.person;
};

// Do not edit below this line
module.exports = findTheOldest;
