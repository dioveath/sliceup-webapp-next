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
      <a href={href} className={`block py-2 px-4 rounded-lg ${active ? "bg-monza-100 text-monza-500" : "text-monza-500 hover:bg-monza-100 hover:text-monza-600"}`}>
        {label}
      </a>
    </li>
  );
  } else {
    return (
        <li>
          <button className="block py-2 px-4 rounded-lg bg-monza-500 text-white hover:bg-monza-600">
            {label}
          </button>          
        </li>
    )
  }  
}
