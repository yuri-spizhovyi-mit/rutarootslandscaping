import { nanoid as createId } from "nanoid";

export const LANDSCAPING_SERVICES = [
    {
      title: "Gardening",
      options: [
        "Garden bed preparation and soil conditioning",
        "Seasonal planting and garden design",
        "Plant care and fertilization programs",
        "Weed control and pest management",
        "Mulching and garden edging"
      ],
      id:createId(),
    },
    {
      title: "Planting",
      options: [
        "Tree, shrub, and flower planting",
        "Selection of optimal plant species for location",
        "Soil preparation and planting techniques",
        "Installation of seasonal plants and perennials",
        "Ongoing care and maintenance for new plantings"
      ],
      id:createId(),
    },
    {
      title: "Landscape Installation",
      options: [
        "Landscape design and consultation",
        "Grading and site preparation for new landscapes",
        "Sod installation and planting beds",
        "Mulch, decorative rock, and plantings installation",
        "Retaining walls and paving stone construction"
      ],
      id:createId(),
    },
    {
      title: "Landscape Maintenance",
      options: [
        "Large-area mowing and lawn care",
        "Fertilizing and weed control programs",
        "Seasonal cleanups for spring and fall",
        "Hedge trimming and shaping",
        "Tree pruning and small tree removal"
      ],
      id:createId(),
    },
    {
      title: "Snow Removal",
      options: [
        "Snow plowing for commercial properties",
        "Sanding and de-icing services",
        "24/7 snow removal availability",
        "Flexible equipment solutions tailored to your site",
        "Custom scheduling to meet property requirements"
      ],
      id:createId(),
    }
];
  