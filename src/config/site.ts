export const SITE = {
  name: 'secureaiframeworks.help',
  title: 'secureaiframeworks.help | Premium Domain for Sale | Secure AI Frameworks',
  description:
    'Buy secureaiframeworks.help for $11,997 — premium .help domain for sale. Secure AI frameworks help for enterprise AI security, guardrails & trustworthy AI. Escrow-protected instant transfer. Make an offer today.',
  url: 'https://secureaiframeworks.help',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Scottsdale, Arizona',
  price: '11997',
  priceDisplay: '$11,997',
  image: 'https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/c7e99723-184f-4f19-5e8d-95f4bdcb3d00/public',
  googleSiteVerification: '5kZ2WJVXfcqJoyqgzlWQQbgeucCtJJpZCkM2idQP68s'
} as const;

export const SITE_KEYWORDS =
  'buy help domain, premium domain names for sale, secure AI frameworks, AI security domain, AI guardrails, trustworthy AI, enterprise AI security, investment domains, brandable AI domains';

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('Acquisition Inquiry - secureaiframeworks.help')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring secureaiframeworks.help. Please provide details and next steps.\n\nBest regards,')}`;

export const MAKE_OFFER_MAILTO = (offer = '') =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(`Offer ${offer ? `$${offer} ` : ''}for secureaiframeworks.help`)}&body=${encodeURIComponent(`Hello,\n\nI would like to make an offer${offer ? ` of $${offer}` : ''} for secureaiframeworks.help.\n\nName:\nOrganization:\nTimeline:\n\nBest regards,`)}`;
