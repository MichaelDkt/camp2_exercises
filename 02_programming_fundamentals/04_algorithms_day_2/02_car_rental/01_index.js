const driver = {
  driverLicense: "B1",
  licenseIssued: new Date().getFullYear() - 10, // 10 years old license
  numberOfAccident: 0,
  bonus: 0.8,
};

// Write a function canRentACar:
// * Input: a driver
// * Output: a boolean if the driver can rent a car

function canRentACar(driver) {
  const licenseOK = ["B", "B1"].includes(driver.driverLicense);
  const dateOK = driver.licenseIssued <= new Date().getFullYear() - 2;
  const accidentsOK = driver.numberOfAccident === 0;
  const bonusOK = driver.bonus >= 0.7;

  return licenseOK && dateOK && (accidentsOK || bonusOK);
}
// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = canRentACar
