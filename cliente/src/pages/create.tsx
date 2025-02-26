import { useState } from "react";
import { useRoute } from "wouter";
import { templates } from "@/lib/templates";
import { TextEditor } from "@/components/editor/text-editor";
import { TemplatePreview } from "@/components/templates/template-preview";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Create() {
  const [_, params] = useRoute("/create/:id");
  const { toast } = useToast();
  const template = templates.find(t => t.id === params?.id);
  
  const [content, setContent] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    message: "",
    primaryColor: "#ffffff",
    secondaryColor: "#000000"
  });

  const createInvitation = useMutation({
    mutationFn: async (data: any) => {
      const res = await apiRequest("POST", "/api/invitations", {
        templateId: template?.id,
        type: template?.type,
        content: data
      });
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Your invitation has been saved!"
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to save your invitation",
        variant: "destructive"
      });
    }
  });

  if (!template) {
    return <div>Template not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Customize Your Invitation
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <TextEditor
            onSave={(data) => {
              setContent(data);
              createInvitation.mutate(data);
            }}
            initialContent={content}
          />
        </div>

        <div className="lg:sticky lg:top-8">
          <TemplatePreview
            template={template}
            content={content}
          />
        </div>
      </div>
    </div>
  );
}
