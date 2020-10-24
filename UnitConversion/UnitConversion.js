const unitSystem = require('./unitSystem.json')
const data = require('./data.json')


function convert () {
    let system;
    const out = []
    data.forEach(oneObj => {
       system = Object.keys(unitSystem).filter(str =>
            str.includes(oneObj.distance.unit) && str.includes(oneObj.convert_to))[0]
        if (oneObj.distance.unit === system.match(/[^_]+/g)[0]) {
           const value = +oneObj.distance.value * unitSystem[system];
            out.push({
                unit: oneObj.convert_to,
                value
            })
        } else {
            const value = +oneObj.distance.value / unitSystem[system];
            out.push({
                unit: oneObj.convert_to,
                value
            })
        }
    })
    return out

}

console.log(convert())