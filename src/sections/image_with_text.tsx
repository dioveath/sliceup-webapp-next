type ImageWithTextProps = {
  title: string;
  description: string;
  image: string;
  ctaLink: string;
};

export default function ImageWithText({ title, description, image, ctaLink }: ImageWithTextProps) {
  return (
    <section className="max-w-screen-xl w-full p-4 md:relative min-h-[350px] grid grid-cols-1 md:grid-cols-12 gap-10">
      <div className="col-span-1 md:col-span-5 overflow-clip">
        <img src={image} />
      </div>
      <div className="col-span-1 md:col-span-7 text-black">
        <div className="flex flex-col gap-2 items-start">
          <p className="text-2xl md:text-4xl font-bold"> {title} </p>
          <div className="w-20 h-2 bg-monza-600"> </div>
          <p className="text-base md:text-xl font-semibold">{description}</p>
          <a href={ctaLink} className="text-xl md:text-2xl font-bold text-monza-600 text-shadow-xl py-2 rounded-md">
            Download the app {">>"}
          </a>
        </div>
      </div>
    </section>
  );
}
