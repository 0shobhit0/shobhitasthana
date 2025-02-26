import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Twitter, Linkedin, Mail, ChevronRight, Briefcase, Code, Globe, Quote } from 'lucide-react';
import Shobhit from "../src/images/shobhit (2).jpg"
import Ecommerce from "../src/images/ecommerce.jpg"
import Dp from "../src/images/dp.png"
import Bg from "../src/images/bg_portfolio.jpg"
import Task from "../src/images/task_manage.jpg"
import Webapp from "../src/images/web app.jpg"
import Testi1 from "../src/images/testi1.jpg"
import Testi2 from "../src/images/testi2.jpg"
import Testi3 from "../src/images/testi3.jpg"
import Testi4 from "../src/images/testi4.jpg"



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });
  // const [loading, setLoading] = useState(false);
  // const [responseMessage, setResponseMessage] = useState("");
  

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setResponseMessage("");

  //   try {
  //     const res = await fetch("http://localhost:5000/messages", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await res.json();
  //     if (res.ok) {
  //       setResponseMessage("Message sent successfully!");
  //       setFormData({ name: "", email: "", subject: "", message: "" });
  //     } else {
  //       setResponseMessage(data.error || "Something went wrong.");
  //     }
  //   } catch (error) {
  //     setResponseMessage("Server error. Please try again.");
  //      setFormData({ name: "", email: "", subject: "", message: "" });
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#040404] text-white">
      {/* Side Navigation */}
      <nav className={`fixed top-0 left-0 h-screen w-64 bg-[#040404] border-r border-gray-800 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-8">
          <div className="text-center mb-8">
            <img
              src={Dp}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto border-4 border-gray-700"
            />
            <h1 className="mt-4 text-2xl font-semibold">Shobhit Asthana</h1>
          </div>
          
          <div className="space-y-4">
            <a href="#home" className="block py-2 px-4 text-white hover:text-blue-500 transition-colors">Home</a>
            <a href="#about" className="block py-2 px-4 text-white hover:text-blue-500 transition-colors">About</a>
            <a href="#resume" className="block py-2 px-4 text-white hover:text-blue-500 transition-colors">Resume</a>
            <a href="#services" className="block py-2 px-4 text-white hover:text-blue-500 transition-colors">Services</a>
            <a href="#portfolio" className="block py-2 px-4 text-white hover:text-blue-500 transition-colors">Portfolio</a>
            <a href="#testimonials" className="block py-2 px-4 text-white hover:text-blue-500 transition-colors">Testimonials</a>
            <a href="#contact" className="block py-2 px-4 text-white hover:text-blue-500 transition-colors">Contact</a>
          </div>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4">
            <a href="https://x.com/home" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://github.com/0shobhit0" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/shobhit-asthana-46b04a24b/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-gray-800 rounded-lg md:hidden"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Main Content */}
      <main className="md:ml-64">
        {/* Hero Section */}
        <section id="home" style={{ backgroundImage: `url(${Bg})` }} className="relative h-screen flex items-center justify-center  bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative text-center px-4">
            <h1 className="text-5xl font-bold mb-4">Shobhit Asthana</h1>
            <p className="text-2xl">
              I'm a{' '}
              <span className="text-blue-500">
                professional developer
              </span>
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 relative">
              About
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500"></div>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <img
                  src={Shobhit}
                  alt="About"
                  className="rounded-lg w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Full Stack Developer</h3>
                <p className="text-gray-300 mb-6">
                I am a full-stack developer specializing in React, Node.js, and MySQL, with expertise in building scalable and efficient web applications. With a strong foundation in frontend and backend development, I create seamless user experiences and robust backend systems. Passionate about web design, animations, and SEO, I craft high-performance applications that are visually appealing and optimized for search engines.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p><ChevronRight className="inline mr-2 text-blue-500" /> <strong>Birthday:</strong> 9 September</p>
                    <p>
    <ChevronRight className="inline mr-2 text-blue-500" /> 
    <strong>Website:</strong> 
    <br/>
    <a href="https://github.com/0shobhit0" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
      github.com/0shobhit0
    </a>
  </p>
                    <p><ChevronRight className="inline mr-2 text-blue-500" /> <strong>Phone:</strong> 9695155948</p>
                    <p><ChevronRight className="inline mr-2 text-blue-500" /> <strong>City:</strong> Gurugram, India</p>
                  </div>
                  <div>
                    <p><ChevronRight className="inline mr-2 text-blue-500" /> <strong>Age:</strong> 25</p>
                    <p><ChevronRight className="inline mr-2 text-blue-500" /> <strong>Degree:</strong> B-Tech</p>
                    <p>
    <ChevronRight className="inline mr-2 text-blue-500" /> 
    <strong>Email:</strong> 
    <br/>
    <a href="mailto:shobhitasthana0@gmail.com" className="text-blue-500 hover:underline">
      shobhitasthana0@gmail.com
    </a>
  </p>
                    <p><ChevronRight className="inline mr-2 text-blue-500" /> <strong>Freelance:</strong> Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-20 px-8 bg-[#111]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 relative">
              Resume
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500"></div>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Summary</h3>
                <div className="relative border-l-2 border-gray-700 pl-6 pb-6">
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-2">Shobhit Asthana</h4>
                    <p className="text-gray-400 mb-4">Innovative and deadline-driven Full Stack Developer with 1+ years of experience in web application development.</p>
                    <ul className="list-disc list-inside text-gray-400">
                      <li>Lucknow, India</li>
                      <li>9695155948</li>
                      <li>shobhitasthana0@gmail.com</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-6 mt-8">Education</h3>
                <div className="relative border-l-2 border-gray-700 pl-6">
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-2">Bachelor of Technology(Computer Science)</h4>
                    <h5 className="text-blue-500 mb-2">2019 - 2023</h5>
                    <p className="text-gray-400">BBD University</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-2">Intermediate</h4>
                    <h5 className="text-blue-500 mb-2">2018 - 2019</h5>
                    <p className="text-gray-400">SKD Academy</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
                <div className="relative border-l-2 border-gray-700 pl-6">
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-2">Full Stack Developer</h4>
                    <h5 className="text-blue-500 mb-2">2024 - Present</h5>
                    <p className="text-gray-400 mb-4">CodingBrains Software Solutions, Lucknow, India</p>
                    <ul className="list-disc list-inside text-gray-400">
                      <li>Led development of enterprise web applications</li>
                      <li>Managed team of 5 developers</li>
                      <li>Implemented CI/CD pipelines</li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-2">Full Stack Developer</h4>
                    <h5 className="text-blue-500 mb-2">2023 - 2024</h5>
                    <p className="text-gray-400 mb-4">Aristo Coders</p>
                    <ul className="list-disc list-inside text-gray-400">
                      <li>Developed responsive web applications</li>
                      <li>Optimized application performance</li>
                      <li>Collaborated with design team</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 relative">
              Services
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500"></div>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#111] p-8 rounded-lg hover:bg-[#222] transition-colors">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="text-blue-500" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Web Development</h3>
                <p className="text-gray-400">Modern and responsive web applications built with the latest technologies.</p>
              </div>

              <div className="bg-[#111] p-8 rounded-lg hover:bg-[#222] transition-colors">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Code className="text-blue-500" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">API Development</h3>
                <p className="text-gray-400">Scalable and secure REST APIs built with modern backend technologies.</p>
              </div>

              <div className="bg-[#111] p-8 rounded-lg hover:bg-[#222] transition-colors">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="text-blue-500" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">Consulting</h3>
                <p className="text-gray-400">Technical consulting and architecture design for web applications.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 px-8 bg-[#111]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 relative">
              Portfolio
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500"></div>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src={Ecommerce}
                  alt="Project 1"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                    <p className="text-gray-300">Full-stack e-commerce solution</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src={Task}
                  alt="Project 2"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Task Management</h3>
                    <p className="text-gray-300">Project management application</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src={Webapp}
                  alt="Project 3"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                    <p className="text-gray-300">Data visualization platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 relative">
              Testimonials
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500"></div>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#111] p-8 rounded-lg relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Quote className="text-blue-500" size={20} />
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Shobhit is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding."
                </p>
                <div className="flex items-center">
                  <img
                    src={Testi1}
                    alt="Sarah Wilson"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Sarah Wilson</h4>
                    <p className="text-gray-400 text-sm">CEO, TechCorp</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#111] p-8 rounded-lg relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Quote className="text-blue-500" size={20} />
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Working with Shobhit was a pleasure. He brought innovative solutions to our project and delivered everything on time."
                </p>
                <div className="flex items-center">
                  <img
                    src={Testi2}
                    alt="John Doe"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">John Doe</h4>
                    <p className="text-gray-400 text-sm">CTO, WebSolutions</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#111] p-8 rounded-lg relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Quote className="text-blue-500" size={20} />
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Shobhit's technical expertise and communication skills made our project a success. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <img
                    src={Testi3}
                    alt="Emily Chen"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Emily Chen</h4>
                    <p className="text-gray-400 text-sm">Product Manager, InnovateLab</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#111] p-8 rounded-lg relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Quote className="text-blue-500" size={20} />
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "The quality of work and professionalism displayed by Shobhit exceeded our expectations. A true expert in his field."
                </p>
                <div className="flex items-center">
                  <img
                    src={Testi4}
                    alt="Michael Brown"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Michael Brown</h4>
                    <p className="text-gray-400 text-sm">Director, DigitalFirst</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-8 bg-[#111]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 relative">
              Contact
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-500"></div>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="bg-[#222] p-6 rounded-lg mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#333] rounded-full flex items-center justify-center mr-4">
                      <Mail className="text-blue-500" />
                    </div>
                    <div>
  <h4 className="font-bold">Email:</h4>
  <p className="text-gray-400">
    <a href="mailto:shobhitasthana0@gmail.com" className="text-blue-500 hover:underline">
      shobhitasthana0@gmail.com
    </a>
  </p>
</div>
                  </div>
                </div>
              </div>

              <div>
              <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="bg-[#222] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="bg-[#222] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-[#222] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full bg-[#222] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                  <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                    Send Message
                  </button>
                </form>

              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;