const { io } = require('../server')

io.on('connection', (client) => {

    console.log('usuario conectado');

    //enviar mensaje al cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    //escuchar Cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log('data ->', data);

        client.broadcast.emit('enviarMensaje', data)

        // if (mensaje.usuario) {

        //     callback({
        //         mensaje: 'recibido ' + mensaje.usuario
        //     });

        // } else {
        //     callback({
        //         mensaje: 'no recibido'
        //     });
        // }

    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');

    });


});