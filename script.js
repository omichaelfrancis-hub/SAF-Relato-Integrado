// DADOS COMPLETOS DAS DESPESAS APROVADAS PARA 2027 POR UNIDADE (TOTAL: R$ 18.064.000,00)
const ORCAMENTO_TOTAL_2027 = 18064000.00;

const unidadesOrcamentarias2027 = [
  {
    id: "rh",
    ordem: 1,
    nome: "Área de Recursos Humanos",
    categoria: "saf",
    categoriaNome: "Unidade Subordinada à SAF (Orçamento Centralizado)",
    limite: 10781818.74,
    itens: [
      {
        conta: "6.2.2.1.1.01.01.01.001",
        rubrica: "Salários e Encargos Globais de Folha",
        detalhe: "Despesas globais com Pessoal e Encargos, incluindo salários, férias, 13º salário, anuênios, encargos sociais e estagiários de todo o Regional (58,72% da RCL projetada).",
        valor: 10781818.74
      }
    ]
  },
  {
    id: "fiscalizacao",
    ordem: 2,
    nome: "Gerência de Fiscalização",
    categoria: "finalistica",
    categoriaNome: "Atividade Finalística",
    limite: 1270428.55,
    itens: [
      { conta: "6.2.2.1.1.01.04.05.001", rubrica: "Diárias Funcionários", detalhe: "Diárias operacionais com recursos próprios do Crea-TO e Convênio Confea 2026-2027", valor: 491187.50 },
      { conta: "6.2.2.1.1.02.01.03.005", rubrica: "Veículos", detalhe: "Aquisição e complemento de 07 veículos para renovação da frota de fiscalização (Convênio Confea + Leilão)", valor: 375000.00 },
      { conta: "6.2.2.1.1.01.04.03.002.001", rubrica: "Combustíveis e Lubrificantes", detalhe: "Combustível para fiscalização com recursos do Crea e Convênio Confea 2026-2027", valor: 183743.00 },
      { conta: "6.2.2.1.1.01.04.03.002.002", rubrica: "Peças e Acessórios", detalhe: "Peças para manutenção preventiva e corretiva da frota de 14 veículos", valor: 64000.00 },
      { conta: "6.2.2.1.1.01.04.06.001", rubrica: "Passagens Funcionários", detalhe: "Passagens aéreas para Forças-Tarefas Nacionais (Convênio 2026-2027)", valor: 44698.05 },
      { conta: "6.2.2.1.1.01.04.09.031", rubrica: "Manutenção e Conservação de Veículos", detalhe: "Serviços mecânicos e conservação da frota", valor: 37000.00 },
      { conta: "6.2.2.1.1.01.04.09.023", rubrica: "Seguros de Bens Móveis", detalhe: "Apólices de seguros e franquias de veículos da frota", valor: 32000.00 },
      { conta: "6.2.2.1.1.01.04.03.001.021", rubrica: "Materiais de Proteção, Seg. e EPI", detalhe: "Equipamentos de proteção individual para agentes fiscais", valor: 20000.00 },
      { conta: "6.2.2.1.1.01.04.09.005", rubrica: "Serviços de Informática", detalhe: "Licenças Office, Power BI e Licença Catta", valor: 10400.00 },
      { conta: "6.2.2.1.1.01.04.09.044", rubrica: "Impressos Gráficos", detalhe: "Confecção de Selos de Fiscalização", valor: 10000.00 },
      { conta: "6.2.2.1.1.01.05.01.002", rubrica: "Impostos e Taxas", detalhe: "Taxas de licenciamento anual dos 14 veículos", valor: 1400.00 },
      { conta: "6.2.2.1.1.01.04.03.003.001", rubrica: "Outros Materiais de Consumo", detalhe: "Aquisição de carregadores veiculares", valor: 1000.00 }
    ]
  },
  {
    id: "colegiados",
    ordem: 3,
    nome: "Gerência de Apoio aos Colegiados",
    categoria: "finalistica",
    categoriaNome: "Julgamento, Plenário e Câmaras",
    limite: 958860.00,
    itens: [
      { conta: "6.2.2.1.1.01.04.05.002", rubrica: "Diárias Conselheiros", detalhe: "Plenário, eventos de Câmaras Especializadas/Comissões, capacitação e Comitê Gestor Mulher", valor: 435360.00 },
      { conta: "6.2.2.1.1.01.04.08.002", rubrica: "Locomoção Conselheiros", detalhe: "Deslocamentos para Sessões Plenárias, eventos e Comitê Gestor", valor: 286470.00 },
      { conta: "6.2.2.1.1.01.04.04.001", rubrica: "Jetons (Participação em Reunião)", detalhe: "Verba indenizatória de participação em sessões plenárias", valor: 133100.00 },
      { conta: "6.2.2.1.1.01.04.09.048", rubrica: "Serviço de Alimentação", detalhe: "Coffee break nas sessões plenárias e reuniões colegiadas", valor: 36300.00 },
      { conta: "6.2.2.1.1.01.04.05.001", rubrica: "Diárias Funcionários", detalhe: "Apoio operacional em sessões plenárias descentralizadas (fora da sede)", valor: 27500.00 },
      { conta: "6.2.2.1.1.01.04.05.003", rubrica: "Diárias Colaboradores", detalhe: "Atividades do Comitê Gestor Mulher e palestrantes convidados", valor: 12000.00 },
      { conta: "6.2.2.1.1.01.04.08.001", rubrica: "Locomoção Funcionários", detalhe: "Apoio em sessões plenárias realizadas fora da sede", valor: 9350.00 },
      { conta: "6.2.2.1.1.01.04.06.003", rubrica: "Passagens Colaboradores", detalhe: "Passagens de palestrantes convidados para as comissões", valor: 7500.00 },
      { conta: "6.2.2.1.1.01.04.08.003", rubrica: "Locomoção Colaboradores", detalhe: "Reembolso/deslocamento de colaboradores eventuais", valor: 6000.00 },
      { conta: "6.2.2.1.1.01.04.03.002.001", rubrica: "Combustíveis e Lubrificantes", detalhe: "Deslocamentos do Presidente e de funcionários para plenárias no interior", valor: 5280.00 }
    ]
  },
  {
    id: "presidencia",
    ordem: 4,
    nome: "Presidência",
    categoria: "governanca",
    categoriaNome: "Direção e Liderança Institucional",
    limite: 800000.00,
    itens: [
      { conta: "6.2.2.1.1.01.04.05.002", rubrica: "Diárias Conselheiros", detalhe: "Representação institucional e agendas oficiais da Presidência/Diretoria", valor: 360000.00 },
      { conta: "6.2.2.1.1.01.04.06.002", rubrica: "Passagens Conselheiros", detalhe: "Passagens aéreas/terrestres para agendas nacionais e regionais", valor: 170000.00 },
      { conta: "6.2.2.1.1.01.04.06.001", rubrica: "Passagens Funcionários", detalhe: "Assessoramento técnico e acompanhamento institucional", valor: 100000.00 },
      { conta: "6.2.2.1.1.01.04.05.001", rubrica: "Diárias Funcionários", detalhe: "Diárias de servidores em missão oficial pela Presidência", valor: 78000.00 },
      { conta: "6.2.2.1.1.01.04.08.002", rubrica: "Locomoção Conselheiros", detalhe: "Despesas com locomoção em agendas da Presidência", valor: 40000.00 },
      { conta: "6.2.2.1.1.01.04.08.001", rubrica: "Locomoção Funcionários", detalhe: "Despesas com locomoção de equipe de apoio", valor: 20000.00 },
      { conta: "6.2.2.1.1.01.04.03.002.001", rubrica: "Combustíveis e Lubrificantes", detalhe: "Abastecimento em deslocamentos oficiais do Gabinete", valor: 10000.00 },
      { conta: "6.2.2.1.1.01.04.06.003", rubrica: "Passagens Colaboradores", detalhe: "Convidados e representantes institucionais", valor: 10000.00 },
      { conta: "6.2.2.1.1.01.04.05.003", rubrica: "Diárias Colaboradores", detalhe: "Diárias de colaboradores eventuais em missões", valor: 7000.00 },
      { conta: "6.2.2.1.1.01.04.08.003", rubrica: "Locomoção Colaboradores", detalhe: "Auxílio deslocamento de colaboradores", valor: 5000.00 }
    ]
  },
  {
    id: "juridico",
    ordem: 5,
    nome: "Assessoria Jurídica",
    categoria: "governanca",
    categoriaNome: "Controle e Representação Judicial",
    limite: 782000.00,
    itens: [
      { conta: "6.2.2.1.1.01.06.01", rubrica: "Sentenças Judiciais", detalhe: "Previsão orçamentária para cumprimento e pagamento de sentenças judiciais", valor: 537000.00 },
      { conta: "6.2.2.1.1.01.04.09.003", rubrica: "Serviços Advocatícios", detalhe: "Contratação de Escritório de Advocacia e Consultoria especializada", valor: 200000.00 },
      { conta: "6.2.2.1.1.01.05.01.003", rubrica: "Despesas Judiciais", detalhe: "Pagamento de custas e taxas processuais", valor: 40000.00 },
      { conta: "6.2.2.1.1.01.04.09.005", rubrica: "Serviços de Informática", detalhe: "Assinatura de Software Jurídico / Plataforma JusBrasil", valor: 5000.00 }
    ]
  },
  {
    id: "ti",
    ordem: 6,
    nome: "Gerência de Tecnologia da Informação (GTI)",
    categoria: "governanca",
    categoriaNome: "Infraestrutura Digital e Segurança",
    limite: 669300.00,
    itens: [
      { conta: "6.2.2.1.1.01.04.09.005", rubrica: "Serviços de Informática", detalhe: "Sistema corporativo SITAC, Hospedagem, Webmail, Inteligência Artificial, Power BI, Windows Server e Carteira Digital Profissional", valor: 358500.00 },
      { conta: "6.2.2.1.1.02.01.03.006", rubrica: "Equip. de Processamento de Dados", detalhe: "Aquisição de microcomputadores, monitores, scanners, impressoras e roteadores (inclui convênio TI)", valor: 75000.00 },
      { conta: "6.2.2.1.1.01.04.09.009", rubrica: "Serviços de Segurança Predial", detalhe: "Monitoramento eletrônico e alarme na Sede e nas Inspetorias", valor: 70000.00 },
      { conta: "6.2.2.1.1.01.04.09.037", rubrica: "Serviços de Internet", detalhe: "Links dedicados principal e de redundância/backup", valor: 50000.00 },
      { conta: "6.2.2.1.1.01.06.04", rubrica: "Despesas Miúdas de Pronto Pagamento", detalhe: "Suprimento de fundos para demandas emergenciais de TI", valor: 40000.00 },
      { conta: "6.2.2.1.1.01.04.09.029", rubrica: "Manutenção e Conservação Bens Móveis", detalhe: "Manutenção de rede lógica, computadores, impressoras, projetores e licença de firewall", valor: 32000.00 },
      { conta: "6.2.2.1.1.01.04.03.001.011", rubrica: "Materiais p/ Manutenção Bens Móveis", detalhe: "Peças de hardware e componentes de reposição", valor: 26000.00 },
      { conta: "6.2.2.1.1.02.01.03.004", rubrica: "Aparelhos e Utensílios Domésticos", detalhe: "Aquisição de nobreaks", valor: 7500.00 },
      { conta: "6.2.2.1.1.01.04.03.001.008", rubrica: "Materiais de Informática", detalhe: "Periféricos: teclados, mouses e suportes ergonômicos", valor: 6500.00 },
      { conta: "6.2.2.1.1.01.04.03.001.010", rubrica: "Materiais Elétricos e Telefonia", detalhe: "Cabos de rede, conectores e acessórios elétricos", valor: 3800.00 }
    ]
  },
  {
    id: "planejamento",
    ordem: 7,
    nome: "Gerência de Planejamento",
    categoria: "governanca",
    categoriaNome: "Estratégia, Convênios e Obras",
    limite: 617578.81,
    itens: [
      { conta: "6.2.2.1.1.02.01.01.002", rubrica: "Reformas", detalhe: "Manutenção corretiva e reforma da Inspetoria de Guaraí-TO (inclui R$ 185.989,15 via Convênio Confea)", valor: 199121.45 },
      { conta: "6.2.2.1.1.02.01.03.005", rubrica: "Veículos (Contrapartida)", detalhe: "Contrapartida obrigatória do Crea-TO (1% da receita própria) para o convênio de aquisição de 7 veículos", valor: 162670.00 },
      { conta: "6.2.2.1.1.01.03.01.001", rubrica: "Juros da Dívida", detalhe: "Encargos referentes ao imóvel de Porto Nacional", valor: 88608.21 },
      { conta: "6.2.2.1.1.01.04.09.027", rubrica: "Locação de Bens Imóveis", detalhe: "Aluguel de imóvel em Porto Nacional", valor: 60000.00 },
      { conta: "6.2.2.1.1.01.04.05.002", rubrica: "Diárias Conselheiros (SOEA)", detalhe: "Viagens de representação para a SOEA 2027 (Parceria Mútua)", valor: 40000.00 },
      { conta: "6.2.2.1.1.02.01.04.001", rubrica: "Edifícios", detalhe: "Amortização referente ao imóvel de Porto Nacional", valor: 37179.15 },
      { conta: "6.2.2.1.1.01.04.06.002", rubrica: "Passagens Conselheiros (SOEA)", detalhe: "Passagens para participação na SOEA 2027 (Parceria Mútua)", valor: 30000.00 }
    ]
  },
  {
    id: "patrimonio",
    ordem: 8,
    nome: "Área de Patrimônio, Materiais e Serviços Gerais",
    categoria: "saf",
    categoriaNome: "Unidade Subordinada à SAF (Gerência Administrativa)",
    limite: 537650.00,
    itens: [
      { conta: "6.2.2.1.1.01.04.09.008", rubrica: "Limpeza, Conservação e Jardinagem", detalhe: "Serviços terceirizados de conservação e dedetização predial", valor: 138000.00 },
      { conta: "6.2.2.1.1.01.04.09.029", rubrica: "Manutenção de Bens Móveis", detalhe: "Manutenção de aparelhos de ar-condicionado na sede/inspetorias e recarga de extintores", valor: 82000.00 },
      { conta: "6.2.2.1.1.01.04.09.030", rubrica: "Manutenção de Bens Imóveis", detalhe: "Manutenção predial geral, manutenção de elevador e serviços de chaveiro", valor: 61400.00 },
      { conta: "6.2.2.1.1.01.04.09.021", rubrica: "Serviços de Apoio Administrativo/Operacional", detalhe: "Postos de serviços terceirizados de apoio", valor: 60300.00 },
      { conta: "6.2.2.1.1.01.04.03.001.016", rubrica: "Materiais de Higiene e Limpeza", detalhe: "Insumos gerais de copa, higiene e limpeza para sede e inspetorias", valor: 60000.00 },
      { conta: "6.2.2.1.1.01.04.09.002", rubrica: "Serviço de Assessoria e Consultoria", detalhe: "Elaboração de laudos técnicos de avaliação de imóveis", valor: 35000.00 },
      { conta: "6.2.2.1.1.01.04.03.001.015", rubrica: "Gêneros de Alimentação", detalhe: "Aquisição de água mineral, café e açúcar", valor: 31950.00 },
      { conta: "6.2.2.1.1.01.04.03.001.001", rubrica: "Materiais de Expediente", detalhe: "Material geral de escritório e serviços de encadernação", valor: 27000.00 },
      { conta: "6.2.2.1.1.01.04.09.024", rubrica: "Seguros de Bens Imóveis", detalhe: "Seguro predial das instalações do Crea-TO", valor: 16000.00 },
      { conta: "6.2.2.1.1.02.01.03.004", rubrica: "Aparelhos e Utensílios Domésticos", detalhe: "Aquisição de eletrodomésticos e utensílios de copa", valor: 10000.00 },
      { conta: "6.2.2.1.1.01.04.05.001", rubrica: "Diárias Funcionários", detalhe: "Deslocamentos da comissão/equipe para levantamento de inventário patrimonial nas inspetorias", valor: 7000.00 },
      { conta: "6.2.2.1.1.02.01.03.002", rubrica: "Máquinas e Equipamentos", detalhe: "Aquisição de equipamentos operacionais diversos", valor: 5000.00 },
      { conta: "6.2.2.1.1.02.01.03.001", rubrica: "Móveis e Utensílios", detalhe: "Aquisição de mobiliário institucional", valor: 4000.00 }
    ]
  },
  {
    id: "administrativa",
    ordem: 9,
    nome: "Gerência Administrativa (Gabinete)",
    categoria: "saf",
    categoriaNome: "Unidade Subordinada à SAF",
    limite: 398448.78,
    itens: [
      { conta: "6.2.2.1.1.01.04.09.032", rubrica: "Serviços de Energia Elétrica", detalhe: "Pagamento de faturas da concessionária Energisa (Sede e Inspetorias)", valor: 180000.00 },
      { conta: "6.2.2.1.1.01.04.09.002", rubrica: "Serviço de Assessoria e Consultoria", detalhe: "Apoio especializado / terceirização de rotinas de folha e RH (Sinex)", valor: 60000.00 },
      { conta: "6.2.2.1.1.01.04.09.011", rubrica: "Seleção, Treinamento e Orientação", detalhe: "Execução do Plano Anual de Capacitação dos servidores", valor: 54408.59 },
      { conta: "6.2.2.1.1.01.04.09.010", rubrica: "Medicina do Trabalho", detalhe: "Elaboração de PGR, PCMSO e exames ocupacionais via Medwork", valor: 30000.00 },
      { conta: "6.2.2.1.1.01.04.09.036", rubrica: "Serviços de Telecomunicações", detalhe: "Faturas de Telefonia Fixa (VC1) e Telefonia Móvel (Claro)", valor: 25000.00 },
      { conta: "6.2.2.1.1.01.04.09.033", rubrica: "Serviços de Água e Esgoto", detalhe: "Faturas de abastecimento junto à BRK Ambiental", valor: 24000.00 },
      { conta: "6.2.2.1.1.01.04.09.005", rubrica: "Serviços de Informática", detalhe: "Licenciamento do Ponto Eletrônico (Pontotech) e Domínio Folha", valor: 15100.20 },
      { conta: "6.2.2.1.1.01.04.09.012", rubrica: "Intermediação de Estágios", detalhe: "Taxa administrativa do agente integrador de estágios (CIEE)", valor: 5940.00 },
      { conta: "6.2.2.1.1.01.05.01.002", rubrica: "Impostos e Taxas", detalhe: "Taxas municipais de coleta de lixo (Palmas e Araguaína)", valor: 4000.00 }
    ]
  },
  {
    id: "comunicacao",
    ordem: 10,
    nome: "Assessoria de Comunicação e Redação Oficial",
    categoria: "finalistica",
    categoriaNome: "Comunicação Institucional e Divulgação",
    limite: 370000.00,
    itens: [
      { conta: "6.2.2.1.1.01.04.09.002", rubrica: "Assessoria e Consultoria", detalhe: "Contratação de Produtora Audiovisual, Social Media e Design Gráfico", valor: 240000.00 },
      { conta: "6.2.2.1.1.01.04.09.044", rubrica: "Impressos Gráficos", detalhe: "Agendas, banners, bonés, camisetas, pastas, blocos, calendários e materiais institucionais (inclui R$ 43 mil de convênio)", valor: 100000.00 },
      { conta: "6.2.2.1.1.02.01.03.001", rubrica: "Móveis e Utensílios", detalhe: "Montagem de cenário e estúdio interno para captações audiovisuais", valor: 30000.00 }
    ]
  },
  {
    id: "financeira",
    ordem: 11,
    nome: "Gerência Financeira",
    categoria: "saf",
    categoriaNome: "Unidade Subordinada à SAF",
    limite: 357000.00,
    itens: [
      { conta: "6.2.2.1.1.01.04.09.005", rubrica: "Serviços de Informática e Software", detalhe: "Ecossistema de contabilidade/orçamento Implanta Informática e Gestão Tributária Open Soluções", valor: 208000.00 },
      { conta: "6.2.2.1.1.01.07.02", rubrica: "Despesas com Cobrança Bancária", detalhe: "Tarifas bancárias de liquidação de boletos com código de barras, Pix e processamento de pagamentos", valor: 130000.00 },
      { conta: "6.2.2.1.1.01.07.01", rubrica: "Taxas Bancárias", detalhe: "Manutenção de contas correntes e serviços bancários gerais", valor: 15000.00 },
      { conta: "6.2.2.1.1.01.05.01.002", rubrica: "Impostos e Taxas", detalhe: "Taxas de alterações cadastrais e alvarás de funcionamento perante Prefeituras", valor: 4000.00 }
    ]
  },
  {
    id: "registro",
    ordem: 12,
    nome: "Gerência de Registro e Inspetorias",
    categoria: "finalistica",
    categoriaNome: "Atividade Finalística e Atendimento",
    limite: 172000.00,
    itens: [
      { conta: "6.2.2.1.1.01.04.09.008", rubrica: "Limpeza e Jardinagem", detalhe: "Serviços de limpeza e conservação com foco nas Inspetorias Regionais", valor: 100000.00 },
      { conta: "6.2.2.1.1.01.04.03.001.004", rubrica: "Material de Identificação Profissional", detalhe: "Insumos para emissão e confecção de Carteiras de Identidade Profissional", valor: 40000.00 },
      { conta: "6.2.2.1.1.01.04.09.005", rubrica: "Serviços de Informática", detalhe: "Plataforma multicanal WhatsApp (MaxxMobi) para atendimento aos profissionais e empresas", valor: 20000.00 },
      { conta: "6.2.2.1.1.02.01.03.002", rubrica: "Máquinas e Equipamentos", detalhe: "Aquisição de cofres de segurança para guarda de cédulas e documentos", valor: 10000.00 },
      { conta: "6.2.2.1.1.02.01.03.010", rubrica: "Equipamentos de Áudio e Vídeo", detalhe: "Aquisição de aparelhos de Telefone IP físicos", valor: 2000.00 }
    ]
  },
  {
    id: "transparencia",
    ordem: 13,
    nome: "Gerência de Proteção de Dados, Transparência e Ouvidoria",
    categoria: "governanca",
    categoriaNome: "Controle, LGPD e LAI",
    limite: 144000.00,
    itens: [
      { conta: "6.2.2.1.1.01.04.09.034", rubrica: "Postagem e Correspondência", detalhe: "Serviços postais dos Correios para envio de notificações, ofícios e cobranças", valor: 120000.00 },
      { conta: "6.2.2.1.1.01.04.09.005", rubrica: "Serviços de Informática", detalhe: "Módulo Portal da Transparência e softwares colaborativos de controle", valor: 24000.00 }
    ]
  },
  {
    id: "educacao",
    ordem: 14,
    nome: "Área de Educação Continuada",
    categoria: "finalistica",
    categoriaNome: "Qualificação Profissional (Programa Qualificar)",
    limite: 90500.00,
    itens: [
      { conta: "6.2.2.1.1.01.04.09.011", rubrica: "Seleção, Treinamento e Orientação", detalhe: "Custeio de 5 cursos descentralizados do Programa Qualificar (3 em Palmas, 1 em Gurupi e 1 em Araguaína - Convênio Confea)", valor: 80000.00 },
      { conta: "6.2.2.1.1.01.04.09.039", rubrica: "Assinaturas Técnicas", detalhe: "Convênio de acesso ao catálogo de Normas Técnicas da ABNT", valor: 4000.00 },
      { conta: "6.2.2.1.1.01.04.05.001", rubrica: "Diárias Funcionários", detalhe: "Apoio presencial nos cursos do Programa Qualificar", valor: 3000.00 },
      { conta: "6.2.2.1.1.01.04.05.002", rubrica: "Diárias Conselheiros", detalhe: "Acompanhamento institucional do Programa Qualificar", valor: 2000.00 },
      { conta: "6.2.2.1.1.01.04.03.002.001", rubrica: "Combustíveis e Lubrificantes", detalhe: "Deslocamentos terrestres para execução do Programa Qualificar", valor: 1500.00 }
    ]
  },
  {
    id: "licitacoes",
    ordem: 15,
    nome: "Gerência de Contratos, Compras e Licitações",
    categoria: "saf",
    categoriaNome: "Unidade Subordinada à SAF",
    limite: 55000.00,
    itens: [
      { conta: "6.2.2.1.1.01.04.09.040", rubrica: "Publicações Técnicas e Legais", detalhe: "Publicações obrigatórias de avisos de editais no Diário Oficial da União (DOU), DOE e Jornais de Grande Circulação", valor: 40000.00 },
      { conta: "6.2.2.1.1.01.04.09.005", rubrica: "Serviços de Informática", detalhe: "Assinatura anual da plataforma de pesquisa mercadológica 'Banco de Preços'", valor: 15000.00 }
    ]
  },
  {
    id: "integracao",
    ordem: 16,
    nome: "Coordenação de Integração Social e Profissional",
    categoria: "finalistica",
    categoriaNome: "Eventos e Interiorização",
    limite: 38415.12,
    itens: [
      { conta: "6.2.2.1.1.01.04.09.048", rubrica: "Serviço de Alimentação", detalhe: "Custeio de alimentação para realização do Fórum dos Inspetores", valor: 15000.00 },
      { conta: "6.2.2.1.1.01.04.09.021", rubrica: "Serviços de Apoio Administrativo/Operacional", detalhe: "Suporte operacional e recepção na organização de eventos institucionais", valor: 14415.12 },
      { conta: "6.2.2.1.1.01.04.09.027", rubrica: "Locação de Bens Imóveis", detalhe: "Locação de auditórios e espaços físicos para eventos institucionais", valor: 9000.00 }
    ]
  },
  {
    id: "cobranca",
    ordem: 17,
    nome: "Gerência de Cobrança e Dívida Ativa",
    categoria: "saf",
    categoriaNome: "Unidade Subordinada à SAF",
    limite: 21000.00,
    itens: [
      { conta: "6.2.2.1.1.01.04.09.005", rubrica: "Serviços de Informática (Recuperação de Créditos)", detalhe: "Contratação de plano SPC/Serasa para consulta e negativação de inadimplentes (R$ 10.000,00), sistema automatizado de notificação via Carta com AR (R$ 6.000,00) e plataforma de disparo de mensagens WhatsApp (R$ 5.000,00)", valor: 21000.00 }
    ]
  }
];

// Formatação de moeda em Real Brasileiro (BRL)
function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2
  });
}

// Estado atual dos filtros
let filtroCategoriaAtual = "all";
let termoBuscaAtual = "";

const containerAcordeao = document.getElementById("unitsAccordionContainer");
const inputBusca = document.getElementById("unitSearch");
const botoesFiltro = document.querySelectorAll(".filter-btn");
const elCount = document.getElementById("visibleCount");
const elTotal = document.getElementById("visibleTotal");
const elPercent = document.getElementById("visiblePercent");

function renderizarUnidades() {
  const termo = termoBuscaAtual.trim().toLowerCase();

  const unidadesFiltradas = unidadesOrcamentarias2027.filter((u) => {
    const bateCategoria = filtroCategoriaAtual === "all" || u.categoria === filtroCategoriaAtual;
    if (!bateCategoria) return false;

    if (!termo) return true;

    const bateNomeUnidade = u.nome.toLowerCase().includes(termo) || u.categoriaNome.toLowerCase().includes(termo);
    const bateItens = u.itens.some(
      (item) =>
        item.conta.toLowerCase().includes(termo) ||
        item.rubrica.toLowerCase().includes(termo) ||
        item.detalhe.toLowerCase().includes(termo)
    );
    return bateNomeUnidade || bateItens;
  });

  // Atualiza barra de resumo
  const somaVisivel = unidadesFiltradas.reduce((acc, cur) => acc + cur.limite, 0);
  const percVisivel = (somaVisivel / ORCAMENTO_TOTAL_2027) * 100;

  elCount.textContent = `${unidadesFiltradas.length} ${unidadesFiltradas.length === 1 ? "unidade" : "unidades"}`;
  elTotal.textContent = formatarMoeda(somaVisivel);
  elPercent.textContent = `${percVisivel.toFixed(2).replace(".", ",")}%`;

  if (unidadesFiltradas.length === 0) {
    containerAcordeao.innerHTML = `
      <div class="info-card" style="text-align:center; padding: 32px;">
        <h3>Nenhum item encontrado para "${termoBuscaAtual}"</h3>
        <p>Tente buscar por outra palavra-chave (ex: Diárias, Veículos, Energia, SITAC, Sentenças) ou selecione "Todas" nos botões acima.</p>
      </div>
    `;
    return;
  }

  containerAcordeao.innerHTML = unidadesFiltradas
    .map((unidade, index) => {
      const percentualOrcamento = ((unidade.limite / ORCAMENTO_TOTAL_2027) * 100).toFixed(2);
      const larguraBarra = Math.max(parseFloat(percentualOrcamento), 1.5);
      // Se o usuário estiver pesquisando ou for a primeira unidade da lista, abre por padrão
      const abrirPorPadrao = termo.length > 0 || index === 0 ? "open" : "";

      const linhasTabela = unidade.itens
        .map((item) => {
          const percUnidade = ((item.valor / unidade.limite) * 100).toFixed(1).replace(".", ",");
          return `
            <tr>
              <td><span class="account-code">${item.conta}</span></td>
              <td><strong>${item.rubrica}</strong></td>
              <td>${item.detalhe}</td>
              <td class="num">${percUnidade}%</td>
              <td class="num"><strong>${formatarMoeda(item.valor)}</strong></td>
            </tr>
          `;
        })
        .join("");

      return `
        <article class="unit-card ${abrirPorPadrao}" data-id="${unidade.id}">
          <button class="unit-card-header" type="button" aria-expanded="${abrirPorPadrao === "open"}">
            <div class="unit-title-group">
              <div class="unit-title-row">
                <span class="unit-rank">#${String(index + 1).padStart(2, "0")}</span>
                <span class="unit-name">${unidade.nome}</span>
                <span class="unit-cat-tag">${unidade.categoriaNome}</span>
              </div>
              <div class="unit-progress-wrap">
                <div class="unit-progress-bar">
                  <div class="unit-progress-fill" style="width: ${Math.min(larguraBarra, 100)}%"></div>
                </div>
                <span class="unit-progress-text">${percentualOrcamento.replace(".", ",")}% do Orçamento Total (${unidade.itens.length} ${unidade.itens.length === 1 ? "conta" : "contas"})</span>
              </div>
            </div>

            <div class="unit-amount-group">
              <div class="unit-total-Info">
                <span class="unit-total-label">Limite Aprovado 2027</span>
                <strong class="unit-total-val">${formatarMoeda(unidade.limite)}</strong>
              </div>
              <span class="unit-chevron">▼</span>
            </div>
          </button>

          <div class="unit-card-body">
            <div class="table-responsive">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Conta Contábil</th>
                    <th>Natureza / Rubrica</th>
                    <th>Objeto e Detalhamento da Despesa</th>
                    <th class="num">% na Unidade</th>
                    <th class="num">Valor Aprovado (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  ${linhasTabela}
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="4"><strong>Total Autorizado para ${unidade.nome}</strong></td>
                    <td class="num"><strong>${formatarMoeda(unidade.limite)}</strong></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  // Adiciona eventos de clique em cada cabeçalho de unidade
  document.querySelectorAll(".unit-card-header").forEach((header) => {
    header.addEventListener("click", () => {
      const card = header.closest(".unit-card");
      const isOpen = card.classList.toggle("open");
      header.setAttribute("aria-expanded", isOpen);
    });
  });
}

// Eventos de busca e filtros
inputBusca.addEventListener("input", (e) => {
  termoBuscaAtual = e.target.value;
  renderizarUnidades();
});

botoesFiltro.forEach((btn) => {
  btn.addEventListener("click", () => {
    botoesFiltro.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    filtroCategoriaAtual = btn.getAttribute("data-filter");
    renderizarUnidades();
  });
});

// Expandir / Recolher todas
document.getElementById("btnExpandAll").addEventListener("click", () => {
  document.querySelectorAll(".unit-card").forEach((card) => {
    card.classList.add("open");
    card.querySelector(".unit-card-header").setAttribute("aria-expanded", "true");
  });
});

document.getElementById("btnCollapseAll").addEventListener("click", () => {
  document.querySelectorAll(".unit-card").forEach((card) => {
    card.classList.remove("open");
    card.querySelector(".unit-card-header").setAttribute("aria-expanded", "false");
  });
});

// Menu Responsivo Mobile
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const expanded = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", expanded);
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  renderizarUnidades();
});