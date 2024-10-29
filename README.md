
**Loja de Brinquedos** é um projeto de desenvolvimento web utilizando **Spring Boot**. O projeto foi iniciado com o **Spring Initializr** e utiliza as seguintes tecnologias: **Java**, **JavaScript**, **HTML**, **CSS**, **MongoDB** e **Spring Boot**.

### Dependências
- **Spring Web**: Criação de endpoints da API REST.
- **Spring Data MongoDB**: Manipulação do banco de dados.
- **Lombok**: Facilitação na criação de getters/setters automaticamente.

### Execução
Para executar o projeto, inicie como uma aplicação Java no Spring Boot. Acesse `http://localhost:8080` para visualizar a página da loja.

### Teste da API
Utilize o Postman para testar a API. Exemplo de requisição POST para adicionar produtos:
```json
{
    "nome": "Brinquedo A",
    "descricao": "Descrição do Brinquedo A",
    "preco": 99.99,
    "imagemUrl": "https://example.com/imagem-a.jpg"
}
```

---

