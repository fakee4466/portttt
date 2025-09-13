import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Framer & UI/UX Designer",
      company: "Circlum Tech",
      period: "2023 - Present",
      description: "Designing interactive prototypes with Framer, focusing on seamless user experiences and scalable solutions through user feedback and collaboration.",
      icon: "🔹"
    },
    {
      title: "UI/UX Designer",
      company: "CoreOS",
      period: "2021 - 2023",
      description: "Created intuitive web and mobile designs, conducted user research, and collaborated with developers to ensure consistent and functional design delivery.",
      icon: "⚫"
    },
    {
      title: "Graphics Designer",
      company: "Pixel Square",
      period: "2020 - 2021",
      description: "Designed marketing assets, UI components, and brand visuals, enhancing digital campaigns and overall visual identity through creative collaboration.",
      icon: "🟢"
    }
  ];

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="w-5 h-5 text-foreground" />
        <h2 className="text-2xl font-semibold text-foreground">Experience</h2>
      </div>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="bg-card border-border p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">{exp.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-text-muted">{exp.company}</p>
                </div>
              </div>
              <span className="text-sm text-text-muted bg-muted px-3 py-1 rounded-lg">
                {exp.period}
              </span>
            </div>
            <p className="text-text-muted leading-relaxed">
              {exp.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;