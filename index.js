// Write your code here

// Create a class for Breakfast. Breakfast will have a constructor with a food and a drink.
class Breakfast {
    constructor(food,drink){
        this.food = food;
        this.drink = drink
    }
}


//Create a class for Lunch. Lunch will have a constructor with a salad, a soup, and a drink.

class Lunch{
    constructor(salad,soup,drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}


//Create a class for Dinner. Since dinner is a little bit fancier, Dinner will have a constructor with salad, soup, entree, and dessert. Initialize dessert as a private property by prefixing its name with the hash symbol (#).

class Dinner{
    #dessert;
    constructor( salad, soup, entree, dessert){
        this.#dessert = dessert
        this.salad = salad;
        this.entree = entree;
        this.soup = soup;
    }
}
