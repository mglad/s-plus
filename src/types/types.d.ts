// declare module "*.svg" {
//   import * as React from "react";

//   export const ReactComponent: React.FunctionComponent<
//     React.SVGProps<SVGSVGElement> & { title?: string }
//   >;

//   const src: string;
//   export default src;
// }
declare module "*.wav";
declare module "*.png" {
  const value: any;
  export = value;
}
declare module "*.mp4" {
  const src: string;
  export default src;
}