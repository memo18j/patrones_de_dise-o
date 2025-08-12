/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface HotDog {
  prepare(): void;
}

interface Drink {
  serve(): void;
}

class VegetarianHotDog implements HotDog {
  prepare(): void {
    console.log("Preparando un hot dog vegetariano");
  }
}
class MeatHotDog implements HotDog {
  prepare(): void {
    console.log("Preparando un hot dog de carne");
  }
}

class Soda implements Drink {
  serve(): void {
    console.log("Sirviendo una soda");
  }
}
class Juice implements Drink {
  serve(): void {
    console.log("Sirviendo un jugo");
  }
}

interface FoodFactory {
  createHotDog(): HotDog;
  createDrink(): Drink;
}

class VegetarianFoodFactory implements FoodFactory {
  createHotDog(): HotDog {
    return new VegetarianHotDog();
  }
  createDrink(): Drink {
    return new Juice();
  }
}

class MeatFoodFactory implements FoodFactory {
  createHotDog(): HotDog {
    return new MeatHotDog();
  }
  createDrink(): Drink {
    return new Soda();
  }
}

function main(factory: FoodFactory) {
  const hotDog = factory.createHotDog();
  const drink = factory.createDrink();

  hotDog.prepare();
  drink.serve();
}

main(new VegetarianFoodFactory());
main(new MeatFoodFactory());
