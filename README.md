# Repositório para a Realização da Atividade

## FASE 01
Nesta fase, iremos construir a primeira página de perfil do usuário utilizando apenas HTML. 

### Requisitos a serem atendidos:
1. Nome Completo
2. RA
3. Curso e Período Atual
4. Endereço Completo
5. E-mail
6. Foto de Perfil
7. UCs já cursadas
8. Breve descrição de seu perfil pessoal (Hobbies, Família, esportes, etc.)
9. Breve descrição de seu perfil profissional/acadêmico.
10. Link para seu LinkedIn e/ou outras redes sociais que queira incluir.

### Para acessar a Fase 1, consulte o arquivo `index.html`.


## FASE 01 - 1
Agora, para praticar nossa visualização e análise de layout, escolha 4 sites e, destes sites, escolha 2 áreas distintas. A tarefa será uma análise do conteúdo e da organização deles nos prints que você escolher e, com base nela, sugerir como montaria o HTML dessas páginas.

# Projeto de Criação de Componentes Web

Este projeto foi desenvolvido para replicar e praticar a construção de interfaces web baseadas em exemplos visuais de sites populares como **iFood**, **Netflix**, **Amazon**, **YouTube**, **Nike**, entre outros. Utilizamos **HTML**, **CSS** e **JavaScript** para recriar funcionalidades e estilos.

## Fases do Projeto

### Fase 1: Navbar de Navegação - iFood
Recriamos a barra de navegação do **iFood** com categorias como "Início", "Restaurantes", "Mercados", entre outras. A barra foi construída utilizando **HTML** e **CSS**, com ícones e links estilizados de forma semelhante ao iFood.

### Fase 2: Menu Dropdown - iFood
Implementamos um **menu suspenso (dropdown)** ao clicar no ícone de perfil. O menu contém opções como "Pedidos", "Meus Cupons", "Favoritos" e outras. A interação foi realizada utilizando **JavaScript** para abrir e fechar o menu.

### Fase 3: Barra de Pesquisa - Amazon
Recriamos a barra de pesquisa da **Amazon** com um seletor de categorias e um campo de busca. O layout foi estilizado para se parecer com a interface limpa e moderna do site da Amazon, utilizando **HTML** e **CSS**.

### Fase 4: Seleção de Endereço - Amazon
Criamos um modal para a **seleção de endereços**, similar à funcionalidade da Amazon. O modal exibe uma lista de endereços fictícios para que o usuário possa escolher ou inserir um novo CEP. Utilizamos **HTML**, **CSS** e **JavaScript** para o comportamento do modal.

### Fase 5: Navbar de Categorias - YouTube
Reproduzimos a barra de categorias de vídeos do **YouTube**. A barra é rolável horizontalmente e contém links para várias categorias como "Música", "Jogos", "Ao vivo", entre outras. Usamos **flexbox** para criar uma interface responsiva.

### Fase 6: Footer - Nike
Nesta fase, recriamos o **rodapé (footer)** do site da **Nike**, contendo seções de links úteis, informações sobre a empresa, redes sociais e formas de pagamento. O footer foi implementado com **HTML** e **CSS**, garantindo um layout organizado e compatível com boas práticas de design.

---

## Tecnologias Utilizadas

- **HTML5**: Estruturação dos componentes.
- **CSS3**: Estilização e layout dos elementos.
- **JavaScript**: Interatividade, como dropdowns e modais.
- **FontAwesome**: Ícones utilizados nas seções de redes sociais e botões.

---

## Como Executar o Projeto

1. Clone este repositório:
    ```bash
    git clone https://github.com/joaoalves70/Atividade-Faculdade.git
    ```

2. Abra os arquivos `.html` no navegador:
    - Cada fase do projeto possui um arquivo HTML independente. Basta abrir os arquivos no navegador para visualizar os diferentes componentes.

3. Para funcionalidades interativas (como dropdowns e modais), certifique-se de que o **JavaScript** está habilitado no navegador.

---

## Estrutura de Arquivos

```bash
/projeto-componentes-web
│
├── /assets             # Imagens e ícones utilizados
├── /css                # Arquivos de estilo (CSS)
├── /js                 # Arquivos JavaScript
├── navbar-ifood.html   # Navbar do iFood
├── dropdown-ifood.html # Menu Dropdown do iFood
├── searchbar-amazon.html # Barra de Pesquisa da Amazon
├── address-amazon.html # Seleção de Endereço da Amazon
├── navbar-youtube.html # Navbar de Categorias do YouTube
├── footer-nike.html    # Footer da Nike
└── README.md           # Documentação do projeto
