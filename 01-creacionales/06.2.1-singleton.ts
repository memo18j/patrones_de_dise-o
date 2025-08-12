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

import { configManager } from "./singleton/config-manager.ts";


configManager.setConfig("apiUrl", "https://api.example.com");
configManager.setConfig("apiKey", "1234567890abcdef");
console.log(configManager.getConfig("apiUrl")); // "https://api.example.com"
console.log(configManager.getAllConfigs()); // { apiUrl: "https://api.example.com",