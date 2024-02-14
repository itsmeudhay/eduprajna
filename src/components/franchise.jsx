import Reveal from "./animations/reveal";
import logo from "/src/assets/icons/edu.png";


function Franchise() {
    return (
      <>
      <div id="franchise">
      <Reveal>
      <img src={logo} alt="logo" className="w-1/2 flex item-center py-16 justify-center mx-auto" />
      </Reveal>
      <Reveal>
      <h1 className="flex item-center py-16 justify-center text-center text-6xl text-sky-600">Franchise Your Way to IT Education Success</h1>
      <main>
        <p className="py-16 text-3xl leading-loose font-semibold text-gray-700 w-4/5 mx-auto">Are you passionate about technology and empowering others? Do you dream of owning your own business with a strong brand and proven track record? Eduprajna, a leading IT training institute known for its cutting-edge curriculum and industry-focused skills, is seeking enthusiastic partners to join our expanding franchise network.</p>
      </main>
      <section className="block items-start py-16 justify-start  w-4/5 mx-auto ">
        <h1 className="text-sky-600 py-16 text-start text-6xl">Why Franchise with Eduprajna?</h1>
        <ul className="list-decimal list-inside leading-loose text-2xl font-semibold  text-gray-700">
          <li className="py-6"><span className="text-sky-600 font-bold">Brand Recognition:</span> Eduprajna has established itself as a trusted name in IT education, attracting students and employers alike. Our brand offers instant recognition and credibility in your local market.</li>
          <li className="py-6"><span className="text-sky-600 font-bold">Proven Business Model:</span> Our robust franchise model ensures you receive comprehensive support, from site selection and operational training to marketing and curriculum guidance.</li>
          <li className="py-6"><span className="text-sky-600 font-bold">Profitable Potential:</span> The rapidly growing IT training market presents a lucrative opportunity. Eduprajna&#8217;s proven curriculum and strong relationships with leading tech companies empower you to tap into this high-potential market.</li>
          <li className="py-6"><span className="text-sky-600 font-bold">Comprehensive Support:</span> We provide ongoing support in every aspect of your franchise operation, from recruitment and training to marketing and financial management. You&#8217;ll never be alone on your journey!</li>
          <li className="py-6"><span className="text-sky-600 font-bold">Flexible Investment:</span> Choose from three franchise models to suit your budget and desired level of involvement, allowing you to tailor your franchise to your entrepreneurial vision.</li>
        </ul>
      </section>
      <section className="block items-start py-16 justify-start  w-4/5 mx-auto ">
        <h1 className="text-sky-600 py-16 text-start text-6xl">What We Offer Our Franchise Partners:</h1>
        <ul className="list-decimal list-inside leading-loose text-2xl font-semibold text-gray-700">
          <li className="py-6"><span className="text-sky-600 font-bold">Exclusive Territory Rights:</span> Operate within a defined territory to maximize your market reach and avoid competition.</li>
          <li className="py-6"><span className="text-sky-600 font-bold">Detailed Operational Manual:</span> A comprehensive guide covering every aspect of running your Eduprajna franchise, ensuring smooth and efficient operations.</li>
          <li className="py-6"><span className="text-sky-600 font-bold">Marketing and Branding Support:</span> Leverage our strong brand identity and proven marketing strategies to attract students and build local awareness.</li>
          <li className="py-6"><span className="text-sky-600 font-bold">Curriculum and Training Materials:</span> Access our constantly updated curriculum and training materials developed by industry experts.</li>
          <li className="py-6"><span className="text-sky-600 font-bold">Expert Support Team:</span> Dedicated franchise support team providing ongoing guidance and assistance throughout your journey.</li>
        </ul>
      </section>
      <section className="block items-start py-16 justify-start  w-4/5 mx-auto ">
        <h1 className="text-sky-600 py-16 text-start text-6xl">Who We&#8217;re Looking For:</h1>
        <ul className="list-decimal list-inside leading-loose text-2xl font-semibold text-gray-700">
          <li className="py-6">Passionate about technology and education  </li>
          <li className="py-6">Strong entrepreneurial spirit and commitment to success  </li>
          <li className="py-6">Excellent communication and interpersonal skills  </li>
          <li className="py-6">Proven business acumen and management experience  </li>
          <li className="py-6">Desire to contribute to the community by empowering others through education  </li>
        </ul>
        <p className="py-16 text-3xl leading-loose font-semibold text-gray-700 w-4/5 mx-auto">Ready to join the Eduprajna family and become a pioneer in IT education in your region? <span className="text-sky-600 font-bold">contact us today to learn more about franchise opportunities!</span></p>
      </section>
      <section className="flex justify-center mb-16">
        <a href="https://wa.me/message/KZMK64YYZU7GN1" className="inline-block bg-sky-400 px-6 py-6 rounded-full text-white font-semibold shadow-xl hover:bg-opacity-90">Take the First Step - Contact Us Today</a>
      </section>
      </Reveal>
      </div>
      </>
    )}

export default Franchise;
