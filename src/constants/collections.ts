import { img } from "../utils/helpers.ts";
import { Collection } from "../types/index.ts";

export const COLLECTIONS: Collection[] = [
  {
    name: "Anéis",
    collection: "Coleção Eternity",
    description: "Solitários e alianças para os momentos que pedem para sempre.",
    message:
      "Olá! Me interessei pelos anéis da Coleção Eternity. Pode me enviar fotos e valores das peças disponíveis? Se ajudar: ainda não sei minha medida de aro.",
    image: img("photo-1605100804763-247f67b3557e"),
    span: "lg:col-span-2 lg:row-span-2",
    height: "h-80 sm:h-96 lg:h-full lg:min-h-[37rem]",
  },
  {
    name: "Colares",
    collection: "Coleção Lumière",
    description: "Camadas de luz para usar sozinhas ou sobrepostas.",
    message:
      "Olá! Quero conhecer os colares da Coleção Lumière. Pode me mandar as opções com comprimentos e valores?",
    image: img("photo-1599643477877-530eb83abc8e"), // verified gold necklace
    span: "",
    height: "h-80 sm:h-96 lg:h-72",
  },
  {
    name: "Brincos",
    collection: "Coleção Aurora",
    description: "Do ponto de luz ao brinco de festa, brilho na sua medida.",
    message:
      "Olá! Amei os brincos da Coleção Aurora. Quais modelos estão disponíveis? Pode me enviar fotos com os valores?",
    image: img("photo-1535632066927-ab7c9ab60908"), // verified gold earrings
    span: "",
    height: "h-80 sm:h-96 lg:h-72",
  },
  {
    name: "Pulseiras",
    collection: "Coleção Riviera",
    description: "Elos delicados, presença inesquecível.",
    message:
      "Olá! Gostaria de ver as pulseiras da Coleção Riviera. Pode me enviar o catálogo com os valores?",
    image: img("photo-1602751584552-8ba73aad10e1"), // verified gold bracelet
    span: "lg:col-span-3",
    height: "h-80 sm:h-96 lg:h-80",
  },
];
