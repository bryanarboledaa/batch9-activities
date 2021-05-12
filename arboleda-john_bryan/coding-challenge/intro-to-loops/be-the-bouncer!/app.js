const nightClubRegister = [
    {
        name: 'Tony',
        lastname: 'Stark',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Harry',
        lastname: 'Potter',
        age: 16,
        gender: 'male'
    },
    {
        name: 'Hermione',
        lastname: 'Granger',
        age: 17,
        gender: 'female'
    },
    {
        name: 'Steve',
        lastname: 'Rogers',
        age: 62,
        gender: 'male'
    }
]

for (let i = 0; i < nightClubRegister.length; i++) {

    if (nightClubRegister[i].age < 18) {
        if(nightClubRegister[i].gender === 'male') {
            console.log('Sorry Mr ' + nightClubRegister[i].name + ', we cannot let you in because you are underage');
        }
        else if(nightClubRegister[i].gender === 'female') {
            console.log('Sorry Mrs/Ms ' + nightClubRegister[i].name + ', we cannot let you in because you are underage');
        }
    }
    else if(nightClubRegister[i].gender === 'male') {
        console.log('Hi Mr ' + nightClubRegister[i].name + ' thank you for coming!');
    }
    else if (nightClubRegister[i].gender === 'female') {
        console.log('Hi Mrs/Ms ' + nightClubRegister[i].name + ' thank you for coming!');
    }
}
