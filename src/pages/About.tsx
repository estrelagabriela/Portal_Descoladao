import { Target, Heart, Lightbulb, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Separator } from '../components/ui/separator'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Nossa Missão',
      description:
        'Transformar a experiência mobile dos usuários, oferecendo uma plataforma completa, intuitiva e inovadora que simplifica o dia a dia e conecta pessoas.',
    },
    {
      icon: Heart,
      title: 'Nossos Valores',
      description:
        'Compromisso com a qualidade, inovação constante, foco no usuário e transparência em todas as nossas ações. Acreditamos em criar valor real para nossa comunidade.',
    },
    {
      icon: Lightbulb,
      title: 'Nossa Visão',
      description:
        'Ser referência em soluções mobile, reconhecidos pela excelência em design, performance e atendimento às necessidades dos nossos usuários.',
    },
    {
      icon: Users,
      title: 'Nossa Equipe',
      description:
        'Somos um time apaixonado por tecnologia e inovação, dedicado a criar a melhor experiência possível para você. Cada membro contribui com sua expertise para fazer o Descoladão crescer.',
    },
  ]

  return (
    <div className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Sobre o Descoladão
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Conheça a história, valores e a equipe por trás do aplicativo que está
            revolucionando a experiência mobile.
          </p>
        </div>

        {/* História */}
        <div className="mb-20 max-w-4xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Nossa História</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                O Descoladão nasceu da necessidade de criar uma plataforma que
                realmente atendesse às demandas dos usuários modernos. Percebemos
                que faltava no mercado uma solução completa, intuitiva e que
                colocasse a experiência do usuário em primeiro lugar.
              </p>
              <p>
                Desde o início, nosso foco tem sido ouvir nossa comunidade e
                evoluir constantemente. Cada atualização, cada novo recurso é
                desenvolvido pensando em como podemos facilitar e melhorar a vida
                dos nossos usuários.
              </p>
              <p>
                Hoje, milhares de pessoas confiam no Descoladão para organizar
                suas rotinas, conectar-se com amigos e acessar os serviços que
                precisam. E isso é apenas o começo da nossa jornada.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Valores */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que nos Move
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <Separator className="my-16" />

        {/* Conquistas */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">
            Conquistas que Orgulham
          </h2>
          <div className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">10k+</p>
              <p className="text-muted-foreground">Usuários Ativos</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">4.8</p>
              <p className="text-muted-foreground">Avaliação nas Lojas</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">50+</p>
              <p className="text-muted-foreground">Atualizações Lançadas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
