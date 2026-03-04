import { Banner } from "../components/Banner";
import Column from "../components/Column";
import Row from "../components/Row";
import Circle from "../components/shapes/Circle";
import Heart from "../components/shapes/Heart";
import Hexagon from "../components/shapes/Hexagon";
import Octagon from "../components/shapes/Octagon";
import Rectangle from "../components/shapes/Rectangle";
import Rhombus from "../components/shapes/Rhombus";
import Star from "../components/shapes/Star";
import StarBurst from "../components/shapes/StarBurst";
import Triangle from "../components/shapes/Triangle";
import ZigzagBox from "../components/shapes/zigzag/ZigzagBox";
import ZigzagLine from "../components/shapes/zigzag/ZigzagLine";
import Text from "../components/Text";

// `as const` keeps the keys literal so we can derive types from them later.
export const registry = {
  banner: Banner,
  column: Column,
  row: Row,
  text: Text,
  rectangle: Rectangle,
  circle: Circle,
  heart: Heart,
  star: Star,
  starburst: StarBurst,
  triangle: Triangle,
  rhombus: Rhombus,
  hexagon: Hexagon,
  octagon: Octagon,
  zigzag_box: ZigzagBox,
  zigzag_line: ZigzagLine,
} as const;

export type Registry = typeof registry;

// ComponentProps maps each registered key to the props type of the
// corresponding React component.  When a new component is added to the
// registry the props type will automatically flow through here, so other
// parts of the system (compiler, renderer, api) don’t need manual updates.
export type ComponentProps = {
  [K in keyof Registry]: React.ComponentProps<Registry[K]>;
};

// A layout node is just the discriminated union of registered types with
// their associated props.  Children are allowed recursively, but any kind
// of nesting is determined at runtime by the XML parser; we don’t have to
// touch this type when new elements are introduced.
export type LayoutNode<K extends keyof Registry = keyof Registry> = {
  type: K;
  props: ComponentProps[K];
  children?: LayoutNode[];
};
