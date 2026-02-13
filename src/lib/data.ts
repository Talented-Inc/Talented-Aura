export interface Product {
    id: string;
    slug: string;
    name: string;
    category: string;
    description: string;
    longDescription: string;
    features: string[];
    specs: {
        material: string;
        dimensions: string;
        moq: string;
        origin: string;
    };
    relatedProducts: string[]; // slugs
}

export const products: Product[] = [
    {
        id: "1",
        slug: "obsidian-dental-kit",
        name: "Obsidian Dental Kit",
        category: "Morning Ritual",
        description: "Matte black toothbrush with charcoal-infused bristles.",
        longDescription: "A statement piece for the modern vanity. The Obsidian Dental Kit features a biodegradable bamboo handle finished in a soft-touch matte black coating, paired with activated charcoal bristles for a superior clean. The toothpaste is housed in an aluminum tube, eliminating plastic waste while adding a touch of industrial elegance.",
        features: ["Biodegradable Handle", "Charcoal-Infused Bristles", "Plastic-Free Packaging"],
        specs: {
            material: "Bamboo, Nylon-4, Aluminum",
            dimensions: "185mm x 12mm",
            moq: "5,000 units",
            origin: "Ethically sourced in Vietnam"
        },
        relatedProducts: ["silk-floss-sachets", "morning-mist-mouthwash"]
    },
    {
        id: "2",
        slug: "silk-floss-sachets",
        name: "Silk Floss Sachets",
        category: "Morning Ritual",
        description: "Natural silk floss in a tear-resistant paper sachet.",
        longDescription: "An elegant solution for oral care on the go. Our natural silk floss is coated in candelilla wax and peppermint oil, providing a smooth glide and a refreshing finish. The single-use sachet is crafted from FSC-certified paper with a water-based barrier coating.",
        features: ["100% Compostable Silk", "Natural Wax Coating", "Tear-Resistant Paper"],
        specs: {
            material: "Ahimsa Silk, Candelilla Wax",
            dimensions: "45mm x 45mm",
            moq: "10,000 units",
            origin: "Sourced in India"
        },
        relatedProducts: ["obsidian-dental-kit", "morning-mist-mouthwash"]
    },
    {
        id: "3",
        slug: "velvet-sleep-mask",
        name: "Velvet Sleep Mask",
        category: "Evening Unwind",
        description: "Plush velvet mask with blackout lining.",
        longDescription: "Ensure deep, restorative sleep for your guests with our heavy-weight velvet sleep mask. Features a contoured nose bridge for total blackout and a silk-wrapped elastic band that prevents hair breakage. The interior is lined with cooling bamboo rayon.",
        features: ["Total Blackout Design", "Bamboo Rayon Lining", "Adjustable Strap"],
        specs: {
            material: "Cotton Velvet, Bamboo Rayon",
            dimensions: "205mm x 95mm",
            moq: "2,000 units",
            origin: "Crafted in Portugal"
        },
        relatedProducts: ["lavender-bath-salts"]
    },
    {
        id: "4",
        slug: "lavender-bath-salts",
        name: "Lavender Bath Salts",
        category: "Evening Unwind",
        description: "Himalayan pink salt infused with French lavender.",
        longDescription: "A soothing blend to wash away the day's fatigue. Coarse Himalayan pink salt is hand-mixed with dried lavender buds and essential oils. Packaged in a glass vial with a cork stopper or a compostable kraft sachet.",
        features: ["Organic Essential Oils", "Mineral-Rich Salt", "Plastic-Free"],
        specs: {
            material: "Himalayan Salt, Dried Lavender",
            dimensions: "50g Sachet / 100g Vial",
            moq: "5,000 units",
            origin: "Blended in France"
        },
        relatedProducts: ["velvet-sleep-mask"]
    },
    {
        id: "5",
        slug: "embossed-menu-cover",
        name: "Embossed Menu Cover",
        category: "Dining Experience",
        description: "Textured bonded leather with gold foil stamping.",
        longDescription: "Set the tone for a culinary journey before the first course is served. Our bonded leather menu covers offer the tactile richness of leather with improved durability and stain resistance. Custom embossing and foil stamping available to match your brand identity.",
        features: ["Stain Resistant", "Gold Foil Options", "Custom Sizes"],
        specs: {
            material: "Bonded Leather, Recycled Board",
            dimensions: "A4 / Custom",
            moq: "500 units",
            origin: "Italy"
        },
        relatedProducts: ["linen-napkin-ring"]
    },
    {
        id: "6",
        slug: "linen-napkin-ring",
        name: "Brass & Linen Napkin Ring",
        category: "Dining Experience",
        description: "Solid brass ring with a linen insert.",
        longDescription: "A fusion of hard and soft materials. The solid brass ring provides weight and structure, while the linen insert introduces texture and warmth. Designed to patina beautifully over time.",
        features: ["Solid Brass", "Removable Linen Insert", "Hand-Polished"],
        specs: {
            material: "Brass, European Linen",
            dimensions: "45mm Diameter",
            moq: "1,000 units",
            origin: "India"
        },
        relatedProducts: ["embossed-menu-cover"]
    }

];

export const categories = [
    { id: "morning-ritual", name: "The Morning Ritual", description: "Start the day with intention." },
    { id: "evening-unwind", name: "Evening Unwind", description: "Prepare for rest." },
    { id: "dining-experience", name: "Dining Experience", description: "Elevate the culinary journey." }
];
