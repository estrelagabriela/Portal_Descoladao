import FAQ from '../components/FAQ'
import ContactForm from '../components/ContactForm'
import { Mail, MessageCircle } from 'lucide-react'
import { Card, CardContent } from '../components/ui/card'

export default function Support() {
  return (
    <div className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Suporte
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Estamos aqui para ajudar! Confira as perguntas frequentes ou entre
            em contato diretamente.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-16 max-w-4xl mx-auto">
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    Envie um email para nossa equipe
                  </p>
                  <a
                    href="mailto:contato@descoladao.com"
                    className="text-sm text-primary hover:underline"
                  >
                    contato@descoladao.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Suporte no App</h3>
                  <p className="text-sm text-muted-foreground">
                    Acesse o suporte direto pelo aplicativo em Configurações &gt;
                    Ajuda
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto mb-16">
          <FAQ />
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
