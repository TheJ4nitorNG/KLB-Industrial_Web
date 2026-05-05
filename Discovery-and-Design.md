# KLB Industrial Corp: Website Rebuild Strategy



1. ### Discovery Output



###### Content Inventory (Scraped from klbindustrial.com)



| **URL** | **Page Title** | **Extracted Sections**| **Copy/Content** | **Notes**||*/*| Home | Hero/Tagline | "Independent Technical Consulting for High-Consequence Industrial Operations." | Sets a very premium, high-stakes tone.||*/*| Home | Problem Statement | "We help owners and operators catch problems early, diagnose failures fast, and make confident decisions - without bloated consultant teams." | Core value proposition. |

| / | Home | Target Audience | Who We Work With: High-downtime cost ops, remote/scaling ops, owners needing straight answers.  Who We Don't: Lowest-bid work, hands-only contracting, rubber-stamped decisions. | Excellent for qualifying leads. |

| / | Home | Services | 1. Independent Equipment Reliability \& Operating Envelope Review.  2. On-Call Technical Authority.  3. On-Site Technical Authority \& Execution Oversight. | Clear, high-value consulting/oversight. |

| / | Home | Why Us / Trust | Experience in high-risk ops (mining, forestry). Independent (no vendor bias). Intentionally small. | Differentiators to feature prominently. |

| / | Home | Process | 1. 30-min conversation. 2. Scope defined. 3. Remote/site work. 4. Clear deliverables. | Perfect for a "How We Work" section. |

| / | Home | Contact Info | 780-668-5975 | info@klbindustrial.com | Box 1235 Grimshaw, AB T0H1W0 | Will be used in header, footer, and Contact page. |



###### **Proposed Sitemap \& Next.js App Router Structure**

* / **(HOME)**- Conversion-focused landing page.
* /services - Detailed breakdown of the 3 core service offerings.
* /about - Nolan Campbell profile, company background, LinkedIn integration.
* /mission - Dedicated mission \& values page.
* /resources - Gated/Ungated technical PDFs and audits.
* /contact - Lead capture form, service area map placeholder, direct contact info.





###### **Copy Deck (Rewritten for Premium Industrial Tone)**

* **Home Kicker:** UNCOMPROMISING TECHNICAL AUTHORITY



* **Home Headline:** Protecting High-Consequence Industrial Operaions.



* **Home Subhead:** We provide independent technical oversight, rapid failure diagnosis, and reliability reviews for heavy industry-ensuring your equipment operates safely and profitably. No bloated teams, just straight answers.



* **Mission Statement:** "To provide unvarnished, independent technical authority in high-risk industrial environments. We bridge the gap between engineering theory and execution reality, ensuring heavy equipment repairs and rebuilds achieve maximum reliability, safety, and uptime."



* **About Kicker:** TRUSTED WHERE MISTAKES ARE EXPENSIVE.





##### **2.Design System**

* **Visual Tone:** Steel, grit, precision, reliability. "Engineered" rather than "designed".
* **Colour Palette:**

  * **Base:** Slate Gray (#0F172A), Charcoal (#1E293B) - Represents steel, oil, and industry.
  * **Accent:**  Safety Orange (#EA580C) - Represents action, caution, and visibility in industrial settings. Use for CTAs and highlights.
  * **Background:** Off-White (#F8FAFC) for readability, contrasting with dark Slate sections.
* **Typography:** A robust, geometric sans-serif (system defaults adapting to Inter/Roboto). Heavy font weights (Bold/Black) for headers, clean readable weights for body text.
* **Shapes:** Sharp corners or very subtle rounding (rounded-sm). Avoid large, soft, tech-like border radii. Hard lines represent precision machining.
* **Microinteractions:** Fast, snappy transitions. Hover states darken or underline rather than float or bounce.



##### **3.Quality \& Implementation Checklist**



**Component Architecture:** Built with highly modular React components mimicking Next.js structure.



$$x$$



&#x20;**Responsive:** Tailwind grid and flexbox utilities ensuring perfect mobile, tablet, and desktop scaling.



$$x$$



&#x20;**Accessibility:** High-contrast text, semantic HTML structures, and focus states included in Tailwind classes.



$$x$$



&#x20;**Spam Mitigation (Concept):** Contact form includes UI concepts for honeypots and validation logic placeholders.



$$x$$



&#x20;**No Cheap Gimmicks:** Eliminated soft drop shadows and excessive gradients in favour of solid borders and stark contrast.

