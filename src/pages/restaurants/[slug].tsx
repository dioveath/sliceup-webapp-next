import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { Link, Element, Events, scroller } from "react-scroll";


export default function RestaurantPage() {
  const router = useRouter();
  const { slug } = router.query;
  const menuBarRef = useRef<HTMLDivElement>(null);

  console.log(menuBarRef.current?.offsetHeight) ;

  useEffect(() => {

    Events.scrollEvent.register('begin', () => { console.log("begin") });
    Events.scrollEvent.register('end', () => { console.log("end") });

  }, [])
  

  return (
    <main className="w-full min-h-screen bg-gray-50 grid grid-cols-12">
      <div className="col-span-12 lg:col-span-8 bg-red-900">
        <div className="h-40 w-full bg-red-700">
          {/* restaurant cover image */}
          {/* restaurant details */}
        </div>

        {/* restaurant menu */}
        <div className="w-full h-full bg-orange-500">
          <div className="w-full flex overflow-x-hidden sticky top-0" ref={menuBarRef}>
            
            <Link className="px-4 py-2 bg-green-500" activeClass="bg-red-500" to="pizzas" spy={true} smooth={true} duration={500}
            offset={-(menuBarRef?.current?.offsetHeight || 0)}>
              Pizza
            </Link>
            <a href="#" className="px-4 py-2 bg-green-500" onClick={() => {
              scroller.scrollTo('sides', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
                offset: -(menuBarRef?.current?.offsetHeight || 0)
              });
            }}>
              Sides
            </a>
            <a href="#drinks" className="px-4 py-2 bg-green-500">
              {" "}
              Drinks{" "}
            </a>
            <a href="#desserts" className="px-4 py-2 bg-green-500">
              {" "}
              Desserts{" "}
            </a>
          </div>

          <div className="w-full flex flex-col gap-4">
            <Element className="w-full flex flex-col gap-4" id="pizzas" name="pizzas">
              <div className="w-full flex flex-row justify-between items-center">
                <h1 className="text-2xl font-bold text-black uppercase"> Pizza </h1>
                <p className="text-sm font-semibold text-black"> {pizzaMenuItems.length} items </p>
              </div>

              <div className="w-full flex flex-col gap-4">
                {pizzaMenuItems.map((item) => (
                  <MenuItemCard key={item.name} item={item} />
                ))}
              </div>
            </Element>

            <Element className="w-full flex flex-col gap-4" name="sides" id="sides">
              <div className="w-full flex flex-row justify-between items-center">
                <h1 className="text-2xl font-bold text-black uppercase"> Sides </h1>
                <p className="text-sm font-semibold text-black"> {sidesMenuItems.length} items </p>
              </div>

              <div className="w-full flex flex-col gap-4">
                {sidesMenuItems.map((item) => (
                  <MenuItemCard key={item.name} item={item} />
                ))}
              </div>
            </Element>

          </div>
        </div>
      </div>
      <div className="col-span-4 bg-blue-900 hidden lg:block">{/* cart */}</div>
    </main>
  );
}

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
};

const MenuItemCard = ({ item }: { item: MenuItem }) => {
  return (
    <div className="w-full flex flex-row justify-between items-center">
      <div className="w-2/3 h-full flex flex-col gap-2 justify-between">
        <div className="w-full">
          <h1 className="text-xl font-bold text-black"> {item.name} </h1>
          <p className="text-sm font-semibold text-black"> {item.description} </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-black"> {item.price} </p>
        </div>
      </div>

      <div className="w-40 h-40 bg-blue-500">
        <img src={item.image} className="object-fit" alt="Pizza Shop" />
      </div>
    </div>
  );
};

const pizzaMenuItems: MenuItem[] = [
  {
    name: "Margherita",
    description: "Tomato sauce, mozzarella, fresh basil",
    price: "£9.99",
    image: "https://sliceup.pizza/assets/media/uploads/margherita.png",
  },
  {
    name: "Pepperoni",
    description: "Tomato sauce, mozzarella, pepperoni",
    price: "£9.99",
    image: "https://sliceup.pizza/assets/media/uploads/pepperoni.png",
  },
  {
    name: "Hawaiian",
    description: "Tomato sauce, mozzarella, ham, pineapple",
    price: "£9.99",
    image: "https://sliceup.pizza/assets/media/uploads/hawaiian.png",
  },
  {
    name: "Meat Feast",
    description: "Tomato sauce, mozzarella, pepperoni, ham, beef",
    price: "£9.99",
    image: "https://sliceup.pizza/assets/media/uploads/meat-feast.png",
  },
  {
    name: "Veggie Supreme",
    description: "Tomato sauce, mozzarella, peppers, mushrooms, onions",
    price: "£9.99",
    image: "https://sliceup.pizza/assets/media/uploads/veggie-supreme.png",
  },
  {
    name: "BBQ Chicken",
    description: "BBQ sauce, mozzarella, chicken, red onions",
    price: "£9.99",
    image: "https://sliceup.pizza/assets/media/uploads/bbq-chicken.png",
  },
  {
    name: "Chicken Supreme",
    description: "Tomato sauce, mozzarella, chicken, peppers, mushrooms, onions",
    price: "£9.99",
    image: "https://sliceup.pizza/assets/media/uploads/chicken-supreme.png",
  },
  {
    name: "Chicken & Bacon",
    description: "Tomato sauce, mozzarella, chicken, bacon",
    price: "£9.99",
    image: "https://sliceup.pizza/assets/media/uploads/chicken-bacon.png",
  },
  {
    name: "Chicken & Sweetcorn",
    description: "Tomato sauce, mozzarella, chicken, sweetcorn",
    price: "£9.99",
    image: "https://sliceup.pizza/assets/media/uploads/chicken-sweetcorn.png",
  },
  {
    name: "Chicken & Mushroom",
    description: "Tomato sauce, mozzarella, chicken, mushrooms",
    price: "£9.99",
    image: "https://sliceup.pizza/assets/media/uploads/chicken-mushroom.png",
  },
];

const sidesMenuItems: MenuItem[] = [
  {
    name: "Garlic Bread",
    description: "Garlic butter spread on pizza dough",
    price: "£4.99",
    image: "https://sliceup.pizza/assets/media/uploads/garlic-bread.png",
  },
  {
    name: "Garlic Bread with Cheese",
    description: "Garlic butter spread on pizza dough with mozzarella",
    price: "£5.99",
    image: "https://sliceup.pizza/assets/media/uploads/garlic-bread-cheese.png",
  },
  {
    name: "Potato Wedges",
    description: "Potato wedges with a choice of dip",
    price: "£4.99",
    image: "https://sliceup.pizza/assets/media/uploads/potato-wedges.png",
  },
  {
    name: "Chicken Strippers",
    description: "Chicken strippers with a choice of dip",
    price: "£5.99",
    image: "https://sliceup.pizza/assets/media/uploads/chicken-strippers.png",
  },
  {
    name: "Chicken Wings",
    description: "Chicken wings with a choice of dip",
    price: "£5.99",
    image: "https://sliceup.pizza/assets/media/uploads/chicken-wings.png",
  },
  {
    name: "Mozzarella Sticks",
    description: "Mozzarella sticks with a choice of dip",
    price: "£5.99",
    image: "https://sliceup.pizza/assets/media/uploads/mozzarella-sticks.png",
  },
  {
    name: "Onion Rings",
    description: "Onion rings with a choice of dip",
    price: "£4.99",
    image: "https://sliceup.pizza/assets/media/uploads/onion-rings.png",
  },
  {
    name: "Chicken Bites",
    description: "Chicken bites with a choice of dip",
    price: "£5.99",
    image: "https://sliceup.pizza/assets/media/uploads/chicken-bites.png",
  },
  {
    name: "Jalapeno Poppers",
    description: "Jalapeno poppers with a choice of dip",
    price: "£5.99",
    image: "https://sliceup.pizza/assets/media/uploads/jalapeno-poppers.png",
  },
];
