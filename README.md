## Loja_brinquedos 
## springboot desenvolvimento web 3


Projeto iniciado utilizando - Spring initializr

- Maven 
- Linguagem: Java
- Springboot - versao mais recente e estavel
- Packaging: Jar
- Java: 21

#Dependencias utilizadas no projeto 

- Spring Web: para criar endpoints da API REST
- Spring Data MongoDB: para manipulação do banco de dados 
- Lombok: Para facilitar a criação dos getters/setters automaticamnete


#Executando o Projeto

Execute como aplicação Java no Springboot para Buildar o projeto.
Depois execute como Spring Boot app, deve iniciar e criar o banco de dados MongoDB.
- Acesse http://localhost:8080 no seu navegador para ver a página da loja.

#Testar a API
Você pode usar o Postman para testar a API. Para adicionar produtos, faça uma requisição POST para http://localhost:8080/produtos

exemplo: 

>[!TIP]
>{
>    "nome": "Brinquedo A",
>    "descricao": "Descrição do Brinquedo A",
>    "preco": 99.99,
>    "imagemUrl": "https://example.com/imagem-a.jpg"
>}
