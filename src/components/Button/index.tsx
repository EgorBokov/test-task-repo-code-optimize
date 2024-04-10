import { PropsWithChildren } from "react";

type IButtonProps = { 
    onClick: (...args: any[]) => void;
    title: string;
} & PropsWithChildren;

export const Button = ({ onClick, title, children }: IButtonProps) => {
    return (
      <button type="button" onClick={onClick}>
        { title || children }
      </button>
    );
};