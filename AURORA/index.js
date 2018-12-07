function sendEmail () {

    //obter valores das caixas de texto
    const name= document.querySelector("#txtName").value
    const message= document.querySelector("#txtMessage").value
    const group= document.querySelector("#selectGroup").value

    //incializar o componente Emails
    emailjs.init("user_HAQZo9MIQ4bBhdySPkLwO")

const template_params = {
    "reply_to": "reply_to_value",
    "from_name": name,
    "message_html": message,
    "to_group": group,
}

const service_id = "default_service"
const template_id = "template_r9fCSp8w"
emailjs.send(service_id,template_id,template_params)

    console.log ("Olá " + name)
}