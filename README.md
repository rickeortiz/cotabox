# Cotabox

## Inserir Usuário
* **Request**: /user
* **Método**: post
* **Descrição**: Insere dados do usuário com sua devida participação
* **Entrada**:
```javascript
{
  "FirstName": "string",
  "LastName": "string",
  "Participation": 0
}
```
* **Saída**:
```javascript
{
  "user":
    {
      "_ id": "string",
      "FirstName": "string",
      "LastName": "string",
      "Participation": 0
      "__v": 0
    }
}
```
* **Validações**:
  * Erro 400 - Usuário já existe ('User already exists')
  * Erro 400 - Falha no registro ('Registration failed')

## Selecionar Usuários
* **Request**: /user
* **Método**: get
* **Descrição**: Selecionar todos os usuários cadastrados
* **Saída**:
```javascript
{
  "users": [
    {
      "_ id": "string",
      "FirstName": "string",
      "LastName": "string",
      "Participation": 0
      "__v": 0
    }
  ]
}
```

## Deletar Usuário
* **Request**: /user
* **Método**: delete
* **Descrição**: Deleta o usuário da relação
* **Entrada**:
```javascript
{
  "FirstName": "string",
  "LastName": "string"
}
```
* **Saída**:
```javascript
{
  "retorno": "User has deleted"
}
```
* **Validações**:
  * Erro 400 - Usuário não existe ('User not exists')
  * Erro 400 - Falha na exclusão ('User can't be deleted')
