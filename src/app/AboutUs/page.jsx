import AboutUs from "./AboutUsClient";
// app/aboutus/page.jsx
export const metadata = {
  title: "About WebUtsav | Leading IT, Web & Digital Solutions Company",
  description:
    "Learn about WebUtsav's journey, values, and team. We are passionate about empowering businesses with innovative digital marketing and web development solutions.",
  keywords:
    "about WebUtsav, digital marketing agency India, web development company, our mission, our team, marketing experts, WebUtsav story",
  authors: [{ name: "WebUtsav" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://webutsav.com/aboutus",  
  },
  openGraph: {
    title: "About WebUtsav | Leading IT, Web & Digital Solutions Company",
    description:
      "Learn about WebUtsav's journey, values, and team. We are passionate about empowering businesses with innovative digital marketing and web development solutions.",
    images: [{ url: "/images/og-default.webp", width: 1200, height: 630, alt: "About WebUtsav" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About WebUtsav | Leading IT, Web & Digital Solutions Company",
    description:
      "Learn about WebUtsav's journey, values, and team. We are passionate about empowering businesses with innovative digital marketing and web development solutions.",
    images: ["/images/og-default.webp"],
  },
};



export default function AboutUsPage() {
  return (
    <div>
      <AboutUs/>
    </div>
  );
}