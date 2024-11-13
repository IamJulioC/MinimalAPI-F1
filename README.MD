<div align="center">

  <img src="./.github/assets/f1minimallogo.png" alt="Logo" height="200">
  <h1 align="center"><strong>Minimal API Fórmula 1</strong></h1>

</div>

<br />

Esta API Fastify fornece uma interface simples para acessar informações sobre equipes e pilotos de Fórmula 1.

**Recursos:**

* Lista todas as equipes de Fórmula 1.
* Lista todos os pilotos de Fórmula 1 com suas respectivas equipes.
* Recupera informações sobre um piloto específico por ID.

**Instalação:**

1. Faça o clone deste repositório ou baixe o código.
2. Instale as dependências necessárias:

   ```bash
   npm install fastify @fastify/cors
   ```

**Executando a API:**

1. Inicie o servidor:

   ```bash
   node server.js
   ```

2. A API estará escutando na porta `3333`.

**Endereços (URLs):**

* **GET /equipes:** Retorna um array com todas as equipes de Fórmula 1 em formato JSON (código de status: 200).
  * Exemplo de resposta:

  ```json
  [
    {
      "id": 1,
      "nome": "McLaren",
      "sede": "Woking, Reino Unido"
    },
    ... (outras equipes)
  ]
  ```

* **GET /pilotos:** Retorna um array com todos os pilotos de Fórmula 1 com informações de suas equipes em formato JSON (código de status: 200).
  * Exemplo de resposta:

  ```json
  [
    {
      "id": 1,
      "nome": "Max Verstappen",
      "equipe": "Red Bull Racing"
    },
    ... (outros pilotos)
  ]
  ```

* **GET /pilotos/:id:** Recupera informações sobre um piloto específico por sua ID (código de status: 200).
  * Parâmetro de caminho:
    * `id`: O identificador único do piloto (string).
  * Exemplo de resposta (para uma ID válida):

  ```json
  {
    "id": 1,
    "nome": "Max Verstappen",
    "equipe": "Red Bull Racing"
  }
  ```

  * Exemplo de resposta (para uma ID inválida):

  ```json
  {
    "mensagem": "Piloto não encontrado"
  }
  ```  (código de status: 404)

**CORS:**

Esta API permite Compartilhamento de Recursos de Origem Cruzada (CORS) por padrão. Você pode configurar opções de CORS adicionais usando o plugin `@fastify/cors`.

**Licença:**

Este projeto está licenciado sob a (insira a licença desejada aqui).

**Contribuindo:**

Seja bem-vindo para contribuir! Consulte o arquivo CONTRIBUTING.md para obter detalhes.
