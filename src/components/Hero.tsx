const Hero = () => {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl">👋</span>
        <span className="text-text-muted text-lg">Say Hello</span>
      </div>
      
      <h1 className="text-6xl font-bold mb-4 leading-tight">
        I'm John Anderson,{" "}
        <span className="text-primary">Framer DJ</span>
      </h1>
      
      <p className="text-2xl text-foreground mb-8">
        Based in Los Angeles, CA.
      </p>
      
      <p className="text-lg text-text-muted leading-relaxed max-w-4xl">
        I specialize in creating clean, user-friendly digital experiences by blending creativity with functionality. With a strong 
        background in interactive design, I focus on crafting designs that not only look great but also provide smooth and engaging 
        user interactions, helping ideas come to life seamlessly.
      </p>
    </section>
  );
};

export default Hero;