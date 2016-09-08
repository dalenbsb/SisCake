# Exemplo de um Crud
	Crud Angular (Spring MVC + Rest + Angularjs)

# Executado no Eclipse
	Necessário a instalação dos plugins do Eclipse Jetty e do Run-jetty-Run
	
# Banco de dados (H2) - (pode ser substituido por outro, mas estou usando esse)
	Necessário configurar o banco antes de rodar a aplicação.
	As configurações estão no arquivo persistence.xml .
	Para executar o h2-1.4.185.jar é muito simples, caso esteja no windows, apenas de 2 clicks e ele ira abrir no brownser. Se você estiver usando Linux, execute o comando java -jar h2-1.4.185.jar que ele ira abrir o brownser.

# Maven 3.1.1
	Configure o maven no Eclipse.
	Execute o maven com o seguinte comando: mvn clean package.
	
# Rodando o projeto
	Click com o botão direito no projeto --> Debug As --> Run With Jetty
