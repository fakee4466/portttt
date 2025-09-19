import { Send, MessageCircle, Mail, Github, Linkedin, Instagram, Coffee } from 'lucide-react';
import { PortfolioData } from '../../shared/types';
import { useScrollReveal } from '../hooks/useAnimations';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailJSConfig, validateEmailJSConfig } from '../../shared/emailConfig';

interface ContactSectionProps {
  social: PortfolioData['social']['contact'];
  sectionTitle: string;
  contactForm: PortfolioData['contactForm'];
  socialPlatforms: PortfolioData['socialPlatforms'];
}

interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

const ContactSection = ({ social, sectionTitle, contactForm, socialPlatforms }: ContactSectionProps) => {
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const getSocialIcon = (name: string) => {
    const platform = socialPlatforms[name.toLowerCase()];
    const iconType = platform?.iconType || 'Mail';
    
    switch (iconType) {
      case 'MessageCircle': return <MessageCircle size={20} className="contact-icon" />;
      case 'Mail': return <Mail size={20} className="contact-icon" />;
      case 'Github': return <Github size={20} className="contact-icon" />;
      case 'Linkedin': return <Linkedin size={20} className="contact-icon" />;
      case 'Instagram': return <Instagram size={20} className="contact-icon" />;
      case 'Coffee': return <Coffee size={20} className="contact-icon" />;
      default: return <Mail size={20} className="contact-icon" />;
    }
  };

  const getSocialTitle = (name: string) => {
    const platform = socialPlatforms[name.toLowerCase()];
    return platform?.displayName || name;
  };

  const getSocialDisplayText = (socialItem: { name: string; url: string; platform: string }) => {
    switch (socialItem.name.toLowerCase()) {
      case 'whatsapp':
        const phoneMatch = socialItem.url.match(/\d+/);
        return phoneMatch ? `+${phoneMatch[0].slice(0, 2)} ${phoneMatch[0].slice(2, 6)} ${phoneMatch[0].slice(6)}` : socialItem.platform;
      case 'email':
        return socialItem.url.replace('mailto:', '');
      case 'github':
        const githubMatch = socialItem.url.match(/github\.com\/([^\/]+)/);
        return githubMatch ? `github.com/${githubMatch[1]}` : socialItem.platform;
      case 'linkedin':
        const linkedinMatch = socialItem.url.match(/linkedin\.com\/in\/([^\/]+)/);
        return linkedinMatch ? `linkedin.com/in/${linkedinMatch[1]}` : socialItem.platform;
      case 'instagram':
        const instagramMatch = socialItem.url.match(/instagram\.com\/([^\/]+)/);
        return instagramMatch ? `instagram.com/${instagramMatch[1]}` : socialItem.platform;
      case 'coffee':
        const coffeeMatch = socialItem.url.match(/buymeacoffee\.com\/([^\/]+)/);
        return coffeeMatch ? `buymeacoffee.com/${coffeeMatch[1]}` : socialItem.platform;
      default:
        return socialItem.platform;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setShowError(false);
    setShowSuccess(false);
    
    if (!validateEmailJSConfig()) {
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.fullName,
        email: formData.email,
        message: formData.message
      };

      const result = await emailjs.send(
        emailJSConfig.serviceId,
        emailJSConfig.templateId,
        templateParams,
        emailJSConfig.publicKey
      );

      console.log('Email sent successfully:', result);
      
      setShowSuccess(true);
      setFormData({ fullName: '', email: '', message: '' });

      setTimeout(() => setShowSuccess(false), 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section" id="contact" ref={sectionRef}>
      <div className="section-header">
        <Send size={24} className="section-icon" />
        <h2 className="section-title">{sectionTitle}</h2>
      </div>
      
      <div className="contact-socials-grid">
        {social.map((socialItem, index) => (
          <a key={index} href={socialItem.url} target="_blank" rel="noopener noreferrer" className="contact-social-card">
            <div className="contact-social-icon">
              {getSocialIcon(socialItem.name)}
            </div>
            <div className="contact-social-content">
              <h4 className="contact-social-title">{getSocialTitle(socialItem.name)}</h4>
              <p className="contact-social-details">{getSocialDisplayText(socialItem)}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="contact-form-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">{contactForm.labels.fullName}</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="form-input"
              placeholder={contactForm.placeholders.fullName}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">{contactForm.labels.email}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder={contactForm.placeholders.email}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">{contactForm.labels.message}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-textarea"
              placeholder={contactForm.placeholders.message}
              rows={5}
              required
            />
          </div>

          <button 
            type="submit" 
            className="form-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? contactForm.buttons.sending : contactForm.buttons.send}
            <Send size={16} />
          </button>

          {showSuccess && (
            <div className="success-toast">
              {contactForm.messages.success}
            </div>
          )}

          {showError && (
            <div className="error-toast">
              {contactForm.messages.error}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
