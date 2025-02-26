import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { templates } from "@/lib/templates";
import type { Invitation } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";

export default function Preview() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { data: invitations, isLoading } = useQuery<Invitation[]>({
    queryKey: ["/api/invitations"],
  });

  const downloadInvitation = async (element: HTMLDivElement) => {
    const canvas = await html2canvas(element);
    const link = document.createElement("a");
    link.download = "invitation.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Invitations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="h-[300px]" />
              <CardContent className="p-4">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (!invitations?.length) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Invitations</h1>
        <p className="text-muted-foreground">
          You haven't created any invitations yet.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Invitations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {invitations.map((invitation) => {
          const template = templates.find((t) => t.id === invitation.templateId);
          if (!template) return null;

          return (
            <Card
              key={invitation.id}
              className="overflow-hidden cursor-pointer transition-shadow hover:shadow-lg"
              onClick={() => setSelectedId(selectedId === invitation.id ? null : invitation.id)}
            >
              <div
                ref={(el) => {
                  if (el && selectedId === invitation.id) {
                    downloadInvitation(el);
                    setSelectedId(null);
                  }
                }}
                className="relative"
                style={{
                  backgroundColor: invitation.content.primaryColor,
                  color: invitation.content.secondaryColor,
                }}
              >
                <div className="aspect-[3/2] relative overflow-hidden">
                  <img
                    src={template.imageUrl}
                    alt={template.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6 text-center space-y-4">
                  <h2 className="text-xl font-semibold">
                    {invitation.content.title}
                  </h2>
                  <div className="space-y-2 text-sm">
                    <p>{invitation.content.date}</p>
                    <p>{invitation.content.time}</p>
                    <p>{invitation.content.location}</p>
                  </div>
                  <p className="text-sm italic">{invitation.content.message}</p>
                </CardContent>
              </div>
              <div className="p-4 bg-background border-t">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedId(invitation.id);
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
}
