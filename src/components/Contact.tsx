import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send, Loader2, Globe, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "4383280e-d560-4a06-9700-fa688f582fbb",
          subject: `New Quote Request - ${formData.product || "General Inquiry"}`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Inquiry Submitted!",
          description: "We will get back to you within 24 hours.",
        });

        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          product: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-8 md:py-16 relative overflow-hidden">
      {/* Colorful Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest/5 via-gold/5 to-primary/10" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 p-4 md:p-6 rounded-3xl border-2 border-gold bg-background/50 backdrop-blur-sm">
          {/* Left - Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-primary/20 border border-gold/30 mb-4"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-gold font-medium uppercase tracking-wider text-xs md:text-sm">
                Get In Touch
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-3 md:mb-4"
            >
              Ready to Start
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-gold to-forest block">
                Exporting?
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-xs md:text-base mb-4 md:mb-6"
            >
              Fill out the form and our export specialists will contact you within
              24 hours to discuss your requirements.
            </motion.p>

            {/* Contact Details */}
            <div className="space-y-4 p-3 rounded-xl border border-muted-foreground/30">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-forest rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Head Office</h4>
                  <p className="text-muted-foreground text-sm">
                    204, Suraj Darshan Apartment
                    <br />
                    Gopipura, Surat, Gujarat, India
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">
                    +91-93274-20046
                    <br />
                    (WhatsApp Available)
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-forest to-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground text-sm">
                    sales@shcglobaltrade.co.in
                    <br />
                    info@shcglobaltrade.co.in
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gold-dark to-gold rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Website</h4>
                  <p className="text-muted-foreground text-sm">
                    www.shcglobaltrade.co.in
                  </p>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-gold/30 to-transparent rounded-full blur-2xl" />
            <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-gradient-to-tr from-primary/30 to-transparent rounded-full blur-2xl" />
            
            <div className="relative bg-gradient-to-br from-card via-card to-card/95 p-4 md:p-6 rounded-2xl shadow-xl border border-muted-foreground/30 backdrop-blur-sm">
              {/* Form Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold via-gold-dark to-primary flex items-center justify-center shadow-lg">
                  <Send className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
                    Request a Quote
                  </h3>
                  <p className="text-muted-foreground text-[10px]">Get competitive pricing today</p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="group">
                    <label className="block text-xs font-medium text-foreground mb-1.5 group-focus-within:text-primary transition-colors">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-background/80 border-muted-foreground/20 focus:border-gold focus:ring-gold/20 transition-all h-9 text-sm"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-medium text-foreground mb-1.5 group-focus-within:text-primary transition-colors">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-background/80 border-muted-foreground/20 focus:border-gold focus:ring-gold/20 transition-all h-9 text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="group">
                    <label className="block text-xs font-medium text-foreground mb-1.5 group-focus-within:text-primary transition-colors">
                      Company
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="bg-background/80 border-muted-foreground/20 focus:border-gold focus:ring-gold/20 transition-all h-9 text-sm"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-medium text-foreground mb-1.5 group-focus-within:text-primary transition-colors">
                      Phone
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      className="bg-background/80 border-muted-foreground/20 focus:border-gold focus:ring-gold/20 transition-all h-9 text-sm"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-xs font-medium text-foreground mb-1.5 group-focus-within:text-primary transition-colors">
                    Product Interest *
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="w-full h-9 rounded-lg border border-muted-foreground/20 bg-background/80 px-3 py-1.5 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/20 focus:border-gold transition-all"
                  >
                    <option value="">Select a product</option>
                    <optgroup label="Basmati Rice">
                      <option value="1121-basmati">1121 Basmati Rice</option>
                      <option value="traditional-basmati">Traditional Basmati Rice</option>
                      <option value="pusa-basmati">Pusa Basmati Rice</option>
                    </optgroup>
                    <optgroup label="Green Chillies">
                      <option value="gauri-chillies">Gauri Green Chillies</option>
                      <option value="g9-chillies">G9 Green Chillies</option>
                    </optgroup>
                    <optgroup label="Banana">
                      <option value="cavendish-banana">Cavendish Banana</option>
                      <option value="grand-naine-banana">Grand Naine Banana</option>
                    </optgroup>
                    <option value="multiple">Multiple Products</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block text-xs font-medium text-foreground mb-1.5 group-focus-within:text-primary transition-colors">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements, quantity, destination country..."
                    required
                    rows={3}
                    className="bg-background/80 border-muted-foreground/20 focus:border-gold focus:ring-gold/20 transition-all resize-none text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  size="default"
                  className="w-full bg-gradient-to-r from-gold via-gold-dark to-primary hover:from-gold-dark hover:via-gold hover:to-forest text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group h-9"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
                
                <p className="text-center text-[10px] text-muted-foreground">
                  🔒 Your information is secure and will never be shared
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
