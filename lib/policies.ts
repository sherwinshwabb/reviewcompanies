export const policies: Record<
  string,
  {
    title: string;
    eyebrow: string;
    intro: string;
    sections: { title: string; body: string }[];
  }
> = {
  about: {
    title: "A little clarity changes the decision.",
    eyebrow: "ABOUT RATE TOP COMPANIES",
    intro:
      "Rate Top Companies brings company information, practical guides, and comparison tools together for the decisions that deserve a closer look.",
    sections: [
      {
        title: "Built around the questions you ask",
        body: "What does it cost? Who is it for? What are the tradeoffs? Our site is organized around ten categories spanning financial providers and legal services. The goal is to make those questions easier to investigate before you choose.",
      },
      {
        title: "A publication with a practical purpose",
        body: "Rate Top Companies is a commercial comparison website. It is not a regulator, certification body, bank, law firm, or investment adviser. Reviews describe selected providers rather than every company in a market.",
      },
      {
        title: "Information should be useful before you share your details",
        body: "You can explore categories, read profiles, use the calculator, and compare companies without creating an account. When you choose to visit a provider, you leave this site for the company’s own website.",
      },
    ],
  },
  "editorial-policy": {
    title: "Useful information. Clear standards.",
    eyebrow: "EDITORIAL POLICY",
    intro:
      "Our editorial framework puts specific facts, relevant comparisons, and meaningful limitations at the center of every page.",
    sections: [
      {
        title: "Show the basis for a claim",
        body: "A factual statement should be supported by a relevant source. Company statements and promotional descriptions are distinct from verified comparative findings. Unsupported rates, customer review counts, awards, and performance guarantees do not belong in a review.",
      },
      {
        title: "Keep comparisons relevant",
        body: "Compare the same service, borrower scenario, product type, or jurisdiction. Include the limitations that could change a reader’s decision. Do not present a national brand as proof of an individual lawyer’s qualifications.",
      },
      {
        title: "Keep dates meaningful",
        body: "An updated date should reflect a substantive review of the content. A new calendar date does not establish that a fee, product, or ranking has been checked again.",
      },
      {
        title: "Make corrections accessible",
        body: "Readers and companies should have the same opportunity to identify factual errors. Corrections should be based on evidence, with material changes recorded and reflected in related pages.",
      },
    ],
  },
  ownership: {
    title: "About the publishing business.",
    eyebrow: "OWNERSHIP",
    intro:
      "Rate Top Companies is being developed as a commercial consumer comparison publication.",
    sections: [
      {
        title: "The publishing entity",
        body: "The final operating entity, business contact information, and ownership particulars have not been supplied for this website preview. Those facts must be completed by the publishing team before public operation.",
      },
      {
        title: "Our role",
        body: "The publication organizes information and comparisons. Providers remain responsible for their own products, services, offers, agreements, and customer relationships.",
      },
    ],
  },
  privacy: {
    title: "Your privacy, in plain language.",
    eyebrow: "PRIVACY",
    intro:
      "This website preview keeps the comparison experience simple and does not require an account.",
    sections: [
      {
        title: "What is stored in your browser",
        body: "Your selected company IDs and privacy preference are saved locally so you can return to your comparison. These preferences are not a customer account. You can clear the shortlist on the comparison page or remove site data in your browser.",
      },
      {
        title: "Forms and message drafts",
        body: "The contact and correction tools prepare a draft in your browser. They do not send the entered name, email address, or message to a server. Copying or downloading a draft is an action you control.",
      },
      {
        title: "Provider websites",
        body: "A provider link takes you to an external website. That provider’s privacy terms and data collection apply when you visit. This preview does not pass your form details to providers.",
      },
      {
        title: "Analytics and tracking",
        body: "No advertising pixel or third-party analytics provider is connected. Privacy choices are stored locally, and the preference control recognizes the browser’s Global Privacy Control signal. Hosting infrastructure may maintain operational request logs.",
      },
      {
        title: "Before public operation",
        body: "The publisher must complete its legal identity, contact channel, retention schedule, vendor inventory, and applicable privacy rights process based on the deployed service.",
      },
    ],
  },
  terms: {
    title: "Using Rate Top Companies.",
    eyebrow: "TERMS OF USE",
    intro:
      "The site provides general information and comparison tools to help you research companies and products.",
    sections: [
      {
        title: "Information and decisions",
        body: "Content is general educational material rather than personalized financial, tax, or legal advice. A company profile does not guarantee eligibility, performance, approval, or a particular result. Read current provider agreements and consult qualified professionals where appropriate.",
      },
      {
        title: "External services",
        body: "Products and services are offered by the relevant providers under their own terms. Rate Top Companies does not execute investments, originate loans, issue cards, hold deposits, repair credit, or provide legal representation.",
      },
      {
        title: "Calculator assumptions",
        body: "Repayment calculations use the numbers entered, a fixed rate, and equal monthly payments. They exclude fees and do not constitute an actual offer. Results may differ from lender calculations and actual payment schedules.",
      },
      {
        title: "Publication status",
        body: "This is a prelaunch website implementation. Final operating terms, entity information, and applicable legal provisions must be completed for the actual publishing business.",
      },
    ],
  },
  accessibility: {
    title: "Clear information should be accessible.",
    eyebrow: "ACCESSIBILITY",
    intro:
      "The website is designed to work across screen sizes, input methods, and assistive technologies.",
    sections: [
      {
        title: "Navigating the site",
        body: "Use the skip link to move to the main content. Navigation, category filters, comparison selectors, and forms are keyboard accessible. Focus indicators identify the active control.",
      },
      {
        title: "Reading comparisons",
        body: "Mobile provider cards retain readable text. Side-by-side tables scroll horizontally rather than shrinking the content. Column headings and row labels describe the comparison.",
      },
      {
        title: "Reporting a barrier",
        body: "Use the contact draft tool to describe the page, device, browser, and issue you encountered. Please omit sensitive personal information.",
      },
    ],
  },
  "privacy-choices": {
    title: "Your browser. Your preferences.",
    eyebrow: "PRIVACY CHOICES",
    intro:
      "Manage the optional settings for this browser. Core comparison features remain available regardless of your choice.",
    sections: [],
  },
  contact: {
    title: "Let’s make the information better.",
    eyebrow: "CONTACT",
    intro:
      "Have a question about the publication, a company profile, or a comparison? Prepare an inquiry below.",
    sections: [],
  },
  corrections: {
    title: "Help us get the details right.",
    eyebrow: "CORRECTIONS",
    intro:
      "A useful correction identifies the page, explains the factual issue, and includes a source. Readers and companies can use the same process.",
    sections: [
      {
        title: "What to include",
        body: "Name the company and relevant page, quote or describe the statement in question, and provide a current official source or supporting document reference. Avoid sending account numbers, health information, or other sensitive details.",
      },
    ],
  },
  advertise: {
    title: "Build a useful partnership.",
    eyebrow: "WORK WITH US",
    intro:
      "We are building a comparison publication around practical information and well-defined customer needs.",
    sections: [
      {
        title: "Start with accurate information",
        body: "Companies can prepare information about their services, current terms, availability, and factual contact. A complete product record helps readers understand whether a service meets their needs.",
      },
      {
        title: "Bring a clear proposition",
        body: "Potential partnerships should identify the product, eligible audience, approved destination, and proposed commercial arrangement. Category requirements and the actual data flow need review before a program becomes active.",
      },
      {
        title: "Measure meaningful outcomes",
        body: "Commercial reporting should distinguish provider visits, accepted inquiries, qualified opportunities, and attributable revenue. A click alone does not establish that a reader received the right service.",
      },
    ],
  },
};
