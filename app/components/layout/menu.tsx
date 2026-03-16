import { MENU_ITEMS } from "@/app/constants/menu";

export default function Menu() {
    return (
        <nav className="space-y-2">
            {MENU_ITEMS.map((item) => (
                <div key={item.title} className="flex items-center gap-2 text-neutral-400 hover:text-neutral-100  hover:bg-neutral-600 pl-4 py-2 rounded-xl cursor-pointer ">
                    {item.icon}
                    <h1>
                        {item.title}
                    </h1>
                </div>
            ))}
        </nav>
    )
}
