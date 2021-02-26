//John has bought a new house and found a diary of previous house owner, describing a single trip. Also there were tickets inside with source and destination points, but without dates.
//Help John finding original route of the trip.

//TASK: Write a function that adccepts array of tickets, where ticket has format[source:string,destination:string] and returns comma seperated countries in order of visiting.
//tickets:[["JPN,"PHL"],["BRA","UAE"],["USA","BRA"],["UAE","JPN"]]
// result: "USA,BRA,UAE,JPN,PHL"

let tickets = [
  ["JPN","PHL"],
  ["BRA","UAE"],
  ["USA","BRA"],
  ["UAE","JPN"]
];

const firstPoints = tickets.map((i) => i[0]);
const secondPoints = tickets.map((i) => i[1]);

const inceptionPoint = firstPoints.filter((country) => !secondPoints.includes(country))[0];

let way = [inceptionPoint];
let now = inceptionPoint;

while(way.length < tickets.length +1) {
  tickets.map((countries) => {
    if(countries[0] == now){
      now = countries[1];
      way.push(now);
    }
  });
}

console.log(way);
way.reverse();
console.log(way);






