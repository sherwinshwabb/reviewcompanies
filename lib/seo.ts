/**
 * Search-optimized copy and metadata for every page.
 *
 * The migrated data files (`catalog.ts`, `guides.ts`, `policies.ts`) are
 * checksummed and left unchanged. This module layers unique titles,
 * descriptions, headings, long-form copy, labels, and FAQs on top of them.
 * Nothing here invents prices, ratings, review counts, or outcomes.
 */
import { categories, providers, type Category, type Provider } from "./catalog";
import { type Guide } from "./guides";

export const siteName = "Review Top Companies";
export const publishedOn = "2026-10-01";
export const reviewedOn = "2026-10-21";
export const reviewedOnLabel = "October 21, 2026";
export const currentYear = "2026";

export type Faq = { question: string; answer: string };
export type Section = { title: string; body: string };

export type CategorySeo = {
  /** <title> without the site-name template. Aim for 60 characters or fewer. */
  metaTitle: string;
  /** Meta description. Aim for 150–160 characters. */
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string;
  /** Singular and plural nouns used in templated headings and copy. */
  noun: string;
  plural: string;
  /** Suffix for provider review titles in this category. */
  reviewSuffix: string;
  /** One editorial "best for" label per provider, derived from each company's stated fit. */
  bestFor: Record<string, string>;
  tableHeading: string;
  tableIntro: string;
  overview: Section[];
  faqs: Faq[];
};

export const categorySeo: Record<string, CategorySeo> = {
  gold: {
    metaTitle: "Best Gold IRA Companies of 2026: Compare Fees & Minimums",
    metaDescription:
      "Compare 2026's best gold IRA companies and bullion dealers: minimums, fees to ask about, storage and buyback terms, and how to vet a precious metals dealer.",
    h1: "Best Gold IRA Companies & Gold Dealers of 2026",
    eyebrow: "GOLD IRA & PRECIOUS METALS COMPARISON",
    intro:
      "Compare gold IRA companies and online bullion dealers side by side. We profile seven precious metals companies, the fees and minimums to ask about, how custodians and depositories work, and what a buyback program actually guarantees, so you can open a gold IRA or buy physical gold with the full cost in view.",
    noun: "gold IRA company",
    plural: "gold IRA companies",
    reviewSuffix: "Gold IRA Fees, Minimums & Fit",
    bestFor: {
      "citadel-gold": "Guided gold and silver IRA setup",
      "augusta-precious-metals": "Gold IRA education and information kits",
      goldco: "Gold IRA and direct-purchase options",
      "birch-gold-group": "Exploring retirement account metals choices",
      "american-hartford-gold": "A second dealer quote to compare",
      apmex: "Shopping for physical bullion online",
      "jm-bullion": "Comparing online bullion prices",
    },
    tableHeading: "Compare gold IRA companies side by side",
    tableIntro:
      "Service type, published minimums, and the detail to confirm with each precious metals company before you fund an account.",
    overview: [
      {
        title: "What a gold IRA is, and who it suits",
        body: "A gold IRA is a self-directed individual retirement account that holds physical precious metals instead of, or alongside, stocks and funds. IRS rules require the metals to meet minimum fineness standards and to be held by an approved custodian in an approved depository, so you cannot keep IRA gold at home. Most investors fund a gold IRA by transferring or rolling over an existing IRA or 401(k). It suits people who want a tangible asset inside their retirement savings and who accept that gold pays no interest or dividends and can fall in price.",
      },
      {
        title: "Gold IRA fees: what to ask every company",
        body: "Expect several layers of cost: the dealer’s premium over the spot price, a one-time account setup charge, annual custodian administration, annual storage (segregated storage usually costs more than commingled), shipping and insurance, and the spread between what you pay and what the dealer would pay to buy the metal back. Promotions such as free silver or waived first-year fees usually depend on purchase size and holding period. Ask each gold IRA company for an itemized written fee schedule, then compare the all-in cost for your actual investment amount over the years you plan to hold.",
      },
      {
        title: "Gold IRA vs. buying bullion directly",
        body: "Buying coins or bars from an online bullion dealer such as APMEX or JM Bullion gives you direct ownership outside a retirement account. There is no custodian or depository fee, but there is also no tax-advantaged treatment, and you are responsible for storage and insurance. A gold IRA offers tax-deferred or tax-free growth inside the account rules, in exchange for recurring account fees, higher minimums, and distribution rules. Decide which structure fits your goals before you compare dealers.",
      },
      {
        title: "Red flags when choosing a gold company",
        body: "Walk away from guaranteed returns, predictions of economic collapse used to rush a decision, “home storage IRA” claims, or a salesperson who will not put the exact product and total price in writing. Be cautious when a pitch steers you from common bullion toward high-premium collectible or “exclusive” coins. The Commodity Futures Trading Commission publishes advisories on precious metals fraud, and state securities regulators and the Better Business Bureau record complaints you can check before you buy.",
      },
    ],
    faqs: [
      {
        question: "What does a gold IRA company do?",
        answer:
          "A gold IRA company sells the physical metals and typically coordinates the account with a self-directed IRA custodian and a depository. The dealer sells, the custodian administers the account, and the depository stores the metal. You should receive agreements from each.",
      },
      {
        question: "How much does a gold IRA cost?",
        answer:
          "Costs usually include a dealer premium over spot, a one-time setup fee, annual custodian and storage fees, and a buyback spread when you sell. Amounts vary by company, metal, and storage type, so request an itemized written quote for your exact purchase.",
      },
      {
        question: "What is the minimum investment for a gold IRA?",
        answer:
          "Minimums are set by each company and change over time. Citadel Gold’s gold IRA page states a $25,000 minimum; other companies on this page do not publish a figure we have verified, so confirm the current minimum directly before applying.",
      },
      {
        question: "Can I store gold IRA metals at home?",
        answer:
          "No. IRS rules require precious metals held in an IRA to be kept by a qualified trustee or custodian in an approved depository. Taking personal possession of IRA metals can be treated as a distribution, with taxes and possible penalties.",
      },
      {
        question: "Which gold IRA company is best?",
        answer:
          "It depends on whether you want an IRA or direct delivery, how much you are investing, and which fees matter most to you. We do not publish numerical scores, and Citadel Gold’s first position is a paid placement. Use the comparison table and ask each company the same questions.",
      },
      {
        question: "Is gold a safe investment?",
        answer:
          "Gold is not risk free. Its price can be volatile, it produces no income, and dealer spreads and storage fees reduce returns. Regulators such as the CFTC caution that gold is not a guaranteed hedge. Consider how an allocation fits your overall plan and time horizon.",
      },
      {
        question: "How do I roll over a 401(k) into a gold IRA?",
        answer:
          "Open a self-directed IRA with a custodian that allows precious metals, then request a direct rollover or trustee-to-trustee transfer from your existing plan. A direct transfer avoids the 60-day deadline and withholding that apply to indirect rollovers. Confirm the steps with the custodian and a tax professional.",
      },
    ],
  },
  mortgages: {
    metaTitle: "Best Mortgage Lenders of 2026: Compare Rates, Fees & Programs",
    metaDescription:
      "Compare the best mortgage lenders of 2026 for purchase, refinance, and VA loans. Learn to read a Loan Estimate, compare APR and points, and verify licensing.",
    h1: "Best Mortgage Lenders of 2026",
    eyebrow: "MORTGAGE LENDER COMPARISON",
    intro:
      "Compare mortgage lenders for home purchase, refinance, and VA loans. We profile five lenders, explain how to compare Loan Estimates on an identical borrower scenario, and show which fees, points, and rate-lock terms change the true cost of a home loan.",
    noun: "mortgage lender",
    plural: "mortgage lenders",
    reviewSuffix: "Mortgage Rates, Fees & Loan Options",
    bestFor: {
      "rocket-mortgage": "A fully online mortgage application",
      rate: "A second purchase quote to compare",
      "better-mortgage": "A digital lending experience",
      "veterans-united": "VA home loans for eligible borrowers",
      "pnc-mortgage": "Pairing a mortgage with a banking relationship",
    },
    tableHeading: "Compare mortgage lenders side by side",
    tableIntro:
      "Loan focus and the detail to confirm with each lender. Request a Loan Estimate for the same property, loan amount, and term from every lender you compare.",
    overview: [
      {
        title: "How to compare mortgage lenders in 2026",
        body: "Start by giving every lender the same scenario: property, purchase price, down payment, loan term, credit profile, and rate-lock period. Within three business days of a completed application, each lender must send a standardized Loan Estimate. Compare the interest rate and the APR, which includes most lender fees, then look at origination charges, discount points, and the five-year cost figure on page three. A lower advertised rate often comes with higher points or fees.",
      },
      {
        title: "Mortgage types: conventional, FHA, VA, jumbo, and refinance",
        body: "Conventional loans follow Fannie Mae and Freddie Mac guidelines and generally require private mortgage insurance below a 20% down payment. FHA loans allow lower down payments and credit scores but carry mortgage insurance premiums. VA loans for eligible service members and veterans require no down payment in most cases and have no monthly mortgage insurance. Jumbo loans exceed conforming limits and have stricter requirements. Refinancing replaces an existing loan, so compare the closing costs with the monthly savings over the time you expect to keep the home.",
      },
      {
        title: "Online lenders, banks, and brokers",
        body: "Online lenders such as Rocket Mortgage and Better emphasize speed and digital document handling. Banks such as PNC may offer relationship pricing and in-person service. Mortgage brokers shop your application to multiple wholesale lenders for a fee paid by you or the lender. Any of these may sell the servicing of your loan after closing, so ask who will collect payments and how escrow will be handled.",
      },
      {
        title: "Verify the lender before you lock",
        body: "Look up the company and your loan officer on NMLS Consumer Access to confirm licensing and employment history, and search the CFPB complaint database for patterns. Ask when your rate lock expires, what a lock extension costs, whether a float-down option exists, and what could delay closing. Get the final Closing Disclosure at least three business days before closing and compare it line by line with your Loan Estimate.",
      },
    ],
    faqs: [
      {
        question: "Who is the best mortgage lender?",
        answer:
          "The best lender is the one that offers the lowest total cost for your specific scenario and can close on time. Collect Loan Estimates from several lenders using identical assumptions and compare APR, points, lender fees, and cash to close rather than relying on a ranking or an advertised rate.",
      },
      {
        question: "How many mortgage lenders should I get quotes from?",
        answer:
          "Most consumer agencies recommend comparing at least three lenders. Credit scoring models treat multiple mortgage inquiries made within a short shopping window as a single inquiry, so comparing several lenders within a couple of weeks has little effect on your score.",
      },
      {
        question: "What is the difference between interest rate and APR?",
        answer:
          "The interest rate is the cost of borrowing the principal. The APR adds most lender fees and points, expressed as a yearly rate, so it is a better single number for comparing offers with different fee structures. Always compare both across the same loan term.",
      },
      {
        question: "What is a mortgage rate lock?",
        answer:
          "A rate lock is the lender’s commitment to hold your quoted rate for a set period, often 30 to 60 days, while your loan is processed. Ask about the lock period, extension fees, and whether the lock protects your points as well as your rate.",
      },
      {
        question: "What credit score do I need for a mortgage?",
        answer:
          "Lenders set their own minimums within program rules. Many conventional programs look for scores around 620 or higher, FHA programs can accept lower scores with larger down payments, and VA loans have no program-wide minimum. A higher score generally earns a lower rate.",
      },
      {
        question: "Should I pay mortgage points?",
        answer:
          "Discount points are prepaid interest that lowers your rate. They make sense when you will keep the loan long enough for the monthly savings to exceed the upfront cost. Divide the cost of the points by the monthly savings to find your break-even month.",
      },
    ],
  },
  "personal-injury": {
    metaTitle: "Best Personal Injury Law Firms of 2026: How to Choose",
    metaDescription:
      "Compare personal injury law firms and learn how to choose a lawyer: contingency fees, who handles your case, licensing, and what to ask at a free consultation.",
    h1: "Best Personal Injury Law Firms of 2026",
    eyebrow: "PERSONAL INJURY LAWYER COMPARISON",
    intro:
      "Compare personal injury law firms by relevant practice experience, geographic coverage, and fee terms. We profile national, California, and regional firms, explain how contingency fees work, and list the questions to ask a personal injury lawyer before you sign a representation agreement.",
    noun: "personal injury law firm",
    plural: "personal injury law firms",
    reviewSuffix: "Fees, Coverage & What to Ask",
    bestFor: {
      "morgan-and-morgan": "A national firm with local offices",
      "panish-shea-ravipudi": "California personal injury representation",
      "kline-and-specter": "Comparing a regional firm’s experience",
    },
    tableHeading: "Compare personal injury law firms side by side",
    tableIntro:
      "Geographic coverage and the detail to confirm with each firm. Attorney licensing, the responsible lawyer, and fee terms should be verified in writing.",
    overview: [
      {
        title: "How personal injury lawyers charge: contingency fees explained",
        body: "Most personal injury lawyers work on contingency, meaning the fee is a percentage of any settlement or verdict and nothing is owed if there is no recovery. The details matter: ask whether the percentage rises if the case goes to trial, whether case expenses such as expert witnesses and records are deducted before or after the fee is calculated, and whether you owe those expenses if the case is lost. A written fee agreement should answer every one of these questions.",
      },
      {
        title: "National firm or local firm: what actually matters",
        body: "A national brand can offer resources and offices in many states, but the lawyer assigned to your file determines your experience. Ask who will handle your case day to day, how often they try cases rather than settle, and whether your matter might be referred to another firm for a fee split. A local firm may know the courts, judges, and insurers in your jurisdiction well. Either way, confirm that the responsible attorney is licensed in the state where your claim arises.",
      },
      {
        title: "What to bring to a free consultation",
        body: "Bring the police or incident report, photographs, medical records and bills, proof of lost wages, insurance correspondence, and a timeline of what happened and who you have spoken to. Do not give recorded statements to another party’s insurer before consulting a lawyer. A good consultation ends with a clear explanation of the process, likely timelines, and the fee agreement, not a promise of a specific dollar amount.",
      },
      {
        title: "Deadlines, licensing, and realistic expectations",
        body: "Every state sets a statute of limitations for injury claims, and claims against government entities often have much shorter notice deadlines, so speak to a lawyer early. Verify any attorney’s license and disciplinary history through your state bar. Past verdicts and settlements reflect other people’s facts, insurance limits, and jurisdictions; they do not predict the value of your case.",
      },
    ],
    faqs: [
      {
        question: "How much does a personal injury lawyer cost?",
        answer:
          "Most charge a contingency fee, a percentage of the recovery, with no upfront payment. The percentage, how case expenses are handled, and what you owe if you lose vary by firm and state, so compare written fee agreements before choosing.",
      },
      {
        question: "When should I hire a personal injury lawyer?",
        answer:
          "Consider contacting a lawyer soon after an injury, especially when there are significant medical bills, disputed fault, an insurer pressing for a quick settlement, or a potential government defendant with a short notice deadline. Many firms offer free consultations.",
      },
      {
        question: "How do I find the best personal injury lawyer near me?",
        answer:
          "Look for attorneys licensed in your state who regularly handle your type of injury, confirm who will personally manage your case, check the state bar for discipline, and compare fee agreements. Referrals from other lawyers and local bar associations are useful starting points.",
      },
      {
        question: "What questions should I ask a personal injury lawyer?",
        answer:
          "Ask who will handle the case, how often you will receive updates, how the fee and expenses work, whether the firm tries cases or mainly settles, whether your matter may be referred elsewhere, and what documents they need to evaluate your claim.",
      },
      {
        question: "How long do I have to file a personal injury claim?",
        answer:
          "It depends on your state and the type of claim. Statutes of limitations commonly range from one to several years, and claims involving government entities can require notice within months. A licensed attorney in your state can confirm the deadline that applies to you.",
      },
      {
        question: "How much is my personal injury case worth?",
        answer:
          "No one can promise a figure. Value depends on medical costs, lost income, the severity and permanence of injuries, fault, available insurance coverage, and the jurisdiction. Be cautious of any lawyer who quotes a number before reviewing your records.",
      },
    ],
  },
  "student-loans": {
    metaTitle: "Best Student Loan Refinance Lenders of 2026: Compare Rates",
    metaDescription:
      "Compare the best student loan refinance lenders of 2026: fixed vs. variable rates, total cost, cosigner release, and what refinancing federal loans gives up.",
    h1: "Best Student Loan Refinance Lenders of 2026",
    eyebrow: "STUDENT LOAN REFINANCE COMPARISON",
    intro:
      "Compare student loan refinance lenders on total repayment cost, repayment flexibility, and borrower protections. We profile four private refinance lenders, explain which federal benefits you give up when you refinance, and include a repayment calculator that shows how a longer term changes what you pay.",
    noun: "student loan refinance lender",
    plural: "student loan refinance lenders",
    reviewSuffix: "Refinance Rates, Terms & Eligibility",
    bestFor: {
      "sofi-refinance": "Refinancing with an online lender",
      earnest: "Reviewing flexible repayment choices",
      "citizens-refinance": "A bank-based refinance option",
      elfi: "Comparing education loan refinancing",
    },
    tableHeading: "Compare student loan refinance lenders side by side",
    tableIntro:
      "Each lender’s offering and the detail to confirm before applying. Prequalify with the same balance and term at each lender to compare like for like.",
    overview: [
      {
        title: "Should you refinance federal student loans?",
        body: "Refinancing replaces your existing loans with a new private loan. If you refinance federal loans, you permanently lose federal protections: income-driven repayment plans, Public Service Loan Forgiveness, federal deferment and forbearance options, and any future federal relief. Borrowers who want one payment but need to keep federal benefits should look at a Direct Consolidation Loan instead. Review your loan types on StudentAid.gov before you apply anywhere.",
      },
      {
        title: "Fixed vs. variable rates and the real total cost",
        body: "A fixed rate stays the same for the life of the loan; a variable rate starts lower but can rise with market indexes. The rate you are offered depends on your credit history, income, debt-to-income ratio, and sometimes your degree. A longer term lowers the monthly payment but increases total interest, so compare the total repayment amount, not just the payment. Autopay discounts are common but usually require enrollment to keep the lower rate.",
      },
      {
        title: "Cosigners, hardship options, and eligibility",
        body: "If you need a cosigner, ask how and when cosigner release is available. Compare each lender’s forbearance policy for job loss or hardship, whether loans are discharged on death or permanent disability, minimum and maximum loan amounts, and requirements such as a completed degree or U.S. citizenship. These protections differ meaningfully between private lenders.",
      },
      {
        title: "How to compare refinance offers",
        body: "Most lenders let you check rates with a soft credit inquiry that does not affect your score. Request quotes from several lenders within a short window using the same balance and term, compare fixed with fixed and variable with variable, read the fee disclosures for origination or late fees, and run the numbers through the repayment calculator on this page to see total interest under each offer.",
      },
    ],
    faqs: [
      {
        question: "What is student loan refinancing?",
        answer:
          "Refinancing means taking a new private loan to pay off one or more existing student loans, ideally at a lower rate or with a different term. The new lender sets the rate based on your credit and income. Federal loans that are refinanced become private loans.",
      },
      {
        question: "Is refinancing student loans a good idea?",
        answer:
          "It can be for borrowers with strong credit and stable income who hold private loans or who do not need federal protections. It is usually not advisable for borrowers relying on income-driven repayment, pursuing Public Service Loan Forgiveness, or with uncertain income.",
      },
      {
        question: "What credit score do I need to refinance student loans?",
        answer:
          "Lenders set their own criteria, and the lowest advertised rates go to applicants with excellent credit and low debt-to-income ratios. Many lenders look for scores in the mid-600s or higher, or a creditworthy cosigner. Prequalification shows your likely rate without a hard inquiry.",
      },
      {
        question: "Can I refinance federal and private student loans together?",
        answer:
          "Yes, private lenders generally allow you to combine both into one new private loan. Remember that any federal loans included lose federal benefits permanently, so some borrowers refinance only their private loans.",
      },
      {
        question: "Does checking refinance rates hurt my credit?",
        answer:
          "Rate checks that use a soft inquiry do not affect your score. A hard inquiry occurs when you submit a full application. Lenders disclose which type they use, so confirm before you start.",
      },
      {
        question: "What is the difference between refinancing and consolidation?",
        answer:
          "A federal Direct Consolidation Loan combines federal loans into one federal loan at a weighted average rate and keeps federal protections. Refinancing is a new private loan that can lower your rate but removes federal benefits for any federal loans included.",
      },
    ],
  },
  "credit-cards": {
    metaTitle: "Best Credit Cards of 2026: Compare Cash Back & Travel Rewards",
    metaDescription:
      "Compare the best credit cards of 2026 for cash back and travel rewards. Weigh APR, annual fees, welcome bonuses, and redemption rules against how you spend.",
    h1: "Best Credit Cards of 2026: Cash Back & Travel Rewards",
    eyebrow: "CREDIT CARD COMPARISON",
    intro:
      "Compare cash back and travel rewards credit cards from Chase, Citi, Capital One, and American Express. We explain how to estimate rewards from your real spending, when an annual fee pays for itself, and why the purchase APR matters more than any welcome offer if you carry a balance.",
    noun: "credit card",
    plural: "credit cards",
    reviewSuffix: "Rewards, APR & Annual Fee",
    bestFor: {
      "chase-freedom-unlimited": "Everyday cash back on all purchases",
      "chase-sapphire-preferred": "Travel rewards with an annual fee",
      "citi-double-cash": "Simple cash back on every purchase",
      "capital-one-venture": "Flexible travel rewards",
      "amex-blue-cash-everyday": "Everyday spending categories",
    },
    tableHeading: "Compare credit cards side by side",
    tableIntro:
      "Rewards type and the detail to check in each issuer’s current terms. APRs, fees, and welcome offers change, so confirm the issuer’s page before applying.",
    overview: [
      {
        title: "Cash back vs. travel rewards: which card type fits you",
        body: "Cash back cards pay a percentage of spending as statement credits or deposits, with flat-rate cards paying the same on everything and category cards paying more on groceries, gas, or dining up to caps. Travel cards earn points or miles that can be worth more when transferred to airline and hotel partners, but their value depends on how you redeem and how often you travel. If you rarely travel or prefer simplicity, cash back usually wins. If you travel often and will use the credits, a travel card with an annual fee can come out ahead.",
      },
      {
        title: "Annual fees, APR, and the real value of a welcome bonus",
        body: "An annual fee is worth paying only when the extra rewards and credits you will actually use exceed it. The purchase APR matters most if you ever carry a balance, because interest at typical card rates quickly erases rewards. Welcome bonuses usually require spending a set amount in the first months; count the bonus only if that spending is normal for you, and avoid buying things you do not need to hit a threshold.",
      },
      {
        title: "How to estimate your rewards",
        body: "List your annual spending by category, apply each card’s earning rates and caps, and convert points to a conservative cash value. Subtract the annual fee and any credits you would not naturally use. Compare the net annual value across cards. This exercise often shows that a simple flat-rate card beats a complex category card for many households.",
      },
      {
        title: "Applying: credit scores, issuer rules, and your report",
        body: "Issuers set their own approval criteria, and premium rewards cards generally expect good to excellent credit. Each application typically creates a hard inquiry, and some issuers limit how many cards you can open in a period. Check your credit reports for free at AnnualCreditReport.com before applying, dispute errors, and apply for one card at a time.",
      },
    ],
    faqs: [
      {
        question: "What is the best credit card?",
        answer:
          "There is no single best card. The right choice depends on whether you pay in full each month, where you spend most, whether you travel, and whether an annual fee is justified by benefits you will use. Compare the net annual value of each card using your own spending.",
      },
      {
        question: "Is a credit card with an annual fee worth it?",
        answer:
          "Only when the rewards and credits you will actually use exceed the fee. Estimate your annual rewards, subtract the fee, and compare with a no-fee alternative. Many travel cards offset their fee with credits, but only if those credits match your habits.",
      },
      {
        question: "What credit score do I need for a rewards credit card?",
        answer:
          "Issuers do not publish fixed cutoffs, but most rewards cards are marketed to applicants with good to excellent credit. Prequalification tools from issuers can indicate your odds without a hard inquiry.",
      },
      {
        question: "How many credit cards should I have?",
        answer:
          "Enough to meet your needs without missing payments or carrying balances. Multiple cards can raise your available credit and lower utilization, but each application adds an inquiry and each account needs managing. Quality of use matters more than the count.",
      },
      {
        question: "Do credit card rewards expire?",
        answer:
          "Policies vary by issuer. Many cash back and points programs keep rewards as long as the account is open and in good standing, while some airline programs expire miles after inactivity. Read the rewards terms before choosing a card.",
      },
      {
        question: "Should I pay my credit card in full each month?",
        answer:
          "Yes, whenever possible. Paying the statement balance in full by the due date avoids interest and preserves the grace period. If you must carry a balance, prioritize a low APR over rewards.",
      },
    ],
  },
  banking: {
    metaTitle: "Best Banks of 2026: Compare Online Banks, Checking & Savings",
    metaDescription:
      "Compare the best banks of 2026, from online banks to branch networks. Weigh monthly fees, ATM access, savings yields, and FDIC coverage before you open an account.",
    h1: "Best Banks of 2026: Online Banks, Checking & Savings Accounts",
    eyebrow: "BANK & ACCOUNT COMPARISON",
    intro:
      "Compare banks for checking and savings accounts by fees, everyday access, yield conditions, and deposit insurance. We profile online banks, national branch banks, and a dedicated savings provider, and explain how to verify FDIC coverage before you move your money.",
    noun: "bank",
    plural: "banks",
    reviewSuffix: "Fees, APY & Account Access",
    bestFor: {
      "ally-bank": "Online checking and savings",
      "capital-one-bank": "Digital banking with branch access",
      "chase-bank": "A large branch and ATM network",
      "sofi-bank": "Digital checking and savings in one account",
      marcus: "A standalone online savings account",
    },
    tableHeading: "Compare banks side by side",
    tableIntro:
      "Banking model and the detail to confirm for the specific account you would open. Fees, yields, and waiver conditions change frequently.",
    overview: [
      {
        title: "Online banks vs. traditional banks",
        body: "Online banks typically offer lower fees and higher savings yields because they do not run branches, and most reimburse some ATM fees. Traditional banks such as Chase offer branches, cash deposits, cashier’s checks, and in-person help, often with monthly fees that can be waived by direct deposit or minimum balances. Hybrid banks such as Capital One combine both. Decide how you deposit cash, how often you need a branch, and whether you want checking and savings at the same institution.",
      },
      {
        title: "Checking account fees and how to avoid them",
        body: "Read the fee schedule for monthly maintenance charges and their waiver conditions, out-of-network ATM fees, overdraft and non-sufficient-funds fees, wire fees, and paper statement charges. Many banks now offer no-overdraft-fee accounts or grace periods. Estimate your annual cost using your typical activity rather than the headline “free checking” label.",
      },
      {
        title: "High-yield savings accounts: reading the APY conditions",
        body: "Annual percentage yield (APY) reflects compounding and is the figure to compare across savings accounts. Check whether the advertised APY is promotional, requires a minimum balance or direct deposit, or applies only to a balance tier. Yields change with market rates, so a bank’s history of staying competitive matters more than today’s top number.",
      },
      {
        title: "FDIC insurance and where your deposits really sit",
        body: "FDIC insurance covers up to $250,000 per depositor, per insured bank, per ownership category. Some financial technology brands are not banks themselves and place your money with partner banks through sweep programs, which can affect coverage if you already hold deposits at those banks. Use FDIC BankFind to identify the insured institution behind any account, and credit union members should check NCUA coverage.",
      },
    ],
    faqs: [
      {
        question: "What is the best bank to open an account with?",
        answer:
          "It depends on how you bank. Online banks suit people who rarely handle cash and want higher savings yields; branch banks suit people who need in-person service and cash deposits. Compare the specific checking and savings accounts, their fees, and their access features.",
      },
      {
        question: "Are online banks safe?",
        answer:
          "Online banks that are FDIC-insured protect deposits up to $250,000 per depositor, per bank, per ownership category, the same as branch banks. Confirm the insured institution on FDIC BankFind, especially for fintech brands that rely on partner banks.",
      },
      {
        question: "What is the difference between APY and interest rate?",
        answer:
          "The interest rate is the simple annual rate paid on your balance. APY includes the effect of compounding over a year, so it is the better figure for comparing savings accounts.",
      },
      {
        question: "Can I deposit cash at an online bank?",
        answer:
          "Some online banks accept cash through retail partner networks or specific ATMs, often for a fee, while others do not accept cash at all. If you deposit cash regularly, confirm the method and cost before opening an account.",
      },
      {
        question: "Should I switch banks for a sign-up bonus?",
        answer:
          "Only if the account also fits your everyday needs. Bonuses usually require direct deposits or balances for a set period and may be taxable. An account with recurring fees can cost more than a one-time bonus.",
      },
      {
        question: "How much money is FDIC insured?",
        answer:
          "The standard FDIC coverage is $250,000 per depositor, per insured bank, for each account ownership category. Joint accounts and certain retirement accounts have their own coverage categories, which can increase total protection at one bank.",
      },
    ],
  },
  "lemon-law": {
    metaTitle: "Best Lemon Law Lawyers of 2026: Find a Lemon Law Attorney",
    metaDescription:
      "Compare lemon law lawyers and learn how claims work: state eligibility rules, repair records, who pays attorney fees, and what to bring to a free case evaluation.",
    h1: "Best Lemon Law Lawyers of 2026",
    eyebrow: "LEMON LAW ATTORNEY COMPARISON",
    intro:
      "Compare lemon law attorneys who handle defective-vehicle claims under state lemon laws and federal warranty law. We profile California and regional firms, explain how fee-shifting typically works, and show how to build the repair timeline a lemon law lawyer needs to evaluate your case.",
    noun: "lemon law lawyer",
    plural: "lemon law lawyers",
    reviewSuffix: "Fees, Coverage & Case Evaluation",
    bestFor: {
      "knight-law-group": "California lemon law claims",
      "strategic-legal-practices": "California representation to compare",
      "kimmel-and-silverman": "Regional lemon law coverage",
    },
    tableHeading: "Compare lemon law lawyers side by side",
    tableIntro:
      "Geographic coverage and the detail to confirm with each firm. Lemon law is state specific, so start with firms licensed where you bought or registered the vehicle.",
    overview: [
      {
        title: "What qualifies a vehicle as a lemon?",
        body: "Each state’s lemon law defines eligibility, but most cover a new vehicle with a substantial defect covered by the manufacturer’s warranty that the dealer could not fix after a reasonable number of repair attempts or that kept the vehicle out of service for a set number of days. Some states, including California, extend protection to certain used vehicles still under warranty. The federal Magnuson-Moss Warranty Act may also support a claim when a written warranty is breached.",
      },
      {
        title: "Who pays lemon law attorney fees?",
        body: "Many state lemon laws include fee-shifting provisions. Under California’s Song-Beverly Consumer Warranty Act, for example, a prevailing consumer’s reasonable attorney fees and costs are paid by the manufacturer, which is why many lemon law firms offer free consultations and take cases with no upfront fee. Read the retainer agreement closely: confirm what happens if the claim is unsuccessful, whether any fee is taken from your recovery, and how costs are handled.",
      },
      {
        title: "Remedies: buyback, replacement, or cash settlement",
        body: "A successful claim typically results in the manufacturer repurchasing the vehicle (minus an offset for the miles driven before the first repair attempt), replacing it, or paying a cash settlement while you keep the car. Which remedy fits depends on your state’s law, the defect, and your preference. Ask the attorney to explain the likely remedies and the usage offset before you decide.",
      },
      {
        title: "Choosing a lemon law lawyer",
        body: "Confirm the attorney is licensed in your state and handles lemon law regularly rather than occasionally. Ask who will manage your case, how communication works, how long similar claims have taken, and what documents they need. Bring your purchase or lease agreement, warranty, every repair order with dates and mileage, and all correspondence with the dealer or manufacturer.",
      },
    ],
    faqs: [
      {
        question: "How much does a lemon law lawyer cost?",
        answer:
          "In many states the manufacturer pays the consumer’s reasonable attorney fees when the claim succeeds, so firms often charge no upfront fee. Retainer terms differ, so confirm in writing what you would owe if the case is lost or settled.",
      },
      {
        question: "What qualifies as a lemon?",
        answer:
          "Generally a warranted vehicle with a substantial defect that remains unrepaired after a reasonable number of attempts or a set number of days out of service. The exact thresholds, covered vehicles, and time limits are defined by your state’s lemon law.",
      },
      {
        question: "How long do I have to file a lemon law claim?",
        answer:
          "Deadlines vary by state and can run from the delivery date, the first repair attempt, or the warranty period. Because records and timing are critical, consult a licensed attorney in your state as soon as repairs fail.",
      },
      {
        question: "Does lemon law apply to used cars?",
        answer:
          "In some states, yes, if the vehicle is still covered by the manufacturer’s original warranty or a qualifying dealer warranty. Other states limit coverage to new vehicles. A local attorney can tell you how your state treats used vehicles.",
      },
      {
        question: "Do I need a lawyer for a lemon law claim?",
        answer:
          "You can pursue a manufacturer’s arbitration program or a claim on your own, but manufacturers have experienced counsel. Because fee-shifting often makes representation available at no upfront cost, many consumers consult a lemon law attorney first.",
      },
      {
        question: "What records do I need for a lemon law case?",
        answer:
          "Your purchase or lease contract, the warranty, every repair order showing dates, mileage, complaints, and work performed, and written communications with the dealer and manufacturer. A chronological repair timeline helps an attorney evaluate your claim quickly.",
      },
    ],
  },
  "debt-relief": {
    metaTitle: "Best Debt Relief Companies of 2026: Settlement vs. Counseling",
    metaDescription:
      "Compare the best debt relief companies of 2026, from debt settlement to nonprofit credit counseling: fees, credit impact, tax consequences, and alternatives.",
    h1: "Best Debt Relief Companies of 2026",
    eyebrow: "DEBT RELIEF COMPARISON",
    intro:
      "Compare debt relief companies that offer debt settlement with nonprofit agencies that offer credit counseling and debt management plans. We profile five providers, explain when fees can legally be charged, and lay out the credit, legal, and tax consequences to weigh before you enroll.",
    noun: "debt relief company",
    plural: "debt relief companies",
    reviewSuffix: "Fees, Risks & Who It Fits",
    bestFor: {
      "national-debt-relief": "Researching a debt settlement program",
      "freedom-debt-relief": "Comparing settlement program terms",
      "accredited-debt-relief": "Exploring a settlement program",
      greenpath: "Nonprofit credit counseling",
      "money-management-international": "Nonprofit debt management plans",
    },
    tableHeading: "Compare debt relief companies side by side",
    tableIntro:
      "Program type and the detail to confirm before enrolling. Debt settlement and nonprofit credit counseling are different services with different costs and risks.",
    overview: [
      {
        title: "Debt settlement vs. debt management vs. consolidation",
        body: "Debt settlement companies ask you to stop paying creditors and deposit money into a dedicated account while they negotiate to settle each debt for less than you owe; creditors are not required to agree. A debt management plan from a nonprofit credit counseling agency keeps you paying in full, usually with reduced interest and fees negotiated with creditors, over three to five years. Debt consolidation uses a new loan or balance transfer to combine debts at a lower rate and depends on your credit. Each path suits different situations.",
      },
      {
        title: "Debt relief fees and what the law allows",
        body: "Under the FTC’s Telemarketing Sales Rule, for-profit debt settlement companies that sell by phone may not charge a fee until a debt has been settled and you have made at least one payment under the new agreement. Settlement fees are usually a percentage of the enrolled debt or of the savings. Nonprofit agencies typically charge modest setup and monthly fees for a debt management plan, often capped by state law, and offer free initial counseling.",
      },
      {
        title: "The risks: credit damage, lawsuits, and taxes",
        body: "Stopping payments during a settlement program leads to delinquencies, collection activity, and possibly lawsuits, and the missed payments remain on your credit reports. Forgiven debt is generally treated as taxable income and may be reported on a Form 1099-C unless you qualify for an exclusion such as insolvency. Ask any company for completion rates and net results after fees, not just advertised gross reductions.",
      },
      {
        title: "Alternatives to consider first",
        body: "Call your creditors about hardship programs, which may lower interest or defer payments. Get a free session with a nonprofit credit counselor. If your credit allows, compare a consolidation loan or balance transfer. For serious insolvency, a consultation with a bankruptcy attorney can clarify whether Chapter 7 or Chapter 13 would cost less than a settlement program.",
      },
    ],
    faqs: [
      {
        question: "What is the best debt relief company?",
        answer:
          "The best option depends on whether you need settlement, a debt management plan, or counseling. Compare total fees, how many clients complete the program, creditor participation, and consequences for your credit, and start with a free nonprofit counseling session.",
      },
      {
        question: "How does debt settlement work?",
        answer:
          "You stop paying enrolled creditors and build savings in a dedicated account. The company negotiates lump-sum settlements for less than the balance, and you pay a fee for each settled debt. Programs often run two to four years, and creditors can refuse to settle.",
      },
      {
        question: "Does debt relief hurt your credit?",
        answer:
          "Debt settlement usually does, because it involves missed payments and settled-for-less notations. A debt management plan has a smaller effect since you keep paying, though closed accounts and a plan notation may appear. Both are generally less damaging than bankruptcy.",
      },
      {
        question: "How much do debt relief companies charge?",
        answer:
          "Settlement companies typically charge a percentage of the enrolled debt or of the savings achieved, collected only after each settlement. Nonprofit debt management plans charge small setup and monthly fees. Get every fee in writing before enrolling.",
      },
      {
        question: "Is debt settlement better than bankruptcy?",
        answer:
          "Not always. Bankruptcy is faster for some people, stops collection lawsuits, and may discharge more debt, but it has long-term credit effects. Settlement avoids a bankruptcy filing but can take years, costs fees, and is not guaranteed. A bankruptcy attorney can compare the two for your situation.",
      },
      {
        question: "What is the difference between debt relief and debt consolidation?",
        answer:
          "Debt consolidation is a new loan or balance transfer that combines debts, usually at a lower rate, and you still repay in full. Debt relief programs either negotiate to reduce what you owe (settlement) or restructure repayment through a counseling agency (debt management).",
      },
    ],
  },
  "credit-repair": {
    metaTitle: "Best Credit Repair Companies of 2026: Costs, Rights & Limits",
    metaDescription:
      "Compare the best credit repair companies of 2026. Learn what credit repair can and cannot do, your rights under federal law, and how to dispute errors for free.",
    h1: "Best Credit Repair Companies of 2026",
    eyebrow: "CREDIT REPAIR COMPARISON",
    intro:
      "Compare credit repair companies that help dispute inaccurate items on your credit reports. We profile three dispute-assistance services, explain your rights under the Credit Repair Organizations Act, and show the free steps you can take yourself before paying anyone to fix your credit.",
    noun: "credit repair company",
    plural: "credit repair companies",
    reviewSuffix: "Pricing, Services & Limits",
    bestFor: {
      "sky-blue-credit": "Paid dispute assistance to evaluate",
      "the-credit-people": "Comparing credit repair service plans",
      "credit-saint": "Reviewing service and cancellation terms",
    },
    tableHeading: "Compare credit repair companies side by side",
    tableIntro:
      "Service type and the detail to confirm in each company’s written contract. Pricing, billing timing, and cancellation terms must be disclosed before you pay.",
    overview: [
      {
        title: "What credit repair companies actually do",
        body: "Credit repair companies review your credit reports, identify items you believe are inaccurate, incomplete, or unverifiable, and send disputes to the three credit bureaus and to the creditors or collectors that furnished the information. Some also send goodwill letters or debt validation requests. They cannot remove accurate, timely negative information, and no company can legitimately guarantee a specific score increase. Anything they do, you can legally do yourself for free.",
      },
      {
        title: "Your rights under the Credit Repair Organizations Act",
        body: "The federal Credit Repair Organizations Act requires companies to give you a written contract describing the services, total cost, and timeline; prohibits charging fees before the promised services are performed; gives you three business days to cancel without charge; and bans false claims about what they can achieve or advice to create a new credit identity. Companies that demand large upfront payments or promise to erase accurate debts are violating the law.",
      },
      {
        title: "How to dispute credit report errors yourself for free",
        body: "Get your reports from all three bureaus at AnnualCreditReport.com, which offers free weekly access. Identify specific inaccuracies, gather supporting documents, and file disputes online or by mail with each bureau and with the company that reported the item. Bureaus generally must investigate within 30 days and correct or delete information that cannot be verified. Keep copies of everything and follow up in writing.",
      },
      {
        title: "Credit repair vs. credit counseling vs. building credit",
        body: "Credit repair addresses errors on your reports. Nonprofit credit counseling helps with budgeting and repaying debt. Building credit involves paying on time, lowering utilization, keeping old accounts open, and adding positive history with a secured card or credit-builder loan. If your negative items are accurate, time and consistent payment history, not disputes, will improve your score.",
      },
    ],
    faqs: [
      {
        question: "Do credit repair companies really work?",
        answer:
          "They can help remove inaccurate or unverifiable items by managing disputes on your behalf, which you can also do yourself for free. They cannot remove accurate negative information or guarantee a higher score. Results depend on what is actually wrong on your reports.",
      },
      {
        question: "How much does credit repair cost?",
        answer:
          "Companies typically charge a setup fee plus a monthly fee for as long as you use the service, and federal law prohibits charging before services are performed. Compare the written contract, billing timing, and cancellation terms rather than advertised promises.",
      },
      {
        question: "Is credit repair legal?",
        answer:
          "Yes, when the company follows the Credit Repair Organizations Act: a written contract, no advance fees, a three-day cancellation right, and no false claims. Creating a new credit identity or disputing accurate information as inaccurate is not legal.",
      },
      {
        question: "How long does credit repair take?",
        answer:
          "Each dispute investigation generally takes up to 30 days, and companies often work through items over several months. Accurate negative items stay on your reports for up to seven years, and bankruptcies up to ten, regardless of disputes.",
      },
      {
        question: "Can a credit repair company remove accurate late payments?",
        answer:
          "No. Accurate, verifiable information cannot legitimately be removed before it ages off. A creditor may agree to a goodwill adjustment, but that is their choice, not something a company can force.",
      },
      {
        question: "What is the fastest way to improve my credit score?",
        answer:
          "Pay every bill on time, pay down revolving balances to lower utilization, dispute genuine errors, avoid opening several new accounts at once, and keep older accounts open. Positive changes in utilization can appear within a billing cycle or two.",
      },
    ],
  },
  investing: {
    metaTitle: "Best Investment Companies of 2026: Brokers & Robo-Advisors",
    metaDescription:
      "Compare the best investment companies of 2026, from online brokerages to robo-advisors. Add up fees, check registrations, and match the service to how you invest.",
    h1: "Best Investment Companies of 2026: Online Brokers & Robo-Advisors",
    eyebrow: "INVESTMENT COMPANY COMPARISON",
    intro:
      "Compare online brokerages and automated investing services side by side. We profile five investment companies, explain the difference between self-directed, robo-advisor, and advisory accounts, and show how to total the fees that quietly shape your long-term returns.",
    noun: "investment company",
    plural: "investment companies",
    reviewSuffix: "Fees, Accounts & Service Model",
    bestFor: {
      fidelity: "Self-directed brokerage and retirement accounts",
      "charles-schwab": "Brokerage with broad account and service access",
      vanguard: "Long-term, fund-focused investing",
      betterment: "Automated portfolio management",
      wealthfront: "Automated investing and planning tools",
    },
    tableHeading: "Compare investment companies side by side",
    tableIntro:
      "Service model and the detail to confirm for the account you intend to open. Compare brokerages with brokerages and robo-advisors with robo-advisors.",
    overview: [
      {
        title: "Brokerage, robo-advisor, or financial advisor?",
        body: "A self-directed brokerage account gives you the tools to choose and trade stocks, ETFs, and funds yourself. A robo-advisor builds and rebalances a diversified portfolio automatically based on your goals and risk tolerance for an advisory fee. A human financial advisor can address broader planning such as taxes, insurance, and estate questions, usually at a higher cost. Many large firms, including Fidelity, Schwab, and Vanguard, offer all three tiers, so compare the specific service you would use.",
      },
      {
        title: "Investment fees that matter",
        body: "Zero-commission stock trades do not make an account free. Add up fund expense ratios, advisory fees charged as a percentage of assets, options or mutual fund transaction fees, account maintenance or inactivity fees, transfer-out fees, margin rates if you borrow, and the yield you receive on uninvested cash. A difference of half a percent a year compounds into a meaningful amount over decades.",
      },
      {
        title: "Account types and minimums",
        body: "Most firms offer taxable brokerage accounts, traditional and Roth IRAs, rollover IRAs for old 401(k)s, and custodial accounts for children, and many offer 529 education plans and small-business retirement accounts. Minimums vary: some brokerages have none, while certain advisory services require larger balances. Check that the firm supports the account type and investments you want before opening.",
      },
      {
        title: "Protections and how to verify a firm",
        body: "SIPC protects securities and cash at a failed member brokerage up to $500,000, including $250,000 for cash; it does not cover market losses. Cash held in bank sweep programs may carry FDIC coverage through partner banks. Verify a broker on FINRA BrokerCheck and an investment adviser on the SEC’s Investment Adviser Public Disclosure site, and read the firm’s Form CRS for a plain-language summary of services, fees, and conflicts.",
      },
    ],
    faqs: [
      {
        question: "What is the best investment company for beginners?",
        answer:
          "Beginners often do well with a firm that offers no account minimum, low-cost index funds or ETFs, strong educational resources, and the option to move to automated or advisory services later. Compare fees and account types among the companies on this page for the account you will actually open.",
      },
      {
        question: "Robo-advisor or brokerage: which should I choose?",
        answer:
          "Choose a brokerage if you want to select your own investments and avoid advisory fees. Choose a robo-advisor if you prefer a managed, automatically rebalanced portfolio and are comfortable paying an annual percentage fee for it.",
      },
      {
        question: "How much do investment companies charge?",
        answer:
          "Costs range from near zero for self-directed index investing to advisory fees charged as a percentage of assets for robo-advisors and human advisers, plus fund expense ratios in every case. Read each firm’s fee schedule and Form CRS.",
      },
      {
        question: "Is my money safe at an online brokerage?",
        answer:
          "Securities at SIPC-member brokerages are protected up to $500,000 if the firm fails, and sweep cash may be FDIC insured through partner banks. Neither protects against investment losses. Verify registration on FINRA BrokerCheck.",
      },
      {
        question: "What is the minimum amount to start investing?",
        answer:
          "Many brokerages have no minimum and allow fractional shares, so you can start with small amounts. Some robo-advisors and advisory services set minimums. Check the requirement for the specific account and service.",
      },
      {
        question: "Should I use a brokerage or a financial advisor?",
        answer:
          "Use a brokerage if you are comfortable managing investments yourself. Consider an advisor when you need help with planning, taxes, or complex situations, and confirm whether the advisor is a fiduciary and how they are paid.",
      },
    ],
  },
};

export const categorySeoFor = (c: Category) => categorySeo[c.id];

/** Title-cased category label for navigation and cards. */
export function categoryLabel(c: Category) {
  return c.title
    .split(" ")
    .map((w) => (w === "banks" ? "Banks" : w))
    .join(" ");
}

const firstSentence = (text: string) => {
  const match = text.match(/^[^.!?]+[.!?]/);
  return (match ? match[0] : text).trim();
};

const properNouns = new Set(["California"]);

/** Lowercase the first letter unless the first word is an acronym (IRA, VA) or a proper noun. */
export const lowerFirst = (text: string) => {
  const first = text.split(" ")[0];
  const keep =
    properNouns.has(first) || (first === first.toUpperCase() && first.length > 1);
  return keep ? text : text.charAt(0).toLowerCase() + text.slice(1);
};

/** Keep the sentences that fit inside the limit, in order. */
const fit = (parts: string[], max = 158) => {
  let out = "";
  for (const part of parts) {
    const next = out ? `${out} ${part}` : part;
    if (next.length <= max) out = next;
  }
  return out || parts[0].slice(0, max - 1).replace(/\s+\S*$/, "") + "…";
};

export function providerSeo(p: Provider) {
  const c = categories.find((x) => x.id === p.category)!;
  const seo = categorySeo[c.id];
  const bestFor = seo.bestFor[p.id] || p.fit;
  return {
    metaTitle: `${p.name} Review ${currentYear}: ${seo.reviewSuffix}`,
    metaDescription: fit([
      `${p.name} review: best for ${lowerFirst(bestFor)}.`,
      firstSentence(p.summary),
      `Compare ${seo.plural} before you decide.`,
    ]),
    h1: `${p.name} Review`,
    bestFor,
    noun: seo.noun,
    plural: seo.plural,
  };
}

export const guideSeo: Record<string, { metaTitle: string; metaDescription: string }> =
  {
    "gold-ira-fees": {
      metaTitle: "Gold IRA Fees Explained: Premiums, Storage & Account Costs",
      metaDescription:
        "Understand every gold IRA fee: dealer premiums over spot, setup and custodian charges, annual storage, and the buyback spread. Build a true all-in cost comparison.",
    },
    "gold-dealers-custodians-depositories": {
      metaTitle: "Gold IRA Custodian vs. Dealer vs. Depository: Who Does What",
      metaDescription:
        "A gold IRA involves three companies: the dealer that sells metals, the custodian that administers the account, and the depository that stores them. Learn each role.",
    },
    "compare-gold-quotes": {
      metaTitle: "5 Questions to Ask Before Buying Gold From a Dealer",
      metaDescription:
        "A checklist for comparing gold dealer quotes: exact product, delivered price, buyback bid, what happens after payment, and how to avoid pressure to decide today.",
    },
    "physical-gold-vs-etfs": {
      metaTitle: "Physical Gold vs. Gold ETFs: Costs, Ownership & Tradeoffs",
      metaDescription:
        "Compare owning physical bullion with holding a gold ETF: ownership, premiums and storage versus expense ratios, liquidity, and how each fits a portfolio.",
    },
    "spot-gold-pressure-tactics": {
      metaTitle: "Gold Sales Pressure Tactics: How to Spot a Bad Pitch",
      metaDescription:
        "Learn the warning signs in a gold sales call, from guaranteed returns to fear-based urgency, and how to get itemized pricing and buyback terms in writing first.",
    },
    "compare-mortgage-estimates": {
      metaTitle: "How to Compare Loan Estimates: Look Beyond the Mortgage Rate",
      metaDescription:
        "Use the Loan Estimate to compare mortgage lenders properly: identical scenarios, APR vs. rate, points and origination charges, and how long you will keep the loan.",
    },
    "student-refinance-checklist": {
      metaTitle: "Student Loan Refinance Checklist: What to Check Before You Apply",
      metaDescription:
        "Before refinancing student loans, separate federal from private, compare total repayment, read hardship and cosigner policies, and weigh fixed vs. variable rates.",
    },
    "choose-credit-card": {
      metaTitle: "Cash Back vs. Travel Rewards: How to Choose a Credit Card",
      metaDescription:
        "Choose a credit card around your repayment habits and real spending. Compare cash back and travel rewards, subtract annual fees, and read redemption rules first.",
    },
    "choose-law-firm": {
      metaTitle: "Questions to Ask a Personal Injury Lawyer at Your First Consultation",
      metaDescription:
        "Make the most of a free consultation: find out who will handle your case, how contingency fees and expenses work, and what to expect from the process.",
    },
    "debt-settlement-vs-management": {
      metaTitle: "Debt Settlement vs. Debt Management Plan: Key Differences",
      metaDescription:
        "Debt settlement and debt management sound similar but work very differently. Compare how each handles creditors, fees, credit impact, and your alternatives.",
    },
    "free-credit-report-disputes": {
      metaTitle: "How to Dispute Credit Report Errors for Free",
      metaDescription:
        "You can dispute inaccurate credit report items yourself at no cost. Learn how to identify errors, file disputes with bureaus and furnishers, and set expectations.",
    },
    "bank-account-checklist": {
      metaTitle: "How to Choose a Bank: A Checking & Savings Account Checklist",
      metaDescription:
        "Pick a bank around how you actually use money: cash deposits, branches, fees, and APY conditions. Verify FDIC coverage before opening checking or savings.",
    },
    "lemon-law-records": {
      metaTitle: "Lemon Law Documentation: How to Build a Vehicle Repair Timeline",
      metaDescription:
        "Organize the records a lemon law attorney needs: purchase contract, warranty, every repair order with dates and mileage, and dealer and manufacturer correspondence.",
    },
    "brokerage-vs-robo-advisor": {
      metaTitle: "Brokerage vs. Robo-Advisor: Which Investment Account Fits You?",
      metaDescription:
        "Decide between a self-directed brokerage and a robo-advisor before picking a company. Compare who makes decisions, what advice includes, and all-in costs.",
    },
  };

export function guideTitle(g: Guide) {
  return guideSeo[g.slug]?.metaTitle || g.title;
}

export type StaticSeo = {
  metaTitle: string;
  metaDescription: string;
  h1?: string;
  intro?: string;
};

export const homeSeo = {
  metaTitle: "Review Top Companies: Compare the Best Companies of 2026",
  metaDescription:
    "Compare the best gold IRA companies, mortgage lenders, banks, credit cards, debt relief and credit repair companies, investment firms, and law firms of 2026.",
  h1: "Compare the best companies before you choose.",
  tagline: "Big decisions. A clearer starting point.",
};

export const staticSeo: Record<string, StaticSeo> = {
  "/categories": {
    metaTitle: "Compare Companies by Category: Gold, Mortgages, Legal & More",
    metaDescription:
      "Browse all ten comparison categories: gold IRA companies, mortgage lenders, banks, credit cards, student loans, debt relief, credit repair, and law firms.",
    h1: "Compare companies by category",
    intro:
      "Ten categories spanning financial services and legal help. Each comparison explains the costs, the tradeoffs, and the questions to ask before you choose a company.",
  },
  "/companies": {
    metaTitle: `Company Reviews: ${providers.length} Financial & Legal Companies Compared`,
    metaDescription: `Read independent-style profiles of ${providers.length} companies and products across ${categories.length} categories, from gold IRA dealers and mortgage lenders to law firms and robo-advisors.`,
    h1: "Company reviews and profiles",
    intro: `Explore ${providers.length} company and product profiles across our ${categories.length} categories. Filter by category, read the strengths and limitations, and build a shortlist around what matters to you.`,
  },
  "/guides": {
    metaTitle: "Financial & Legal Guides: Practical Advice Before You Choose",
    metaDescription:
      "Plain-language guides on gold IRA fees, Loan Estimates, student loan refinancing, credit cards, debt relief, credit repair, banking, lemon law, and investing.",
    h1: "Guides and insights",
    intro:
      "Practical, sourced guides to the details behind your biggest financial and legal decisions, written to be read before you compare companies.",
  },
  "/methodology": {
    metaTitle: "How We Review and Compare Companies | Methodology",
    metaDescription:
      "The research framework behind Review Top Companies: category-specific criteria, weighted rubrics, evidence standards, paid placement disclosure, and corrections.",
    h1: "How we review and compare companies",
  },
  "/about": {
    metaTitle: "About Review Top Companies",
    metaDescription:
      "Review Top Companies publishes company comparisons and practical guides across gold, mortgages, banking, credit, investing, and legal services. Learn how we work.",
    h1: "About Review Top Companies",
  },
  "/editorial-policy": {
    metaTitle: "Editorial Policy & Standards",
    metaDescription:
      "Our editorial standards: sourced claims, like-for-like comparisons, meaningful update dates, and an open corrections process for readers and companies alike.",
    h1: "Editorial policy and standards",
  },
  "/ownership": {
    metaTitle: "Ownership & Publisher Information",
    metaDescription:
      "Who publishes Review Top Companies, how paid placements are disclosed, and the publication’s role relative to the companies it profiles.",
    h1: "Ownership and publisher information",
  },
  "/privacy": {
    metaTitle: "Privacy Policy",
    metaDescription:
      "How Review Top Companies handles browser storage, contact drafts, provider links, and analytics. No account is required to compare companies.",
    h1: "Privacy policy",
  },
  "/terms": {
    metaTitle: "Terms of Use",
    metaDescription:
      "Terms for using Review Top Companies: general information rather than personalized advice, provider responsibility for offers, and calculator assumptions.",
    h1: "Terms of use",
  },
  "/accessibility": {
    metaTitle: "Accessibility Statement",
    metaDescription:
      "Review Top Companies is built for keyboard, screen reader, and mobile use, with readable comparison tables and a clear way to report a barrier.",
    h1: "Accessibility statement",
  },
  "/privacy-choices": {
    metaTitle: "Your Privacy Choices",
    metaDescription:
      "Manage optional browser settings for Review Top Companies. Core comparison features remain available regardless of your choice.",
    h1: "Your privacy choices",
  },
  "/contact": {
    metaTitle: "Contact Review Top Companies",
    metaDescription:
      "Contact Review Top Companies with a question about the publication, a company profile, or a comparison.",
    h1: "Contact Review Top Companies",
  },
  "/corrections": {
    metaTitle: "Report a Correction",
    metaDescription:
      "Spotted a factual error in a company profile or comparison? Tell us the page, the statement, and a source. Readers and companies use the same process.",
    h1: "Report a correction",
  },
  "/advertise": {
    metaTitle: "Advertise With Us & Partnerships",
    metaDescription:
      "Partner with Review Top Companies. Learn what we need from companies: accurate product records, a clear proposition, and measurable, disclosed outcomes.",
    h1: "Advertise and partner with us",
  },
  "/advertising-disclosure": {
    metaTitle: "Advertising Disclosure",
    metaDescription:
      "How Review Top Companies makes money, which placements are paid, and how commercial arrangements relate to list positions and company descriptions.",
    h1: "Advertising disclosure",
  },
};

export function methodologySeo(c?: Category): StaticSeo {
  if (!c) return staticSeo["/methodology"];
  const seo = categorySeo[c.id];
  return {
    metaTitle: `How We Compare ${capitalize(seo.plural)} | Methodology`,
    metaDescription: `The weighted criteria, evidence standards, and questions behind our ${seo.plural} comparison, and why scores wait for complete research.`,
    h1: `How we compare ${seo.plural}`,
  };
}

export const capitalize = (s: string) =>
  s.replace(/(^|\s)([a-z])/g, (m) => m.toUpperCase());

/** rel attribute for outbound provider links: paid placements are marked sponsored. */
export function outboundRel(providerId: string) {
  return providerId === "citadel-gold"
    ? "noopener noreferrer sponsored"
    : "noopener noreferrer nofollow";
}
