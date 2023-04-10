declare module '*.scss' {
    interface IClassNames {
        [classNames: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";

declare const __IS__DEV__: boolean;