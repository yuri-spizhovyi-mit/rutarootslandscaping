export const services = [
  {
    id: 'lawn-care',
    anchor: 'lawn-care',
    label: 'Lawn care',
    h2: 'Lawn care in West Kelowna & Kelowna',
    description:
      'Whether you want weekly maintenance or a one-time cleanup, we keep Okanagan lawns looking their best through the full growing season. Our crew handles everything — mowing, edging, fertilizing, weed control — so you get your weekends back. We offer both recurring schedules and one-time services with no lock-in contracts.',
    okanaganNote:
      "Okanagan note: We adjust mowing height and watering schedules for the BC Interior's dry summers. Most West Kelowna lawns need a different approach than the coast — higher cut heights during drought stress, fertilizing timed to the Okanagan frost calendar, and weed control suited to local species. We know the difference.",
    inclusions: [
      'Mowing & edging',
      'Blowing & site cleanup',
      'Seasonal fertilizing program',
      'Weed control (hand & product)',
      'Aeration & overseeding',
      'One-time or recurring schedule — no lock-in',
    ],
    ctaLabel: 'Get in touch for lawn care',
    ctaLink: '/contact?service=lawn-care',
    imageDesktop: '/images/sections/services/desktop/lawn-care.webp',
    imageMobile: '/images/sections/services/mobile/lawn-care.webp',
    imageAlt: 'Freshly mowed Ruta Roots lawn in West Kelowna',
    imageRight: true,
  },
  {
    id: 'landscape-design',
    anchor: 'landscape-design',
    label: 'Landscape design',
    h2: 'Landscape design & installation in West Kelowna & Kelowna',
    description:
      'We design and build outdoor spaces that suit how you actually live — whether that\'s a low-maintenance front yard that holds its own through an Okanagan summer, or a backyard built for entertaining. Every project starts with a site visit and a written proposal before any work begins. Our crew handles installation start to finish.',
    okanaganNote:
      "Okanagan note: We design with the local climate in mind — drought-tolerant natives, efficient irrigation placement, and plants that thrive in the BC Interior's hot summers and cold winters. No Okanagan yard should look like it was designed for the coast. Soil conditions vary significantly across West Kelowna neighbourhoods; we assess yours before recommending anything.",
    processSteps: [
      {
        step: 1,
        title: 'Free site visit',
        body: 'We come to you, assess the space, and listen to what you want. No obligation, no charge.',
      },
      {
        step: 2,
        title: 'Written design proposal',
        body: 'A clear plan with materials, plants, layout, and total cost — before any work begins or money changes hands.',
      },
      {
        step: 3,
        title: 'Installation by our own crew',
        body: 'No subcontractors. The same crew that quoted the job builds it. We handle everything start to finish.',
      },
    ],
    inclusions: [
      'Softscape planting & placement',
      'New lawn installation',
      'Garden bed design & build',
      'Mulching & ground cover',
      'Tree & shrub selection and planting',
      'Irrigation integration',
      'Site prep & soil amendment',
    ],
    reassuranceItems: [
      { label: 'Site visit', sublabel: 'Included in our process' },
      { label: 'Written plan', sublabel: 'Before work begins' },
      { label: 'Follow-through', sublabel: 'We stand behind our work' },
    ],
    ctaLabel: 'Discuss your project',
    ctaLink: '/contact?service=landscape-design',
    imageDesktop: '/images/sections/services/desktop/landscape-design.webp',
    imageMobile: '/images/sections/services/mobile/landscape-design.webp',
    imageAlt: 'Completed landscape design installation by Ruta Roots in West Kelowna',
    imageRight: false,
  },
  {
    id: 'hardscaping',
    anchor: 'hardscaping',
    label: 'Hardscaping',
    h2: 'Hardscaping in West Kelowna & Kelowna',
    description:
      'Patios, retaining walls, walkways, and garden borders — we design and build hard landscape features that hold up through Okanagan winters and look right through every season. Whether it\'s a simple pathway or a full retaining wall system to manage a sloped yard, we plan it properly before we break ground.',
    okanaganNote:
      "Okanagan note: Freeze-thaw cycles in the BC Interior put real stress on hardscape — the wrong materials or poorly prepared base will crack and shift within a season. We specify materials and base depths appropriate for the Okanagan climate, not generic landscape standards that work in milder regions.",
    inclusions: [
      'Patio design & installation',
      'Dry-stack and mortared retaining walls',
      'Walkways & pathways',
      'Garden borders & edging features',
      'Steps & grading',
      'Drainage integration where required',
    ],
    ctaLabel: 'Get in touch for hardscaping',
    ctaLink: '/contact?service=hardscaping',
    imageDesktop: '/images/sections/services/desktop/hardscaping.webp',
    imageMobile: '/images/sections/services/mobile/hardscaping.webp',
    imageAlt: 'Hardscaping retaining wall built by Ruta Roots in West Kelowna',
    imageRight: true,
  },
  {
    id: 'seasonal-cleanup',
    anchor: 'seasonal-cleanup',
    label: 'Seasonal cleanup',
    h2: 'Spring & fall cleanup in West Kelowna & Kelowna',
    description:
      'We handle spring and fall yard cleanups for West Kelowna and Kelowna homeowners — clearing out what the season left behind so your yard is ready for what\'s coming next. One call, one crew, done properly.',
    okanaganNote:
      'Okanagan timing: Spring cleanups typically run late March through April in West Kelowna once frost risk drops — earlier than you might expect, but later than the coast. Fall cleanups are best done mid-October through November before the first hard freeze. Book early — spots fill fast at both ends of the season. Irrigation winterization should be completed before the first freeze, typically late October in the valley.',
    urgencyNote: 'Spots fill fast at the start of each season — get in touch early.',
    splitInclusions: {
      spring: [
        'Debris & winter leaf removal',
        'Garden bed edging & cleanup',
        'Pruning winter-damaged growth',
        'First mow & edge of season',
        'Mulch refresh on beds',
        'Irrigation system startup check',
      ],
      fall: [
        'Full leaf removal & disposal',
        'Cutting back perennials & ornamental grasses',
        'Final mow & edge of season',
        'Bed clearing & winter mulching',
        'Irrigation winterization',
        'Shrub & hedge tidy',
      ],
    },
    upsellNote: 'Already a lawn care client? Cleanup is available as an add-on — just mention it when you book.',
    ctaLabel: 'Book your cleanup',
    ctaLink: '/contact?service=seasonal-cleanup',
    imageDesktop: '/images/sections/services/desktop/seasonal-cleanup.webp',
    imageMobile: '/images/sections/services/mobile/seasonal-cleanup.webp',
    imageAlt: 'Fall yard cleanup completed by Ruta Roots in West Kelowna',
    imageRight: false,
  },
  {
    id: 'irrigation',
    anchor: 'irrigation',
    label: 'Irrigation',
    h2: 'Irrigation installation & repairs in West Kelowna & Kelowna',
    description:
      "The Okanagan's dry summers make irrigation less of a luxury and more of a necessity. We install and repair residential irrigation systems — from new installations to seasonal startups, repairs, and winterization. If your system isn't working efficiently, we'll find the problem and fix it properly.",
    okanaganNote:
      'Okanagan note: Water restrictions are common in West Kelowna and Kelowna during summer months. We design irrigation systems for efficiency — the right zones, the right heads, and a smart timer setup that keeps your yard healthy without running up your water bill or falling offside with local restrictions.',
    inclusions: [
      'New irrigation system design & installation',
      'Seasonal system startup',
      'Irrigation repairs & troubleshooting',
      'System winterization (fall)',
      'Zone adjustment & efficiency tuning',
      'Smart timer setup & programming',
    ],
    ctaLabel: 'Get in touch for irrigation',
    ctaLink: '/contact?service=irrigation',
    imageDesktop: '/images/sections/services/desktop/irrigation.webp',
    imageMobile: '/images/sections/services/mobile/irrigation.webp',
    imageAlt: 'Irrigation system installed by Ruta Roots in West Kelowna',
    imageRight: true,
  },
];

export const faqItems = [
  {
    question: 'Do you serve West Kelowna and Kelowna?',
    answer:
      'Yes — we serve West Kelowna, Kelowna, Peachland, and Lake Country. If you\'re unsure whether we cover your area, give us a call or send a quick message.',
  },
  {
    question: 'How do you approach new projects?',
    answer:
      'We start with a conversation to understand your needs. For lawn care and cleanup, we can usually discuss over the phone or by email. For landscape design and hardscaping projects, we do a site visit so we can properly assess the space and provide a clear plan before any work begins.',
  },
  {
    question: 'How long does a landscaping project take?',
    answer:
      'It depends on the scope. A seasonal cleanup typically takes a few hours to a full day. A lawn care visit is usually 1–2 hours. Landscape design and installation projects range from 2 days for smaller jobs to 2–3 weeks for full yard transformations. We\'ll give you a clear timeline as part of your written proposal.',
  },
  {
    question: 'What protections do I have as a client?',
    answer:
      'Ruta Roots Landscaping carries liability insurance that protects your property. All work is completed professionally and we stand behind our results.',
  },
  {
    question: 'Do you do one-time jobs or only ongoing contracts?',
    answer:
      'Both. We offer one-time visits for lawn care, cleanup, and smaller projects with no lock-in contract. We also offer recurring lawn maintenance schedules for clients who want consistent upkeep through the season. No pressure either way.',
  },
  {
    question: 'What\'s the best time of year to start a landscaping project in West Kelowna?',
    answer:
      'For design and installation work, spring (April–May) and early fall (September–October) are ideal — the ground isn\'t frozen, plants establish well, and crews have availability. Summer works too, though it\'s our busiest season. For seasonal cleanups, spring window is late March through April, and fall is mid-October through November.',
  },
  {
    question: 'Do you bring your own equipment and materials?',
    answer:
      "Yes — we bring everything we need. You don't need to supply anything. For design projects, we'll confirm materials and plant selections with you before ordering so you have full visibility on what's going in your yard.",
  },
];
