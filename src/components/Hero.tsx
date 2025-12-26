import { Button } from './ui/button'
import { QRCodeSVG } from 'qrcode.react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      {/* Círculos decorativos */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl"></div>

      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Texto */}
          <div className="space-y-6 text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
              Economize com o
              <span className="text-primary block mt-2"> Clube Descoladão</span>
            </h1>
            <p className="max-w-[600px] text-lg md:text-xl text-muted-foreground">
              Descontos exclusivos em estabelecimentos parceiros, telemedicina, assistência residencial e muito mais. Tudo em um único clube de benefícios!
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8" asChild>
                <a href="https://play.google.com/store/apps/details?id=com.idevilson.descoladao" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Baixar Agora
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8" asChild>
                <a href="#beneficios">
                  Ver Benefícios
                </a>
              </Button>
            </div>
          </div>

          {/* Imagem do Cartão */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/cartao-descoladao.png"
                alt="Cartão Clube Descoladão"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              {/* QR Code Overlay */}
              <div className="absolute top-[33%] left-1/2 transform -translate-x-1/2 bg-white p-1 rounded shadow-md">
                <QRCodeSVG
                  value="https://play.google.com/store/apps/details?id=com.idevilson.descoladao"
                  size={80}
                  level="H"
                  includeMargin={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
