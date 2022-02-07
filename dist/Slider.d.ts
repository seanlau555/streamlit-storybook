import React, { ReactNode } from "react";
declare type Props = {
    options: string[];
    width: number;
    disabled: boolean;
    onChange: (value: string) => void;
};
export declare class DiscreteSlider extends React.PureComponent<Props> {
    state: {
        value: number;
    };
    constructor(props: any);
    onChange: (value: string) => void;
    render: () => ReactNode;
}
export {};
