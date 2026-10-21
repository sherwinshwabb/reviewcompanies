export type Guide = {
  slug: string;
  title: string;
  category: string;
  minutes: number;
  description: string;
  art: string;
  sections: { title: string; body: string }[];
  sources: { label: string; url: string }[];
};
export const guides: Guide[] = [
  {
    slug: "gold-ira-fees",
    title: "The real cost of a gold IRA",
    category: "gold",
    minutes: 6,
    description:
      "Dealer premiums, storage, and account fees. Know what goes into the total.",
    art: "gold",
    sections: [
      {
        title: "Start with the price of the metal",
        body: "The spot price is a reference point, not the final retail price. A dealer adds a premium for the product and its service. Ask for the exact coin or bar, weight, purity, quantity, and total purchase price. Compare the same basket with more than one dealer at a similar time.",
      },
      {
        title: "Separate one-time and recurring costs",
        body: "A precious metals retirement account may involve account opening charges, annual administration, storage, shipping, and transaction costs. Ask which entity charges each fee and whether a promotional waiver ends after the first year. An itemized fee schedule is more useful than a single advertised account charge.",
      },
      {
        title: "Look at the buyback spread",
        body: "Ask what the dealer would pay to repurchase the same metals at the time of your purchase. The difference between the purchase price and the buyback bid helps you understand the immediate cost of getting in and out. Ask whether the quote is executable and when it expires.",
      },
      {
        title: "Put the numbers in one place",
        body: "Build a comparison that includes the purchase premium, setup costs, annual account fees, annual storage, and exit costs. Use your actual investment amount and intended holding period. Written terms should explain any minimum, promotion, and condition.",
      },
    ],
    sources: [
      {
        label: "CFTC: Gold is no safe investment",
        url: "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/CustomerAdvisory_Gold.html",
      },
      {
        label: "Citadel Gold: account and fee information",
        url: "https://www.citadelgold.com/gold-ira/",
      },
    ],
  },
  {
    slug: "gold-dealers-custodians-depositories",
    title: "One gold IRA. Three different roles.",
    category: "gold",
    minutes: 5,
    description:
      "Understand the dealer, custodian, and depository before opening an account.",
    art: "book",
    sections: [
      {
        title: "The dealer sells your metals",
        body: "The dealer helps you choose and purchase specific precious metals. Its responsibilities may include product pricing, delivery arrangements, and a buyback service. Obtain a written purchase agreement that identifies the product and the counterparty.",
      },
      {
        title: "The custodian administers the account",
        body: "A self-directed IRA custodian handles account administration. Ask about fees, reporting, permitted assets, transaction instructions, and how you can move or close the account. A dealer’s recommendation of a custodian is a starting point for your own review.",
      },
      {
        title: "The depository stores the metals",
        body: "The storage agreement should explain the location, allocation of metals, storage type, insurance, and withdrawal process. Ask whether your exact holdings are segregated and what documentation you receive.",
      },
      {
        title: "Follow the full chain",
        body: "Before funding, identify all three entities and ask who handles a missing delivery, an account error, or a liquidation request. Keep the account agreement, purchase confirmation, and storage records together.",
      },
    ],
    sources: [
      {
        label:
          "IRS: Investments in collectibles in individually directed qualified plan accounts",
        url: "https://www.irs.gov/retirement-plans/investments-in-collectibles-in-individually-directed-qualified-plan-accounts",
      },
    ],
  },
  {
    slug: "compare-gold-quotes",
    title: "Five questions to ask before buying gold",
    category: "gold",
    minutes: 5,
    description:
      "A practical checklist for comparing written quotes and buyback terms.",
    art: "gold",
    sections: [
      {
        title: "What exactly am I buying?",
        body: "Record the mint or refiner, product name, weight, purity, condition, and quantity. A collectible coin and a common bullion bar are different products, even when both contain gold.",
      },
      {
        title: "What is the delivered price?",
        body: "Ask for the total after dealer premium, payment fees, shipping, and any account charges. Record the time and expiration of the quote so you can make a fair comparison.",
      },
      {
        title: "What is the buyback bid?",
        body: "Ask what you could receive for selling the same product back immediately. Read any restrictions, minimums, shipping responsibilities, and payment timeline.",
      },
      {
        title: "What happens after I pay?",
        body: "Get the delivery or storage timeline in writing. Know which company you would contact about a delay, discrepancy, or return.",
      },
      {
        title: "Can I take time to compare?",
        body: "Keep copies of quotes and agreements. Avoid a decision driven by pressure, a prediction of guaranteed gains, or an offer that cannot be explained in writing.",
      },
    ],
    sources: [
      {
        label: "CFTC: Precious metals fraud",
        url: "https://www.cftc.gov/LearnAndProtect/FraudAwarenessPrevention/PreciousMetalsFraud/index.htm",
      },
    ],
  },
  {
    slug: "physical-gold-vs-etfs",
    title: "Physical gold or a gold ETF?",
    category: "gold",
    minutes: 7,
    description:
      "Compare ownership, costs, access, and the tradeoffs of each approach.",
    art: "chart",
    sections: [
      {
        title: "Start with what you want to own",
        body: "Physical bullion gives you ownership of a tangible asset, with delivery or storage arrangements. A gold exchange-traded product gives you a security with an investment objective described in its prospectus. Check the structure and underlying assets of the specific fund.",
      },
      {
        title: "Compare ongoing and trading costs",
        body: "Bullion costs may include dealer premiums, storage, insurance, and resale spreads. Exchange-traded products can have annual expenses and trading spreads. Compare all costs over your intended holding period.",
      },
      {
        title: "Think about access",
        body: "Selling stored bullion may involve dealer quotes, shipping, and settlement. Exchange-traded products trade through a brokerage during market hours. Neither route guarantees the price you will receive.",
      },
      {
        title: "Keep portfolio risk in view",
        body: "Gold prices can move sharply and gold itself produces no income. Decide how an allocation fits the rest of your assets and your need for cash. Review tax and account implications with a qualified professional.",
      },
    ],
    sources: [
      {
        label: "Investor.gov: Exchange-traded funds",
        url: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/exchange-traded-funds-etfs",
      },
      {
        label: "CFTC: Gold investment considerations",
        url: "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/CustomerAdvisory_Gold.html",
      },
    ],
  },
  {
    slug: "spot-gold-pressure-tactics",
    title: "How to spot pressure in a gold sales pitch",
    category: "gold",
    minutes: 4,
    description:
      "Slow the conversation down and get the important details in writing.",
    art: "shield",
    sections: [
      {
        title: "Question guaranteed outcomes",
        body: "No seller can guarantee the future market price of gold. Separate a factual product description from predictions about inflation, currencies, or economic events.",
      },
      {
        title: "Ask for plain pricing",
        body: "A discussion that focuses on fear or urgency while avoiding an itemized quote leaves you without the information needed to decide. Request the exact product, total cost, and resale conditions.",
      },
      {
        title: "Read promotion conditions",
        body: "Free-metal offers and fee waivers may depend on the purchase amount, product, or holding period. Compare the complete transaction rather than valuing a promotion in isolation.",
      },
      {
        title: "Keep control of the next step",
        body: "Take time to read agreements and compare alternatives. Retain records of representations and do not provide account access credentials to a salesperson.",
      },
    ],
    sources: [
      {
        label: "CFTC: Precious metals fraud awareness",
        url: "https://www.cftc.gov/LearnAndProtect/FraudAwarenessPrevention/PreciousMetalsFraud/index.htm",
      },
    ],
  },
  {
    slug: "compare-mortgage-estimates",
    title: "Look beyond the mortgage rate",
    category: "mortgages",
    minutes: 6,
    description:
      "What a Loan Estimate can tell you about the true cost of a home loan.",
    art: "home",
    sections: [
      {
        title: "Make the quotes comparable",
        body: "Use the same property, loan amount, down payment, term, and rate-lock period. Ask lenders to state points and other pricing assumptions clearly.",
      },
      {
        title: "Compare more than monthly payments",
        body: "Look at origination charges, points, total closing costs, and projected payments. Include any mortgage insurance and escrow assumptions in your budget.",
      },
      {
        title: "Consider how long you will keep the loan",
        body: "Paying more upfront for a lower rate may make sense only if you keep the loan long enough. Compare the upfront difference with the monthly savings and consider the possibility of moving or refinancing.",
      },
    ],
    sources: [
      {
        label: "CFPB: Loan Estimate explainer",
        url: "https://www.consumerfinance.gov/owning-a-home/loan-estimate/",
      },
    ],
  },
  {
    slug: "student-refinance-checklist",
    title: "Before you refinance your student loans",
    category: "student-loans",
    minutes: 6,
    description:
      "Balance a possible lower rate against repayment options and protections.",
    art: "graduate",
    sections: [
      {
        title: "Identify your existing loans",
        body: "Separate federal loans from private loans. Private refinancing of a federal loan can permanently remove federal repayment and forgiveness protections. Review current Federal Student Aid guidance first.",
      },
      {
        title: "Compare the full repayment",
        body: "A longer term can reduce the monthly payment while increasing total interest. Use the same balance when comparing offers, and model both the monthly payment and total cost.",
      },
      {
        title: "Read the hardship policy",
        body: "Ask what happens if your income falls, whether a cosigner is required, and how cosigner release works. Compare fixed and variable interest rates as different risks.",
      },
    ],
    sources: [
      {
        label: "Federal Student Aid: Federal versus private loans",
        url: "https://studentaid.gov/understand-aid/types/loans/federal-vs-private",
      },
    ],
  },
  {
    slug: "choose-credit-card",
    title: "Cash back or travel rewards?",
    category: "credit-cards",
    minutes: 5,
    description:
      "Choose around your actual habits, not a headline welcome offer.",
    art: "card",
    sections: [
      {
        title: "Start with repayment",
        body: "If you expect to carry a balance, focus on borrowing costs first. Rewards will rarely compensate for sustained interest charges.",
      },
      {
        title: "Use your own spending",
        body: "Estimate annual spending by category and calculate rewards under each card’s rules and caps. Subtract the annual fee and ignore credits you would not naturally use.",
      },
      {
        title: "Consider redemption",
        body: "Cash back can be straightforward. Travel rewards may be valuable but depend on availability, transfer terms, and how you book. Read current issuer terms before applying.",
      },
    ],
    sources: [
      {
        label: "CFPB: Credit cards",
        url: "https://www.consumerfinance.gov/consumer-tools/credit-cards/",
      },
    ],
  },
  {
    slug: "choose-law-firm",
    title: "Questions to ask at your first legal consultation",
    category: "personal-injury",
    minutes: 5,
    description:
      "A useful conversation starts with experience, responsibility, and costs.",
    art: "scales",
    sections: [
      {
        title: "Find out who will handle your matter",
        body: "Ask which attorney is responsible, how often you will hear from them, and whether your case may be referred to another firm. Verify their license in the relevant state.",
      },
      {
        title: "Clarify fees and expenses",
        body: "Request the fee agreement and ask how case costs are calculated. Find out what you might owe if the matter is unsuccessful or if you change lawyers.",
      },
      {
        title: "Discuss process rather than promises",
        body: "Ask about likely steps, possible delays, and documents needed for evaluation. Past verdicts do not predict a new outcome, and a responsible assessment accounts for uncertainty.",
      },
    ],
    sources: [
      {
        label: "American Bar Association: Hiring a lawyer",
        url: "https://www.americanbar.org/groups/public_education/resources/public-information/how-do-i-find-a-lawyer/",
      },
    ],
  },
  {
    slug: "debt-settlement-vs-management",
    title: "Debt settlement and debt management explained",
    category: "debt-relief",
    minutes: 7,
    description:
      "Similar names, very different paths. Understand what each involves.",
    art: "sunrise",
    sections: [
      {
        title: "Debt management organizes repayment",
        body: "A counseling organization may help arrange a debt management plan with creditors. Ask about fees, participating debts, payment arrangements, and any potential changes in interest or charges.",
      },
      {
        title: "Settlement seeks a reduced balance",
        body: "A settlement program seeks an agreement to pay less than the amount owed. Creditors do not have to agree. Missed payments can lead to damaged credit, collection activity, or lawsuits.",
      },
      {
        title: "Compare the alternatives",
        body: "Ask creditors directly about hardship options. Consider nonprofit counseling and qualified advice about other remedies before signing a program agreement. Evaluate costs and outcomes after fees.",
      },
    ],
    sources: [
      {
        label: "FTC: How to get out of debt",
        url: "https://consumer.ftc.gov/articles/how-get-out-debt",
      },
    ],
  },
  {
    slug: "free-credit-report-disputes",
    title: "You can dispute credit report errors for free",
    category: "credit-repair",
    minutes: 5,
    description: "Understand the first steps before paying for credit repair.",
    art: "shield",
    sections: [
      {
        title: "Identify the specific error",
        body: "Review your reports and gather documents that show why an entry is inaccurate or incomplete. Keep a copy of the report and mark the disputed information.",
      },
      {
        title: "Contact the reporting company and provider",
        body: "Explain the error clearly and send copies of supporting documents. Follow the official dispute instructions and keep records of submissions and responses.",
      },
      {
        title: "Set realistic expectations",
        body: "Disputing inaccurate information differs from removing accurate negative history. A paid company cannot legitimately guarantee a score increase or erase current accurate information.",
      },
    ],
    sources: [
      {
        label: "CFPB: Disputing credit report errors",
        url: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-on-my-credit-report-en-314/",
      },
    ],
  },
  {
    slug: "bank-account-checklist",
    title: "A better checklist for choosing a bank",
    category: "banking",
    minutes: 5,
    description:
      "Put account costs and everyday access ahead of a headline offer.",
    art: "bank",
    sections: [
      {
        title: "Map how you use your account",
        body: "Decide whether you need cash deposits, branches, bill pay, frequent transfers, or a savings account. Compare checking and savings separately.",
      },
      {
        title: "Read the fee schedule",
        body: "Look at monthly maintenance, balance conditions, ATM charges, and overdraft terms. Use your typical activity to estimate the annual cost.",
      },
      {
        title: "Verify where your money is held",
        body: "Check the legal bank entity using FDIC BankFind. For cash sweep products, read the participating-bank and allocation terms and consider your other deposits at the same banks.",
      },
    ],
    sources: [
      {
        label: "FDIC: BankFind Suite",
        url: "https://banks.data.fdic.gov/bankfind-suite/bankfind",
      },
    ],
  },
  {
    slug: "lemon-law-records",
    title: "Build a clear vehicle repair timeline",
    category: "lemon-law",
    minutes: 4,
    description:
      "Organize the records a lemon law attorney may need to review.",
    art: "car",
    sections: [
      {
        title: "Collect the original documents",
        body: "Keep the purchase or lease agreement, warranty, and any service contract. Make copies of repair orders, including the mileage and dates.",
      },
      {
        title: "Record each repair visit",
        body: "Describe the issue reported, what the repair order says, and how long the vehicle was unavailable. Save written communications with the dealer and manufacturer.",
      },
      {
        title: "Get advice for your state",
        body: "Lemon law eligibility and deadlines vary by jurisdiction and circumstances. Ask a licensed attorney to review your records and the applicable rules rather than assuming a national checklist establishes eligibility.",
      },
    ],
    sources: [
      {
        label: "California Department of Consumer Affairs: Lemon law",
        url: "https://www.dca.ca.gov/acp/",
      },
    ],
  },
  {
    slug: "brokerage-vs-robo-advisor",
    title: "Hands-on investing or a managed portfolio?",
    category: "investing",
    minutes: 6,
    description: "Choose the service model before choosing the company.",
    art: "chart",
    sections: [
      {
        title: "Decide who makes the decisions",
        body: "A self-directed brokerage lets you select investments and place trades. An automated investment service generally manages a portfolio according to a defined strategy and your inputs.",
      },
      {
        title: "Understand what advice includes",
        body: "Portfolio management, access to a human adviser, tax features, and broader planning are distinct services. Read what is actually included at your account level.",
      },
      {
        title: "Compare all-in costs",
        body: "Add advisory fees, underlying fund expenses, trading costs, and account charges. Verify the relevant legal entity and registration, and remember that registration does not guarantee performance.",
      },
    ],
    sources: [
      {
        label: "SEC: Investment Adviser Public Disclosure",
        url: "https://adviserinfo.sec.gov/",
      },
      {
        label: "Investor.gov: Fees and expenses",
        url: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/mutual-funds-and-exchange-traded-1",
      },
    ],
  },
];
export const guideBySlug = (slug: string) =>
  guides.find((g) => g.slug === slug);
