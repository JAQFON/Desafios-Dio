/*
 * 3/3 - Quanta Mandioca? 
 *
 * Desafio:
 * - Os meses de Junho e Julho são tradicionaismente conhecidos por todo Brasil 
 * por suas festas típicas, e para o grupo de amigos da Marlene não é diferente, 
 * toda segunda quinzena do mês de Julho ela e seus amigos se reunem para o tradicional 
 * mandiocada! Na festiva sempre se reúnem na casa da Marlene, o Chico, o Beto, o Bernardo,
 * a Marina e a Iara. E como não poderia ser diferente do prato principal dessa reunião é a
 * mandioca. Cada um deles vem de uma a dez porções de mandioca e eles sempre avisam a Marlene
 * com antecedência a respeito de nossas porções irão comer nesse dia. O tamanho da porção de
 * cada um é diferente, mas sempre são os mesmos. As porções são as seguintes (em gramas):
 *
 * O Chico come 300
 * O Bento come 1500
 * O Bernardo vem 600
 * A Marina 1000
 * A Iara come 150
 * 
 * Marlene por sua vez sempre vem 225 gramas de mandioca. Cansada de todo ano ter que calcular
 * quanta mandioca preparar ela te desafiou para escrever um programa que informe quanta mandioca 
 * deve ser preparada em gramas.
 * 
 * Entrada:
 * - A entrada consiste de 5 inteiros cada um representado como porções que as fontes de dona 
 * Chica vão consumir. O primeiro inteiro representa as porções do Chico, o segundo do Bento, o
 * terceiro do Bernardo, o quarto da Marina e o quinto a da Iara.
 * 
 * Saída:
 * - A saída consiste de um único inteiro que representa quanta mandioca Marlene deve preparar em gramas.
 */

deixe  chico  =  300 * parseInt ( gets ( ) ) ;
deixe  bento  =  1500 * parseInt ( gets ( ) ) ;
deixe  bernardo  =  600 * parseInt ( gets ( ) ) ;
deixe  marina  =  1000 * parseInt ( gets ( ) ) ;
deixe  iara  =  150 * parseInt ( gets ( ) ) ;
deixe  marlene  =  225 ;
deixe  total  =  chico  +  bento  +  bernardo  +  marina  +  iara  +  marlene ;
console . log ( total ) ; 