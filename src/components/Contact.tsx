import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send, Loader2, Globe } from "lucide-react";
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

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
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div>
            <span className="text-gold font-medium uppercase tracking-wider text-sm">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Ready to Start
              <span className="text-primary block">Exporting?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Fill out the form and our export specialists will contact you within
              24 hours to discuss your requirements and provide a competitive quote.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
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
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">
                    +91 99999 99999
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
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
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
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Website</h4>
                  <p className="text-muted-foreground text-sm">
                    www.shcglobaltrade.co.in
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Business Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/10"
            >
              <h4 className="font-semibold text-foreground mb-4">Business Credentials</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">GST Number:</span>
                  <p className="font-medium text-foreground">24ABTPP7011L1Z9</p>
                </div>
                <div>
                  <span className="text-muted-foreground">IEC License:</span>
                  <p className="font-medium text-foreground">ABTPP7011L</p>
                </div>
                <div>
                  <span className="text-muted-foreground">APEDA License:</span>
                  <p className="font-medium text-foreground text-xs">RCMC/APEDA/05968/2023-2024</p>
                </div>
                <div>
                  <span className="text-muted-foreground">D&B D-U-N-S:</span>
                  <p className="font-medium text-foreground">75-605-1507</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-2xl shadow-elevated"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Request a Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 8900"
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Product Interest *
                </label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  className="w-full h-10 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements, quantity, destination country..."
                  required
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Inquiry
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
