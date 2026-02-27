import { Banner } from "../components/Banner";
import Column from "../components/Column";

export const registry = {
  banner: Banner,
  column: Column,
};

export type Registry = typeof registry;
