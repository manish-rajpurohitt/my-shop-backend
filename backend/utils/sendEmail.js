const nodemailer = require('nodemailer');

const sendEmail = (options) =>{
    const transpoter = nodemailer.createTransport({
        service : process.env.EMAIL_SERVICE,
        auth:{
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASS
        }
    })

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: options.to,
        subject: options.subject,
        html: options.text
    }

    transpoter.sendMail(mailOptions, function(err, info){
        if(err) console.log(err);
        else console.log(info);
    })
}

module.exports = sendEmail; 