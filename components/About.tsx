const About = () => {
  return (
    <div
      className="flex flex-col max-w-[89vw] h-screen items-center justify-center gap-4 lg:pt-36 pb-30 lg:px-20 lg:mb-36"
      id="about"
    >
      <div className="flex items-center justify-center border-5 border-purple p-3 mb-5 lg:mb-20">
        <h2 className="heading">About us</h2>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center justify-center">
        <p className="text-sm md:text-lg lg:text-4xl lg:max-w-[64vw]">
          One Platform. Multiple Avenues
        </p>
        <p className="text-sm md:text-lg lg:text-xl lg:max-w-[64vw]">
          Simbaland is an integrated ecosystem designed to help individuals
          navigate the complex world of Web3. Our platform hosts a suite of
          services built to empower users with knowledge, strategy, and early
          access — responsibly. <br /> <br />
          Through tools like Simba’s Edge, SimbaVerse, and Simba’s Den, we aim
          to foster learning, awareness, and smarter participation in the crypto
          space. Simbaland is not an investment advisory or financial service —
          it is a Web3 gateway for informed decision-making.
        </p>
      </div>
    </div>
  );
};

export default About;
