import { Container } from "@mui/material";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const CommonContainer = ({children}: Props) => {
    return (
        <Container sx={{ borderRadius: "20px", borderColor: "#575757" }} className="p-4 flex flex-col justify-center items-center bg-container border-2">
            {children}
        </Container>
    )
}

export default CommonContainer;