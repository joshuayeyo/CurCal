"use client";

import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <div className="bg-background border-none justify-center items-center flex flex-col">
            <p className="text-[#BDBDBD] font-extralight text-xs select:none">
                @joshuayeyo
            </p>
            <Link href="https://github.com/joshuayeyo">
                <GitHubIcon fontSize="large" className="text-[#BDBDBD]" />
            </Link>
        </div>
    )
}
export default Footer;