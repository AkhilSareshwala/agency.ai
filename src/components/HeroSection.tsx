import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108755-2616b75b3e34?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
  ];

  return (
    <section id="home" className="min-h-screen pt-16 bg-gradient-to-br from-agency-blue-light via-background to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Trust Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4 bg-background/60 rounded-full px-6 py-3 backdrop-blur-sm shadow-sm">
              <div className="flex -space-x-2">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`User ${index + 1}`}
                    className="w-8 h-8 rounded-full border-2 border-background"
                  />
                ))}
              </div>
              <span className="text-sm text-agency-gray font-medium">
                Trusted by 10k+ people
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Turning imagination into</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-agency-blue to-agency-blue-dark">
                digital
              </span>{" "}
              <span className="text-foreground">impact.</span>
            </h1>
            <p className="text-lg md:text-xl text-agency-gray max-w-2xl mx-auto leading-relaxed">
              Creating meaningful connections and turning big ideas into
              interactive digital experiences.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <img
                src={heroImage}
                alt="Professionals working together"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-agency-blue/20 to-agency-blue-dark/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-agency-blue-dark/20 to-agency-blue/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;