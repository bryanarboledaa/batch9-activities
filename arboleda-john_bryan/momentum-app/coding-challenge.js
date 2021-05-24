function addressMaker({city, address}) {
    const newAddress = {
        city,
        street,
        country: 'Philippines'
    };
    console.log(newAddress);
}

addressMaker({city: 'Quezon', street: 'Ortigas Avenue'});


const students = [
    {name: "Manny", city: "Manila"},
    {name: "Jose", city: "Intramuros"},
    {name: "Ana", city: "Mandaluyong"}
]

for(const student of students) {
    console.log(`${student.name} lives in ${student.city}`)
}




let store = (food = "something") => { 
    console.log(`I'm going to buy ${food}`)
} 
store();


