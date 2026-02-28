import { Banner } from "../components/Banner";
import Column from "../components/Column";
import Text from "../components/Text";

export const registry = {
  banner: Banner,
  column: Column,
  text: Text,
};

export type Registry = typeof registry;
