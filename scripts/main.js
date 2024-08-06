// Este hook se activa cuando Foundry VTT se inicializa
Hooks.once("init", function() {
    console.log("Class 1-C | Iniciando el sistema de rol");
  
    // Registrar una hoja de personaje personalizada para los actores de tipo 'character'
    Actors.registerSheet("Hero-Class-1-C", Class1CActorSheet, { makeDefault: true });
  
    // Cargar plantillas HTML específicas para el sistema
    loadTemplates([
      "systems/Hero-Class-1-C/templates/character-sheet.html"
    ]);
  });
  
  // Definir una clase para la hoja de personaje personalizada
  class Class1CActorSheet extends ActorSheet {
    // Especificar el archivo de plantilla que se usará para esta hoja de personaje
    get template() {
      return "systems/Hero-Class-1-C/templates/character-sheet.html";
    }
  
    // Obtener los datos para esta hoja de personaje
    getData() {
      const data = super.getData();  // Obtener datos del actor base
      data.attributes = this.actor.data.data.attributes;  // Acceder a los atributos del actor
      return data;
    }
  }