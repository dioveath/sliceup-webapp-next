import BookmarkSVG from "@/icon-components/bookmark";

export default function RestaurantCard() {
  return (
    <a href="#" className="">
      <div className="w-full flex gap-4 items-center justify-between bg-gray-50 text-black text-sm shadow-lg rounded-sm p-6">
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center lg:order-2 lg:justify-between">
          <div className="w-full max-w-[300px] flex flex-col items-start">
            <h2 className="font-bold "> La Trattoria Pizza </h2>

            <div className="flex gap-1 items-center font-bold text-xs text-gray-700">
              <p> 4.8 </p>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" stroke="yellow">
                <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
              </svg>
              (<span> 122 </span>)
            </div>

            <p className="font-bold text-xs text-gray-700"> 844 2nd Ave, New York </p>
          </div>

          <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-end">
            <p className="order-2 lg:order-3 flex gap-1 lg:w-full lg:justify-between">
              <span> Free Delivery </span>
              <span className="lg:hidden"> , </span>
              <span> 20-30 min </span>
              <span className="lg:hidden"> , </span>
              <span> $10 Min </span>
            </p>

            <div className="w-full flex items-center gap-1 order-3 lg:order-2">
              <BookmarkSVG className="w-4 h-4 text-monza-600" />
              <p className="text-sm text-green-500 font-bold">20% off up to $10 on orders above $30</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center lg:order-1">
          <img src="https://uploads-ssl.webflow.com/629a324a5755c934250e0a22/64013b9561a68f2bab3bcaa5_Asset%204.jpg" alt="restaurant" className="w-24 h-24 rounded-md object-contain" />
        </div>
      </div>
    </a>
  );
}
