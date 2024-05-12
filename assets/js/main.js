const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');
const inputBoxError=document.getElementById('input-box-error');
const body=document.querySelector('body');
function addTask(){
    if(inputBox.value==='')
        {
            inputBoxError.innerHTML='you must write something!';
        }
        else{
            let li=document.createElement('li');
            li.innerHTML=inputBox.value;
            listContainer.appendChild(li);
            let span=document.createElement('span');
            span.innerHTML='\u00d7';
            li.appendChild(span);
            inputBoxError.innerHTML='';
        }

            inputBox.value='';
            saveExistData();
    }
inputBox.addEventListener('input', function(e) {
    if (inputErrorBox.innerHTML !== '') {
        inputErrorBox.innerHTML = '';
    }
}, false);
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        saveExistData();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveExistData();
    }
},false);
body.addEventListener('load',function(e){
    listContainer.innerHTML=localStorage.getItem("data");
},false)
function saveExistData(){
     localStorage.setItem("data",listContainer.innerHTML);   
}
document.addEventListener('DOMContentLoaded', function(e) {
    listContainer.innerHTML = localStorage.getItem("data") || ''; // Load data from local storage
}, false);
