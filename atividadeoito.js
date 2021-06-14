let url = "https://tt905-rogermascarenhas.herokuapp.com/mensagem"

async function callFetchWithGet(){

let headers = new Headers();
    
const options = {
        
method : 'GET',
mode: 'cors',
headers: headers
    
}
    
const output = document.getElementById("json");
    
const response = await fetch(url, options);

if (response.status >= 200 && response.status <= 300){
    
console.log("Está funcionando");
    
output.innerHTML = await response.text(); //O text é assíncrono.
    
} else {
        
console.log("Não está funcionando");
    
}

}

