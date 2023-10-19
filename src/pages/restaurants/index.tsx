import Link from "next/link";
import Dropdown, { DropdownItem } from "@/components/dropdown";
import RestaurantCard from "@/components/restaurants/restaurant_card";
import RestaurantRequestCard from "@/components/restaurants/restaurant_request_card";
import Footer from "@/sections/footer";
import { Gabarito, Inter } from "next/font/google";

const items = [
  {
    value: "1",
    label: "Delivery",
    active: true,
  },
  {
    value: "2",
    label: "Pickup",
    active: false,
  },
  {
    value: "3",
    label: "Dine In",
    active: false,
  },
];

const gabarito = Gabarito({ subsets: ["latin"] });

export default function RestaurantsListPage() {
  return (
    <>
      <main className={`flex w-full min-h-screen flex-col items-center p-2 lg:px-12 bg-gray-100 ` + gabarito.className}>
        <nav className="w-full bg-transparent flex justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="https://sliceup.pizza/assets/media/uploads/logo%203.png" className="h-8 mr-3" alt="Sliceup Logo" />
            </Link>
            <Dropdown items={items} />
          </div>
          <div className="flex items-center">
            <Link href="/owner_login" className="font-bold bg-monza-600 text-white rounded-sm px-4 py-2 w-full">Login</Link>
          </div>
        </nav>

        <div className="w-full grid grid-cols-1 items-center justify-center gap-2 py-4">
          <input type="text" placeholder="Search for a restaurant" className="w-full text-black px-4 py-2 border-2 rounded-sm" />
          <button className="font-bold bg-monza-600 text-white rounded-sm px-4 py-2 w-full">Search</button>
        </div>

        <div className="w-full h-full flex flex-col px-2 lg:px-40 ">

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1"></div>
          <div className="col-span-1 flex flex-col items-center gap-2">
            <h3 className="text-sm text-black"> Search Results </h3>
            <div className="w-10 h-1 bg-monza-600"> </div>
          </div>
          <div className="col-span-1 flex flex-1 items-center justify-center md:justify-end gap-2">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
              </svg>

              <h3 className="text-sm text-black"> Sort By </h3>
            </div>

            <div className="flex items-center justify-center">
              <p className="text-sm font-bold text-black"> Recommended </p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-monza-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 gap-4 my-4">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantRequestCard/>
        </div>

        </div>

      </main>
      <Footer className={`${gabarito.className}`} />
    </>
  );
}
