declare type Props = {
    options: string[];
    width: number;
    disabled: boolean;
    onChange: (value: string) => void;
};
export declare function DiscreteSlider({ onChange, disabled, options, width }: Props): JSX.Element;
export {};
