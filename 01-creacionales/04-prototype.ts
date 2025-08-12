/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */

class Document {
  constructor(
    public title: string,
    public content: string,
    public author: string
  ) {}

  clone(): Document {
    return new Document(this.title, this.content, this.author);
  }

  display(): void {
    console.log(`Title: ${this.title}`);
    console.log(`Content: ${this.content}`);
    console.log(`Author: ${this.author}`);
  }
}
function main() {
  const originalDoc = new Document(
    "Prototype Pattern",
    "This is a document about the Prototype design pattern.",
    "John Doe"
  );

  console.log({ originalDoc });
  originalDoc.display();

  const clonedDoc = originalDoc.clone();
  clonedDoc.title = "Cloned Prototype Pattern";
  console.log({ clonedDoc });
  clonedDoc.display();
}
main();
