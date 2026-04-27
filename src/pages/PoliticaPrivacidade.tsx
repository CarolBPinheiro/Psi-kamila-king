import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const PoliticaPrivacidade = () => {
  return (
    <Layout>
      <Helmet>
        <title>Política de Privacidade | Kamila King Pinheiro</title>
        <meta
          name="description"
          content="Política de privacidade e proteção de dados do site de Kamila King Pinheiro, conforme LGPD."
        />
      </Helmet>

      <section className="pt-32 pb-20">
        <div className="container max-w-3xl">
          <h1 className="font-display text-4xl font-semibold text-foreground mb-8">
            Política de Privacidade
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-sm text-muted-foreground mb-8">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              1. Introdução
            </h2>
            <p>
              Esta Política de Privacidade descreve como Kamila King Pinheiro 
              (CRP 16/7259) coleta, usa e protege as informações pessoais fornecidas 
              através deste site, em conformidade com a Lei Geral de Proteção de Dados 
              (LGPD - Lei nº 13.709/2018).
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              2. Dados Coletados
            </h2>
            <p>Podemos coletar os seguintes tipos de informações:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome e informações de contato (e-mail, telefone) fornecidos voluntariamente através do formulário de contato;</li>
              <li>Informações de navegação (cookies) para melhorar a experiência do usuário;</li>
              <li>Mensagens enviadas através dos canais de comunicação do site.</li>
            </ul>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              3. Finalidade do Tratamento
            </h2>
            <p>As informações coletadas são utilizadas para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder suas mensagens e solicitações de agendamento;</li>
              <li>Melhorar a experiência de navegação no site;</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              4. Sigilo Profissional
            </h2>
            <p>
              Além das proteções previstas na LGPD, todas as informações compartilhadas 
              no contexto do atendimento psicológico são protegidas pelo sigilo 
              profissional, conforme previsto no Código de Ética Profissional do 
              Psicólogo (Resolução CFP nº 010/2005).
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              5. Compartilhamento de Dados
            </h2>
            <p>
              Não compartilhamos suas informações pessoais com terceiros, exceto 
              quando necessário para prestação do serviço (como plataformas de 
              videoconferência para atendimento online) ou quando exigido por lei.
            </p>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              6. Seus Direitos
            </h2>
            <p>Você tem direito a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acessar seus dados pessoais;</li>
              <li>Solicitar correção de dados incompletos ou incorretos;</li>
              <li>Solicitar a exclusão de seus dados;</li>
              <li>Revogar o consentimento a qualquer momento.</li>
            </ul>

            <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
              7. Contato
            </h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
              entre em contato pelo e-mail: kamila.pinheiropsi@gmail.com
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PoliticaPrivacidade;
