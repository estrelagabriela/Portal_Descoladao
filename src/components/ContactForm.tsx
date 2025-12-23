import { useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Configuração EmailJS - IMPORTANTE: Substituir com suas credenciais
      // Crie uma conta em emailjs.com e configure:
      // 1. Service (Gmail, Outlook, etc)
      // 2. Template de email
      // 3. Obtenha as credenciais abaixo

      const serviceId = 'YOUR_SERVICE_ID' // Substituir
      const templateId = 'YOUR_TEMPLATE_ID' // Substituir
      const publicKey = 'YOUR_PUBLIC_KEY' // Substituir

      // Template variables para EmailJS:
      // {{from_name}}, {{from_email}}, {{subject}}, {{message}}
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-2xl">Entre em Contato</CardTitle>
        <CardDescription>
          Preencha o formulário abaixo e nossa equipe responderá em breve
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome */}
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Seu nome"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              disabled={isSubmitting}
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              disabled={isSubmitting}
            />
          </div>

          {/* Assunto */}
          <div className="space-y-2">
            <Label htmlFor="subject">Assunto *</Label>
            <Select
              required
              value={formData.subject}
              onValueChange={(value) =>
                setFormData({ ...formData, subject: value })
              }
              disabled={isSubmitting}
            >
              <SelectTrigger id="subject">
                <SelectValue placeholder="Selecione o assunto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="duvida">Dúvida</SelectItem>
                <SelectItem value="problema">Problema Técnico</SelectItem>
                <SelectItem value="sugestao">Sugestão</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Mensagem */}
          <div className="space-y-2">
            <Label htmlFor="message">Mensagem *</Label>
            <Textarea
              id="message"
              placeholder="Descreva sua dúvida ou problema..."
              required
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              disabled={isSubmitting}
            />
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
              <CheckCircle2 className="h-5 w-5" />
              <p className="text-sm">
                Mensagem enviada com sucesso! Responderemos em breve.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
              <AlertCircle className="h-5 w-5" />
              <p className="text-sm">
                Erro ao enviar mensagem. Tente novamente ou entre em contato por email.
              </p>
            </div>
          )}

          {/* Submit Button */}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              'Enviar Mensagem'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
