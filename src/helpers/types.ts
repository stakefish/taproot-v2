export enum ElementKind {
  Mask,
  Square,
}

export interface Element {
  src: string
  kind: ElementKind
}
