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

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 bg-black/70 text-white overflow-y-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg tracking-wide">
          TAKEN
        </h1>
        <div className="max-w-4xl text-lg md:text-2xl leading-relaxed mb-8 font-semibold space-y-4">
          <p>They didn’t just take our kids.<br />They took our voice, our rights, our dignity—<strong>and called it protection.</strong></p>
          <p>This is not safety. This is not justice.<br /><strong>This is legalized kidnapping backed by dollars and silence.</strong></p>
          <p>They call it the system.<br /><strong>We call it what it is: kidnapping.</strong></p>
          <p>Families are being torn apart in broad daylight—under legal terms, with polished paperwork, and no chance to fight back.</p>
          <p>Courtrooms reward the parent with more money, not more love.<br />Social workers disappear. Judges rubber-stamp outcomes.</p>
          <p><strong>And fathers?</strong><br />We’re presumed unfit.<br />We’re erased on arrival.</p>
          <p>No support. No aid. No seat at the table.<br />But plenty of blame.</p>
          <p>They said we didn’t show up—<br /><strong>They didn’t say they locked the doors.</strong></p>
          <p>We’re not missing.<br /><strong>We were filtered out.</strong></p>
          <p>This is not a glitch in the system.<br /><strong>This is the system.</strong></p>
          <p><strong>And we are done begging it to work.</strong></p>
          <p><strong>We are not here for pity. We are here for war.</strong></p>
          <p>A war for our children.<br />For our families.<br />For our right to be heard, seen, and counted.</p>
          <p><strong>We are the Father’s Alliance.<br />And we are rising.</strong></p>
        </div>
        <a
          href="/who-we-are"
          className="inline-block bg-amber-500 text-black font-bold py-3 px-6 rounded-full text-lg hover:bg-amber-600 transition shadow-lg"
        >
          Learn Why We Exist
        </a>
      </div>
    </div>
  );
};

export default Home;
