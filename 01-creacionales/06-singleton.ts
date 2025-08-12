/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

class DragonBalls {
  private static instance: DragonBalls;
  private balls: number;
  private constructor() {
    this.balls = 0;
  }

  public static getInstance(): DragonBalls {
    if (!DragonBalls.instance) {
      DragonBalls.instance = new DragonBalls();
      console.log("DragonBalls instance created");
    }
    return DragonBalls.instance;
  }

  collectBall(): void {
    if (this.balls < 7) {
      this.balls++;
      console.log(`Ball collected! Total balls: ${this.balls}`);
      return;
    }
    console.log("All Dragon Balls have been collected!");
  }

  getShenlong(): void {
    if (this.balls === 7) {
      console.log("Shenlong has been summoned!");
      this.balls = 0; // Reset after summoning
    } else {
      console.log(`You need ${7 - this.balls} more balls to summon Shenlong.`);
    }
  }
}

// Uso del Singleton
const db1 = DragonBalls.getInstance();
db1.collectBall();
const db2 = DragonBalls.getInstance();
db2.collectBall();
const db3 = DragonBalls.getInstance();
db3.collectBall();

const db4 = DragonBalls.getInstance();
db4.getShenlong();

const db5 = DragonBalls.getInstance();
db5.collectBall();

db5.collectBall();
db5.collectBall();
db5.getShenlong();

db1.collectBall();
db1.getShenlong();

db2.collectBall();