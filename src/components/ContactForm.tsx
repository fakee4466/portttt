import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

interface ContactData {
  phone: string;
  email: string;
  address: string;
}

interface ContactFormProps {
  contact: ContactData;
}

const ContactForm: React.FC<ContactFormProps> = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="mb-16">
      <div className="section-title">
        <Send size={20} />
        <h2>Contact</h2>
      </div>
      
      <h3 className="text-3xl font-bold mb-8" style={{ color: 'var(--text)' }}>
        Let's Get in Touch!
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                 style={{ backgroundColor: 'rgba(34, 224, 122, 0.1)' }}>
              <Phone size={20} style={{ color: 'var(--accent)' }} />
            </div>
            <div>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>Contact No</p>
              <p className="font-semibold" style={{ color: 'var(--text)' }}>{contact.phone}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                 style={{ backgroundColor: 'rgba(34, 224, 122, 0.1)' }}>
              <Mail size={20} style={{ color: 'var(--accent)' }} />
            </div>
            <div>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>Email</p>
              <p className="font-semibold" style={{ color: 'var(--text)' }}>{contact.email}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                 style={{ backgroundColor: 'rgba(34, 224, 122, 0.1)' }}>
              <MapPin size={20} style={{ color: 'var(--accent)' }} />
            </div>
            <div>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>Address</p>
              <p className="font-semibold" style={{ color: 'var(--text)' }}>{contact.address}</p>
            </div>
          </div>
        </div>
        
        <div className="content-card">
          {showSuccess && (
            <div className="mb-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p style={{ color: 'var(--accent)' }}>Message sent successfully!</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border transition-colors"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  borderColor: 'var(--border)',
                  color: 'var(--text)'
                }}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border transition-colors"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  borderColor: 'var(--border)',
                  color: 'var(--text)'
                }}
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border transition-colors"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  borderColor: 'var(--border)',
                  color: 'var(--text)'
                }}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border resize-none transition-colors"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  borderColor: 'var(--border)',
                  color: 'var(--text)'
                }}
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;