// Definir y exportar la clase Class1CActor que extiende de Actor
export class Class1CActor extends Actor {
    /**
     * Prepara los datos del actor, incluyendo el cálculo de atributos derivados.
     */
    prepareData() {
      // Llamar al método de preparación de datos del Actor base
      super.prepareData();
  
      // Obtener los datos del actor
      const actorData = this.data;
      const data = actorData.data;
  
      // Calcular atributos derivados
      this._calculateDerivedAttributes(data);
    }
  
    /**
     * Calcula los atributos derivados a partir de los atributos base del actor.
     * @param {Object} data - Datos del actor.
     */
    _calculateDerivedAttributes(data) {
      // Calcular el daño basado en el atributo Power
      data.attributes.damage = data.attributes.power.value * 2;
  
      // Calcular la defensa total sumando AC y Cooperativeness
      data.attributes.totalDefense = data.attributes.ac.value + data.attributes.cooperativeness.value;
  
      // Calcular la resistencia máxima basada en otros atributos, por ejemplo:
      data.attributes.maxStamina = (data.attributes.speed.value + data.attributes.technique.value) / 2;
  
      // Ajustar Health para que no supere el máximo
      if (data.attributes.health.value > data.attributes.health.max) {
        data.attributes.health.value = data.attributes.health.max;
      }
  
      // Ajustar Stamina para que no supere el máximo
      if (data.attributes.stamina.value > data.attributes.maxStamina) {
        data.attributes.stamina.value = data.attributes.maxStamina;
      }
    }
  
    /**
     * Realiza una acción específica del actor.
     * @param {String} actionName - Nombre de la acción a realizar.
     */
    performAction(actionName) {
      console.log(`Performing action: ${actionName}`);
      
      // Implementar la lógica de la acción basada en el nombre
      switch(actionName) {
        case "attack":
          this._performAttack();
          break;
        case "defend":
          this._performDefense();
          break;
        case "specialAbility":
          this._useSpecialAbility();
          break;
        // Añadir más casos para otras acciones según sea necesario
        default:
          console.log("Acción desconocida");
      }
    }
  
    /**
     * Lógica para realizar un ataque.
     */
    _performAttack() {
      // Calcular el daño del ataque
      const damage = this.data.data.attributes.damage;
      console.log(`Attack deals ${damage} damage.`);
  
      // Aquí podrías añadir lógica para aplicar el daño a un objetivo
      // Por ejemplo, encontrar el objetivo y restarle el daño a su salud
    }
  
    /**
     * Lógica para realizar una defensa.
     */
    _performDefense() {
      // Calcular la defensa total
      const defense = this.data.data.attributes.totalDefense;
      console.log(`Defense total is ${defense}.`);
  
      // Añadir lógica para modificar el estado del actor en función de la defensa
      // Por ejemplo, reducir el daño entrante basado en la defensa
    }
  
    /**
     * Usar una habilidad especial del actor.
     */
    _useSpecialAbility() {
      console.log("Using special ability...");
  
      // Implementar la lógica de la habilidad especial
      // Esto podría implicar modificar atributos, lanzar un hechizo, etc.
    }
  }