// components/testimonials/testimonialsData.ts

export interface Testimonial {
  name: string;
  location: string;
  property: string;
  rating: number;
  review: string;
  img?: string;
  message?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ali Raza",
    location: "Lahore",
    property: "Luxury Villa",
    rating: 5,
    review:
      "The entire experience was seamless. From design to delivery, everything exceeded our expectations.",
    img: "/assets/profile/img-1.png",
  },
  {
    name: "Sarah Khan",
    location: "DHA Karachi",
    property: "Apartment",
    rating: 5,
    review:
      "Professional team with outstanding taste in design. Highly recommended for luxury interiors.",
    img: "/assets/profile/img-1.png",
  },
  {
    name: "Usman Malik",
    location: "Islamabad",
    property: "Office Space",
    rating: 4,
    review:
      "Timely execution, transparent process, and excellent quality finishing.",
    img: "/assets/profile/img-1.png",
  },
];

