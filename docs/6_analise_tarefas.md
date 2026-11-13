## DOCUMENTAÇÃO DE ENGENHARIA DE USABILIDADE E ANÁLISE DE TAREFAS - AVL CONTROL

## 1. HTA (Hierarchical Task Analysis) — Operação de Frota em Obra

Funcionalidades cobertas: 
1. Cadastro e Alocação de Veículo em Obra
2. Registro de Abastecimento e Canhoto Digital

[0. Gerenciar Operação de Veículo Locado em Obra]
                                        Plano: 1 > 2
                                       /            \
                                      /              \
      [1. Cadastrar e Alocar Veículo em Obra]      [2. Registrar Abastecimento e Canhoto]
                 Plano: 1 > 2 > 3                             Plano: 1 > 2 > 3
                /        |        \                          /        |        \
               /         |         \                        /         |         \
[1.1 Acessar Módulo] [1.2 Preencher Dados] [1.3 Salvar]  [2.1 Abrir Financeiro] [2.2 Lançar Consumo] [2.3 Anexar Canhoto]
                         Plano: 1+2+3+4                                              Plano: 1+2+3           Plano: 1 / 2
                        /   |      |   \                                            /      |      \        /            \
                       /    |      |    \                                          /       |       \      /              \
         [1.2.1 Placa/Mod] [1.2.2 Horím.] [1.2.3 Obra] [1.2.4 Motorista]   [2.2.1 Veículo] [2.2.2 Litros/R$] [2.2.3 Odôm.]  [2.3.1 Capturar Câmera] [2.3.2 Upload Galeria]

## GOMS — Análise de BI e Regularização Documental

Funcionalidades cobertas: 
3. Geração e Exportação de Relatórios BI
4. Auditoria e Regularização de Documentação/Manutenção

- GOAL 0: Auditar Desempenho Financeiro e Regularidade da Frota no AVL Control

  - GOAL 1: Gerar e Exportar Relatório Gerencial de BI
    - GOAL 1.1: Acessar e Filtrar Painel de BI
      - METHOD 1.1.A: Acesso Direto pela Barra Inferior
        - (SEL. RULE: Usar quando o usuário já está navegando internamente e deseja abrir o BI).
        - OP. 1.1.A.1: Deslocar o polegar até a barra de navegação inferior.
        - OP. 1.1.A.2: Tocar no ícone da aba "BI / Relatórios".
        - OP. 1.1.A.3: Verificar o carregamento dos gráficos de barras e linhas.
      - METHOD 1.1.B: Acesso por Atalho de KPI na Dashboard
        - (SEL. RULE: Usar quando o usuário está na tela inicial e observa o card de resumo).
        - OP. 1.1.B.1: Localizar o card interativo "Custo Mensal / Relatórios" na Dashboard.
        - OP. 1.1.B.2: Tocar sobre o card para direcionamento automático ao módulo.

    - GOAL 1.2: Configurar Parâmetros e Exportar Arquivo
      - OP. 1.2.1: Tocar no seletor "Filtrar por Obra" e escolher o canteiro desejado.
      - OP. 1.2.2: Conferir a pré-visualização da tabela consolidada.
      - GOAL 1.2.3: Escolher Formato de Exportação
        - METHOD 1.2.3.A: Exportar em PDF
          - (SEL. RULE: Relatório para prestação de contas visual ou assinatura).
          - OP. 1.2.3.A.1: Tocar no botão azul "Exportar PDF".
          - OP. 1.2.3.A.2: Aguardar a confirmação do sistema.
        - METHOD 1.2.3.B: Exportar em Excel/CSV
          - (SEL. RULE: Análise contábil ou importação em ERP externo).
          - OP. 1.2.3.B.1: Tocar no botão verde "Exportar Excel".
          - OP. 1.2.3.B.2: Aguardar a conclusão do download da planilha.

  - GOAL 2: Verificar e Regularizar Pendências Documentais
    - GOAL 2.1: Identificar Alertas Críticos
      - OP. 2.1.1: Observar os badges de status na Dashboard ou aba "Docs".
      - OP. 2.1.2: Inspecionar visualmente os itens em vermelho ("Vencido") ou amarelo ("A Vencer").
    - GOAL 2.2: Atualizar Situação do Documento Pendente
      - METHOD 2.2.A: Renovar Documento Veicular (IPVA/Seguro/CRLV)
        - (SEL. RULE: Quando a pendência pertence ao cadastro legal do veículo).
        - OP. 2.2.A.1: Tocar no card do documento veicular sinalizado.
        - OP. 2.2.A.2: Inserir a nova data de validade e anexar o comprovante.
        - OP. 2.2.A.3: Tocar em "Confirmar Regularização" (badge altera para verde).
      - METHOD 2.2.B: Atualizar CNH de Motorista Alocado
        - (SEL. RULE: Quando o alerta aponta vencimento da habilitação do condutor).
        - OP. 2.2.B.1: Tocar no registro do motorista na lista de pendências.
        - OP. 2.2.B.2: Inserir a nova data de validade da CNH.
        - OP. 2.2.B.3: Tocar em "Salvar Atualização" para remover o alerta.
================================================================================
