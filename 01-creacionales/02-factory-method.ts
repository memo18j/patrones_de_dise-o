/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

interface Hamburger {
  prepare(): void;
}

class ClassicHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparando una hamburguesa clásica.");
  }
}
class CheeseHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparando una hamburguesa con queso.");
  }
}
class VeganHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparando una hamburguesa vegana.");
  }
}

abstract class Restaurant {
  protected abstract createHamburger(): Hamburger;

  orderHamburger(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }
}

class ClassicRestaurant extends Restaurant {
  createHamburger(): Hamburger {
    return new ClassicHamburger();
  }
}

class CheeseRestaurant extends Restaurant {
  createHamburger(): Hamburger {
    return new CheeseHamburger();
  }
}

class  VeganRestaurant extends Restaurant {
  createHamburger(): Hamburger {
    return new VeganHamburger();
  }
}
// Uso del patrón Factory Method

function main() {
  let restaurant: Restaurant;

  const type = prompt("Que tipo de hamburguesa desea? (classic/cheese/vegan)");

  switch (type) {
    case "classic":
      restaurant = new ClassicRestaurant();
      break;
    case "cheese":
      restaurant = new CheeseRestaurant();
      break;
    case "vegan":
      restaurant = new VeganRestaurant();
      break;
    default:
      console.log("Tipo de hamburguesa no reconocido.");
      return;
  }

  restaurant.orderHamburger();
  // Cambia a "classic" para hamburguesa clásica
}
main();
