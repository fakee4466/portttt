import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      title: "UI/UX Design Certification",
      institution: "Interaction Design Foundation, Online",
      period: "2018 - 2019",
      description: "Gained hands-on experience in UX research, prototyping, wireframing, and usability testing, focusing on designing seamless, user-friendly digital experiences."
    },
    {
      title: "Bachelor of Design in Interaction Design", 
      institution: "National University of Singapore, Singapore",
      period: "2015 - 2017",
      description: "Completed a comprehensive program focused on designing user-centered digital products, integrating aesthetics and functionality through practical interaction design principles."
    }
  ];

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <GraduationCap className="w-5 h-5 text-foreground" />
        <h2 className="text-2xl font-semibold text-foreground">Education</h2>
      </div>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index} className="bg-card border-border p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{edu.title}</h3>
                <p className="text-text-muted">{edu.institution}</p>
              </div>
              <span className="text-sm text-text-muted bg-muted px-3 py-1 rounded-lg">
                {edu.period}
              </span>
            </div>
            <p className="text-text-muted leading-relaxed">
              {edu.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;