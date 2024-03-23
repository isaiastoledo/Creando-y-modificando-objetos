// Definición del objeto Paciente
function Paciente(nombre, rut, edad, genero, historiaMedica) {
    this.nombre = nombre;
    this.rut = rut;
    this.edad = edad;
    this.genero = genero;
    this.historiaMedica = historiaMedica;
  }
  
  // Implementación de getters y setters para Paciente
  Paciente.prototype.getNombre = function () {
    return this.nombre;
  };
  Paciente.prototype.setNombre = function (nombre) {
    this.nombre = nombre;
  };
  
  Paciente.prototype.getRut = function () {
    return this.rut;
  };
  Paciente.prototype.setRut = function (rut) {
    this.rut = rut;
  };
  
  Paciente.prototype.getEdad = function () {
    return this.edad;
  };
  Paciente.prototype.setEdad = function (edad) {
    this.edad = edad;
  };
  
  Paciente.prototype.getGenero = function () {
    return this.genero;
  };
  Paciente.prototype.setGenero = function (genero) {
    this.genero = genero;
  };
  
  Paciente.prototype.getHistoriaMedica = function () {
    return this.historiaMedica;
  };
  Paciente.prototype.setHistoriaMedica = function (historiaMedica) {
    this.historiaMedica = historiaMedica;
  };
  
  // Método para buscar pacientes por nombre
  Paciente.prototype.buscarPorNombre = function (nombre) {
    return this.nombre === nombre ? this : null;
  };
  
  // Método para mostrar todos los pacientes
  Paciente.prototype.mostrarTodos = function () {
    console.log("Lista de pacientes:");
    console.log("Nombre\tRUT\tEdad\tGénero\tHistoria Médica");
    console.log("---------------------------------------------");
    console.log(`${this.nombre}\t${this.rut}\t${this.edad}\t${this.genero}\t${this.historiaMedica}`);
  };
  
  // Instanciación de objetos Paciente
  const paciente1 = new Paciente("Juan Pérez", "12345678-9", 30, "Masculino", "Alergia a botar la basura");
  const paciente2 = new Paciente("María González", "98765432-1", 25, "Femenino", "Alergia al pedir perdon");
  
  // Uso de los métodos
  paciente1.mostrarTodos();
  paciente2.mostrarTodos();
  
  console.log("\nBuscando paciente por nombre:");
  const pacienteEncontrado = paciente1.buscarPorNombre("Juan Pérez");
  if (pacienteEncontrado) {
    console.log("Paciente encontrado:");
    console.log(pacienteEncontrado);
  } else {
    console.log("Paciente no encontrado.");
  }
  