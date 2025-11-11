"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

interface ContactProps {
  scrollToSection: (id: string) => void;
}

export default function Contact({ scrollToSection }: ContactProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    console.log(form.current, "form data");
    setSending(true);
    emailjs
      .sendForm(
        "service_skwbj0u",
        "template_612b55d",
        form.current as any,
        "ALdk5PVwqVe2smk5F"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          setSending(false);
          form.current?.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again later.");
          setSending(false);
          console.log(error.text);
        }
      );
  };

  const contactInfo = [
    {
      label: "Email",
      value: "roshan.dangol00@gmail.com",
      href: "mailto:roshan.dangol00@gmail.com",
    },
    {
      label: "Phone",
      value: "+977-9864260404",
      href: "tel:+9779864260404",
    },
    {
      label: "Location",
      value: "Khokana, Lalitpur",
      href: null,
    },
    {
      label: "GitHub",
      value: "github.com/roshandangol0506",
      href: "https://github.com/roshandangol0506",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/roshan-dangol",
      href: "https://linkedin.com/in/roshan-dangol-829954317",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20 md:py-32">
      <div className="max-w-6xl mx-auto w-full">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 md:mb-12">
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="text-xl md:text-2xl font-light mb-6 md:mb-8 opacity-90">
                Let's Connect
              </h3>
              <p className="text-base md:text-lg font-light leading-relaxed opacity-80 mb-8 md:mb-12">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>

              <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                {contactInfo.map((item, index) => (
                  <div
                    key={item.label}
                    className="transition-all duration-500"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between items-start py-3 md:py-4 border-b border-white border-opacity-20 hover:border-opacity-50 transition-all duration-300 gap-4">
                      <span className="text-sm md:text-base font-light opacity-70 tracking-wide flex-shrink-0">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-sm md:text-base font-light hover:opacity-70 transition-opacity text-right break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm md:text-base font-light text-right break-all">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-light mb-6 md:mb-8 opacity-90">
                Quick Message
              </h3>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required={true}
                    name="from_name"
                    className="w-full bg-transparent border-b border-white border-opacity-30 py-2 md:py-3 font-light text-sm md:text-base focus:outline-none focus:border-opacity-100 transition-all duration-300 placeholder-opacity-50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="from_email"
                    required={true}
                    className="w-full bg-transparent border-b border-white border-opacity-30 py-2 md:py-3 font-light text-sm md:text-base focus:outline-none focus:border-opacity-100 transition-all duration-300 placeholder-opacity-50"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    name="message"
                    rows={5}
                    required={true}
                    className="w-full bg-transparent border-b border-white border-opacity-30 py-2 md:py-3 font-light text-sm md:text-base focus:outline-none focus:border-opacity-100 transition-all duration-300 placeholder-opacity-50 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full text-sm md:text-lg font-light tracking-wider border border-white px-6 md:px-8 py-2 md:py-3 hover:bg-white hover:text-black transition-all duration-300 mt-6 md:mt-8"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
