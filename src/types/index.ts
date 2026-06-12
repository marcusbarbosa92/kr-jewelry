import { ComponentType } from "react";

export interface Collection {
  name: string;
  collection: string;
  description: string;
  message: string;
  image: string;
  span: string;
  height: string;
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

export interface GuaranteeItem {
  icon: ComponentType<any>;
  title: string;
  description: string;
}

export interface TrustBadgeItem {
  icon: ComponentType<any>;
  title: string;
  caption: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  detail: string;
}

export interface InstagramPostItem {
  image: string;
  likes: string;
  comments: string;
}
