// ===== DADOS DAS PRODUÇÕES =====
const productions = [
    {
        id: 1,
        title: "POR QUE OS PROCEDIMENTOS ESTÉTICOS ESTÃO AUMENTANDO ENTRE OS JOVENS?",
        description: "Análise sobre o crescimento dos procedimentos estéticos entre o público jovem e seus impactos sociais.",
        image: "https://images.unsplash.com/photo-1594489573857-58baae929016?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: `
            <p>Esta produção analisou o crescimento exponencial dos procedimentos estéticos entre os jovens, explorando fatores como influência das redes sociais, padrões de beleza contemporâneos e acesso facilitado a tratamentos.</p>
            <p>O trabalho abordou tanto os aspectos psicológicos quanto os riscos à saúde envolvidos nessa tendência, propondo reflexões sobre autoestima e aceitação corporal.</p>
            <p><strong>Principais pontos abordados:</strong></p>
            <ul>
                <li>Influência das redes sociais na percepção de beleza</li>
                <li>Pressão social e padrões estéticos</li>
                <li>Riscos à saúde de procedimentos precoces</li>
                <li>Impactos psicológicos da busca pela perfeição</li>
            </ul>
        `,
        pages: 3,
        words: 1500,
        badge: "Redação"
    },
    {
        id: 2,
        title: "ACESSIBILIDADE E INCLUSÃO DE PESSOAS COM DEFICIÊNCIA NO BRASIL",
        description: "Reflexão sobre os desafios e avanços na inclusão de pessoas com deficiência na sociedade brasileira.",
        image: "https://images.unsplash.com/photo-1544174232-5d273c562b99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: `
            <p>Este trabalho examinou a situação da acessibilidade e inclusão de pessoas com deficiência no Brasil, analisando desde a infraestrutura urbana até as políticas públicas e a conscientização social.</p>
            <p>A produção destacou a importância da inclusão como direito fundamental e apresentou propostas para uma sociedade mais acessível e igualitária.</p>
        `,
        pages: 3,
        words: 1600,
        badge: "Redação"
    },
    {
        id: 3,
        title: "PRINCIPAIS FATORES QUE INFLUENCIAM NA QUALIDADE DE VIDA E NO BEM-ESTAR DA POPULAÇÃO",
        description: "Estudo sobre os elementos que determinam a qualidade de vida e bem-estar social.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: `
            <p>Esta análise explorou os múltiplos fatores que influenciam a qualidade de vida, incluindo saúde, educação, segurança, meio ambiente e relações sociais.</p>
            <p>O trabalho apresentou uma visão holística do bem-estar, considerando tanto aspectos objetivos quanto subjetivos da felicidade humana.</p>
        `,
        pages: 4,
        words: 2000,
        badge: "Redação"
    },
    {
        id: 4,
        title: "AS MUDANÇAS CLIMÁTICAS NO BRASIL E SEUS DESAFIOS",
        description: "Análise dos impactos das mudanças climáticas no território brasileiro e os desafios enfrentados.",
        image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: `
            <p>Esta produção investigou os efeitos das mudanças climáticas no Brasil, com foco em eventos extremos, alterações nos biomas e impactos na agricultura.</p>
            <p>O trabalho também discutiu políticas de adaptação e mitigação, destacando a importância do desenvolvimento sustentável.</p>
        `,
        pages: 3,
        words: 1700,
        badge: "Redação"
    },
    {
        id: 5,
        title: "AS CONSEQUÊNCIAS DO DESCARTE DE LIXO ELETRÔNICO",
        description: "Reflexão sobre os impactos ambientais e sociais do descarte inadequado de lixo eletrônico.",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: `
            <p>Este trabalho analisou as graves consequências do descarte inadequado de lixo eletrônico, incluindo contaminação do solo e água, e problemas de saúde pública.</p>
            <p>A produção também explorou soluções como reciclagem, logística reversa e conscientização ambiental.</p>
        `,
        pages: 3,
        words: 1550,
        badge: "Redação"
    },
    {
        id: 6,
        title: "O CONSUMO DE ULTRAPROCESSADOS E SUAS CONSEQUÊNCIAS À SAÚDE",
        description: "Estudo sobre os impactos do consumo de alimentos ultraprocessados na saúde humana.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: `
            <p>Esta análise examinou os efeitos do consumo regular de alimentos ultraprocessados, relacionando-o ao aumento de doenças crônicas como obesidade, diabetes e problemas cardiovasculares.</p>
            <p>O trabalho também discutiu políticas públicas de alimentação saudável e educação nutricional.</p>
        `,
        pages: 3,
        words: 1650,
        badge: "Redação"
    },
    {
        id: 7,
        title: "FATORES E EFEITOS DA DEPENDÊNCIA EM JOGOS DE APOSTAS NA WEB",
        description: "Investigação sobre a dependência em jogos de apostas online e seus impactos sociais.",
        image: "https://images.unsplash.com/photo-1593110121193-30e1e7ea36a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: `
            <p>Este trabalho explorou os fatores psicológicos e sociais que levam à dependência em jogos de apostas online, analisando seus efeitos devastadores nas finanças e relações familiares.</p>
            <p>A produção também discutiu medidas de prevenção e tratamento para esse tipo de dependência.</p>
        `,
        pages: 3,
        words: 1600,
        badge: "Redação"
    },
    {
        id: 8,
        title: "A IMPORTÂNCIA DO TRABALHO VOLUNTÁRIO NO COMBATE ÀS DESIGUALDADES SOCIAIS",
        description: "Reflexão sobre o papel do voluntariado na redução das desigualdades sociais.",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: `
            <p>Esta produção destacou a importância do trabalho voluntário como instrumento de transformação social, analisando seu impacto no combate à pobreza e na promoção da cidadania.</p>
            <p>O trabalho apresentou casos de sucesso e incentivou a participação social como forma de construir uma sociedade mais justa.</p>
        `,
        pages: 3,
        words: 1550,
        badge: "Redação"
    },
    {
        id: 9,
        title: "ADULTIZAÇÃO INFANTIL – CONSEQUÊNCIAS DA PERDA IRREPARÁVEL DA INFÂNCIA",
        description: "Análise sobre a adultização precoce das crianças e seus impactos no desenvolvimento.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: `
            <p>Este trabalho investigou o fenômeno da adultização infantil, examinando como a exposição precoce a responsabilidades e informações adultas afeta o desenvolvimento psicológico das crianças.</p>
            <p>A produção alertou para a importância de preservar a infância como fase fundamental de formação.</p>
        `,
        pages: 3,
        words: 1700,
        badge: "Redação"
    },
    {
        id: 10,
        title: "CAMINHOS PARA COMBATER O ETARISMO NAS RELAÇÕES SOCIAIS",
        description: "Reflexão sobre o preconceito etário e estratégias para combatê-lo.",
        image: "https://images.unsplash.com/photo-1576097449797-4c9a9ed6b2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: `
            <p>Esta análise explorou o etarismo (preconceito baseado na idade) em suas diferentes manifestações, desde o mercado de trabalho até as relações interpessoais.</p>
            <p>O trabalho propôs estratégias educacionais e políticas para promover o respeito à diversidade etária.</p>
        `,
        pages: 3,
        words: 1600,
        badge: "Redação"
    },
    {
        id: 11,
        title: "A IMPORTÂNCIA DA EDUCAÇÃO FINANCEIRA PARA OS JOVENS",
        description: "Estudo sobre a relevância do ensino de educação financeira para a formação dos jovens.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: `
            <p>Este trabalho destacou a importância da educação financeira desde cedo, analisando como ela contribui para a autonomia, planejamento de vida e prevenção de problemas como endividamento.</p>
            <p>A produção defendeu a inclusão da educação financeira no currículo escolar como forma de empoderamento juvenil.</p>
        `,
        pages: 3,
        words: 1550,
        badge: "Redação"
    },
    {
        id: 12,
        title: "DESAFIOS PARA A VALORIZAÇÃO DA CULTURA POPULAR BRASILEIRA",
        description: "Análise dos obstáculos enfrentados pela cultura popular brasileira e estratégias de valorização.",
        image: "https://images.unsplash.com/photo-1485795959901-5cdaec9ce83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: `
            <p>Esta produção investigou os desafios para preservação e valorização da cultura popular brasileira frente à globalização e homogeneização cultural.</p>
            <p>O trabalho apresentou propostas para fortalecer as manifestações culturais tradicionais como patrimônio nacional.</p>
        `,
        pages: 3,
        words: 1650,
        badge: "Redação"
    },
    {
        id: 13,
        title: "CAMINHOS PARA A UNIVERSALIZAÇÃO DO SANEAMENTO BÁSICO NO BRASIL",
        description: "Reflexão sobre os desafios e soluções para universalizar o saneamento básico no país.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content: `
            <p>Este trabalho analisou a situação do saneamento básico no Brasil, destacando as desigualdades regionais e os impactos na saúde pública.</p>
            <p>A produção discutiu investimentos necessários, políticas públicas e tecnologias para alcançar a universalização do saneamento.</p>
        `,
        pages: 3,
        words: 1700,
        badge: "Redação"
    },
    {
        id: 14,
        title: "O PAPEL DO ESPORTE COMO FERRAMENTA DE TRANSFORMAÇÃO SOCIAL",
        description: "Estudo sobre o potencial do esporte na promoção da inclusão e transformação social.",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: "redacao",
        content:
