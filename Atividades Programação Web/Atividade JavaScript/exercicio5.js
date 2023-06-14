var frase = window.prompt("Digite uma frase: ");
    document.write(frase +  "<br>");
    tamanho = frase.length;

    for (let i = 0; i < tamanho;) {
        document.write("<br>Caractere na posição " + i + " : " + frase.charAt(i));
        i++;
    }

document.write("<br><br>Primeiro caractere: " + frase.charAt(0) + "</br>");
document.write("<br><br>Último caractere: " + frase.charAt(frase.length-1) + "</br>");