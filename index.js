//RESUELVE LOS EJERCICIOS AQUI//
//01//
let numbers = [4, 5, 6, 7, 8, 9, 10]
const elevados = (numbers) => {
    return numbers.map((elemento) => {Math.pow(elemento, elemento)})
}

//02//
let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']
let result2 = foodList.map((elemento) => {
    if (elemento === 'Pizza') {
        return `Como soy de Italia, amo comer ${elemento}`
    } else if (elemento === 'Ramen') {
        return `Como soy de Japón, amo comer ${elemento}`
    } else if (elemento === 'Paella') {
        return `Como soy de Valencia, amo comer ${elemento}`
    } else if (elemento === 'Entrecot') {
        return `Aunque no como carne, el ${elemento} es sabroso`
    }
})

//03//
let staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
]
staffDescriptions = staff.map((elemento) => {
    let result3 = `${elemento.name} es ${elemento.role} y le gusta ${elemento.hobbies.join(' y ')}`
    return result3;
})

//04//
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let result4 = numbers2.filter((number) => number % 2 !== 0);

//05//
let foodList2 = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }
]
let result5 = foodList2
    .filter(elemento => elemento.isVeggie)
    .map(elemento => `Que rica ${elemento.name} me voy a comer hoy!`)

//06//
let inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a Cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
]
let result6 = inventory.filter(elemento => elemento.price > 300).map(elemento => elemento.name);

//07//
let numeros3 = [39, 2, 4, 25, 62];
let result7 = numeros3.reduce((acc, current) => acc * current)

//08//
const sentenceElements = [
    'Me',
    'llamo',
    'Stephani',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];
let result8 = sentenceElements.reduce((acc, curr)=>`${acc} ${curr}`);

//09//
const books = [
    {
        name: ' JS for dummies',
        author: 'Emily A. Vander Veer',
        price: 20,
        category: 'code'
    },
    {
        name: 'Don Quijote de la Mancha',
        author: 'Cervantes',
        price: 14,
        category: 'novel'
    },
    {
        name: 'Juego de tronos',
        author: 'George R. Martin',
        price: 32,
        category: 'Fantasy'
    },
    {
        name: 'javascript the good parts',
        author: 'Douglas Crockford',
        price: 40,
        category: 'code'
    }
];

const result9 = books
.filter(elemento=>elemento.category==='code')
.map(elemento=>elemento.price)
.reduce((acc,curr) => acc+curr)
