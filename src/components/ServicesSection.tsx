import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg width="63" height="63" viewBox="0 0 63 63" fill="none">
          <path
            d="M24.0405 23.8082C24.6562 22.9711 25.5814 22.4059 26.6166 22.2343C27.6519 22.0628 28.7141 22.2988 29.5742 22.8913C30.4343 23.4839 31.0232 24.3855 31.214 25.4017C31.4048 26.4179 31.182 27.4672 30.5939 28.3232L22.9459 39.0752C22.3337 39.9214 21.4067 40.4952 20.3667 40.6716C19.3266 40.848 18.258 40.6127 17.3934 40.0169C16.5289 39.4211 15.9386 38.5131 15.7511 37.4908C15.5637 36.4685 15.7942 35.4146 16.3925 34.5589L24.0405 23.8069V23.8082Z"
            fill="currentColor"
          />
          <path
            d="M35.353 23.9231C35.9616 23.0676 36.8905 22.4852 37.9353 22.3039C38.9802 22.1227 40.0553 22.3574 40.9244 22.9564C41.7934 23.5555 42.3851 24.4699 42.5692 25.4984C42.7534 26.5269 42.515 27.5853 41.9064 28.4407L34.2584 39.1914C33.6462 40.0376 32.7192 40.6115 31.6792 40.7878C30.6391 40.9642 29.5705 40.7289 28.7059 40.1331C27.8414 39.5373 27.2511 38.6293 27.0636 37.607C26.8762 36.5847 27.1067 35.5308 27.705 34.6751L35.353 23.9231V23.9231Z"
            fill="currentColor"
          />
          <path
            d="M42.3359 40.5029C43.3968 40.5029 44.4142 40.0881 45.1644 39.3497C45.9145 38.6112 46.3359 37.6097 46.3359 36.5654C46.3359 35.5211 45.9145 34.5196 45.1644 33.7812C44.4142 33.0428 43.3968 32.6279 42.3359 32.6279C41.2751 32.6279 40.2577 33.0428 39.5075 33.7812C38.7574 34.5196 38.3359 35.5211 38.3359 36.5654C38.3359 37.6097 38.7574 38.6112 39.5075 39.3497C40.2577 40.0881 41.2751 40.5029 42.3359 40.5029Z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Advertising",
      description: "We turn bold ideas into powerful digital solutions that connect, engage...",
    },
    {
      icon: (
        <svg width="63" height="63" viewBox="0 0 63 63" fill="none">
          <path
            d="M34.8704 24.416C34.4261 24.416 34.0001 24.5897 33.6859 24.899C33.3718 25.2082 33.1953 25.6276 33.1953 26.0649C33.1953 26.5022 33.3718 26.9216 33.6859 27.2308C34.0001 27.54 34.4261 27.7138 34.8704 27.7138H41.5705C42.0148 27.7138 42.4408 27.54 42.755 27.2308C43.0691 26.9216 43.2456 26.5022 43.2456 26.0649C43.2456 25.6276 43.0691 25.2082 42.755 24.899C42.4408 24.5897 42.0148 24.416 41.5705 24.416H34.8704Z"
            fill="currentColor"
            fillOpacity="0.13"
          />
          <path
            d="M19.6204 17.8232C19.1761 17.8232 18.7501 17.997 18.4359 18.3062C18.1218 18.6154 17.9453 19.0348 17.9453 19.4721V27.7165C17.9453 28.1538 18.1218 28.5732 18.4359 28.8824C18.7501 29.1916 19.1761 29.3653 19.6204 29.3653H27.9956C28.4398 29.3653 28.8659 29.1916 29.18 28.8824C29.4941 28.5732 29.6706 28.1538 29.6706 27.7165V19.4721C29.6706 19.0348 29.4941 18.6154 29.18 18.3062C28.8659 17.997 28.4398 17.8232 27.9956 17.8232H19.6204V17.8232Z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Content marketing",
      description: "We help you execute your plan and deliver results.",
    },
    {
      icon: (
        <svg width="63" height="63" viewBox="0 0 63 63" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.8865 26.7925V34.3276L35.6229 37.6806L28.8865 26.7925ZM43.8625 23.9735L35.8579 19.9976C35.7278 19.9285 35.5623 19.9797 35.484 20.1016L30.857 27.5815L36.3632 36.4785L43.9396 24.2411C44.0015 24.1456 43.9573 24.025 43.8625 23.9735Z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Content writing",
      description: "We help you create a marketing strategy that drives results.",
    },
    {
      icon: (
        <svg width="63" height="63" viewBox="0 0 63 63" fill="none">
          <path
            d="M43.5579 25.3526C43.5696 25.6082 43.5755 25.8649 43.5755 26.1228C43.5755 33.9889 37.4926 43.0587 26.3714 43.0587C22.9564 43.0587 19.7775 42.0732 17.1016 40.3842C17.5752 40.4395 18.0559 40.4677 18.5442 40.4677C21.3775 40.4677 23.9844 39.5161 26.0545 37.9193C23.4078 37.8715 21.1751 36.1504 20.4056 33.7857C20.7752 33.8553 21.1535 33.8927 21.5436 33.8927C22.0944 33.8927 22.6289 33.8197 23.1365 33.6838C20.3705 33.1369 18.2857 30.7313 18.2857 27.8474C18.2857 27.822 18.2857 27.7973 18.2863 27.7725C19.1015 28.2181 20.0337 28.4858 21.0254 28.5168C19.4027 27.4496 18.3354 25.6277 18.3354 23.5623C18.3354 22.4715 18.633 21.4492 19.1541 20.5701C22.1364 24.1713 26.5912 26.5406 31.6168 26.7893C31.5139 26.3535 31.46 25.8994 31.46 25.4326C31.46 22.1457 34.1675 19.4805 37.5066 19.4805C39.2469 19.4805 40.8176 20.2035 41.9205 21.3599C43.2982 21.0934 44.5917 20.5978 45.7601 19.9156C45.3086 21.3058 44.3508 22.472 43.1017 23.2088C44.325 23.0649 45.4911 22.7449 46.5752 22.2717C45.7648 23.4651 44.7392 24.5133 43.5579 25.3526Z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Social media",
      description: "We help you build a strong social media presence and engage with your audience.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-agency-gray-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How can we help?
          </h2>
          <p className="text-lg text-agency-gray max-w-2xl mx-auto">
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-agency-blue-light/30 hover:from-agency-blue-light/50 hover:to-background"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 text-agency-blue group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-agency-gray leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;