# Projeto de Experiência do Usuário

Projeto apresentado ao Centro Universitário [FEI](https://portal.fei.edu.br/), como parte dos requisitos necessários para aprovação na disciplina de Experiência do Usuário (CCP310) do curso de Ciencia da Computação, orientado pelo Prof. Dr. [Fagner de Assis Moura Pimentel](http://lattes.cnpq.br/6747210702910392).

Este projeto é desenvolvido pelos seguintes alunos:

- José Vinicius Garcia Rodrigues

**1. Breve descrição**

O AVL Control é uma aplicação web voltada ao gerenciamento de veículos locados utilizados na construção civil e em obras de infraestrutura. O sistema reúne informações da frota, movimentações financeiras, alocações em obras, manutenções e documentos, oferecendo duas perspectivas de utilização: a do locador, proprietário dos veículos, e a do locatário, empresa responsável pela operação nas obras.

**2. Objetivo**

O projeto tem como objetivo centralizar o controle financeiro e operacional da frota, facilitando o acompanhamento dos veículos durante sua utilização. Para o locador, o foco está no faturamento, nos recebimentos e nos custos por veículo. Para o locatário, a prioridade é organizar a disponibilidade, a distribuição dos veículos entre obras e a conferência de suas condições de uso.

**3. Usuário final**

O AVL Control destina-se a proprietários de caminhões e equipamentos, empresas locadoras, construtoras e organizações que executam obras de infraestrutura. Seus principais usuários são gestores de frota, profissionais administrativos e financeiros, responsáveis por manutenção e encarregados de obras.

**4. Principais benefícios para os usuários**

- **Centralização das informações:** reúne dados financeiros e operacionais em um único ambiente.
- **Maior controle financeiro:** facilita a identificação de despesas, faturamentos, recebimentos e parcelas vencidas.
- **Organização da operação:** permite acompanhar a disponibilidade dos veículos e seus vínculos com obras e motoristas.
- **Apoio à manutenção preventiva:** apresenta alertas de troca de óleo com base nas leituras e nos intervalos cadastrados.
- **Registro das condições dos veículos:** utiliza checklists de retorno para documentar avarias e encaminhar necessidades de manutenção.
- **Apoio à tomada de decisão:** apresenta indicadores, gráficos e relatórios para comparar custos e resultados.
- **Facilidade de acesso:** oferece interface adaptada a celulares e computadores, com recursos de navegação por teclado.

**5. Funcionalidades**

O sistema contempla:

- Painéis específicos para locador e locatário.
- Cadastro de veículos com fotos, identificação, categoria, ano, leitura de quilometragem ou horímetro e parâmetros de manutenção.
- Consulta individual de resultados financeiros, percursos registrados e histórico de manutenção.
- Cadastro de obras e motoristas.
- Alocação de veículos em obras, com registro do motorista responsável e das condições de saída.
- Finalização de rotinas e checklist de retorno, incluindo combustível, percurso, pneus, freios, iluminação, carroceria e fluidos.
- Encaminhamento de veículos com avarias para manutenção.
- Registro e conclusão de serviços de oficina, com atualização da referência de troca de óleo.
- Cadastro de categorias financeiras e lançamento de despesas.
- Cadastro de clientes, geração de faturamentos parcelados e registro de recebimentos parciais ou totais.
- Armazenamento local de canhotos e comprovantes.
- Relatórios com filtros, exportação em CSV e impressão ou geração de PDF pelo navegador.

**6. Tecnologias e ferramentas computacionais utilizadas**

A versão atual foi desenvolvida com **React e JavaScript**, utilizando componentes reutilizáveis para organizar páginas, formulários, tabelas e demais elementos da interface. O gerenciamento do estado utiliza recursos do React, como **Context API e Hooks**.

O projeto utiliza **Vite** para o ambiente de desenvolvimento e a compilação da aplicação, além de **Node.js e npm** para execução das ferramentas e gerenciamento das dependências. A estrutura visual utiliza **HTML semântico e CSS responsivo**, enquanto os gráficos e ícones são construídos em **SVG**.

Os dados do protótipo são armazenados no **localStorage** do navegador. A aplicação também utiliza recursos nativos para leitura de arquivos, processamento de imagens e exportação de relatórios.

A interface inclui navegação por **Tab e Shift+Tab**, ativação de botões por **Enter ou Espaço**, fechamento de janelas por **Escape**, indicação visual de foco e identificação dos campos dos formulários.

Nesta etapa, o sistema funciona como um **protótipo de front-end**, com acesso demonstrativo e armazenamento local. A integração com uma API, autenticação real e banco de dados compartilhado está prevista para uma etapa futura.

**7. Contexto de uso**

O AVL Control foi pensado para situações em que veículos e equipamentos circulam entre diferentes obras, exigindo acompanhamento de disponibilidade, responsáveis, despesas e condições de conservação.

No escritório, o locador pode consultar faturamentos, registrar recebimentos e analisar os gastos de cada veículo. Na operação, a empresa locatária pode organizar a distribuição da frota entre canteiros, indicar motoristas responsáveis e registrar o retorno dos veículos.

A proposta prioriza o uso pelo celular para facilitar os registros durante a rotina de trabalho, mantendo uma interface adequada ao computador para consultas, gestão financeira e análise de relatórios.

## Desenvolvimento

### Descoberta
- [Análise de Concorrência](docs/1_concorrencia.md)
- [Pesquisa e Coleta de Dados com Usuários](docs/2_pesquisa_usuarios.md)
- [Perfil do Usuário](docs/3_perfil_usuario.md)
- [Personas](docs/4_personas.md)
- [Cenário de Análise/Problema](docs/5_cenarios.md)

### Definição
- [Análise de Tarefas](docs/6_analise_tarefas.md)
- [Requisitos de UX e Metas de Usabilidade](docs/7_requisitos_ux.md)
- [Arquitetura de Informação e Fluxo do Usuário](docs/8_arquitetura_fluxo.md)

### Prototipação
- [Prototipação em Papel](docs/9_prototipacao_papel.md)
- [Prototipação de Alta Fidelidade (FIGMA)](docs/10_prototipacao_figma.md)

### Avaliação
- [Planejamento da Avaliação](docs/11_planejamento_avaliacao.md)
- [Avaliação de Usabilidade através de Inspeção Heurística](docs/12_heuristica.md)
- [Teste de Usabilidade com Observação do Usuário](docs/13_teste_usabilidade.md)
