import { Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "./hooks/use-toast";
import { useState } from "react";
import { CONTACT_INFO } from "@/data/config";
import { Reveal } from "./Reveal";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const res = await response.json();

      if (res.success) {
        toast({
          title: "Message envoyé !",
          description: "Merci pour votre message, je vous répondrai bientôt.",
        });

        event.target.reset();
        setSuccessMessage("Votre message a été envoyé avec succès !");

        setTimeout(() => {
          setSuccessMessage("");
        }, 1000);
      } else {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue, veuillez réessayer.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer le message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Restons en<span className="text-primary"> Contact</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Partie gauche : infos */}
          <Reveal delay={200} className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Informations</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4 group cursor-default">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors block mt-1"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group cursor-default">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Téléphone</h4>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors block mt-1"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group cursor-default">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Localisation</h4>
                  <span className="text-muted-foreground block mt-1">{CONTACT_INFO.location}</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Partie droite : formulaire */}
          <Reveal delay={300} className="h-full">
            <div className="glass-panel p-8 rounded-2xl shadow-lg border border-primary/20 flex flex-col h-full relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] pointer-events-none" />
              
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                Envoyer un message
              </h3>

              <form className="space-y-6 relative z-10" onSubmit={onSubmit}>
                <input type="hidden" name="redirect" value="false" />
                <input type="hidden" name="subject" value="Nouveau message depuis le portfolio" />
                <input type="hidden" name="from_name" value="Portfolio Contact Form" />

                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:bg-background focus:outline-hidden focus:ring-2 focus:ring-primary/50 transition-all hover:border-border"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:bg-background focus:outline-hidden focus:ring-2 focus:ring-primary/50 transition-all hover:border-border"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Votre message..."
                    className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 focus:bg-background focus:outline-hidden focus:ring-2 focus:ring-primary/50 resize-none transition-all hover:border-border"
                    rows={4}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full shadow-lg flex items-center justify-center gap-2 mt-2"
                  )}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                      Envoi...
                    </span>
                  ) : (
                    <>
                      Envoyer <Send size={18} />
                    </>
                  )}
                </button>
              </form>

              {/* Message de succès encadré */}
              {successMessage && (
                <div className="absolute inset-x-8 bottom-8 p-4 bg-green-500/20 text-green-700 dark:text-green-400 border border-green-500/30 rounded-xl text-center backdrop-blur-md animate-fade-in z-20">
                  {successMessage}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
