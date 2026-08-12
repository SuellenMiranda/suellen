import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";
import { useLocale } from "@/i18n/LocaleContext";
import { section, text } from "@/lib/theme-classes";

export default function NotFound() {
  const [, setLocation] = useLocation();
  const { t } = useLocale();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900`}
    >
      <Card
        className={`w-full max-w-lg mx-4 shadow-lg border backdrop-blur-sm ${section.cardSolid} bg-white/80 dark:bg-slate-900/80`}
      >
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-100 dark:bg-red-950/50 rounded-full animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-red-500 dark:text-red-400" />
            </div>
          </div>

          <h1 className={`text-4xl font-bold mb-2 ${text.heading}`}>{t.notFound.title}</h1>

          <h2 className={`text-xl font-semibold mb-4 ${text.bodyStrong}`}>{t.notFound.heading}</h2>

          <p className={`mb-8 leading-relaxed ${text.body}`}>
            {t.notFound.line1}
            <br />
            {t.notFound.line2}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Home className="w-4 h-4 mr-2" />
              {t.notFound.home}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
