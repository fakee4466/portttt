import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <Send className="w-5 h-5 text-foreground" />
        <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
      </div>
      
      <h3 className="text-3xl font-bold text-foreground mb-8">Let's Get in Touch!</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-text-muted">Contact No</p>
              <p className="text-foreground font-semibold">+(02) 4057 2930</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-text-muted">Email</p>
              <p className="text-foreground font-semibold">ANDREW@WEBSITE.COM</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-text-muted">Address</p>
              <p className="text-foreground font-semibold">Beverly Hills, Los Angeles, California, USA</p>
            </div>
          </div>
        </div>
        
        <Card className="bg-card border-border p-6">
          <form className="space-y-4">
            <Input 
              placeholder="Full Name"
              className="bg-input border-border text-foreground placeholder:text-text-muted"
            />
            <Input 
              placeholder="Email"
              type="email"
              className="bg-input border-border text-foreground placeholder:text-text-muted"
            />
            <Input 
              placeholder="Phone Number"
              className="bg-input border-border text-foreground placeholder:text-text-muted"
            />
            <Textarea 
              placeholder="Message"
              rows={6}
              className="bg-input border-border text-foreground placeholder:text-text-muted resize-none"
            />
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;