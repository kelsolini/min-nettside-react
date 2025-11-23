const AboutItem = () => {
    return (
        <article className="col-span-12 w-full h-screen grid grid-cols-1 md:grid-cols-2 bg-white overflow-hidden">
            <div className="flex flex-col justify-center px-10 md:px-20">
                <h1 className="text-7xl font-bold tracking-tight uppercase mb-10">
                    About
                </h1>

                <h3 className="text-4xl font-semibold leading-tight">
                    Kenneth <br /> Nygård
                </h3>

                <p className="text-gray-600 mt-6 max-w-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Non voluptatem numquam minima doloremque unde laudantium,
                    sapiente nisi labore accusantium maxime impedit.
                </p>
            </div>

            <div className="relative flex items-center justify-center">
                <img
                    src="src\assets\images\kenneth-footplant.jpg"
                    alt="Kenneth på snowboard. Foto."
                    className="w-full h-full object-cover grayscale"
                />

                <div className="absolute left-0 top-1/3 w-3/4 h-1/3 bg-red-500 opacity-70 mix-blend-multiply pointer-events-none">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 tracking-widest text-lg uppercase text-white">Stuff</span>
                </div>
            </div>

        </article>
    );
};

export default AboutItem;
