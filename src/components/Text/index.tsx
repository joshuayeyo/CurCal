import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className: string;
}

const CommonText = ({children, className}: Props) => {
    return (
        <div>
            <p className={className}>
                {children}
            </p>
        </div>
    )
}

export default CommonText;