# Projeto didático para aprender sobre testes de performance #

## Tipos de testes não funcionais (Performance): ##

### Smoke test ###
Usamos esse tipo de abordagem para realizar verificações iniciais quanto a configuração do projeto, ou do teste em si, validando se os dados estão devidamente corretos e também validando se a URL foco está correta e funcional.

### Load test ###
Usamos esse tipo de aborgem para entender qual é o comportamento padrão que determinada URL consegue comportar. Por meio desse teste podemos verificar o cenário do dia a dia, levando em consideração o histórico de requisições simultâneas que determinada URL tem no dia a dia.

> Nesse tipo de teste, temos um tempo de RampUp, um tempo de Load e um tempo de RampDown (Sendo o RampUp e RampDown, uma porcentagem do tempo esperado para o tempo de Load, comumente usando 5% do valor do tempo do Load).

### Stress test ###
Usamos esse tipo de abordagem para verificar o comportamento da aplicação ao permanecer no seu limite de capacidade de requisições simultâneas por um determinado tempo. Dessa forma, conseguimos entender como a aplicação se comporta, e projetar melhorias para esses comportamentos.

> Esse tipo de teste segue o mesmo padrão do teste de carga (Load), mas foca na capacidade máxima da aplicação.

### Spike test ###
Usamos esse tipo de abordagem para simular situações de pico de requisições, visando entender o que ocorreria com a aplicação nessas situações e também usando esses dados para planejar ações para apoiar a aplicação caso ocorra.

> Esse tipo de teste pode simular, por exemplo, tentativas de ataques contra a aplicação.

### Breakpoint test ###
Usamos esse tipo de abordagem para entender quando a aplicação começa a retornar falhas para o volume de requisições simultâneas. Com esse tipo de teste podemos entender os limites da aplicação e também conseguimos planejar ações que ocorrem próximas, ou a partir desse limite.

### Soak test ###
Usamos esse tipo de abordagem para verificar o comportamento da apliacação mediante um volume constante de requisições por um longo tempo. Assim conseguimos identificar as falhas ocasionadas pelo longo tempo de exposição que a aplicação teve.

> Esse tipo de teste lembra bastante o teste de carga (Load), mas é usado para entender se existe e quais seriam os problemas em um caso de exposição muito longa da aplicação a um volume de requisições simultâneas.