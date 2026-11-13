# Projeto de Experiência do Usuário

Projeto apresentado ao Centro Universitário [FEI](https://portal.fei.edu.br/), como parte dos requisitos necessários para aprovação na disciplina de Experiência do Usuário (CCP310) do curso de Ciencia da Computação, orientado pelo Prof. Dr. [Fagner de Assis Moura Pimentel](http://lattes.cnpq.br/6747210702910392).

Este projeto é desenvolvido pelos seguintes alunos:

- José Vinicius Garcia Rodrigues

# Documentação do Projeto: AVL Control

### 1. Breve Descrição

O **AVL Control** é uma plataforma digital de alta fidelidade voltada para a gestão inteligente de frotas de veículos locados. Focada no segmento de construção civil e grandes obras, a aplicação centraliza o controle operacional, financeiro, logístico e documental de máquinas pesadas, caminhões e veículos utilitários em um ambiente integrado, responsivo e de fácil navegação (mobile-first).

### 2. Objetivo

Automatizar e simplificar a administração de frotas locadas para o setor de construção civil, reduzindo custos operacionais, otimizando o tempo de maquinário em campo, garantindo conformidade documental (IPVA, seguros, CNHs e canhotos) e oferecendo visibilidade em tempo real por meio de indicadores de BI (Business Intelligence) para empresas locadoras e locatários.

### 3. Usuário Final

* **Empresa Locadora:** Gestores de frota, administradores financeiros e equipes de logística que precisam monitorar o status dos veículos, faturamento, manutenções preventivas/corretivas e a regularidade de toda a documentação.
* **Locatários / Gestores de Obra:** Encarregados de canteiro, engenheiros civis e supervisores de obra que necessitam registrar abastecimentos, controlar o uso por horímetro/hodômetro, alocar motoristas e gerenciar a entrega e o recebimento de canhotos.

### 4. Principais Benefícios para os Usuários

* **Visibilidade Total:** Monitoramento em tempo real da distribuição da frota entre diferentes frentes de obra.
* **Redução de Despesas:** Controle rigoroso de abastecimentos e manutenções para evitar ociosidade e gastos excessivos com corretivas imprevistas.
* **Conformidade Documental:** Alertas visuais automatizados para evitar vencimentos de documentos veiculares e CNHs de motoristas.
* **Agilidade Operacional:** Interface otimizada para dispositivos móveis, permitindo lançamentos rápidos direto do canteiro de obras.
* **Tomada de Decisão Baseada em Dados:** Gráficos e relatórios gerenciais consolidados para análise de custos por obra e consumo de combustível.

### 5. Funcionalidades

* **Tela de Login Dual Role:** Autenticação simulada com controle de acesso diferenciado para Empresa e Locatário.
* **Dashboard Executiva & BI:** KPIs interativos, gráfico de rosca de status da frota e atalhos de navegação rápida.
* **Gestão de Veículos (CRUD):** Cadastro completo, alteração de status (*Disponível*, *Em Obra*, *Manutenção*), hodômetro/horímetro atual e alocação por obra.
* **Gestão de Obras e Motoristas:** Cadastro de novas obras, alocação de motoristas vinculados com registro de CNH e histórico de atribuições.
* **Controle Financeiro e de Combustível:** Lançamento de abastecimentos e despesas operacionais (peças, pedágios, seguros) com filtros por categoria e obra.
* **Controle de Manutenções:** Acompanhamento de manutenções preventivas e corretivas com alertas por quilometragem ou período.
* **Canhotos e Documentação:** Módulo de controle de comprovantes de entrega e regularidade de documentos com badges de status (OK, a vencer, vencido).
* **Gerador de Relatórios e Exportação:** Visualização de dados tabulares e simulação de exportação para PDF e Excel com gráficos dinâmicos (Chart.js).

### 6. Tecnologias e Ferramentas Computacionais Utilizadas

* **Front-end:** HTML5, CSS3 e JavaScript Vanilla (Single Page Application - SPA).
* **Estilização e Layout:** Tailwind CSS (utilizado via CDN com customização de paleta de cores em tons de azul e verde para design system).
* **Visualização de Dados e Gráficos:** Chart.js para renderização de gráficos de barras, linhas e rosca.
* **Ícones e Componentes visuais:** FontAwesome e interface baseada em conceitos modernos de UX/UI focados em **Mobile-First**.
* **Arquitetura (Preparação Futura):** Desenvolvido em estrutura modular com estado em memória (`state store`), preparado para futura integração com back-end em PHP, Python ou Spring Boot e persistência com React.

### 7. Contexto de Uso

O sistema é utilizado tanto em escritórios centrais (por gestores de frota e analistas financeiros avaliando o desempenho e os custos globais da locação) quanto diretamente nos canteiros de obras (por motoristas e encarregados utilizando smartphones e tablets para registrar abastecimentos, atualizar hodômetros, anexar canhotos de entrega e solicitar manutenções de forma instantânea).

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
