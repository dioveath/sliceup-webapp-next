export default function Footer() {
  return (
    <footer className="w-full bg-monza-600">
      <div className="max-w-screen-xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12 min-h-[400px] gap-10">
        <div className="col-span-3">
          <div className="flex flex-col gap-2 w-full">
            <button className="w-full bg-white text-monza-600 border-2 border-white text-xl font-bold rounded-md shadow-lg px-4 py-2"> GET THE APP </button>
            <button className="w-full bg-transparent text-white border-2 border-white text-xl font-bold rounded-md shadow-lg px-4 py-2"> LOG IN </button>
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2 w-full">
            <div className="col-span-1 flex flex-col gap-2 w-full ">
                <p className="text-white text-xl font-bold"> ABOUT </p>
                <p className="text-white text-sm"> About Sliceup </p>
                <p className="text-white text-sm"> Careers </p>
                <p className="text-white text-sm"> Press </p>
                <p className="text-white text-sm"> Blog </p>
                <p className="text-white text-sm"> Accessibility </p>
                <p className="text-white text-sm"> Privacy </p>
                <p className="text-white text-sm"> Terms </p>
            </div>
            <div className="col-span-1 flex flex-col gap-2 w-full ">
                <p className="text-white text-xl font-bold"> Let us Help You </p>
                <p className="text-white text-sm"> 24/7 Support </p>
                <p className="text-white text-sm"> FAQs </p>
                <p className="text-white text-sm"> Account </p>
            </div>            
          </div>
        </div>

        <div className="col-span-2">
          <div className="flex flex-col gap-2 w-full">
            <p className="text-white text-xl font-bold"> BROWSE BY CITIES </p>
            <p className="text-white text-sm"> London </p>
            <p className="text-white text-sm"> Manchester </p>
            <p className="text-white text-sm"> Birmingham </p>
            <p className="text-white text-sm"> Leeds </p>
            <p className="text-white text-sm"> Glasgow </p>
            <p className="text-white text-sm"> Liverpool </p>
            <p className="text-white text-sm"> Nottingham </p>
            <p className="text-white text-sm"> Edinburgh </p>
            <p className="text-white text-sm"> Sheffield </p>
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex flex-col gap-2 w-full">
            <p className="text-white text-xl font-bold"> BROWSE BY PIZZA TYPES </p>
            <p className="text-white text-sm"> Margherita </p>
            <p className="text-white text-sm"> Pepperoni </p>
            <p className="text-white text-sm"> Hawaiian </p>
            <p className="text-white text-sm"> Meat Lovers </p>
            <p className="text-white text-sm"> Vegetarian </p>
            <p className="text-white text-sm"> Vegan </p>
            <p className="text-white text-sm"> Gluten Free </p>
            <p className="text-white text-sm"> Cheese </p>
            <p className="text-white text-sm"> Chicken </p>
            <p className="text-white text-sm"> Beef </p>
            <p className="text-white text-sm"> Seafood </p>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col gap-2 w-full">
            <p className="text-white text-xl font-bold"> PARTNERS </p>
            <p className="text-white text-sm"> Add your restaurant </p>
            <p className="text-white text-sm"> Get help </p>
            <p className="text-white text-sm"> Read FAQs </p>
            <p className="text-white text-sm"> View all cities </p>
            <p className="text-white text-sm"> View all countries </p>
          </div>
        </div>        
      </div>
      <div className="p-4 flex flex-col justify-center items-center">
        <div className="flex gap-4">
            <a href="#" className="text-white text-sm font-bold"> <i className="fab fa-facebook-square"></i> </a>
            <a href="#" className="text-white text-sm font-bold"> <i className="fab fa-twitter-square"></i> </a>
            <a href="#" className="text-white text-sm font-bold"> <i className="fab fa-instagram-square"></i> </a>
        </div>
        <div className="flex gap-4">
            <a href="#" className="text-white text-xs font-bold underline"> Do not sell my data </a>
            <a href="#" className="text-white text-xs font-bold underline"> Privacy Policy </a>
            <a href="#" className="text-white text-xs font-bold underline"> Terms and Conditions </a>
        </div>

        <p>&copy; 2023 Sliceup. All rights reserved.</p>
      </div>
    </footer>
  );
}
