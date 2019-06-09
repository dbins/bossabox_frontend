FORMAT: 1A
HOST: http://127.0.0.1:3000

# API VUTTR

API do challenge de Frontend da BossaBox

# Group API

## Sobre [/]

API fake feita com json.server!

# Group Tools

## Tools [/tools]

### Listar Tools [GET]

- Request (application/json)
  
  
- Response 200 (application/json)

  - Attributes (array[ToolResponse])
  
  - Body
  
			[
				{
					"id": 1,
					"title": "Hello, world!",
					"link": "Hello, world!",
					"description": "Hello, world!",
					"tags": [
					  "Hello, world!"
					]
				},
				{
					"id": 2,
					"title": "Hello, world!",
					"link": "Hello, world!",
					"description": "Hello, world!",
					"tags": [
					  "Hello, world!", "Hello, world!"
					]
				}
			]
			

### Criar Tools [POST]

- Request (application/json)

	- Headers

			Authentication: Bearer JWT

	- Attributes (Tool)
	
	- Body
	
			{"title": "Teste", "link": "http://www.google.com.br", "description":"Teste do Bins", "tags": ["tag1", "tag2", "tag3"] }

- Response 200 (application/json)
  
  - Attributes (ToolResponse)
  
  - Body 
  
			{
				"id": 1,
				"title": "Teste do Bins", 
				"link": "http://www.google.com.br", 
				"description":"Teste do Bins", 
				"tags": ["tag1", "tag2", "tag3"] 
			}
			
- Response 404 (application/json)
  
  - Attributes (MessageExiste)
  
  - Body

			{"message":"Tool já existe"}

# Group Tool

## Tool [/tool/{id_tool}]


### Excluir Tool [DELETE]

- Parameters
		
	- id_tool: 1 (number, required) - ID da tool

- Request (application/json)

	- Headers

			Authentication: Bearer JWT

- Response 200 (application/json)

	- Attributes (MessageExcluido)
	
	- Body
			
			{"message":"Registro excluído"}
			
- Response 404 (application/json)
  
  - Attributes (MessageID)
  
  - Body
		
			{"message":"ID não localizado"}


# Data Structures


## MessageExiste (object)

- message: Tool já existe (string) - Retorno da operação

## MessageID (object)

- message: ID não localizado (string) - Retorno da operação

## Message403 (object)

- message: Usuário já existe (string) - Retorno da operação

## Message404 (object)

- message: Usuário não encontrado (string) - Retorno da operação

## MessageExcluido (object)

- message: Registro excluído (string) - Retorno da operação

## Message401 (object)

- message: Senha incorreta (string) - Retorno da operação


## Tool (object)

- title: Teste (string) - Nome da Tool
- link: http://www.google.com.br(string) - Link
- description: Teste (string) - Descrição
- tags: ["tag1", "tag2", "tag3"] (array[string]) - Array de strings com o nome das tags

## ToolResponse (object)

- id: 1 (number) - ID do registro
- title: Teste (string) - Nome da Tool
- link: http://www.google.com.br (string) - Link
- description: Teste (string) - Descrição
- tags: ["tag1", "tag2", "tag3"] (array[string]) - Array de strings com o nome das tags