import { Card } from "@/components/ui/card";
import { Layers } from "lucide-react";

const Stakes = () => {
  const tools = [
    { name: "Figma", category: "Design Tool", color: "bg-red-500", icon: "🎨" },
    { name: "Framer", category: "No Code Development", color: "bg-black", icon: "⚡" },
    { name: "Lemon Squeezy", category: "Payment", color: "bg-yellow-400", icon: "💳" },
    { name: "Notion", category: "Notion", color: "bg-gray-800", icon: "📝" },
    { name: "Illustrators", category: "Illustrators", color: "bg-orange-600", icon: "🎨" },
    { name: "SS Icons", category: "Icon Library", color: "bg-blue-600", icon: "⭐" },
  ];

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <Layers className="w-5 h-5 text-foreground" />
        <h2 className="text-2xl font-semibold text-foreground">Stakes</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {tools.map((tool, index) => (
          <Card key={index} className="bg-card border-border p-4 hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 ${tool.color} rounded-lg flex items-center justify-center text-white`}>
                <span className="text-lg">{tool.icon}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{tool.name}</h3>
                <p className="text-sm text-text-muted">{tool.category}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Stakes;