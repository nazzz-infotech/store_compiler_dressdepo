import { Banner } from "../components/Banner";
import Column from "../components/Column";
import Row from "../components/Row";
import Text from "../components/Text";

export const registry = {
  banner: Banner,
  column: Column,
  row: Row,
  text: Text,
};

export type Registry = typeof registry;
