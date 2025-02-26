import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { requestFormSchema } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function RequestForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const form = useForm({
    resolver: zodResolver(requestFormSchema),
    defaultValues: {
      eventType: undefined,
      contactName: "",
      contactEmail: "",
      eventDate: "",
      eventTime: "",
      eventLocation: "",
      additionalDetails: "",
      preferences: {
        colorScheme: "",
        style: "",
        specialRequests: "",
      },
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="eventType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de Evento</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un tipo de evento" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="wedding">Boda</SelectItem>
                  <SelectItem value="baby-shower">Baby Shower</SelectItem>
                  <SelectItem value="baptism">Bautizo</SelectItem>
                  <SelectItem value="graduation">Graduación</SelectItem>
                  <SelectItem value="gender-reveal">Revelación de Género</SelectItem>
                  <SelectItem value="anniversary">Aniversario</SelectItem>
                  <SelectItem value="birthday">Cumpleaños</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="contactName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tu Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Juan Pérez" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contactEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo Electrónico</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="tucorreo@ejemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="eventDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha del Evento</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="eventTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hora del Evento</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="eventLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lugar del Evento</FormLabel>
              <FormControl>
                <Input placeholder="Ingresa la dirección del lugar" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="additionalDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Detalles Adicionales</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Cualquier detalle específico sobre tu evento que quieras compartir"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Preferencias de Diseño</h3>

          <FormField
            control={form.control}
            name="preferences.colorScheme"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Esquema de Colores Preferido</FormLabel>
                <FormControl>
                  <Input placeholder="ej., Rosa y Dorado, Azul marino y Plata" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferences.style"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estilo Preferido</FormLabel>
                <FormControl>
                  <Input placeholder="ej., Moderno, Rústico, Elegante" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferences.specialRequests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Peticiones Especiales</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Cualquier elemento o característica especial de diseño que te gustaría incluir"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full">Enviar Solicitud</Button>
      </form>
    </Form>
  );
}