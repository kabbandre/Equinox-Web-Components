declare const _default: {
    /**
     * Notes is an optional string which will be displayed in the "Notes"
     * tab for your component. It is recommended to use the generated readme,
     * however any string should suffice. This supports markdown.
     */
    notes: any;
    /**
     * The knobs object lets you configure different knobs for
     * different @Props on your component. This lets you pick
     * the "type" of knob and lets you pass additional arguments.
     *
     * NOTE: the "label" is generated for you. If you want to change
     * this you will need to update the stencil story generator.
     *
     * NOTE: if your property has the word "date" in it, a date knob
     * will be used. If your property has the work "color" init, a color
     * knob will be used.
     *
     * NOTE: you can refernce @Props using camelCase or kebab-case.
     */
    knobs: {
        'b-number': {
            type: string;
            args: (number | {
                range: boolean;
                min: number;
                max: number;
                step: number;
            })[];
        };
        poorlyNamedProp: {
            type: string;
            args: string[];
        };
    };
    /**
     * The states array is a list of additional states to display your
     * component. This is kind of a lightweight version of the "chapters".
     * Each state can have a title, description, and props.
     */
    states: ({
        title: string;
        description: string;
        props: {
            simpleText: string;
            backgroundColor?: undefined;
            poorlyNamedProp?: undefined;
        };
    } | {
        title: string;
        description: string;
        props: {
            backgroundColor: string;
            poorlyNamedProp: string;
            simpleText?: undefined;
        };
    })[];
};
export default _default;
