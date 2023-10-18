import { useState } from "react";

type DropdownProps = {
  items: DropdownItem[];
};

export type DropdownItem = {
  value: string;
  label: string;
  active: boolean;
};

export default function Dropdown({ items }: DropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [activeItem, setActiveItem] = useState<DropdownItem>(items[0]);
  const setActive = (item: DropdownItem) => {
    setActiveItem(item);
  };


  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-monza-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-monza-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          {activeItem.label}
          {/* Heroicon name: chevron-down */}
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
          </svg>
        </button>
      </div>

      {/* 
                Dropdown menu, show/hide based on menu state.
                
                Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            */}

      {dropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item, index) => (
              <DropdownItem key={index} item={item} onClick={() => {
                setActive(item)
                setDropdownOpen(false);
              }}/>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

type DropdownItemProps = {
  item: DropdownItem;
  onClick?: () => void;
};

const DropdownItem = ({ item, onClick }: DropdownItemProps) => {
  const { value, label, active } = item;

  return (
    <a href="#" className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${active ? "bg-gray-100 text-gray-900" : ""}`} role="menuitem">
      {label}
    </a>
  );
};
