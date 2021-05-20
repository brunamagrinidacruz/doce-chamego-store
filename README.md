Bruna Magrini da Cruz, 11218813  
Marlon José Martins, 10249010  
Wellington Matos Amaral, 11315054  

Projeto para matéria de Introdução ao Desenvolvimento Web (SCC0219) para o curso de Ciências de Computação da USP São Carlos.

# Loja da Doce Chamego

O sistema é um site para venda de cones trufados, festas na caixa e outros doces. Os cones trufados são vendidos em diferentes formatos: cone simples, cone cascão, cone na caixa e cone comemorativo (páscoa, natalino, dia das crianças, entre outros). As festas na caixa são produtos com  tema pré-definido (café da manhã, quitutes, caixa bar, vinho, petiscos, entre outros) ou podem ser montadas pelo cliente, escolhendo assim seus itens e decoração. Além disso, a empresa vende doces diversificados em datas específicas do ano.  

## Requisitos

- O sistema deve acomodar dois tipos de usuários: clientes e administradores;
    - Os administradores são responsáveis por registrar e gerenciar administradores, clientes e produtos. A aplicação deve começar com uma conta *admin* com senha *admin*;
    - Os clientes são usuários que acessam o sistema para comprar produtos;
- O sistema deve permitir que um administrador cadastre outro. As informações armazenadas sobre um administrador são: *CPF*, *nome*, *telefone*, *e-mail*, *cargo* (podendo ser dono ou vendedor) e *senha*;
- O sistema deve permitir que um cliente se cadastre no mesmo. As informações armazenadas sobre um cliente são: *CPF*, *nome*, *endereço*, *telefone*, *e-mail* e *senha*;
- O sistema deve permitir que o administrador cadastre, consulte, atualize e remova produtos. As informações armazenadas sobre um produto são: *id*, *nome*, *foto*, *descrição*, *preço*, *quantidade em estoque* e *quantidade vendida*. O sistema possui dois tipos de produto: cones trufados e festas na caixa;
    - Cada cone trufado cadastrado possui diferentes sabores associados. Tais sabores devem ser cadastrados previamente no sistema (leite ninho, nutella, brigadeiro, maracujá, sensação, ovomaltine, limão, paçoca, prestígio, entre outros);
    - Cada festa na caixa possui diferentes itens associados. Tais itens devem ser cadastrados previamente no sistema (refrigerante, suco, doces, bolos, salgados, entre outros). Além disso, a festa na caixa possui um *tamanho* (pequeno, médio ou grande); 
- O sistema deve permitir a venda dos produtos. Para cada produto vendido, a *quantidade vendida* deve ser incrementada e *quantidade em estoque* decrementada conforme a quantidade vendida. Uma venda não pode ser realizada caso não haja a quantidade em estoque necessária;
- O sistema deve conter um carrinho, no qual os produtos selecionados estarão listados com as informações de *nome*, *foto*, *descrição*, *preço* e quantidade selecionada. Além disso, deve ser mostrado o preço total associado a todos os itens. Os carrinhos serão limpos apenas no pagamento ou pelos clientes;
- A venda deve ser paga com um cartão de crédito (qualquer número é aceito pelo sistema);
- O sistema deve permitir a montagem de uma festa na caixa personalizada. Através desta funcionalidade o cliente pode definir quais serão os itens que compõem a festa na caixa e a sua decoração (cores e enfeites). Além disso, será possível ver o valor total da festa na caixa costumizada;   
- [?] O sistema deve permitir a listagem das compras realizadas pelo usuário;
- O sistema deve fornecer requisitos de acessibilidade e fornecer boa usabilidade. O sistema deve ser responsivo.

## Descrição 

A plataforma foi implementada com HTML5 e CSS3.

### Usuários

O sistema conta com dois tipos de usuários: administrador e cliente.   
<img alt="MER dos Usuarios" src="./img/documentacao/mer-usuario.jpeg" width="300">  
Com a classificação de níveis hierárquicos é possível definir quais operações um determinado usuário pode realizar.  
Além disso, o sistema conta com o "usuário" não cadastrado, que representa um usuário que não possui associação com a plataforma e não pode realizar operações além de consulta na plataforma.

### Produtos

O sistema permite a venda de 3 modalidades de produtos: cones, festas na caixa e outros.  
<img alt="MER dos Produtos" src="./img/documentacao/mer-produto.jpeg" width="300">  

### Regiões da Aplicação

**Tela inicial**  
Ao acessar a plataforma, o usuário é levado para a tela inicial.   
A partir dessa tela, o usuário consegue visualizar os produtos a venda. Além disso, é possível visualizar informações sobre a empresa (descrição e contato).  
Utilizando o menu do sistema, o usuário consegue realizar login na plataforma e, quando logado, consegue acessar seu carrinho se cliente.

**Tela de login**  
Na tela de login, o usuário consegue se cadastrar ou entrar na plataforma.   
O cadastro na tela de login é realizado por usuários do tipo cliente. 
Para acessar a plataforma, o usuário deve informar o *e-mail* e *senha* cadastrados.  
Após o acesso a plaltaforma, clientes e administradores possuem acesso a funcionalidades distintas.

## Comentários Sobre o Código

## Teste

[?] Os testes da aplicação front-end serão realizados utilizando `Jest` (https://pt-br.reactjs.org/docs/testing.html).

Os testes da aplicação back-end serão realizados utilizado `Postman`, `curl` e/ou `REST Client for Visual Studio Code`.

### Plano de Teste

### Resultados dos Testes

## Processo de Execução

Para a execução do sistema é necessário abrir o arquivo `index.html` no navegador.

## Problemas

## Comentários

