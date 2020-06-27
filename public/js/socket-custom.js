var socket = io();

//escuchar informacion
socket.on('connect', function() {

    console.log('conectado al servidor');

});

socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

// para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Pedro Delgado',
    mensaje: 'Hola socket'
}, function(mensajeCB) {
    console.log('Se disparó el callBack', mensajeCB);

});

socket.on('enviarMensaje', function(mensaje) {

    console.log('servidor:', mensaje);

});