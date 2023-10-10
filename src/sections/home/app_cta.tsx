export default function AppCTA() {
  console.log("AppCTA");

  return (
    <section className="max-w-screen-xl w-full p-4 md:relative">
      <div className="md:absolute md:left-0 md:right-0 md:p-4 md:-top-20 w-full grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="col-span-1 md:col-span-5 h-[300px] overflow-clip">
            <img src="https://github.com/dioveath/ti-ext-order-manager-live/blob/main/assets/ss1.jpg?raw=true" />
        </div>
        <div className="col-span-1 md:col-span-7 text-black">
          <div className="flex flex-col gap-2 items-start">
            <a href="https://play.google.com/store/apps/details?id=com.anar.oms&utm_source=website&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
              <img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" width="300px;" />
            </a>
            <p className="text-2xl md:text-4xl font-bold"> The app shops trust. </p>
            <div className="w-20 h-2 bg-monza-600"> </div>
            <p className="text-base md:text-xl font-semibold">
              You get the food you love while supporting pizzerias. Plus, there are no crazy fees for you or the shop. Get started with the app 19,000 pizzerias count on.
            </p>
            <a href="#" className="text-xl md:text-2xl font-bold text-monza-600 text-shadow-xl py-2 rounded-md">Download the app {">>"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
