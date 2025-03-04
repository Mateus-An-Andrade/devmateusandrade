export default function handler(req,res){
    if(req.method==="POST"){
        const {name, whatsapp, email, message} = req.body;

        console.log("nome:",name);
        console.log("whatsapp:",whatsapp);
        console.log("email:",email);
        console.log("mensagem:",message);
        

        res.status(200).json({message: "Formulário enviado com sucesso!"});
    }else{

        res.status(405).json({message: "Método não permitido"})
    }
}