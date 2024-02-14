import Reveal from "./animations/reveal";
import Image1 from "/src/assets/images/pexels-olena-bohovyk-1772123.jpg";
import Image2 from "/src/assets/images/pexels-jess-bailey-designs-2647794.jpg";
import Image3 from "/src/assets/images/pexels-jess-bailey-designs-876466.jpg";

function AboutPage() {
  
    // Create a smooth spring animation for scrolling
   
  
    return (
        <>
        <div id='about' className="container mx-auto px-4 py-16">
            <header className="py-4 bg-none">
                <h1 className="text-6xl text-sky-600 font-bold text-center">About Us</h1>
            </header>

        <main className="py-12">
                <Reveal>
                <div className="py-12 mb-16 ">
                    <p className="py-16 text-3xl leading-loose text-start font-semibold text-gray-700 w-full mx-auto">
                        Eduprajna Information Technology Training Center is a top-rated training institute in Bangalore that offers a variety of
                        courses in software development, web design, networking, and more.
                        They have a team of experienced and qualified instructors who are passionate about helping their students succeed.
                    </p>
                    <h2 className="text-sky-600 py-16 text-start text-6xl w-full">Here are some of the courses offered by Eduprajna:</h2>
                    <ul className="list-inside leading-loose text-2xl font-semibold  text-gray-700">
                        <li><span className="text-sky-600 font-bold">Software Development:</span> Java, Python, C++, C#, .NET, PHP, etc.</li>
                        <li><span className="text-sky-600 font-bold">Web Design:</span> HTML, CSS, JavaScript, jQuery, Bootstrap, etc.</li>
                        <li><span className="text-sky-600 font-bold">Networking:</span> CCNA, CCNP, CCIE, etc.</li>
                        <li><span className="text-sky-600 font-bold">Hardware:</span> A+, Network+, etc.</li>
                    </ul>
                    <p className="py-16 text-3xl leading-loose font-semibold text-gray-700 w-4/5">Eduprajna also offers a variety of corporate training programs that can be customized to
                        meet the specific needs of your business.If you are looking for a high-quality IT training institute in Bangalore, Eduprajna is a great option.
                        They have a proven track record of success and their students are in high demand by employers.</p>
                </div>
                </Reveal>
                <Reveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className=" text-2xl leading-loose text-start font-semibold text-gray-700 w-full mx-auto">
                        <h2 className="text-sky-600 py-16 text-start text-6xl">Our Story</h2>
                        <p className="mb-8">
                            Eduprajna&#8217;s story isn&#8217;t one of overnight success, but rather a slow burn of passion,
                            dedication, and a genuine desire to empower individuals through the transformative power of IT education. It all began in 2018,
                            in a modest corner of Bangalore, with a simple mission: to bridge the gap between aspiring tech minds and the booming IT industry.
                        </p>
                        <p className="mb-8">
                            Early days were a test of grit. Word-of-mouth slowly attracted eager learners,
                            drawn by the warmth and integrity radiating from the institute. Success stories started sprouting,
                            like the young woman who landed her first coding job, or the middle-aged professional who climbed the corporate ladder after upskilling.
                            These testaments fueled Eduprajna&#8217;s growth, not just in numbers, but in its philosophy.
                        </p>
                        <p className="mb-8">
                            Today, Eduprajna stands tall, a bustling hub of learning with a diverse student body and a curriculum constantly evolving to
                            meet the ever-changing demands of the digital landscape.
                            But the core values remain unchanged: personalized attention, practical skill development, and a constant push for student success.
                        </p>
                        <p className="mb-8">
                            Beyond technical prowess, Eduprajna instills confidence, fosters teamwork, and ignites a passion for lifelong learning.
                            They partner with leading IT companies, offering internship opportunities and opening doors to the coveted world of tech.
                            Alumni networks buzz with collaboration and support,
                            a testament to the lasting impact Eduprajna leaves on its students.
                        </p>
                        <p className="mb-8">
                            Eduprajna is more than just an IT training center; it&#8217;s a community, a launchpad, a beacon of hope for anyone who dreams
                            of carving their own path in the digital revolution. It&#8217;s a story woven with grit, empathy,
                            and the unshakeable belief that with the right tools and guidance, anyone can illuminate their future with the bright light of knowledge.
                        </p>
                        <p className="mb-8">
                            This story is just the beginning. As Eduprajna continues to grow, its impact will ripple outwards, empowering individuals,
                            bridging divides, and illuminating the path to a brighter, more tech-driven future for all.
                        </p>
                        <p className="mb-8">
                            Feel free to personalize this story further by adding specific examples of success stories, student testimonials, or unique aspects of Eduprajna&#8217;s culture and methodology. Remember, the story should resonate with your target audience and showcase what makes Eduprajna truly special.
                        </p>
                    </div>
                    <Reveal>
                    <div className="md:col-span-1">

                        <img src={Image1} alt="About Us Image" className="w-full rounded-3xl flex justify-center items-center my-16 shadow-xl" />
                        <img src={Image2} alt="About Us Image" className="w-full rounded-3xl flex justify-center items-center my-16 shadow-xl" />
                        <img src={Image3} alt="About Us Image" className="w-full rounded-3xl flex justify-center items-center my-16 shadow-xl" />
                    </div>
                    </Reveal>
                </div>
                </Reveal>

                <Reveal>
                <section className="py-8 text-xl flex flex-wrap w-full">
                    <div className="flex flex-col w-full md:w-1/2 text-2xl leading-loose text-start font-semibold text-gray-700 mx-auto px-4">
                        <h2 className="text-4xl text-sky-600 font-bold mb-4">Our Mission</h2>
                        <p className="mb-8">
                            Eduprajna, meaning <span className="text-sky-600 font-bold"> &#8217;Knowledge Light&#8217; </span> isn&#8217;t just a name; it&#8217;s a beacon that illuminates the path towards a brighter,
                            tech-driven future. Our mission is clear: to empower
                            individuals from all walks of life with the skills and knowledge needed to thrive in the ever-evolving world of information technology.
                        </p>
                        <p className="mb-8">
                            We believe that everyone deserves the opportunity to unlock their digital potential,
                            regardless of their background or previous experience. Whether you&#8217;re a fresh graduate seeking your first break,
                            a seasoned professional looking to upskill,
                            or a young dreamer with a spark of curiosity, Eduprajna welcomes you with open arms and a personalized approach.
                        </p>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 text-2xl leading-loose text-start font-semibold text-gray-700 mx-auto px-4">
                        <h2 className=" text-4xl text-sky-600 font-bold mb-4">Our Impact</h2>
                        <p className="mb-8">
                            Eduprajna&#8217;s impact is more than just numbers on a page. It&#8217;s the countless stories of lives transformed,
                            dreams realized, and careers ignited. We see it in the eyes of our graduates as they land their first job,
                            climb the corporate ladder, or even start their own ventures.
                            We hear it in their voices as they speak with confidence and express their newfound sense of empowerment.
                        </p>
                        <p className="mb-8">
                            Our journey is far from over. We continue to strive to break down barriers, empower individuals, and
                            contribute to a more inclusive and tech-driven future. Eduprajna isn&#8217;t just an IT training center;
                            it&#8217;s a catalyst for change, a community of lifelong learners, and a testament to the transformative power of knowledge.
                        </p>
                    </div>


                    <h2 className="mb-8 text-4xl text-sky-600 font-bold flex justify-center items-center animate-pulse">
                         Join us as we illuminate the path for a brighter tomorrow.
                    </h2>
                </section>
                </Reveal>


            </main>
        </div>
        </>
    );
}

export default AboutPage;



