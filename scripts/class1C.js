// Importar las clases necesarias
import { Class1CActor } from "./actor.js";
import { Class1CActorSheet } from "./character-sheet.js";

/**
 * Inicializa el sistema Class 1-C.
 */
Hooks.once("init", async function() {
  console.log("Class 1-C | Initializing the Class 1-C System");

  // Definir la configuración personalizada del sistema
  CONFIG.Actor.entityClass = Class1CActor;

  // Registrar la hoja de actor
  Actors.registerSheet("class1c", Class1CActorSheet, { makeDefault: true });

  // Pre-cargar plantillas HTML
  await loadTemplates([
    "systems/Hero-Class-1-C/templates/character-sheet.html",
  ]);

  // Añadir otras inicializaciones aquí, como registrar configuraciones o clases adicionales
});
