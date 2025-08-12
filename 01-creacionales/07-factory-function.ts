/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 *
 */

type Language = "en" | "es" | "fr";

function createGreeter(language: Language) {
   return function (name:string){
    const msgs = {
        en: `Hello, ${name}!`,
        es: `¡Hola, ${name}!`,
        fr: `Bonjour, ${name}!`,
    }
    return console.log(msgs[language] ?? 'unknown language');
   }
}

const greetInEnglish = createGreeter("en");
greetInEnglish("John"); // "Hello, John!"
