export default function RestaurantRequestCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-4 p-4">
      <div className="col-span-1 flex flex-row lg:flex-row-reverse gap-4 justify-end items-center ">

        <div className="">
          <h2 className="text-2xl font-bold text-black"> Don&apos;t see your pizzeria? </h2>
          <p className="text-xs font-semibold text-black">Check out all available pickup pizzerias or request to have your local shop added on Slice Up!</p>
        </div>

        <div className="h-28 w-28 text-black font-extrabold flex justify-center items-center">
            <img src="icons/pizza-shop.png" className="object-fit" alt="Pizza Shop" />            
        </div>
      </div>

      <div className="col-span-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center justify-center">
          <button className="col-span-1 font-bold border-2 border-monza-600 text-monza-600 rounded-md px-4 py-2 w-full">Switch to Pickup </button>
          <button className="col-span-1 font-bold border-2 border-monza-600 text-monza-600 rounded-md px-4 py-2 w-full">Request a Pizzeria </button>
        </div>
      </div>
    </div>
  );
}
