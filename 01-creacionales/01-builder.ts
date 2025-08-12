/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

class Computer {
  public cpu: string = "cpu - not defined";
  public ram: string = "ram - not defined";
  public storage: string = "storage - not defined";
  public gpu?: string;

  displayConfiguration() {
    console.log(`Computer Configuration:
        CPU: ${this.cpu}
        RAM: ${this.ram}
        Storage: ${this.storage}
        GPU: ${this.gpu ? this.gpu : "No GPU selected"}`);
  }
}


class ComputerBuilder {
  private readonly computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): this {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: string): this {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): this {
    this.computer.storage = storage;
    return this;
  }

  setGPU(gpu: string): this {
    this.computer.gpu = gpu;
    return this;
  }

  build(): Computer {
    return this.computer;
  }
}


function main(){
    const basicComputer:Computer = new ComputerBuilder()
        .setCPU("Intel i9")
        .setRAM("32GB")
        .setStorage("1TB SSD")
        .setGPU("NVIDIA RTX 3080")
        .build();

    basicComputer.displayConfiguration();

    const gamingComputer:Computer = new ComputerBuilder()
        .setCPU("AMD Ryzen 9")
        .setRAM("64GB")
        .setStorage("2TB SSD")
        .setGPU("NVIDIA RTX 3090")
        .build();

    gamingComputer.displayConfiguration();
}

main();
