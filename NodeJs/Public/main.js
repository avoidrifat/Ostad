const mongoBtn = document.getElementById('mongo');
const expressBtn = document.getElementById('express');
const reactBtn = document.getElementById('react');
const nodeBtn = document.getElementById('node');
const tech = document.getElementById('tech');

mongoBtn.addEventListener("click",()=>{
    tech.innerText='MongoDB';
});

expressBtn.addEventListener("click",()=>{
    tech.innerText='Express JS'
});

reactBtn.addEventListener("click",()=>{
    tech.innerText='React JS'
})

nodeBtn.addEventListener("click",()=>{
    tech.innerText='Node JS'
});