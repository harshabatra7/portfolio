import React, { useRef } from "react";
import "./contact.css";
// import emailjs from '@emailjs/browser';
const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_vz5i3p5",
  //       "template_x8q61kb",
  //       form.current,
  //       "TdSIEs81y-EaQ3JzV"
  //     )
  //     e.target.reset();
  // };
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title" style={{ textAlign: "center" }}>
        Get in touch
      </h2>
      <div className="section_subtitle" style={{ textAlign: "center" }}>
        Contact Me
      </div>

      <div className="contact_container container gird">
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>

          <div className="contact_info">
            <div className="contact_card">
              <i class="fa-solid fa-envelope contact_icon"></i>
              <h3 className="contact_card_title">Email</h3>
              <span className="contact_card_data">harshapbatra@gmail.com</span>

              <a href="mailto:harshapbatra@gmail.com" className="contact_button">
                Write me
                <i class="fa-solid fa-arrow-right contact_button_icon"></i>
              </a>
            </div>
            <div className="contact_card">
              <i class="fa-brands fa-whatsapp contact_icon"></i>
              <h3 className="contact_card_title">Whatsapp</h3>
              <span className="contact_card_data">(+91) 9699614640</span>

              <a href="#" className="contact_button">
                Write me
                <i class="fa-solid fa-arrow-right contact_button_icon"></i>
              </a>
            </div>
            <div className="contact_card">
              <i class="fa-brands fa-facebook-messenger contact_icon"></i>
              <h3 className="contact_card_title">Messenger</h3>
              <span className="contact_card_data">harsha_batra</span>

              <a href="#" className="contact_button">
                Write me
                <i class="fa-solid fa-arrow-right contact_button_icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact_content">
          <h3 className="contact_title">Write me your project</h3>
          <form  className="contact_form">
          {/* ref={form} onSubmit={sendEmail} */}
            <div className="contact_form_div">
              <label className="contact_form_tag">Name</label>
              <input
                name="name"
                type="text"
                className="contact_form_input"
                placeholder="Enter your name"
              />
            </div>
            <div className="contact_form_div">
              <label className="contact_form_tag">E-mail</label>
              <input
                name="email"
                type="email"
                className="contact_form_input"
                placeholder="Enter your E-mail"
              />
            </div>
            <div className="contact_form_div contact_form_area">
              <label className="contact_form_tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact_form_input "
                placeholder="Write your project"
              ></textarea>
            </div>
            <button href="" className="button button--flex">
              Send Message<i class="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
