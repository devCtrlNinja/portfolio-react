function Contact() {
    return (
      <section id="contact" className="p-8 bg-gray-400">
        <h2 className="text-3xl text-center mb-4">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 mb-4 border"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 mb-4 border"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 mb-4 border"
          ></textarea>
          <button className="w-full bg-blue-500 text-white py-2">
            Send Message
          </button>
        </form>
      </section>
    );
  }
  
  export default Contact;