function isleapYears(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  }
  return false;
}

module.exports = isleapYears;
