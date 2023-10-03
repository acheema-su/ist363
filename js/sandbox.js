//console.log("Sandbox.js is working");

const cars = [
    {
        name: 'Ford',
        price: 20000,
    },
    {
        name: "Chevy",
        price: 25000,
    },
    {
        name: 'Audi',
        price: 30000,
    },
    {
        name: 'BMW',
        price: 35000,
    },
    {
        name: 'Ferrari',
        price: 40000,
    },
]

//console.log({cars});

const filteredCars = cars.filter((car ) => {
    const { price } =  car;
    return cars.price > 25000;
});

console.log({filteredCars});
