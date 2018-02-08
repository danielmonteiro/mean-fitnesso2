var keystone = require('keystone');
var Contact = require('./../../models/contact');
var ses = require('node-ses');
var client = ses.createClient({ key: process.env.AWS_SECRET_ACCESS_KEY, secret: process.env.AWS_ACCESS_KEY_ID });

var htmlEmailTemplateInit = `
  <html>
    <body style="background: #E5E5E5; padding-bottom: 30px; font-size: 16px;">
      <div style="background: white; margin: 0 10%; padding: 15px 30px 20px; border-top: solid 10px #ffc107;">
`;
var htmlEmailTemplateEnd = `
      </div>
    </body>
  </html>
`;

exports = module.exports = function (req, res) {

	Contact.create(req.body, function (err, contact) {
		if (err) {
			return res.status(500).json({
				message: 'Não foi possível salvar os dados do formulário de contato',
				error: err,
			});
		}

		var heard = '';
		if (req.body.heard) {
			heard = `<p><strong>Como você nos conheceu?</strong> ${req.body.heard}</p>`;
		}

		var reply = '';
		if (req.body.reply) {
			reply = `<p><strong>Como você prefere que entremos em contato?</strong> ${req.body.reply}</p>`;
		}

		var emailContent = htmlEmailTemplateInit;
		emailContent += `
			<p><strong>Nome:</strong> ${req.body.name}</p>
			<p><strong>E-mail:</strong> ${req.body.email}</p>
			<p><strong>Telefone:</strong> ${req.body.phone}</p>
			${heard}
			${reply}
			<p><strong>Mensagem:</strong> ${req.body.message}</p>`;
		emailContent += htmlEmailTemplateEnd;

		// Envia email
		client.sendEmail({
			to: 'danielpinhomonteiro@gmail.com',
			from: 'danielpinhomonteiro@gmail.com',
			subject: 'Studio Fitness O2 - Novo contato recebido',
			message: emailContent,
		}, function (err, data, result) {
			if (err) {
				return res.status(500).json({
					message: 'An error occurred on sending email',
					error: err,
				});
			}
			res.status(200).json({
				message: 'Os dados do formulário foram salvos com sucesso!',
				obj: contact,
			});
		});
	});
};
