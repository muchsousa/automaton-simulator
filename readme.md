# Simulador de Autômato Finito Determinístico - AFD

Trabalho proposto na disciplina de Complexidade de Algoritmos e Análise de Desempenho - Unilasalle para revisão de conceitos.

[Revisão de Conceitos - Complexidade de Algoritmos e Análise de Desempenho](https://rafaeljeffman.com/teaching/lasalle/lectures/analise-algoritmos/lecture-02)

Implemente um simulador de autômatos finitos determinísticos, sendo que a entrada para o programa é dada por um arquivo no formato:

```
    q0
    a b
    q0 q1 q2 q3
    q1 q3
    q0 q1 a
    q1 q1 a
    q1 q2 b
    q2 q1 b
    q2 q3 a
```
onde:

- Linha 1 define o estado inicial
- Linha 2 define os símbolos do alfabeto
- Linha 3 define o conjunto de estados
- Linha 4 define o conjunto de estados finais
- Linhas 5 fim do arquivo definem as transições entre os estados

Após ler o arquivo, o usuário deve entrar com uma palavra (via teclado), e o programa deve responder com “Aceita”, casa a palavra seja aceita pela linguagem definida pelo autônome, ou “Rejeita”, caso contrário.


# Utilização

Executar o comando ```node ./index.js <<filename>``` indicando o nome do arquivo com as definições do automato conforme descrito acima, após executado o comando informar a palavra que será validada via teclado.

```bash 
node index.js AFD_example_01.txt
# Which word do you want to validate? aaabbba
# The automaton ACCEPT this word
```

