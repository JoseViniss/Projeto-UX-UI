# Análise de concorrência

### 1. Características e Funcionalidades dos Concorrentes

O mercado divide-se entre softwares puramente administrativos (como o EXP Frota), plataformas focadas em telemetria/IA e ERPs especializados em locadoras tradicionais.

* **EXP Frota (Concorrente Direto Administrativo):** Plataforma 100% em nuvem voltada para o controle administrativo e operacional de frotas sem dependência obrigatória de hardware (rastreadores). Oferece cadastro completo de veículos e motoristas, alertas de vencimento (CNH, CRLV, ANTT, seguros), controle de abastecimentos (cálculo de km/l e custo/km), gestão de pneus (sulcos e recapagens), estoque de peças, contas a pagar/receber, anexos em nuvem e checklists via app do motorista.
* **Contele Fleet (Concorrente de Operação e Rastreamento):** Une software de gestão com rastreamento plug-and-play (OBD) e telemetria. Destaca-se pelo aplicativo exclusivo para o motorista (*Contele Driver*) para registro de abastecimentos e checklists personalizados, gestão automatizada de multas por condutor, controle de manutenção preventiva/corretiva e roteirização em tempo real.
* **Cobli (Concorrente de Telemetria e Eficiência):** Focado em monitoramento em tempo real, videotelemetria, roteirização inteligente e redução de custos operacionais. Possui forte apelo em indicadores de retorno sobre investimento (ROI), comportamento de condução e controle de combustível/manutenção integrado aos sensores do veículo.
* **Infleet (Concorrente de Inteligência Artificial e Videotelemetria):** Posiciona-se como um "copiloto inteligente" para frotas. Integra telemetria, câmeras com IA embarcada (detecção de fadiga e distração), checklists digitais, manutenção, abastecimento e consultas em linguagem natural via IA (MCP integrado a assistentes como Claude/ChatGPT) para extração rápida de relatórios financeiros.
* **Locavia / Rently Soft (Concorrentes de Locação Pura):** ERPs especializados em locadoras de veículos (*rent-a-car* e terceirização de frotas). Focam em contratos de locação, tarifação dinâmica, reservas, faturamento recorrente e gestão de pátio, mas carecem de granularidade para a rotina específica de canteiros de obras (como horímetros por frente de trabalho e canhotos de campo).

---

### 2. Opiniões sobre a Experiência do Usuário (UX)

* **EXP Frota:** A interface web é descrita como limpa, funcional e direta ao ponto ("sem complicações de infraestrutura"), mas apresenta uma estética tradicional de sistema administrativo desktop. O aplicativo mobile complementar (*EXP Frota* na App Store) ainda é recente, com baixo volume de avaliações públicas e foco restrito ao lançamento básico do motorista (fotos, abastecimentos e checklists), sem experiência unificada de gestão completa no celular.
* **Contele Fleet:** Muito elogiado pela curva de aprendizado rápida e pela facilidade de adoção pelos motoristas no aplicativo mobile. Contudo, avaliações recorrentes em canais de consumidores apontam atritos na experiência pós-venda, especificamente lentidão no suporte técnico e dependência excessiva de bots de atendimento.
* **Cobli:** Possui uma das melhores avaliações de usabilidade do segmento (média de 4,3/5 em portais B2B). Os usuários destacam a clareza visual dos dashboards, a facilidade de interpretar gráficos de economia e a fluidez na navegação entre mapas e relatórios.
* **Infleet:** Experiência moderna e orientada a dados, com forte apelo visual para gestores analíticos. O diferencial de UX recente é a possibilidade de consultar métricas da frota por meio de chat com IA, eliminando a necessidade de navegar por menus complexos para gerar relatórios simples.
* **Locavia / Rently Soft:** Interfaces densas, típicas de sistemas ERP legados ou de retaguarda comercial. Exigem treinamento formal para operação e oferecem baixa ergonomia para uso rápido em dispositivos móveis em campo.

---

### 3. Preços e Modelos de Negócio

| Concorrente | Modelo de Negócio | Estrutura de Preços (Referência 2026) | Custo de Implantação / Trial |
| --- | --- | --- | --- |
| **EXP Frota** | SaaS por faixa de veículos + usuários adicionais. | **Transparente (Público):**<br>

<br>• **Ametista (10 veíc. / 1 user):** R$ 180/mês<br>

<br>• **Rubi (25 veíc. / 2 users):** R$ 420/mês<br>

<br>• **Safira (50 veíc. / 2 users):** R$ 795/mês<br>

<br>• **Esmeralda (75 veíc. / 4 users):** R$ 1.145/mês<br>

<br>• **Diamante (100 veíc. / 4 users):** R$ 1.470/mês<br>

<br>*(Adicionais: R$ 12–16/veículo e R$ 30/usuário; 15% desc. semestral / 20% anual)*. | **Zero** taxa de implantação; teste grátis de **15 dias**. |
| **Contele Fleet** | SaaS + Comodato/Venda de hardware (rastreador). | **Sob consulta** (varia conforme tipo de rastreador OBD/com fio e volume). Em linhas paralelas da marca (Teams), parte de ~R$ 62,50/usuário. | Demonstração guiada; adesão vinculada ao envio de hardware. |
| **Cobli** | SaaS + Hardware (telemetria/câmeras) com contrato recorrente. | **Sob consulta** (precificação personalizada por tamanho da frota e sensores contratados). | Análise de ROI prévia com consultor comercial. |
| **Infleet** | SaaS modular + Telemetria / Videotelemetria. | **Sob consulta** (orçamento customizado por módulos: manutenção, abastecimento, telemetria). | Teste grátis mediante cadastro e contato consultivo; isenção de adesão em combos. |
| **Locavia / Rently** | Licença SaaS Enterprise / ERP para locadoras. | **Sob consulta** (baseado em tamanho da frota locada e módulos fiscais/financeiros). | Implantação assistida e treinamento pago à parte. |

---

### 4. Padrões e Tendências de Mercado

1. **Mobile-First e Digitalização da Ponta (Canteiro/Estrada):** O mercado abandonou planilhas e formulários de papel. Aplicativos leves para motoristas e encarregados registrarem abastecimentos, fotos de avarias e checklists em tempo real tornaram-se requisito básico.
2. **IA Conversacional e BI Acionável:** Plataformas líderes (como Infleet) estão incorporando inteligência artificial para permitir que o gestor faça perguntas diretas sobre custos e consumo sem precisar montar filtros manuais.
3. **Desacoplamento de Hardware para PMEs:** Enquanto grandes frotas rodoviárias exigem telemetria embarcada, empresas de menor porte ou operações mistas (como construção civil terceirizada) preferem softwares 100% em nuvem sem custo de instalação de rastreadores físicos, como faz o EXP Frota.
4. **Controle Granular de Custos e Prevenção:** A pressão por margem deslocou o foco do simples "onde o veículo está" para o "quanto este ativo custa por hora/km" e alertas preditivos de manutenção e vencimento documental.

---

### 5. Relatório Executivo e Sumarização

* **O Vácuo de Mercado (Oportunidade do AVL Control):** Os sistemas atuais dividem-se em dois extremos: **gestores de frota própria** (EXP Frota, Contele, Cobli), que não gerenciam a relação contratual entre *Locadora e Locatário*, e **ERPs de locadoras** (Locavia, Rently), que não controlam a operação diária dentro de um *canteiro de obras* (alocação por frente de obra, horímetro de máquinas, canhotos físicos e rateio de combustível por obra).
* **Posicionamento de Preço:** O **EXP Frota** estabelece a régua de entrada para sistemas puramente administrativos entre **R$ 14,70 e R$ 18,00 por veículo/mês** (sem custo de implantação), sendo altamente competitivo contra soluções atreladas a hardware. Entretanto, sua cobrança de **R$ 30,00 por usuário adicional** penaliza operações colaborativas onde múltiplos engenheiros, encarregados e motoristas precisam acessar o sistema.

---

### 6. Pontos Positivos, Negativos e Recomendações para o AVL Control

#### Análise do Benchmark (EXP Frota e Mercado)

* **Pontos Positivos do Mercado:** Transparência de preços e *free trial* imediato sem implantação (EXP Frota) reduzem a barreira de entrada; interfaces com BI claro (Cobli) e apps dedicados ao operador de ponta (Contele) garantem alta adesão.
* **Pontos Negativos e Lacunas:**
* Falta de **visão dual nativa (Locadora ↔ Locatário)** na mesma plataforma.
* Cobrança restritiva por número de usuários no modelo do EXP Frota (limita 1 a 4 usuários nos planos base).
* Ausência de gestão específica de **canhotos de obra** e **alocação por centro de custo/obra** nos softwares genéricos de frota.
* Experiência mobile ainda fragmentada (um sistema web complexo para o gestor e um app limitado para o motorista).


#### Recomendações Estratégicas para o AVL Control

1. **Explorar o Diferencial "Dual Role" como Vantagem Competitiva:** Mantenha e destaque a arquitetura onde **Locadora e Locatário (Construtora)** compartilham a mesma base de dados com visões adaptadas. Isso elimina o retrabalho de envio de planilhas e conferência manual de canhotos no fechamento mensal.
2. **Modelo de Precificação Sem Limite Rígido de Usuários de Campo:** Ao contrário do EXP Frota (que cobra por usuário adicional), precifique o **AVL Control por ativo/veículo locado** oferecendo acesso ilimitado para motoristas e encarregados de obra lançarem abastecimentos e canhotos. Isso acelera o efeito de rede entre locadoras e construtoras.
3. **Priorizar a Experiência Mobile-First Unificada:** Como o projeto já nasceu em React com foco mobile, garanta que o gestor da obra consiga aprovar manutenções, visualizar gráficos de BI e auditar documentos diretamente do smartphone no canteiro, superando a UX desktop-cêntrica do EXP Frota.
4. **Onboarding Self-Service (PLG):** Adote o modelo de teste gratuito de 14 a 15 dias sem taxa de implantação (validado pelo EXP Frota), mas com dados pré-carregados de demonstração de obras para que o cliente perceba valor nos primeiros 5 minutos de uso.
