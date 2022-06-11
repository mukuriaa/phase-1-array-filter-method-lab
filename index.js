// Code your solution here
const  findMatching = function (test, drivers){
    return test.filter(match => match.toLowerCase()=== drivers.toLowerCase())
    }


const fuzzyMatch = (test, drivers) => {
   return test.filter((nam) => nam.slice(0, 2) == drivers.slice(0, 2))
}
const matchName = function (test, drivers){
    return test.filter(record => record.name === drivers)
    }