import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-background">
            <div className="container max-w-2xl mx-auto text-center">
                <div className="space-y-6">
                    <h1 className="text-9xl font-bold text-primary">404</h1>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Page non trouvée
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-md mx-auto">
                        Oups ! La page que vous recherchez semble avoir disparu dans le cosmos numérique.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <Link
                            to="/"
                            className="cosmic-button flex items-center gap-2"
                        >
                            <Home size={20} />
                            Retour à l'accueil
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="px-6 py-3 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
                        >
                            <ArrowLeft size={20} />
                            Page précédente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};