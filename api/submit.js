export default function handler(req,res){
    if(req.method==="POST"){
        const {name, whatsapp, email, message} = req.body;

        const mensagem = `Novo formulário enviado por: \nNome: ${name}\nWhatsApp: ${whatsapp}\nEmail: ${email}\nMensagem: ${message}`;

        const linkWhatsApp = `https://wa.me/5581987023151?text=${encodeURIComponent(mensagem)}`;

        console.log("nome:",name);
        console.log("whatsapp:",whatsapp);
        console.log("email:",email);
        console.log("mensagem:",message);
        

        fetch(linkWhatsApp)  // Usamos o fetch para enviar para o WhatsApp sem redirecionar o usuário
        .then(response => response.json())
        .then(data => {
            console.log("Mensagem enviada para o WhatsApp:", data);
        })
        .catch(error => {
            console.error("Erro ao enviar para o WhatsApp:", error);
        });

        res.status(200).json({message: "Formulário enviado com sucesso!", link: linkWhatsApp});
    }else{

        res.status(405).json({message: "Método não permitido"})
    }

}



