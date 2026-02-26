import { Component } from "react";
import { RefreshCw } from "lucide-react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
          <div className="text-center max-w-md space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-4xl">!</span>
            </div>
            <h1 className="text-2xl font-bold">
              Oups, quelque chose s&apos;est mal passé
            </h1>
            <p className="text-muted-foreground">
              Une erreur inattendue est survenue. Rechargez la page pour
              réessayer.
            </p>
            <button
              onClick={this.handleReload}
              className="cosmic-button inline-flex items-center gap-2 mx-auto"
            >
              <RefreshCw size={18} />
              Recharger la page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
