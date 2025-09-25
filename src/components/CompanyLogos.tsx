const CompanyLogos = () => {
  const companies = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    },
    {
      name: "Zoom",
      logo: "https://logos-world.net/wp-content/uploads/2020/12/Zoom-Logo.png",
    },
    {
      name: "Rakuten",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Rakuten-Logo.png",
    },
    {
      name: "Coinbase",
      logo: "https://logos-world.net/wp-content/uploads/2021/02/Coinbase-Logo.png",
    },
    {
      name: "Airbnb",
      logo: "https://logos-world.net/wp-content/uploads/2020/10/Airbnb-Logo.png",
    },
    {
      name: "Google",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png",
    },
  ];

  return (
    <section className="py-16 bg-agency-gray-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-agency-gray mb-8">
            Trusted by Leading Companies
          </h3>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 opacity-60 hover:opacity-80 transition-opacity duration-300">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-8 w-auto object-contain filter brightness-0 dark:brightness-100 dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;