const { response } = require('express'); /*Para incluir uma biblioteca, ou seja, módulo, utilize o "require()"
e dentro dos parênteses coloque entre aspas simples o módulo que queremos incluir*/

const express = require('express'); //inclui o módulo "express" e guarda na constante "express".
const cors = require('cors');
const { push } = require('methods');
const app = express();
app.use(express.json());
app.use(cors());

let array1 = [

cão1 = {raça: "Rottweiller", nome: "Hulk", idade: "1", sexo: "masculino"},
cão2 = {raça: "Golden", nome: "Marney", idade: "5", sexo: "masculino"},
cão3 = {raça: "Pastor belga malinois", nome: "Princesa", idade: "1", sexo: "feminino"}

];

app.listen(process.env.PORT || 3000);

app.get('/', (req1, res1) => {

res1.send("Após a barra digite o mensagem para ver os cães cadastrados.");
    
});
    
app.get('/mensagem', (req4, res4) => {
    
res4.send(array1);
    
});
    
app.get('/:id', (req2, res2) => {
    
const id = req2.params.id - 1;
const mensagem = array1[id];
    
if(id > 2) {
    
res2.send("Os dados não foram encontrados");
    
}
    
else {
    
res2.send(mensagem);
    
}
    
});
    
app.get('/mensagem/:id', (req4, res4) => {
    
const id = req4.params.id - 1;
    
if(id > 2) {
    
res4.send("Os dados não foram encontrados");
        
}
        
else {
        
res4.send(array1.filter(Boolean));
        
}
    
});
    
app.post('/mensagem', (req4, res4) => {
    
console.log(req4.body.mensagem);
const mensagens = req4.body;
array1.push(mensagens);
res4.send("Mensagem incluida com sucesso");
    
});
    
app.put('/mensagem/:id', (req4, res4) => {
    
const id = req4.params.id - 1;    
const mensagens = req4.body;
array1[id] = mensagens; 
res4.send("Mensagem atualizada com sucesso");
    
});
    
app.delete('/mensagem/:id', (req4, res4) => {
    
const id = req4.params.id - 1;
const mensagens = req4.body;
delete array1[id];
res4.send("Mensagem deletada com sucesso");
    
});