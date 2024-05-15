import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from '../components/Footer'

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Adrian",
        from_email: form.email,
        to_email: "wjechowski@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      setForm({ name: "", email: "", message: "" });
    }).catch((error) =>{
      setIsLoading(false);
      console.log(error);
    })
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-screen">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text mainText text-cyan-700">GET IN TOUCH</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="John@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows="4"
              className="textarea"
              placeholder="Write your thoughts here..."
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='btn'
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
      
      <div className="absolute bottom-5 left-0 right-0 z-10">
      <Footer />
      </div>
    </section>
  );
};

export default Contact;
