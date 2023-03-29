// Code your solution here
function findMatching(drivers,str){
    const listL = drivers.filter((driver)=>driver.name===str.charAt(0).toLowerCase()+str.slice(1));
  const listU = drivers.filter((driver)=>driver.name===str.charAt(0).toUpperCase()+str.slice(1));
  let result=[];
  listU.forEach((driver)=>result.push(driver.name));
  listL.forEach((driver)=>result.push(driver.name));
  return result;
}
function fuzzyMatch(drivers,str){
  const matchingDrivers = drivers.filter((driver) => driver.name.startsWith(str));
  let result=[];
  matchingDrivers.forEach((driver)=>result.push(driver.name));
  return result;
}
function matchName(drivers,str){
    return drivers.filter((driver) => driver.name === str)
}