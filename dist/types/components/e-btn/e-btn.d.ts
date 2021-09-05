export declare class EBtn {
    /**
     * Make button edges rounded
     */
    rounded?: boolean;
    /**
     * Disable button
     */
    disabled?: boolean;
    /**
     * Turn button into the icon button. Pass icon code to this attribute.
     */
    icon?: string;
    /**
     * Button size
     */
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "xll";
    /**
     * Prepend icon
     */
    prependIcon?: string;
    /**
     * Append icon
     */
    appendIcon?: string;
    private classes;
    private renderIcon;
    private renderContent;
    render(): any;
}
