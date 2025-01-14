document.addEventListener("DOMContentLoaded", (load) =>{
    console.log("DOM Fully load and parsed")
});


//função de levar até a seção "sobre mim":
document.getElementById('about_me_button').addEventListener('click', function() {
    window.location.hash = 'about_me';
    document.getElementById('about_me').scrollIntoView();
});

//alteração da cor 1 ao passar o mouse:
document.getElementById('about_me_button').addEventListener('mouseover',function(){
    this.style.backgroundImage = 'radial-gradient(rgba(40, 179, 221, 1), rgba(50, 47, 47, 0.5))';
    this.style.color = 'rgb(255, 255, 255)';
});

//alteração da cor 2 ao passar o mouse no botão sobre mim:
document.getElementById('about_me_button').addEventListener("mouseout", function() {
    this.style.backgroundImage = 'radial-gradient(rgb(255, 255, 255), rgb(255, 255, 255))';
    this.style.color = 'rgb(0, 0, 0)';
});



// ========================COMANDOS ACIMA REFERENTE AO BOTÃO "SOBRE MIM"============================================

//função de levar até a seção de skills:
document.getElementById('skills_button').addEventListener('click', function(){
    window.location.hash = 'skills';
    document.getElementById('skills').scrollIntoView();
});

//alteração da cor 1 ao passar o mouse do botão de habilidades:
document.getElementById('skills_button').addEventListener('mouseover',function(){
    this.style.backgroundImage = 'radial-gradient(rgba(40, 179, 221, 1), rgba(50, 47, 47, 0.5))';
    this.style.color = 'rgb(255, 255, 255)';
});

//alteração da cor 2 ao passar o mouse do botão de habilidades:
document.getElementById('skills_button').addEventListener("mouseout", function() {
    this.style.backgroundImage = 'radial-gradient(rgb(255, 255, 255), rgb(255, 255, 255))';
    this.style.color = 'rgb(0, 0, 0)';
});

//função de aparecer as habilidades quando apertar o botão acionador de habilidades:
document.getElementById('btn_start_skills').addEventListener('click', function(){
    const skills_array = ["html_icon", "css_icon", "js_icon", "py_icon", "mysql_icon"];
    skills_array.forEach((id,index)=>{
        const skills = document.getElementById(id);
        setTimeout(() => {
           skills.style.display= 'block';
        }, index * 700);
    });
});


// ========================COMANDOS ACIMA REFERENTE AO BOTÃO "HABILIDADES"============================================


//função de levar até a seção "projeto":
document.getElementById('projects_button').addEventListener('click', function() {
    window.location.hash = 'projects';
    document.getElementById('projects').scrollIntoView();
});

//alteração da cor 1 ao passar o mouse:
document.getElementById('projects_button').addEventListener('mouseover',function(){
    this.style.backgroundImage = 'radial-gradient(rgba(40, 179, 221, 1), rgba(50, 47, 47, 0.5))';
    this.style.color = 'rgb(255, 255, 255)';
});

//alteração da cor 2 ao passar o mouse no botão sobre mim:
document.getElementById('projects_button').addEventListener("mouseout", function() {
    this.style.backgroundImage = 'radial-gradient(rgb(255, 255, 255), rgb(255, 255, 255))';
    this.style.color = 'rgb(0, 0, 0)';
});

// ========================COMANDOS ACIMA REFERENTE AO BOTÃO "HABILIDADES"============================================
