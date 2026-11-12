# AVL Control — protótipo v3

## Abrir
Mantenha index.html, style.css e script.js juntos e abra index.html no navegador.
Não há dependências de CDN: os estilos, ícones e gráficos funcionam offline.
Para testar sempre na mesma origem, também é possível usar um servidor estático local.
A tela de acesso é uma simulação: não valida e-mail ou senha. Escolha Locador ou Locatário.

## O que foi implementado
- Painéis distintos por perfil, indicadores por período e gráficos ligados aos registros.
- Comparação de faturamento e gastos por veículo, evolução mensal, categorias de despesa e alertas de óleo.
- Lista de veículos com busca, filtros, foto principal e página de detalhes.
- Cadastro com até quatro fotos (JPG/PNG/WebP), identificação, categoria, ano, medidor, manutenção e cliente atual.
- Locador: status Locado, Disponível, Manutenção e Necessita manutenção. A locação é indicada pelo cliente vinculado.
- Locatário: alocação em obra com motorista, data, leitura e combustível inicial.
- Retorno preserva o histórico e cria checklist pendente. Veículo operacional retorna ao pátio como disponível, mas não pode iniciar outra saída sem conferência.
- Checklist valida percurso, volumes de combustível, pneus, freios, luzes, carroceria e fluidos. Avaria abre solicitação na oficina.
- Concluir uma manutenção libera o veículo se não houver outro serviço impeditivo; a opção de troca de óleo atualiza a leitura da última troca.
- Cadastro de clientes e categorias, despesas, faturamentos parcelados mensais, recebimentos parciais e quitação.
- Canhotos com anexo real local (imagem/PDF até 1 MB), download e observações. Vencimentos de documentos demonstrativos são calculados pela data.
- Onze relatórios com filtros, exportação CSV e impressão/PDF.
- Desktop com menu lateral e grades; celular com navegação inferior e disposição em coluna. Zoom permitido.

## Como validar um fluxo
1. Entre como Locatário, abra Veículos e use a Hilux disponível.
2. Clique em Alocar em obra; informe obra, motorista, leitura e combustível de saída.
3. Finalize a rotina com leitura igual ou maior e uma data válida.
4. Confira o checklist. Consumo = combustível inicial + abastecido − combustível final.
5. Marque uma avaria e descreva-a: o veículo passa a Necessita manutenção, com uma ordem na Oficina.
6. Conclua a ordem e, se aplicável, marque troca de óleo.
7. Entre como Locador. Cadastre um cliente e vincule-o ao veículo em Editar.
8. No Financeiro, gere um faturamento com parcelas e registre uma baixa parcial.
9. Consulte os relatórios de faturamentos, recebimentos e parcelas vencidas. A exportação usa os mesmos filtros da tabela.

## Definições utilizadas
- Valores são armazenados em centavos; divisão de parcelas preserva o total exato.
- Faturamento é apurado pela data de emissão. Parcelas futuras compõem o faturamento na emissão, não no vencimento.
- Recebimentos são apurados pelas datas das baixas. A baixa não gera faturamento novamente.
- A receber/vencido usa o vencimento das parcelas selecionadas e o saldo atual. Não é uma reconstrução de saldo histórico.
- Resultado por veículo = faturamento − despesas registradas. Não representa lucro contábil completo.
- A categoria filtra somente despesas, não receitas.
- Disponibilidade e óleo mostram o estado atual. O período não retrocede esses indicadores.
- Alertas de óleo: última troca + intervalo − leitura atual. Leituras usam km ou horas conforme o veículo.
- Distância/horas no período: soma das rotinas encerradas no intervalo, não diferença entre leituras arbitrárias.
- Manutenções têm custo estimado/final operacional; registre a despesa financeira separadamente, evitando somar estimativas como gastos reais.
- Fotos são reduzidas a até 1200 pixels; é possível escolher a principal e remover fotos antes de salvar.
- Não há catálogo público de terceiros: “disponíveis” representa os veículos cadastrados na frota demonstrativa.
- Receitas no perfil Locatário precisam ser registradas (por exemplo, medições de obra por veículo). Os faturamentos do locador não são tratados como receita da construtora.

## Persistência e limites
Dados e arquivos ficam no localStorage deste navegador, na origem atual. Não são compartilhados entre usuários, computadores ou aparelhos. Limpar os dados do navegador remove os registros locais. Se faltar espaço, a alteração é rejeitada com mensagem e os dados anteriores são preservados. As quatro fotos e os anexos compartilham a capacidade disponível do navegador.
Os dois perfis são perspectivas da mesma demonstração, com lançamentos financeiros separados por perfil. Não existe autenticação, autorização, servidor, sincronização, banco remoto ou auditoria de segurança.
CSV é um arquivo de texto compatível com planilhas, não um XLSX nativo. PDF usa a impressão do navegador.

## Preparação para React
script.js separa regras Domain, persistência Repo, seletores de dados, funções de apresentação e eventos. Na migração, mantenha as regras, converta as apresentações em componentes e substitua Repo por uma API. Identificadores estáveis ligam veículos, clientes, parcelas, baixas, obras, motoristas, rotinas e checklists.
A versão anterior monolítica anexada não foi alterada. Os três arquivos separados foram atualizados.

## Validação desta entrega
- Sintaxe JavaScript validada.
- Quinze grupos de testes de domínio e geração de conteúdo aprovados, incluindo os dois perfis, onze relatórios, alocação duplicada, retorno, checklist, combustível, avaria, liberação, óleo, centavos, baixas, filtros e falha de persistência.
- Estrutura estática: IDs únicos e referências locais verificadas.
- A validação visual e os testes ponta a ponta no navegador ficaram bloqueados pelo ambiente: o Chromium local não iniciou e o navegador remoto não alcançou a prévia. Responsividade, seleção de arquivos e impressão devem ser conferidas em navegador real antes da migração/uso operacional.
