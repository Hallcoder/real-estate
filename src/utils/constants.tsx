import img from "../assets/apartment.jpg";
import img2 from "../assets/Outlook.jpg";
import agent from "../assets/agent.jpeg";
import { BiHome, BiDollarCircle } from 'react-icons/bi';
import { MdLocationOn, MdSecurity } from 'react-icons/md';

export const slides = [
    {
      image: img,
      title: "Luxurious Villa",
      description: "Spacious villa with stunning views",
      buttonText: "Explore Now",
    },
    {
      image: img2,
      title: "Modern Apartment",
      description: "Elegant apartment in the heart of the city",
      buttonText: "View Details",
    },
    {
      image: img,
      title: "Cozy Cottage",
      description: "Charming cottage surrounded by nature",
      buttonText: "Book Now",
    },
    {
      image: img2,
      title: "Seaside Retreat",
      description: "Relaxing beachfront property with ocean views",
      buttonText: "Check Availability",
    },
    {
      image: img,
      title: "Seaside Retreat",
      description: "Relaxing beachfront property with ocean views",
      buttonText: "Check Availability",
    },
    {
      image: img2,
      title: "Seaside Retreat",
      description: "Relaxing beachfront property with ocean views",
      buttonText: "Check Availability",
    },
    {
      image: img,
      title: "Seaside Retreat",
      description: "Relaxing beachfront property with ocean views",
      buttonText: "Check Availability",
    },
    {
      image: img,
      title: "Seaside Retreat",
      description: "Relaxing beachfront property with ocean views",
      buttonText: "Check Availability",
    },
    {
      image: img,
      title: "Seaside Retreat",
      description: "Relaxing beachfront property with ocean views",
      buttonText: "Check Availability",
    },
    {
      image: img,
      title: "Seaside Retreat",
      description: "Relaxing beachfront property with ocean views",
      buttonText: "Check Availability",
    },
    {
      image: img2,
      title: "Seaside Retreat",
      description: "Relaxing beachfront property with ocean views",
      buttonText: "Check Availability",
    },
    {
      image: img,
      title: "Seaside Retreat",
      description: "Relaxing beachfront property with ocean views",
      buttonText: "Check Availability",
    },
    {
      image: img,
      title: "Seaside Retreat",
      description: "Relaxing beachfront property with ocean views",
      buttonText: "Check Availability",
    },
    {
      image: img,
      title: "Seaside Retreat",
      description: "Relaxing beachfront property with ocean views",
      buttonText: "Check Availability",
    },
    {
      image: img,
      title: "Seaside Retreat",
      description: "Relaxing beachfront property with ocean views",
      buttonText: "Check Availability",
    },
    {
      image: img,
      title: "Seaside Retreat",
      description: "Relaxing beachfront property with ocean views",
      buttonText: "Check Availability",
    },
    {
      image: img,
      title: "Seaside Retreat",
      description: "Relaxing beachfront property with ocean views",
      buttonText: "Check Availability",
    },
    {
      image: img,
      title: "Seaside Retreat",
      description: "Relaxing beachfront property with ocean views",
      buttonText: "Check Availability",
    },
    {
      image: img,
      title: "Seaside Retreat",
      description: "Relaxing beachfront property with ocean views",
      buttonText: "Check Availability",
    },
    {
      image: img,
      title: "Seaside Retreat",
      description: "Relaxing beachfront property with ocean views",
      buttonText: "Check Availability",
    },
  ];

export const  properties = [
  {
      id: 1,
      name: "Kibagabaga Apartment",
      status: 'Rent',
      price: '4000',
      location:'Kibagabaga,Kigali',
      amenities: {
          bed: 3,
          bath: 4
      },
      size: 405.24
  },
  {
      id: 2,
      name: "Downtown Loft",
      status: 'Sale',
      price: '650000',
      location:'Gacuriro,Kicukiro',
      amenities: {
          bed: 2,
          bath: 2
      },
      size: 1200.75
  },
  {
      id: 3,
      name: "Seaside Villa",
      status: 'Rent',
      price:'800',
      location:'Nyamata,Bugesera',
      amenities: {
          bed: 5,
          bath: 6
      },
      size: 1800.50
  },
  {
      id: 4,
      name: "Cozy Cottage",
      status: 'Sale',
      price: '120000',
      location:'Rebero,Kicukiro',
      amenities: {
          bed: 1,
          bath: 1
      },
      size: 600.00
  },
  {
      id: 5,
      name: "Urban Condo",
      status: 'Rent',
      price: '1500',
      location:'Kabuga,Kigali',
      amenities: {
          bed: 2,
          bath: 2
      },
      size: 950.25
  },
  {
      id: 6,
      name: "Mountain Retreat",
      status: 'Sale',
      price: '380000',
      location:'Masoro,Gasabo',
      amenities: {
          bed: 4,
          bath: 3
      },
      size: 2200.00
  }
];

export const services = [
  {
    icon: <BiHome />,
    title: "Property Listings",
    description:
      "Discover a diverse range of properties, from cozy apartments to spacious family homes, tailored to your unique needs and preferences.",
  },
  {
    icon: <MdLocationOn />,
    title: "Prime Locations",
    description:
      "Explore prime real estate locations in Rwanda, carefully selected for their convenience, safety, and potential for growth.",
  },
  {
    icon: <BiDollarCircle />,
    title: "Competitive Pricing",
    description:
      "Benefit from our expert pricing strategies, ensuring that you get the best value for your investment in the property market.",
  },
  {
    icon: <MdSecurity />,
    title: "Secure Transactions",
    description:
      "Rest easy knowing that every transaction is handled with the utmost care and security, protecting your interests at every step.",
  },
];

export const agents = [
  {
    name:'Mwenedata Apotre',
    img:agent,
    title:"Property Agent",
    mobile:"+250789238523"
  },
  {
    name:'Georgette',
    img:agent,
    title:"Property Manager",
    mobile:"+250789238523"
  },
]

export const testimonialData = [
  {
    testimonial:
      "Working with Elite RS was an incredible experience. Their dedication to finding the perfect property for me was unmatched. I couldn't be happier with the results.",
    name: "Gia Leini",
    occupation: "Real Estate Investor, Elite RS",
  },
  {
    testimonial:
      "Elite RS exceeded my expectations. They not only helped me find an investment property but also provided valuable advice on property management. True experts in the field!",
    name: "Ismael Mwanafunzi",
    occupation: "Real Estate Investor",
  },
  {
    testimonial:
      "I'm not just impressed; I'm blown away by the level of service provided by Elite RS. Their attention to detail and commitment to their clients make them the best in the industry.",
    name: "Idris Alba",
    occupation: "Actor, Hollywood",
  },
  // Add more testimonials as needed
];


