const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/homepage_background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 bg-black/60 text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          TAKEN
        </h1>
        <p className="max-w-3xl text-lg md:text-2xl leading-relaxed mb-8">
          They didn’t just take our kids. They took our voice, our rights, our dignity—and called it protection. This is not safety. This is not justice. This is legalized kidnapping backed by dollars and silence. They call it the system. We call it what it is: theft.
        </p>
        <a
          href="/who-we-are"
          className="inline-block bg-amber-500 text-black font-bold py-3 px-6 rounded-full text-lg hover:bg-amber-600 transition"
        >
          Learn Why We Exist
        </a>
      </div>
    </div>
  );
};

export default Home;
