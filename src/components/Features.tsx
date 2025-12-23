import {
  Zap,
  Shield,
  Users,
  Smartphone,
  Star,
  TrendingUp
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const features = [
  {
    icon: Zap,
    title: 'Rápido e Eficiente',
    description: 'Interface otimizada para proporcionar a melhor performance e velocidade no uso diário.',
  },
  {
    icon: Shield,
    title: 'Seguro e Confiável',
    description: 'Seus dados protegidos com criptografia de ponta e sistemas de segurança avançados.',
  },
  {
    icon: Users,
    title: 'Conecte-se',
    description: 'Interaja com amigos, compartilhe momentos e construa sua rede de forma simples.',
  },
  {
    icon: Smartphone,
    title: 'Design Intuitivo',
    description: 'Interface moderna e fácil de usar, pensada para proporcionar a melhor experiência.',
  },
  {
    icon: Star,
    title: 'Recursos Premium',
    description: 'Acesso a funcionalidades exclusivas que fazem toda a diferença no seu dia a dia.',
  },
  {
    icon: TrendingUp,
    title: 'Sempre Evoluindo',
    description: 'Atualizações constantes com novos recursos baseados no feedback dos usuários.',
  },
]

export default function Features() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Por que escolher o Descoladão?
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Descubra as funcionalidades que tornam o Descoladão a escolha perfeita
            para milhares de usuários.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-2 transition-all hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
