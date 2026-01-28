class Cat {
    constructor(name, breed, color) {
        this.name = name;
        this.breed = breed;
        this.color = color;
    }
    greeting() {
        console.log(`Hello, said ${this.name} the ${this.breed}.`);
    }
}

const cat = new Cat("Bertie", "Cymric", "white");
const cat2 = new Cat("Elfie", "Aphrodite Giant", "ginger");


// 以下のコードは編集しないでください。

cat.greeting();
cat2.greeting();