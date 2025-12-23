import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

const faqs = [
  {
    question: 'Como faço para baixar o aplicativo?',
    answer:
      'O Descoladão está disponível gratuitamente na App Store (iOS) e Google Play (Android). Basta clicar nos botões de download neste site ou procurar "Descoladão" nas lojas de aplicativos.',
  },
  {
    question: 'O aplicativo é gratuito?',
    answer:
      'Sim! O Descoladão é totalmente gratuito para download e uso. Oferecemos recursos premium opcionais, mas todas as funcionalidades principais estão disponíveis sem custo.',
  },
  {
    question: 'Como faço para criar uma conta?',
    answer:
      'Após instalar o aplicativo, basta abrir e seguir o processo de registro. Você pode criar uma conta usando seu email, ou fazer login rapidamente com Google, Facebook ou Apple ID.',
  },
  {
    question: 'Posso usar o Descoladão em vários dispositivos?',
    answer:
      'Sim! Sua conta é sincronizada automaticamente entre todos os seus dispositivos. Basta fazer login com a mesma conta em cada dispositivo.',
  },
  {
    question: 'Como funciona a sincronização de dados?',
    answer:
      'Todos os seus dados são salvos na nuvem de forma segura e criptografada. Qualquer alteração feita em um dispositivo é automaticamente sincronizada com os demais em tempo real.',
  },
  {
    question: 'O aplicativo funciona offline?',
    answer:
      'Sim! Muitas funcionalidades do Descoladão funcionam offline. Seus dados são salvos localmente e sincronizados automaticamente quando você se conectar à internet novamente.',
  },
  {
    question: 'Como posso cancelar minha conta?',
    answer:
      'Você pode excluir sua conta a qualquer momento através das configurações do aplicativo. Vá em Configurações > Conta > Excluir Conta. Todos os seus dados serão permanentemente removidos.',
  },
  {
    question: 'Meus dados estão seguros?',
    answer:
      'Absolutamente! Utilizamos criptografia de ponta a ponta e seguimos as melhores práticas de segurança. Seus dados são protegidos e nunca são compartilhados com terceiros sem sua permissão.',
  },
  {
    question: 'Como entro em contato com o suporte?',
    answer:
      'Você pode entrar em contato através do formulário abaixo, pelo email contato@descoladao.com, ou diretamente no aplicativo através da seção de Ajuda e Suporte.',
  },
]

export default function FAQ() {
  return (
    <section className="py-12">
      <div className="space-y-4">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-3xl font-bold">Perguntas Frequentes</h2>
          <p className="text-muted-foreground">
            Encontre respostas rápidas para as dúvidas mais comuns
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
