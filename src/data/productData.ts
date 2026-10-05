export interface StepItem {
  number: number;
  title: string;
  tagline: string;
  description: string;
  exampleScript: string;
  purpose: string;
}

export interface WhatsInsideCard {
  id: string;
  iconName: 'file-text' | 'crosshair' | 'check-square' | 'zap';
  title: string;
  description: string;
  detail: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  takeaway: string;
}

export const EIGHT_STEPS: StepItem[] = [
  {
    number: 1,
    title: 'Trigger',
    tagline: 'Catch organic inbound curiosity',
    purpose: 'Respond to story reactions, poll votes, and reel comments without pitching.',
    description: 'The natural icebreaker that acknowledges their specific interaction without sounding like a desperate cold outreach bot.',
    exampleScript: '"Saw your vote on my story about fat-loss plateaus. Curious — are you currently stuck around the 15-minute cardio plateau or is nutrition the stubborn part right now?"'
  },
  {
    number: 2,
    title: 'Qualifier',
    tagline: 'Spot serious prospects fast',
    purpose: 'Filter out tire-kickers and determine if they are actually a fit for your coaching.',
    description: 'Ask a high-signal diagnostic question that reveals their current struggle, past attempts, and genuine willingness to change.',
    exampleScript: '"Got it. How long have you been battling that plateau, and have you tried structured progressive overload before or mainly guessing in the gym?"'
  },
  {
    number: 3,
    title: 'Value Bridge',
    tagline: 'Deliver micro-clarity (no pitching)',
    purpose: 'Prove you know your craft in 2 sentences before ever mentioning a call.',
    description: 'A punchy micro-diagnosis that reframes their problem in an instant. This builds authentic authority without giving away 5 hours of free consulting.',
    exampleScript: '"That makes total sense. Usually when calories are already low but scale weight stalls, your cortisol and NEAT are working against you. You don\'t need less food — you need a metabolic reset week."'
  },
  {
    number: 4,
    title: 'Ask',
    tagline: 'Low-friction permission check',
    purpose: 'Get enthusiastic permission to invite them to a strategy call.',
    description: 'Never drop an uninvited link. Ask a simple, courteous permission question so they lean in and welcome the next step.',
    exampleScript: '"I actually have a 15-minute roadmap I use with my private clients to map out the exact calorie refeed and lift split. Would it help if I walked you through it over a quick call?"'
  },
  {
    number: 5,
    title: 'Booking',
    tagline: 'Frictionless scheduling protocol',
    purpose: 'Lock in the day and time with direct confirmation.',
    description: 'Give them two specific time anchors alongside your calendar link, drastically cutting back and forth.',
    exampleScript: '"Awesome. Here is my direct booking link: [calendar link]. Grab whatever slot fits your schedule, or if Thursday 2pm / Friday 10am EST works best, let me know and I\'ll pencil you in."'
  },
  {
    number: 6,
    title: 'No-Show Save',
    tagline: 'Eliminate ghosting before the call',
    purpose: 'Ensure 90%+ attendance rates with a human pre-call check-in.',
    description: 'A warm, casual message 4 hours before the call that makes attendance feel easy and personal rather than an automated CRM blast.',
    exampleScript: '"Hey [Name], looking forward to reviewing your training split today at 3pm! Quick check — have you got Zoom ready on your phone/laptop?"'
  },
  {
    number: 7,
    title: 'Call Frame',
    tagline: 'Bridge from DM to Zoom with confidence',
    purpose: 'Set clear expectations so you never freeze up when the call starts.',
    description: 'A 3-part introductory agenda that establishes coach-to-client leadership within the first 60 seconds.',
    exampleScript: '"Great having you here! The plan for our 20 minutes is super simple: 1) Dive into what’s stalling your workouts, 2) Map out the 90-day fix, and 3) If it feels like a slam-dunk fit, I\'ll explain how we can partner up. Sound good?"'
  },
  {
    number: 8,
    title: 'Follow-Up (if needed)',
    tagline: 'Graceful re-engagement without desperation',
    purpose: 'Bring cold or distracted conversations back to life politely.',
    description: 'The exact 24-hour and 72-hour re-activation lines that revive abandoned threads without feeling pushy.',
    exampleScript: '"No pressure at all, [Name] — saw you were busy this week. Should I hold that roadmap spot for next Tuesday or let someone on the waitlist grab it?"'
  }
];

export const WHATS_INSIDE_CARDS: WhatsInsideCard[] = [
  {
    id: 'scripts',
    iconName: 'file-text',
    title: 'Ready-to-Use Scripts',
    description: 'Plug-and-play DMs for each step of the 8-part system.',
    detail: 'Field-tested copy templates for story replies, cold inbound questions, price objections, and booking nudges.'
  },
  {
    id: 'rules',
    iconName: 'crosshair',
    title: 'Decision Rules',
    description: 'Know what to say, when to say it, and when to move on.',
    detail: 'Clear IF/THEN logic branches: when to qualify deeper, when to share the link, and when to let an unqualified lead go.'
  },
  {
    id: 'tracker',
    iconName: 'check-square',
    title: 'Tracking Sheet',
    description: 'Keep your conversations organized and measure what\'s working.',
    detail: 'A ready-to-copy spreadsheet layout that tracks Lead Name, Interaction Date, Pipeline Stage, and Follow-Up Date.'
  },
  {
    id: 'total',
    iconName: 'zap',
    title: '22 Pages Total',
    description: 'Clear, concise, and built for real-world coaches.',
    detail: 'Zero fluff, zero theoretical filler. Engineered to be read in under 35 minutes and applied in your DMs today.'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    question: "I already know what to say — why do I need a 22-page script kit?",
    answer: "Knowing what to say in theory is very different from having a proven 48-hour conversational sequence in your back pocket. When an active follower asks 'How much do you charge?' on their second message, or suddenly stops responding after you mention a call, hesitation kills the sale. This kit removes the daily guesswork with strict decision rules, giving you battle-tested words that transition casual DMs into booked calendar events.",
    takeaway: "Eliminates hesitation and keeps you in control of every conversation."
  },
  {
    id: 2,
    question: "Won't this make me sound robotic or salesy to my followers?",
    answer: "No, exactly the opposite. The scripts are intentionally crafted to sound like a genuine, human peer — not an automated spam bot or an aggressive boiler-room closer. You never pitch or close packages inside the DMs. Instead, the 8 steps guide your follower to request the call themselves through authentic diagnostic questions and micro-value bridges.",
    takeaway: "Natural conversational flow that protects your brand credibility."
  },
  {
    id: 3,
    question: "I freeze up once we're actually on the call — does this help with that?",
    answer: "Yes! That is why Step 7 is dedicated entirely to the Call Frame. The kit gives you a 60-second transition script that you read or reference at the start of your call. It sets the agenda, establishes your authority, and eliminates the awkward 'So... how's the weather?' small talk, making the conversation feel structured, natural, and low-pressure for both of you.",
    takeaway: "Includes the exact pre-call frame so you lead the call with ease."
  }
];

// Your exact Whop product or checkout URL:
export const DEFAULT_WHOP_URL = 'https://whop.com/coach-sales-tool/dm-to-deposit/';

export const PRODUCT_DETAILS = {
  name: 'DM to Deposit',
  subtitle: 'The 48-Hour Instagram Script Kit for Solo Online Coaches',
  headline: 'Turn Instagram DMs into Booked Sales Calls.',
  subheadline: 'A 48-hour script kit for solo online coaches who get DMs but don\'t have a process yet — with scripts, decision rules, and a tracking system.',
  price: 14.99,
  priceFormatted: '$14.99',
  originalPriceFormatted: '$47.00',
  ctaText: 'Get the DM to Deposit Script Kit',
  whopCheckoutUrl: DEFAULT_WHOP_URL,
  pageCount: 22,
  badges: [
    'INSTANT DOWNLOAD',
    '48-HOUR ACCESS'
  ]
};
