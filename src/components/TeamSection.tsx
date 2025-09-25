import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Haley Carter",
      role: "CEO & founder",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "James Walker",
      role: "Ads manager",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Jessica Morgan",
      role: "Vice president",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Ashley Bennett",
      role: "Marketing & sales",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      name: "Emily Parker",
      role: "Content marketer",
      image: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      name: "Ryan Mitchell",
      role: "Content writer",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      name: "Megan Brooks",
      role: "Performance manager",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: "Amber Foster",
      role: "Senior writer",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-agency-gray-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Meet the team
          </h2>
          <p className="text-lg text-agency-gray max-w-2xl mx-auto">
            A passionate team of digital experts dedicated to your brand's success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group text-center border-0 bg-gradient-to-br from-background to-agency-blue-light/20 hover:shadow-lg transition-all duration-300 hover:from-agency-blue-light/30 hover:to-background"
            >
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 w-20 h-20 rounded-full mx-auto bg-gradient-to-t from-agency-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-agency-blue transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-agency-gray text-sm">
                  {member.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;