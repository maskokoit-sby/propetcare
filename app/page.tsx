import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import AppointmentForm from "@/components/appointment-form"
import ArticlesSection from "@/components/articles-section"
import Testimonials from "@/components/testimonials"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <AppointmentForm />
      <ArticlesSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  )
}
