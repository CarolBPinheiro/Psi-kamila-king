import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const TermosUso = () => {
  return (
    <Layout>
      <Helmet>
        <title>Termos de Uso | Kamila King Pinheiro</title>
        <meta
          name="description"
          content="Termos de uso do site de Kamila King Pinheiro, psicóloga clínica."
        />
      </Helmet>

      <section className="pt-32 pb-20">
        <div className="container max-w-3xl">
          <h1 className="font-display text-4xl font-semibold text-foreground mb-8">
            Termos de Uso
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-sm text-muted-foreground mb-8">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e utilizar este site, você concorda com estes Termos de Uso. 
              Se não concordar com algum dos termos, recomendamos que não utilize o site.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              2. Natureza Informativa do Conteúdo
            </h2>
            <p>
              O conteúdo disponibilizado neste site tem caráter exclusivamente 
              informativo e educativo. As informações aqui presentes não substituem, 
              em hipótese alguma, a consulta psicológica individualizada ou qualquer 
              outro tipo de acompanhamento profissional em saúde.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              3. Atendimento Psicológico
            </h2>
            <p>
              O atendimento psicológico é realizado exclusivamente através de sessões 
              agendadas, de forma presencial ou online. O contato através do site 
              (formulário, WhatsApp ou e-mail) não configura início de atendimento 
              psicológico.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              4. Limitação de Responsabilidade
            </h2>
            <p>
              Este site não oferece diagnósticos, aconselhamento ou tratamento 
              psicológico através de seus conteúdos públicos. O uso das informações 
              disponibilizadas é de responsabilidade exclusiva do usuário.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              5. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo deste site, incluindo textos, imagens e design, 
              é protegido por direitos autorais. A reprodução total ou parcial 
              sem autorização prévia é proibida.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              6. Aviso Ético
            </h2>
            <p className="p-4 bg-soft-orange-light/50 rounded-lg border border-primary/20">
              O atendimento psicológico não substitui acompanhamento médico quando 
              necessário. Em casos de urgência ou emergência em saúde mental, 
              procure atendimento especializado ou ligue para o CVV (188).
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              7. Alterações nos Termos
            </h2>
            <p>
              Estes termos podem ser atualizados periodicamente. Recomendamos que 
              você os revise regularmente para estar ciente de quaisquer mudanças.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              8. Contato
            </h2>
            <p>
              Para dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail: 
              kamiliaking@gmail.com
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermosUso;
