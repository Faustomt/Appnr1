-- Configuração Segurança da Informação - Banco de Dados (Supabase)

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ==========================================
-- TABELA 1: ESTRUTURA ORGANIZACIONAL (NOVO)
-- ==========================================
CREATE TABLE IF NOT EXISTS public.hierarquias (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    empresa TEXT NOT NULL,
    unidade_negocio TEXT,
    divisao TEXT,
    departamento TEXT,
    setor TEXT NOT NULL
);

ALTER TABLE public.hierarquias ENABLE ROW LEVEL SECURITY;

-- Colaboradores podem LER o organograma para carregarem o formulário em cascata
CREATE POLICY "Leitura pública do organograma" ON public.hierarquias FOR SELECT USING (true);

-- Apenas Gestores podem MODIFICAR (Inserir/Deletar) o organograma
CREATE POLICY "Gestão de organograma por logados" ON public.hierarquias FOR ALL USING (auth.role() = 'authenticated');


-- ==========================================
-- TABELA 2: RESPOSTAS DOS COLABORADORES
-- ==========================================
CREATE TABLE IF NOT EXISTS public.responses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    empresa TEXT NOT NULL,
    unidade_negocio TEXT,
    divisao TEXT,
    departamento TEXT,
    setor TEXT NOT NULL,
    funcao TEXT NOT NULL,

    idade TEXT,
    is_pcd TEXT,
    pcd_desc TEXT,
    sexo TEXT,
    estado_civil TEXT,
    filhos TEXT,
    escolaridade TEXT,
    tempo_empresa TEXT,
    habito_beber TEXT,
    habito_fumar TEXT,
    enps INTEGER CHECK (enps >= 0 AND enps <= 10),

    percentual_risco NUMERIC,
    respostas_raw JSONB
);

ALTER TABLE public.responses ENABLE ROW LEVEL SECURITY;

-- Política A: Inserção de formulário por todos (Anonimato e Inclusão)
CREATE POLICY "Permitir inserção de formulário por todos" ON public.responses FOR INSERT WITH CHECK (true);

-- Política B: Leitura apenas para Gestores Logados (Segurança e Confidencialidade)
CREATE POLICY "Permitir leitura apenas para gestores logados" ON public.responses FOR SELECT USING (auth.role() = 'authenticated');
