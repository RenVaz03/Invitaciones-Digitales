import { useState } from "react";
import { templates } from "@/lib/templates";
import { TemplateCard } from "@/components/templates/template-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RequestForm } from "@/components/request-form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { ArrowDownCircle } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const { toast } = useToast();

  const filteredTemplates = activeTab === "all"
    ? templates
    : templates.filter(t => t.type === activeTab);

  const createRequest = useMutation({
    mutationFn: async (data: any) => {
      const res = await apiRequest("POST", "/api/requests", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Solicitud Enviada",
        description: "¡Hemos recibido tu solicitud de invitación. ¡Te contactaremos pronto!",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "No se pudo enviar tu solicitud. Por favor, intenta de nuevo.",
        variant: "destructive",
      });
    },
  });

  return (
    <div className="min-h-screen">
      {/* Template Showcase Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Creador de Invitaciones Digitales</h1>
          <p className="text-lg text-muted-foreground">
            Inspírate con nuestras hermosas plantillas y déjanos crear tu invitación personalizada perfecta
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <div className="bg-muted p-4 rounded-lg mb-8">
            <TabsList className="w-full max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
                Todos
              </TabsTrigger>
              <TabsTrigger value="wedding" onClick={() => setActiveTab("wedding")}>
                Boda
              </TabsTrigger>
              <TabsTrigger value="baby-shower" onClick={() => setActiveTab("baby-shower")}>
                Baby Shower
              </TabsTrigger>
              <TabsTrigger value="baptism" onClick={() => setActiveTab("baptism")}>
                Bautizo
              </TabsTrigger>
              <TabsTrigger value="graduation" onClick={() => setActiveTab("graduation")}>
                Graduación
              </TabsTrigger>
              <TabsTrigger value="gender-reveal" onClick={() => setActiveTab("gender-reveal")}>
                Revelación de Género
              </TabsTrigger>
              <TabsTrigger value="anniversary" onClick={() => setActiveTab("anniversary")}>
                Aniversario
              </TabsTrigger>
              <TabsTrigger value="birthday" onClick={() => setActiveTab("birthday")}>
                Cumpleaños
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-12">
          <ArrowDownCircle className="w-12 h-12 text-muted-foreground animate-bounce" />
        </div>
      </section>

      {/* Request Form Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Solicita Tu Invitación Personalizada</h2>
            <p className="text-muted-foreground">
              Cuéntanos sobre tu evento y crearemos una invitación personalizada especialmente para ti
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-lg p-6">
            <RequestForm onSubmit={createRequest.mutate} />
          </div>
        </div>
      </section>
    </div>
  );
}