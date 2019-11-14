const nodemailer = require('nodemailer');
var controller = {
    form: function ( req, res ) {
        const{ nombre, correo, telefono, mensaje } = req.body;

        contentHTML = ` 
            <h1>Información del contacto</h1>
            <ul>
                <li>Nombre: ${nombre}</li>
                <li>Email: ${correo}</li>
                <li>Telefono: ${telefono}</li>
            </ul>
            <p>Mensaje:<br>${mensaje}</p>
        `;
        console.log(contentHTML);

        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'gmccontactoweb@gmail.com', // generated ethereal user
                pass: 'Gmcltda2019' // generated ethereal password
            }
        });
    
        // send mail with defined transport object
        let mailOptions = {
            from: 'contactoWeb', // sender address
            to: 'limitadagmc62@gmail.com', // list of receivers
            subject: 'Consulta', // Subject line
            html: contentHTML
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                return console.log(error);

            }else{
                console.log('mensaje enviado'+ info.messageId);
                console.log()

            }
        })
    }
}
module.exports = controller;