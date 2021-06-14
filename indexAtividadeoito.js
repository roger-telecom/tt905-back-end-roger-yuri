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

res1.send(array1.filter(Boolean));
    
});

app.get('mensagem/', (req1, res1) => {

res1.send(array1.filter(Boolean));

});

app.get('mensagem/:id', (req2, res2) => {

const id = req2.params.id - 1;
const mensagem = array1[id];

if(id > 2) {

res2.send("Os dados não foram encontrados");

}

else {

res2.send(mensagem);

}

});