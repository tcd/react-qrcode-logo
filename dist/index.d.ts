import * as React from 'react';
declare type EyeColor = string | InnerOuterEyeColor;
declare type InnerOuterEyeColor = {
    inner: string;
    outer: string;
};
declare type CornerRadii = number | [number, number, number, number] | InnerOuterRadii;
declare type InnerOuterRadii = {
    inner: number | [number, number, number, number];
    outer: number | [number, number, number, number];
};
export interface IProps {
    /**
     * The value encoded in the QR Code.
     *
     * When the QR Code is decoded, this value will be returned.
     */
    value?: string;
    /**
     * The error correction level of the QR Code.
     */
    ecLevel?: 'L' | 'M' | 'Q' | 'H';
    /**
     * Enable crossorigin attribute.
     */
    enableCORS?: boolean;
    /**
     * The size of the QR Code.
     */
    size?: number;
    /**
     * The size of the quiet zone around the QR Code.
     *
     * This will have the same color as QR Code bgColor.
     */
    quietZone?: number;
    /**
     * Background color.
     */
    bgColor?: string;
    /**
     * Foreground color.
     */
    fgColor?: string;
    /**
     * The logo image.
     *
     * It can be a url/path or a base64 value.
     */
    logoImage?: string;
    /**
     * Logo image width.
     */
    logoWidth?: number;
    /**
     * Logo image height.
     */
    logoHeight?: number;
    /**
     * Logo opacity.
     *
     * This allows you to modify the transparency of your logo, so that it won't compromise the readability of the QR Code.
     */
    logoOpacity?: number;
    /**
     * Removes points behind the logo and adds a border with no points around the logo.
     */
    removeQrCodeBehindLogo?: boolean;
    /**
     * The corner radius for the positional patterns (the three "eyes" around the QR code).
     *
     * [See more details here](https://github.com/gcoro/react-qrcode-logo/blob/master/res/eyeRadius_doc.md).
     */
    eyeRadius?: CornerRadii | [CornerRadii, CornerRadii, CornerRadii];
    /**
     * The color for the positional patterns (the three "eyes" around the QR code).
     * [See more details here](https://github.com/gcoro/react-qrcode-logo/blob/master/res/eyeColor_doc.md).
     */
    eyeColor?: EyeColor | [EyeColor, EyeColor, EyeColor];
    /**
     * Style of the QR Code modules.
     */
    qrStyle?: 'squares' | 'dots';
    /**
     * FIXME: [unused?](https://github.com/gcoro/react-qrcode-logo/blob/master/lib/index.tsx#L365)
     */
    style?: object;
    /**
     * Optional custom id for the QRCode canvas.
     *
     * You can use this prop if you have multiple QRCodes and need to differentiate them.
     */
    id?: string;
}
export declare class QRCode extends React.Component<IProps, {}> {
    private canvas;
    static defaultProps: IProps;
    private static utf16to8;
    /**
     * Draw a rounded square in the canvas
     */
    private drawRoundedSquare;
    /**
     * Draw a single positional pattern eye.
     */
    private drawPositioningPattern;
    /**
     * Is this dot inside a positional pattern zone.
     */
    private isInPositioninZone;
    private transformPixelLengthIntoNumberOfCells;
    private isCoordinateInImage;
    constructor(props: IProps);
    shouldComponentUpdate(nextProps: IProps): boolean;
    componentDidMount(): void;
    componentDidUpdate(): void;
    update(): void;
    render(): React.DetailedReactHTMLElement<{
        id: string;
        height: number;
        width: number;
        style: {
            height: string;
            width: string;
        };
        ref: React.RefObject<HTMLCanvasElement>;
    }, HTMLCanvasElement>;
}
export {};
