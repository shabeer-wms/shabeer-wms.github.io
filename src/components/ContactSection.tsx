import { useState } from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue mx-auto mb-6"></div>
          <p className="text-gray max-w-3xl mx-auto">
            Feel free to reach out for collaborations, project inquiries, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-dark mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue/10 p-3 rounded-full mr-4">
                  <Mail className="text-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-dark">Email</h4>
                  <a
                    href="mailto:androlite4@gmail.com"
                    className="text-blue hover:text-blue-dark transition-colors"
                  >
                    androlite4@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue/10 p-3 rounded-full mr-4">
                  <Phone className="text-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-dark">Phone</h4>
                  <a
                    href="tel:+916238261610"
                    className="text-blue hover:text-blue-dark transition-colors"
                  >
                    +91 62382 61610
                  </a>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="font-medium text-gray-dark mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue/10 p-3 rounded-full text-blue hover:bg-blue hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue/10 p-3 rounded-full text-blue hover:bg-blue hover:text-white transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
