import { ReactNode } from "react";

interface LinkButtonProps {
    href: string,
    children: ReactNode
}

const LinkButton = (props: LinkButtonProps) => {
    return (
        <a className="flex items-center cursor-pointer line-none hover:color-blue" href={props.href}>
            {props.children}
        </a>
    );
};

export default LinkButton;