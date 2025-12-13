// const findTheOldest = function(people) {
//     people = people.sort((a, b) => {
//         if (!('yearOfDeath' in a)) {
//             a.yearOfDeath = (new Date()).getFullYear();
//         }
//         if (!('yearOfDeath' in b)) {
//             b.yearOfDeath = (new Date()).getFullYear();
//         }
//         aAge = a.yearOfDeath - a.yearOfBirth;
//         bAge = b.yearOfDeath - b.yearOfBirth;
//         return aAge - bAge;
//     });
//     return 
// };

const people1 = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
const people2 = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
const people3 = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]


const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if (!('yearOfDeath' in person)) {
            person.yearOfDeath = (new Date()).getFullYear();
        }
        if (!('yearOfDeath' in oldest)) {
            oldest.yearOfDeath = (new Date()).getFullYear();
        }
        const personAge = person.yearOfDeath - person.yearOfBirth;
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        if (personAge > oldestAge) {
            return person;
        } else {
            return oldest;
        }
    });
}

// Do not edit below this line
module.exports = findTheOldest;
