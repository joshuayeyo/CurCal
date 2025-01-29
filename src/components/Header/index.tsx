import Link from "next/link";

const Header = () => {
    return (
        <div className="top-0 w-screen h-[52px] bg-[#202020] flex items-center justify-center fixed">
            <div className="flex items-center justify-between pointer:cursor-pointer">
                <Link href="/">
                    <p className="p-4 font-bold text-[#F2CFFF] text-[24px]">CurCal</p>
                </Link>
            </div>
        </div>
    )
}

export default Header;