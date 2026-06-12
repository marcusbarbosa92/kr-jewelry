import { ComponentType } from "react";

export interface Collection {
  name: string;
  collection: string;
  description: string;
  message: string;
  image: string;
  images: string[];
  span?: string;
  height?: string;
}

export interface QuizOption {
  label: string;
  frag: string;
}

export interface QuizStep {
  key: string;
  question: string;
  options: QuizOption[];
}


