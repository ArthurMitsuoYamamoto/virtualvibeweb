import Link from "next/link";

interface NavBarProps {
    active: "playstation" | "xbox" | "nintendo" | "default";
}

export default function NavBar(props: NavBarProps) {
    const { active } = props;
    const classActive = "border-white border-b-4";
    const classDefault = " font-k2d text-white text-[28px] ";

    var activeBgColor = () => {
        switch(active) {
            case "playstation":
                return "from-blue-900 to-blue-500";
            case "xbox":
                return "from-green-900 to-green-500";
            case "nintendo":
                return "from-red-900 to-red-500";
            default:
                return "from-gray-900 to-gray-500";
        }
    };

    return (
        <nav className={"flex justify-between items-center px-4 py-2 bg-gradient-to-br " + activeBgColor() + " w-full h-[120px]"}>
            <Link href="/">
                <img src="/img/VirtualVibeLogo.svg" alt="Virtual Vibe Logo" />
            </Link>
            <ul className="flex gap-14">
                <li className={(active == "playstation" ? classActive : "") + classDefault} >
                    <Link href="/playstation">playstation</Link>
                </li>
                <li className={(active == "xbox"? classActive : "") + classDefault}>
                    <Link href="/xbox">xbox</Link>
                </li>
                <li className={(active == "nintendo"? classActive : "") + classDefault}>
                    <Link href="/nintendo">nintendo</Link>
                </li>
            </ul>
            <div className="w-16">
            </div>
        </nav>
    );
}