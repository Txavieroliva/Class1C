// Importar la clase de actor personalizada
import { Class1CActor } from "./actor.js";

/**
 * Clase para gestionar la hoja de personaje del sistema Class 1-C.
 * Extiende la clase base ActorSheet de Foundry VTT.
 */
export class Class1CActorSheet extends ActorSheet {
  /**
   * Define las opciones de configuración predeterminadas para la hoja de personaje.
   */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["class1c", "sheet", "actor"],
      template: "systems/Hero-Class-1-C/templates/character-sheet.html",
      width: 600,
      height: 600,
      resizable: false,
    });
  }

  /**
   * Prepara los datos de la hoja de personaje.
   * @returns {Object} Los datos procesados para la hoja.
   */
  getData() {
    // Obtener los datos base del actor
    const data = super.getData();

    // Procesar los datos adicionales aquí si es necesario
    // Puedes añadir lógica para calcular valores o agrupar datos
    return data;
  }

  /**
   * Configura los event listeners de la hoja de personaje.
   * @param {HTMLElement} html - El HTML renderizado de la hoja.
   */
  activateListeners(html) {
    super.activateListeners(html);

    // Asegurarse de que la hoja no sea de sólo lectura
    if (!this.options.editable) return;

    // Agregar listeners para los botones de acción
    html.find(".action-button").click(this._onActionButtonClick.bind(this));
  }

  /**
   * Maneja el evento de clic en un botón de acción.
   * @param {Event} event - El evento de clic.
   */
  _onActionButtonClick(event) {
    event.preventDefault();

    // Obtener el nombre de la acción desde el atributo data-action del botón
    const button = $(event.currentTarget);
    const actionName = button.data("action");

    // Llamar a la función de acción en el actor
    this.actor.performAction(actionName);
  }
}
