var country = ['Bishkek', 'Los Angeles', 'Chicago', 'New York', 'Houston', 'Dallas', 'Philadelphia', 'Seattle'];
var sixLetterCountry = [];
var onlyS = [];
for(var i of country){
    if(i.length>6){
        sixLetterCountry.push(i)
    }
    for (var char of i) {
    if (char === "s" || char === "S") {
      onlyS.push(i)
        break
      }
    }
}
console.log(sixLetterCountry)
console.log(onlyS)