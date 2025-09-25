import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { User, Mail } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-agency-gray-light/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Reach out to us
          </h2>
          <p className="text-lg text-agency-gray max-w-2xl mx-auto">
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-hero bg-gradient-to-br from-background to-agency-blue-light/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Your name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-agency-gray" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-10 h-12 border-agency-gray/20 focus:border-agency-blue focus:ring-agency-blue/20"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email id
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-agency-gray" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 h-12 border-agency-gray/20 focus:border-agency-blue focus:ring-agency-blue/20"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="border-agency-gray/20 focus:border-agency-blue focus:ring-agency-blue/20 resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-gradient-to-r from-agency-blue to-agency-blue-dark hover:opacity-90 transition-opacity text-base font-medium"
                >
                  Send Message
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    className="ml-2"
                  >
                    <path
                      d="M13.7969 5.90918L1.1362 5.90918"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.9817 10.2695L15.0938 5.90378L8.9817 1.53803"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;