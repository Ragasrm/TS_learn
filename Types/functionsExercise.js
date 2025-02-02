// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"
// twoFer() => "One for you, one for me"
function twoFer(person) {
    if (person === void 0) { person = "you"; }
    return "one for ".concat(person, ", one for me");
}
//console.log("twoFer", twoFer())
function twoFers(person) {
    if (person === void 0) { person = "you"; }
    //return `one for ${person}, one for me`
}
console.log("twoFer", twoFers());
// twoFer("Elton") => "One for Elton, one for me"
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false
// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo
