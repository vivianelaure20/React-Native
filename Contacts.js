const NUM_CONTACTS = 1000;

const firstNames = [
  "Emma",
  "Noah",
  "Olivia",
  "Liam",
  "Ava",
  "William",
  "Sophia",
  "Mason",
  "Isabella",
  "James",
  "Mia",
  "Benjamin",
  "Layla",
  "Anthony",
  "Eleanor",
  "Jaxon",
  "Skylar",
  "Levi",
  "Ellie",
  "Nathan",
];

const lastNames = [
  "Smith",
  "Jones",
  "Brown",
  "Johnson",
  "Williams",
  "Edwards",
  "Morris",
  "Mitchell",
  "Bell",
  "Ward",
  "Watson",
  "Morgan",
  "Davies",
  "Cooper",
  "Phillips",
  "Rogers",
  "Gray",
  "Hughes",
  "Harrison",
  "Carter",
];

// generate a random number between min and max
const rand = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// generate a name
const generateName = () =>
  `${firstNames[rand(firstNames.length - 1)]} ${
    lastNames[rand(lastNames.length - 1)]
  }`;

// generate a phone number
const generatePhoneNumber = () =>
  `${rand(999, 100)}-${rand(999, 100)}-${rand(9999, 1000)}`;

// create a person
const createContact = () => ({
  name: generateName(),
  phone: generatePhoneNumber(),
});

// compare two contacts for alphabetizing
export const compareNames = (contact1, contact2) =>
  contact1.name > contact2.name;

// add keys to based on index
const addKeys = (val, key) => ({ key, ...val });

// create an array of length NUM_CONTACTS and alphabetize by name
export default Array.from({ length: NUM_CONTACTS }, createContact).map(addKeys);
