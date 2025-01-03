import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen top-0">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 rounded-lg shadow-2xl lg:ml-48 md:ml-64 ml-28 -mt-28 border-8 border-white "
          />
        </div>
        <div className="lg:w-1/2 space-y-6">
          <h3 className="text-2xl font-bold text-orange-600">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6 text-xl text-[#565555]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable. the majority have suffered alteration in some form, by
            injected humour, or randomised words which don&apos;t look even
            slightly believable.
          </p>
          <button className="btn bg-orange-600 text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
