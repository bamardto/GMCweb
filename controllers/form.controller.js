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
            host: 'mail.gtd.cl',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'bastian.mardones@eatri.cl', // generated ethereal user
                pass: 'bmardones123' // generated ethereal password
            }
        });
    
        // send mail with defined transport object
        let mailOptions = {
            from: '"NodeMailer:" bastian.mardones@eatri.cl', // sender address
            to: 'bamardto@gmail.com', // list of receivers
            subject: 'node contact ✔', // Subject line
            text: 'Hello world?', // plain text body
            html: contentHTML
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                return console.log(error);

            }
            console.log('mensaje enviado', info.messageId);
            console.log()
        })
    }
}
module.exports = controller;