const PORTAL_URL =
  process.env.NEXT_PUBLIC_PORTAL_URL ||
  "https://pharmacy.caremaxmeds.co.ke";

export const siteConfig = {
  name: "Caremax",

  description:
    "Modern pharmacy management software for pharmacies, clinics and healthcare businesses.",

  url: PORTAL_URL,

  links: {
    login: `${PORTAL_URL}/login`,
    signup: "/demo",
  },
};