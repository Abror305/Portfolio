import { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaComment,
  FaPhone,
  FaGlobe,
  FaTelegram,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaUser,
} from "react-icons/fa";
import ContactInfoCard from "../components/Contacts/ContactInfoCard";
import FormInput from "../components/Contacts/FormInput";
import FormTextarea from "../components/Contacts/FormTextarea";
import SocialLink from "../components/Contacts/SocialLink";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "+998",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  const contactInfo = [
    { Icon: FaEnvelope, title: "", description: "Bakhromovv23@gmail.com", color: "border-primary" },
    { Icon: FaPhone, title: "", description: "+998 (95)-210-05-50", color: "border-secondary" },
    { Icon: FaGlobe, title: "", description: "Tashkent, Uzbekistan", color: "border-accent" },
    { Icon: FaComment, title: "", description: "Usually within 24 hours", color: "border-info" },
  ];

  const socialLinks = [
    { href: "https://t.me/FT_bakhromov", Icon: FaTelegram, color: "btn-info", delay: 0.1 },
    { href: "https://instagram.com/14.Bakhromovv", Icon: FaInstagram, color: "btn-secondary", delay: 0.2 },
    { href: "https://github.com/Abror305", Icon: FaGithub, color: "btn-accent", delay: 0.3 },
    { href: "https://linkedin.com/in/yourusername", Icon: FaLinkedin, color: "btn-primary", delay: 0.4 },
  ];

  const handleInputChange = (field, value) => {
    if (field === "phone") {
      let input = value.replace(/\D/g, ""); // faqat raqam
      if (input.startsWith("998")) input = input.slice(3); // +998 ni tashlab ketamiz
      if (input.length > 9) input = input.slice(0, 9); // maksimal 9 ta raqam

      let formatted = "+998";

      if (input.length > 0) {
        formatted += " (" + input.substring(0, 2);
        if (input.length >= 2) formatted += ")";
      }
      if (input.length > 2) {
        formatted += " " + input.substring(2, 5);
      }
      if (input.length > 5) {
        formatted += "-" + input.substring(5, 7);
      }
      if (input.length > 7) {
        formatted += "-" + input.substring(7, 9);
      }

      // agar foydalanuvchi faqat "+998" yozsa, qo'shimcha belgilar chiqmasin
      if (formatted === "+998 (") formatted = "+998";
      if (formatted === "+998 ()") formatted = "+998";

      setFormData((prev) => ({ ...prev, phone: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }

    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };


  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length < 2) newErrors.name = "Name must be 2+ chars";

    const digits = formData.phone.replace(/\D/g, "");
    if (digits.length !== 12) newErrors.phone = "Enter full Uzbek number (+998 (XX) XXX-XX-XX)";

    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10) newErrors.message = "Message must be 10+ chars";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      const BOT_TOKEN = "8255099446:AAHqIxSZ4dSyhq2e1HptiDeNdQiqdT8JzCM";
      const CHAT_ID = "7086429203";
      const TELEGRAM_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

      const messageText = `
📩 Yangi xabar keldi!
👤 Ism: ${formData.name}
📞 Telefon: ${formData.phone}
💬 Xabar: ${formData.message} 
      `;

      try {
        await fetch(TELEGRAM_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: messageText,
            parse_mode: "Markdown",
          }),
        });

        setIsSubmitting(false);
        setFormData({ name: "", phone: "+998", message: "" });
        toast.success("Your message has been sent!");
      } catch (error) {
        setIsSubmitting(false);
        toast.error("Failed to send message 😢");
      }
    }
  };

  return (
    <div className="min-h-screen bg-base-100 relative overflow-hidden p-4 sm:p-6 md:p-12">
      {/* Background floating shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="w-36 h-36 sm:w-48 sm:h-48 bg-primary/20 rounded-full blur-3xl absolute top-10 left-10 animate-pulse"></div>
        <div className="w-52 h-52 sm:w-64 sm:h-64 bg-secondary/20 rounded-full blur-3xl absolute bottom-20 right-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-2">
            Get In Touch
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-base-content/80 max-w-xl mx-auto">
            Have a project in mind? Let's collaborate or just say hi!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Form */}
          <div className="flex flex-col gap-4 bg-base-200 shadow-md sm:shadow-lg hover:shadow-2xl transition-all rounded-2xl p-6 sm:p-8">
            <FormInput
              placeholder="Your Name"
              Icon={FaUser}
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              error={errors.name}
            />
            <FormInput
              placeholder="+998 (__) ___-__-__"
              Icon={FaPhone}
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              error={errors.phone}
            />
            <FormTextarea
              placeholder="Your Message"
              Icon={FaComment}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              error={errors.message}
            />
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`btn w-full transition-all duration-300 ${isSubmitting
                  ? "btn-disabled loading"
                  : "bg-gradient-to-r from-primary to-secondary hover:scale-105 hover:shadow-xl text-white"
                }`}
            >
              {isSubmitting ? "Sending..." : "🚀 Send Message"}
            </button>
          </div>

          {/* Contact Info & Socials */}
          <div className="flex flex-col gap-4 sm:gap-6 justify-between">
            {contactInfo.map((info, i) => (
              <ContactInfoCard
                key={i}
                {...info}
                className="hover:scale-105 transition-transform duration-300"
              />
            ))}

            <div className="flex justify-center gap-3 sm:gap-4 mt-4">
              {socialLinks.map((link, i) => (
                <SocialLink
                  key={i}
                  {...link}
                  className="hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Toast container */}
      <Toaster position="top-right" />
    </div>
  );
}
