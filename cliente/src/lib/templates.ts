export interface Template {
  id: string;
  type: "wedding" | "baby-shower" | "baptism" | "graduation" | "gender-reveal" | "anniversary" | "birthday";
  name: string;
  imageUrl: string;
  description: string;
}

export const templates: Template[] = [
  // Wedding Templates
  {
    id: "wedding-1",
    type: "wedding",
    name: "Floral Clásico",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552",
    description: "Diseño floral elegante con tonos suaves"
  },
  {
    id: "wedding-2",
    type: "wedding",
    name: "Romance Rústico",
    imageUrl: "https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c",
    description: "Tema rústico inspirado en lo vintage"
  },
  {
    id: "wedding-3",
    type: "wedding",
    name: "Minimalista Moderno",
    imageUrl: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f",
    description: "Diseño limpio y contemporáneo"
  },
  {
    id: "wedding-4",
    type: "wedding",
    name: "Fiesta en el Jardín",
    imageUrl: "https://images.unsplash.com/photo-1494537449588-7f07cede2556",
    description: "Tema de jardín fresco y natural"
  },
  // Baby Shower Templates
  {
    id: "baby-1",
    type: "baby-shower",
    name: "Dulces Sueños",
    imageUrl: "https://images.unsplash.com/photo-1503431760783-91f2569f6802",
    description: "Pasteles soñadores y nubes suaves"
  },
  {
    id: "baby-2",
    type: "baby-shower",
    name: "Maravilla del Bosque",
    imageUrl: "https://images.unsplash.com/photo-1491013516836-7db643ee125a",
    description: "Tema de bosque encantado"
  },
  {
    id: "baby-3",
    type: "baby-shower",
    name: "Pequeños Tesoros",
    imageUrl: "https://images.unsplash.com/photo-1480985041486-c65b20c01d1f",
    description: "Momentos delicados y preciosos"
  },
  {
    id: "baby-4",
    type: "baby-shower",
    name: "Amigos Animales",
    imageUrl: "https://images.unsplash.com/photo-1515012003471-9d658cf66e1a",
    description: "Animales de safari juguetones"
  },
  // Baptism Templates
  {
    id: "baptism-1",
    type: "baptism",
    name: "Gracia Divina",
    imageUrl: "https://images.unsplash.com/photo-1668200741768-7e3c03f94aab",
    description: "Tradicional y elegante"
  },
  {
    id: "baptism-2",
    type: "baptism",
    name: "Día Bendecido",
    imageUrl: "https://images.unsplash.com/photo-1617724173876-db98f46aaec6",
    description: "Simbolismo religioso moderno"
  },
  {
    id: "baptism-3",
    type: "baptism",
    name: "Luz Celestial",
    imageUrl: "https://images.unsplash.com/photo-1574957973698-418ac4c877af",
    description: "Etéreo y pacífico"
  },
  {
    id: "baptism-4",
    type: "baptism",
    name: "Viaje Sagrado",
    imageUrl: "https://images.unsplash.com/photo-1550633794-58a2127a9027",
    description: "Simple y significativo"
  },
  // Graduation Templates
  {
    id: "graduation-1",
    type: "graduation",
    name: "Excelencia Académica",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    description: "Celebración sofisticada de graduación"
  },
  {
    id: "graduation-2",
    type: "graduation",
    name: "Futuro Brillante",
    imageUrl: "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78",
    description: "Tema de graduación moderno e inspirador"
  },
  // Gender Reveal Templates
  {
    id: "gender-1",
    type: "gender-reveal",
    name: "Rosa o Azul",
    imageUrl: "https://images.unsplash.com/photo-1527264935190-1b432c2c99b1",
    description: "Celebración clásica de revelación de género"
  },
  {
    id: "gender-2",
    type: "gender-reveal",
    name: "Dulce Sorpresa",
    imageUrl: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73",
    description: "Diseño juguetón de revelación de género"
  },
  // Anniversary Templates
  {
    id: "anniversary-1",
    type: "anniversary",
    name: "Años Dorados",
    imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    description: "Celebración elegante de aniversario"
  },
  {
    id: "anniversary-2",
    type: "anniversary",
    name: "Historia de Amor",
    imageUrl: "https://images.unsplash.com/photo-1537633552985-df8429e8048b",
    description: "Tema romántico de aniversario"
  },
  // Birthday Templates
  {
    id: "birthday-1",
    type: "birthday",
    name: "Momentos Especiales",
    imageUrl: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84",
    description: "Celebración especial de cumpleaños"
  },
  {
    id: "birthday-2",
    type: "birthday",
    name: "Dulce Celebración",
    imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
    description: "Diseño festivo de cumpleaños"
  },
];