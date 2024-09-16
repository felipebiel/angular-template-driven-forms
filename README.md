# Angular Template Driven Forms

Esse projeto consiste na demonstração de alguns dos principais conceitos do Angular. O principal seria o uso do Template Driven Form para manipulação e validação de formulários.

Também utilizei pipes para formatação dos dados, services para o json placeholder, diretivas customizadas para validação síncrona e assíncrona e o uso da lib Angular Material para a parte visual.

![image](https://github.com/user-attachments/assets/48b1961f-547e-421f-be9d-0eb8046265ad)

## Rodando local com container  

> Requisitos: Docker e leitor de makefiles.  
> Porta exposta pelo container: 4200

Para rodar o ambiente de desenvolvimento , pela primeira vez execute:  

```shell
make setup
```  

Para rodar o ambiente em modo background:

```shell
make start
```

Para parar o container, execute:

```shell
make stop
```

Para excluir e limpar tudo relacionado aos containers

```shell
make clean-all
```

## Rodando local com npm ou Angular CLI

> Requisitos: Node >= 18 e Angular CLI 17.  

Para rodar o ambiente de desenvolvimento, pela primeira vez execute:  

```shell
npm install
```  

Compilar e rodar o servidor de desenvolvimento:  

```bash
npm run start
# or
ng serve
```


## Referências

Json Placeholder: https://jsonplaceholder.typicode.com/