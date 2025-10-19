# 🎮 Simulador de Rotina - EdBlueTech 🚀

Bem-vindo ao **Simulador de Rotina**! Um jogo de aventura baseado em texto onde suas escolhas moldam seu destino. Criado como o Projeto 3 da EdBlueTech, este jogo desafia você a equilibrar a vida, o trabalho e os estudos para alcançar o sucesso. Você tem 14 dias para se tornar uma lenda... ou perder tudo.

## ✨ Funcionalidades

*   **🧠 Gerenciamento de Status:** Monitore sua **Energia**, **Inteligência** e **Dinheiro**. Cada decisão conta!
*   **⏳ Sistema de Tempo:** O tempo é seu recurso mais valioso. Use suas 24 horas com sabedoria.
*   **⚖️ Escolhas e Consequências:** Suas ações têm impacto direto no seu progresso. Não há caminho fácil para a glória!
*   **🎲 Eventos Aleatórios:** A sorte está lançada! Eventos inesperados podem te dar uma mãozinha ou te colocar em apuros.
*   **🏆 Múltiplas Condições de Vitória:** Acumule `100` de **Inteligência** ou **Dinheiro** para vencer.
*   **💀 Derrota Iminente:** Cuidado! Se qualquer um dos seus status chegar a `0`, o jogo acaba.

## 🚀 Como Jogar

Pronto para começar sua jornada? Siga os passos abaixo.

### Pré-requisitos

*   [Node.js](https://nodejs.org/) instalado.
*   O pacote `prompt-sync` (ele já está no `package.json`, então o `npm install` cuidará disso).

### Instalação

1.  **Clone o repositório** para sua máquina local.
    ```sh
    git clone <URL_DO_REPOSITORIO>
    ```
2.  **Entre na pasta** do projeto.
    ```sh
    cd Projeto-3--EdBlueTech-main
    ```
3.  **Instale as dependências** necessárias.
    ```sh
    npm install
    ```

### ▶️ Executando o Jogo

Para dar o pontapé inicial na sua nova vida virtual, rode o comando:

```sh
node projeto3.js
```

## 🕹️ Gameplay: As Regras do Jogo

Seu objetivo é claro: em **14 dias**, atinja `100` pontos de **Inteligência** ou `100` de **Dinheiro**.

A cada período do dia (Manhã, Tarde, Noite), você decidirá como investir seu tempo. Suas opções são:

*   **[1] Trabalhar 💼:** `+10 Dinheiro`, `-8 Tempo`, `-10 Energia`
*   **[2] Estudar 📚:** `+10 Inteligência`, `-8 Tempo`, `-10 Energia`
*   **[3] Vagabundar 🌴:** `+10 Energia`, `-8 Tempo`, `-10 Dinheiro`
*   **[4] Dormir 😴:** `+8 Tempo`, `+15 Energia`

Pense bem em cada passo. Uma única má decisão pode levar ao fim do jogo. Boa sorte!
