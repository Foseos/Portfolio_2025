import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "./hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // nouvel état

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage(""); // reset message

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
        setSuccessMessage("Votre message a été envoyé avec succès !"); // message affiché

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
        description: "Impossible d’envoyer le message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Restons en<span className="text-primary"> Contact</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Partie gauche : infos */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Informations</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:dachez.lucas@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    dachez.lucas@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Téléphone</h4>
                  <a
                    href="tel:+33652609998"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +33 6 52 60 99 98
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Localisation</h4>
                  <span className="text-muted-foreground">Vichy, France</span>
                </div>
              </div>
            </div>
          </div>

          {/* Partie droite : formulaire */}
          <div className="bg-card p-8 rounded-lg shadow-xs flex flex-col">
            <h3 className="text-2xl font-semibold mb-6">Envoyer un message</h3>

            <form className="space-y-6" onSubmit={onSubmit}>
              <input type="hidden" name="redirect" value="false" />
              <input type="hidden" name="subject" value="Nouveau message depuis le portfolio" />
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  rows={4}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Envoi..." : "Envoyer"}
                <Send size={16} />
              </button>
            </form>

            {/* Message de succès encadré */}
            {successMessage && (
              <div className="mt-6 p-4 bg-green-100 text-green-800 border border-green-300 rounded-md text-center">
                {successMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
