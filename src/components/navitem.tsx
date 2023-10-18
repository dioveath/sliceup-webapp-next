import Link from "next/link";

type NavItemProps = {
  item: NavItem;
  active: boolean;
};

type NavItem = {
  href: string;
  label: string;
  type: NavItemType;
};

enum NavItemType {
  LINK,
  BUTTON,
}

export { NavItemType };

export default function NavItem({ item, active }: NavItemProps) {
  const { href, label, type } = item;
  
  if(type === NavItemType.LINK) {
  return (
    <li>
      <Link href={href} className={`block py-2 px-4 rounded-lg ${active ? "bg-monza-600 text-white" : "text-monza-500 hover:bg-monza-100 hover:text-monza-600"}`}>
        {label}
      </Link>
    </li>
  );
  } else {
    return (
        <li>
          <Link href={href} className="block ml-4 md:ml-0 py-2 px-4 rounded-lg bg-monza-600 text-white hover:bg-monza-700">
            {label}
          </Link>          
        </li>
    )
  }  
}