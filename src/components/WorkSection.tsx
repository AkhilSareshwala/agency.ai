import { Card, CardContent } from "@/components/ui/card";

const WorkSection = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      title: "Mobile app marketing",
      description: "We turn bold ideas into powerful digital solutions that connect, engage...",
    },
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      title: "Dashboard management",
      description: "We help you execute your plan and deliver results.",
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      title: "Fitness app promotion",
      description: "We help you create a marketing strategy that drives results.",
    },
  ];

  return (
    <section id="work" className="py-20 bg-gradient-to-b from-agency-gray-light/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our latest work
          </h2>
          <p className="text-lg text-agency-gray max-w-2xl mx-auto">
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-0 shadow-card hover:shadow-hero transition-all duration-300 bg-gradient-to-br from-background to-agency-blue-light/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-agency-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-agency-gray leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;