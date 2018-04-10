var Tony = {
    firtname: 'Tony',
    lastname:'Alice',
    address: {
        street:'111 Main St.',
        city:'New York',
        state: 'NY'
    }
};

function greet(person){
    console.log('Hi' + person.firtname);
}

greet(Tony);

greet({
    firtname:'Mary',
    lastname:'Doe'
});

Tony.address2={
    street:'333 second St.'
}