var myPetsArray = [
    {
        
        anymalType: "Dog",
        name: ["Pujdo"]
    },
    {
        
        anymalType: "Cat",
        name: ["Maca"]
    },
    {
        
        anymalType: "Brid",
        name: ["Tweety"]
    }
];

function myPetsFunction(pets) {
return myPetsArray[1].name[0];
}
console.log(myPetsFunction(myPetsArray));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;