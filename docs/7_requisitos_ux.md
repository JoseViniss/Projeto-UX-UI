**1. Características da Plataforma**

| Característica | Descrição |
| :---- | :---- |
| **Descrição do Software** | Sistema web de apoio à gestão de veículos locados e utilizados em obras. Reúne cadastro de veículos, alocação por obra e motorista, controle de leituras de horímetro ou odômetro, abastecimentos, documentos comprobatórios e informações financeiras. A interface deve permitir que locadores e locatários acompanhem suas atividades com clareza. |
| **Descrição do Hardware** | Computadores e notebooks para atividades administrativas; smartphones e tablets para consultas e registros em campo. Os dispositivos devem possuir navegador compatível, teclado e mouse ou tela sensível ao toque. Para fotografar canhotos, é necessária uma câmera; alternativamente, o usuário poderá selecionar um arquivo já existente. Os requisitos mínimos de processamento e memória deverão ser definidos por testes. |
| **Lista de Capacidades da Plataforma (com explicação)** | **Cadastro e consulta de veículos:** centralizar identificação, modelo e condições de utilização.<br>**Alocação em obras:** relacionar veículo, obra, motorista e leitura inicial.<br>**Registro de abastecimentos:** associar veículo, litros, valor e leitura do medidor.<br>**Anexação de canhotos:** vincular comprovantes aos registros para facilitar a conferência.<br>**Acompanhamento operacional e financeiro:** apresentar informações que apoiem o controle de utilização e despesas.<br>**Adaptação a diferentes telas:** organizar o conteúdo para uso administrativo e em campo.<br>**Acessibilidade como requisito:** permitir navegação por teclado, foco visível e identificação clara dos campos e comandos. |
| **Lista de Restrições da Plataforma (com explicação)** | **Armazenamento do protótipo documentado:** os dados ficam no navegador, com capacidade limitada e possibilidade de perda ao limpar os dados locais.<br>**Compartilhamento:** o armazenamento local não permite sincronização automática entre usuários e dispositivos.<br>**Segurança de acesso:** a seleção de perfis da demonstração não equivale a autenticação e autorização reais.<br>**Captura de imagens:** depende da câmera, das permissões e da compatibilidade do navegador; deve existir alternativa de envio de arquivo.<br>**Qualidade dos registros:** depende do preenchimento correto de valores, leituras e vínculos.<br>**Uso em campo:** telas pequenas, iluminação intensa e interrupções podem dificultar a interação e devem orientar o projeto da interface. |

*As limitações de armazenamento e acesso acima correspondem ao protótipo descrito no LEIA-ME; devem ser reavaliadas na versão integrada a servidor e banco de dados.*

**2. Princípios Gerais do Projeto**

As aplicações indicadas abaixo são requisitos do projeto e não uma declaração de conformidade já alcançada.

| Nome | Descrição | Link |
| :---- | :---- | :---- |
| **Descrição do Contexto** | O AVL Control atende locadores, gestores de frota e equipes administrativas e operacionais de empresas que utilizam veículos em obras. O uso ocorre tanto no escritório quanto em campo, exigindo registros rápidos, linguagem familiar e facilidade para consultar veículos, despesas e comprovantes. | — |
| **Lei Geral de Proteção de Dados — Lei nº 13.709/2018** | Orientar o tratamento de dados de motoristas, clientes e usuários. O projeto deve limitar a coleta ao necessário, informar a finalidade do uso e adotar medidas de proteção contra acesso indevido e perda de dados. [normas.leg.br](https://normas.leg.br/?urn=urn%3Alex%3Abr%3Afederal%3Alei%3A2018-08-14%3B13709%21art6\&utm_source=chatgpt.com) | [LGPD](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm) |
| **Lei da Acessibilidade — Lei nº 10.098/2000** | Estabelece critérios gerais para promoção da acessibilidade, incluindo a eliminação de barreiras na informação e comunicação. No projeto, fundamenta a busca por uma interface que permita utilização com autonomia por pessoas com diferentes capacidades. [www2.camara.leg.br](https://www2.camara.leg.br/legin/fed/lei/2000/lei-10098-19-dezembro-2000-377651-normaatualizada-pl.html?utm_source=chatgpt.com) | [Lei nº 10.098/2000](https://www.planalto.gov.br/ccivil_03/leis/l10098.htm) |
| **Lei Brasileira de Inclusão — Lei nº 13.146/2015** | Complementa a fundamentação da acessibilidade digital. Seu artigo 63 trata da acessibilidade em sites mantidos por empresas com sede ou representação no Brasil e por órgãos públicos. Deve orientar a disponibilização do sistema na web. [planalto.gov.br](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm?utm_term%5B0%5D=ppc\&utm_term%5B1%5D=totus\&utm_source=chatgpt.com) | [Lei Brasileira de Inclusão](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm) |
| **Ergonomia da interação humano-sistema — ISO 9241-11 e ISO 9241-210** | A parte 11 fornece a base conceitual para avaliar a usabilidade; a parte 210 orienta o projeto centrado no ser humano. No AVL Control, devem apoiar a compreensão das rotinas dos usuários, a avaliação das tarefas e o refinamento da interface. [Part 11: Usability: Definitions and concepts](https://www.iso.org/standard/63500.html?utm_source=chatgpt.com) | [ISO 9241-11](https://www.iso.org/standard/63500.html) e [ISO 9241-210](https://www.iso.org/standard/77520.html) |
| **Diretrizes de Acessibilidade para Conteúdo Web — WCAG 2.2** | Adotar o nível AA como objetivo de acessibilidade. Prever operação por teclado, foco visível, contraste adequado, rótulos nos campos e mensagens textuais para identificar erros. A conformidade deverá ser verificada por avaliação específica. [w3.org](https://www.w3.org/TR/wcag/?utm_source=chatgpt.com) | [WCAG 2.2](https://www.w3.org/TR/WCAG22/) |
| **Consistência e linguagem familiar** | Utilizar nomes próximos da rotina de trabalho, como “Veículos”, “Obras”, “Abastecimentos” e “Canhotos”. Manter posição, aparência e comportamento semelhantes para ações recorrentes, como salvar, editar e cancelar. | Requisito do projeto |
| **Visibilidade do estado do sistema** | Informar quando um registro estiver sendo processado, quando o salvamento terminar e quando ocorrer uma falha. Exibir claramente a situação do veículo e o resultado do envio de comprovantes. | Requisito do projeto |
| **Prevenção e recuperação de erros** | Validar campos obrigatórios, valores de abastecimento e coerência das leituras. Explicar como corrigir problemas e preservar os dados já preenchidos quando houver erro. Solicitar confirmação para ações destrutivas. | Requisito do projeto |
| **Redução do esforço de uso** | Organizar os formulários na sequência da atividade, oferecer seleção de veículos já cadastrados e evitar preenchimentos repetidos. Priorizar informações essenciais para tarefas realizadas em campo. | Requisito do projeto |

**3. Metas de Usabilidade**

**3.1. Qualitativo**

| Meta | Aplicação no AVL Control |
| :---- | :---- |
| **Facilidade de aprendizagem** | Permitir que novos usuários compreendam como cadastrar e alocar veículos, registrar abastecimentos e anexar canhotos com pouca orientação. |
| **Eficácia** | Possibilitar a conclusão correta das tarefas, mantendo o vínculo entre veículo, obra, motorista, abastecimento e comprovante. |
| **Eficiência** | Reduzir o tempo e o esforço necessários para registros frequentes, com formulários objetivos, busca e reaproveitamento de dados cadastrados. |
| **Prevenção de erros** | Ajudar o usuário a identificar informações incompletas ou incoerentes antes de salvar e corrigir problemas sem refazer toda a tarefa. |
| **Facilidade de memorização** | Permitir que usuários ocasionais retomem as atividades sem precisar reaprender os caminhos da interface. |
| **Acessibilidade** | Viabilizar as tarefas por teclado e tecnologias assistivas, com ordem lógica de navegação, foco visível e informações que não dependam apenas de cores. |
| **Satisfação e confiança** | Proporcionar uma experiência clara e previsível, na qual o usuário compreenda os resultados das ações e tenha confiança nos registros apresentados. |

**3.2. Quantitativo**

Para manter o **total de 100%**, a coluna “Porcentagem” representa o **peso de cada meta na avaliação**. Os critérios mensuráveis estão na justificativa. Substituí os valores do modelo para distribuir os pesos conforme as prioridades do sistema.

| Metas | Porcentagem | Justificativa |
| :---- | :---- | :---- |
| **Facilidade de aprendizagem** | 20% | Após uma orientação inicial de até 5 minutos, pelo menos **90% dos participantes** deverão cadastrar e alocar um veículo sem ajuda do avaliador. |
| **Eficácia na execução das tarefas** | 20% | Pelo menos **95% das tentativas** deverão concluir corretamente os fluxos de alocação e de abastecimento com canhoto, sem omissão de informações obrigatórias ou associação ao veículo errado. |
| **Eficiência operacional** | 15% | Pelo menos **90% dos participantes familiarizados** deverão registrar um abastecimento e anexar um canhoto em até **2 minutos**, com os dados e o arquivo previamente disponíveis. |
| **Prevenção e recuperação de erros** | 15% | O sistema deverá identificar **100% dos casos inválidos previstos no roteiro de teste**. Em pelo menos **90% das ocorrências**, o participante deverá corrigir o problema sem ajuda e sem perder os demais dados preenchidos. |
| **Facilidade de memorização** | 10% | Após **7 dias sem utilizar o sistema**, pelo menos **85% dos participantes** deverão repetir os fluxos principais sem orientação adicional. |
| **Acessibilidade das tarefas essenciais** | 10% | **100% das tarefas essenciais** deverão ser concluídas utilizando apenas o teclado, com foco visível e sem bloqueios de navegação. Esse teste é um recorte da avaliação de acessibilidade, não comprovação integral de conformidade. |
| **Satisfação do usuário** | 10% | Pelo menos **85% dos participantes** deverão atribuir nota **4 ou 5**, em uma escala de 1 a 5, à facilidade e à clareza de uso após executar as tarefas. |
| **Total** | **100%** | Distribuição dos pesos para a avaliação de usabilidade do AVL Control. |

Os testes deverão envolver representantes dos perfis de uso e registrar dispositivo, tempo, conclusão, erros e necessidade de ajuda. Os percentuais de desempenho serão calculados sobre os participantes ou tentativas indicados em cada critério.
