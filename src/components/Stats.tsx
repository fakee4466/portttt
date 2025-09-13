const Stats = () => {
  const stats = [
    { number: "30+", label: "Completed Projects" },
    { number: "8+", label: "Years of Experience" },
    { number: "36+", label: "Happy Clients" },
    { number: "10+", label: "Awards Received" },
  ];

  return (
    <section className="mb-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold text-foreground mb-2">
              {stat.number}
            </div>
            <div className="text-text-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;