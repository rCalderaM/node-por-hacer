const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require("yargs").
command("crear", "Crea un elemento por hacer", {
    descripcion
}).
command("actualizar", "Actualiza el estado completado de una tarea", {
    descripcion,
    completado
}).
command("eliminar", "Elimina una tarea", {
    descripcion
}).
help().
argv;

module.exports = {
    argv
}