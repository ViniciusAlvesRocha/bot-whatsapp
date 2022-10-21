# Projeto WhatsApp que dá bom dia

Nesse projeto eu coloco em prática uma lib desenvolvida pela própria Google chamada [puppeteer](https://github.com/puppeteer/puppeteer).

Esse projeto vai ser a minha primeira aplicação em que eu crio um bot de um aplicativo. Isso significa que quero que venham outros uhuullll.

Para esse projeto você precisa criar um arquivo chamado: <PRE>'people.csv</PRE> com os números de telefone em que você quer mandar no formato CSV.

## Coisas que aprendi com a lib:

- **puppeteer.launch**: função para criar uma instância de um navegador
    - **headless**: Essa propriedade configura se você quer que o navegador mostra sua interface(false) ou se o bot deve rodar em background. 
    - **executablePath**: Por padrão, essa propriedade roda a versão aberta do Chrome, o Chromium. Caso você quiser rodar um navegado diferente do padrão, defina uma string com o caminho da instalação do seu navegador. O meu foi '/usr/bin/google-chrome'
    - **slowMo**: O programa executa as funções de maneira muito rápida, e, às vezes, a interface do WhatsApp demora a responder e começa a executar funções erradas. Basicamente essa propriedade executa um delay para executar essas ações.
- **page.setUserAgent**: Essa função tem uma string gigante e ela é muito importante para que o WhatsApp não te bloqueie('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36')
- **page.waitForNavigation**: Assim como a **slowMo** ajuda a "esperar" a interface responder, a **waitForNavigation** espera toda a interface do WhatsApp/aplicação carregar antes de começar a executar as funções.