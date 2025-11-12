import { CenterData } from "@/types";

const centersMock: Record<string, CenterData> = {
  center1: {
    name: "Beauty by Ana",
    logo: "/logo-glam.png",
    slogan: "Your beauty, our passion.",
    description:
      "At Beauty by Ana, we believe that true beauty comes from self-care. Our team provides personalized treatments using premium products to help you feel confident, relaxed, and radiant.",
    services: [
      {
        id: 1,
        name: "Deep Facial Cleansing",
        duration: 60,
        price: 95,
        description:
          "A complete skincare session that removes impurities, unclogs pores, and revitalizes the skin for a fresh, natural glow.",
      },
      {
        id: 2,
        name: "Relaxing Aromatherapy Massage",
        duration: 50,
        price: 120,
        description:
          "A full-body massage with essential oils designed to reduce stress, improve circulation, and restore mental balance.",
      },
      {
        id: 3,
        name: "Hydrating Facial Mask",
        duration: 30,
        price: 70,
        description:
          "An express treatment that deeply moisturizes and rejuvenates dry or tired skin, leaving it soft and luminous.",
      },
      {
        id: 4,
        name: "Body Scrub & Moisturizing Therapy",
        duration: 75,
        price: 150,
        description:
          "An exfoliating body ritual that removes dead skin cells, followed by intense hydration using natural oils.",
      },
    ],
  },

  center2: {
    name: "Studio Glam",
    logo: "/logo-glam.png",
    slogan: "Where style meets confidence.",
    description:
      "Studio Glam is a full-service salon specializing in modern hair design and personalized treatments. Whether you need a bold new look or just a quick refresh, our stylists make sure you leave looking and feeling amazing.",
    services: [
      {
        id: 1,
        name: "Women's Haircut & Styling",
        duration: 45,
        price: 80,
        description:
          "Precision haircut followed by professional blow-dry and styling using high-end finishing products.",
      },
      {
        id: 2,
        name: "Color & Highlights",
        duration: 90,
        price: 180,
        description:
          "Professional coloring and highlight techniques to enhance your natural tone or completely transform your look.",
      },
      {
        id: 3,
        name: "Keratin Smoothing Treatment",
        duration: 120,
        price: 250,
        description:
          "Long-lasting smoothing and shine for frizz-free, easy-to-manage hair for up to 3 months.",
      },
      {
        id: 4,
        name: "Scalp Detox & Hair Spa",
        duration: 60,
        price: 110,
        description:
          "A relaxing and restorative scalp treatment that cleanses, nourishes, and stimulates healthy hair growth.",
      },
    ],
  },
};

export async function fetchCenter(center: string): Promise<CenterData>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = centersMock[center];
      console.log(data)
      if (data) {
        resolve(data);
      } else {
        reject(new Error("Center not found!"))
      }
    }, 1500);
  })
}
