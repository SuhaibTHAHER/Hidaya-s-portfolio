export type ProjectImage = {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export type ProjectCategory = 'Residential' | 'Commercial' | 'Hospitality' | 'Retail'

export type Project = {
  slug: string
  title: string
  /** Original Arabic project name, shown with lang="ar" dir="rtl". */
  titleAr: string
  subtitle: string
  category: ProjectCategory
  projectType: string
  medium: string
  overview: string
  highlights: string[]
  materials: { name: string; use: string }[]
  palette: string[]
  tags: string[]
  featured: boolean
  cover: ProjectImage
  images: ProjectImage[]
}

// Real projects from Hidaya Thaher's portfolio (3D visualizations). Text describes only what the
// renderings show: no clients, dates, locations or results are claimed.
export const projects: Project[] = [
  {
    "slug": "restaurant-interior",
    "title": "Classical Restaurant and Lounge Interior",
    "titleAr": "مطعم",
    "subtitle": "Classical dining hall, bar and glass-roofed lounge in cream, gold and burgundy",
    "category": "Hospitality",
    "projectType": "Restaurant interior",
    "medium": "3D Visualization",
    "overview": "A restaurant interior design concept presented in 3D renderings, combining a main dining hall, a bar with cashier counter, a pastry and coffee counter, and a glass-roofed lounge. The dining hall is framed by fluted columns, gilded lunettes and crystal chandeliers, with burgundy velvet chairs around cream tables trimmed in gold. Dark-framed glass partitions link the dining hall to the lounge, where white sofas and burgundy armchairs sit beneath a glazed roof.",
    "highlights": [
      "Fluted columns, gilded lunettes and crown mouldings framing the main dining hall",
      "Crystal and gold chandeliers above burgundy velvet chairs and cream tables",
      "Bar with three arched, backlit bottle displays against a geometric patterned wall",
      "Veined marble cladding on the bar, cashier and pastry counters",
      "Glass-roofed lounge with wood-framed windows and wall-bracket pendant lights",
      "Inlaid patterned floor with dark border bands"
    ],
    "materials": [
      {
        "name": "Veined white marble",
        "use": "Bar, cashier and pastry counter tops and cladding"
      },
      {
        "name": "Burgundy velvet upholstery",
        "use": "Dining chairs, bar stools and lounge armchairs"
      },
      {
        "name": "Walnut-look wood paneling",
        "use": "Lower wall wainscot and window frames"
      },
      {
        "name": "Gold-finish metal",
        "use": "Chandeliers, arched shelving frames and furniture trim"
      },
      {
        "name": "Glass with dark metal frames",
        "use": "Partitions between dining hall and lounge, and the lounge roof"
      },
      {
        "name": "Patterned stone-look flooring",
        "use": "Dining hall floor with inlaid border bands"
      }
    ],
    "palette": [
      "Cream",
      "Ivory white",
      "Burgundy",
      "Antique gold",
      "Walnut brown",
      "Black"
    ],
    "tags": [
      "Restaurant",
      "Hospitality",
      "Classical Style"
    ],
    "featured": true,
    "cover": {
      "src": "/images/projects/restaurant-interior/main-dining-hall-with-chandeliers.jpg",
      "alt": "3D rendering of a classical restaurant dining hall with crystal chandeliers, fluted columns and burgundy velvet chairs",
      "caption": "Main dining hall",
      "width": 1537,
      "height": 865
    },
    "images": [
      {
        "src": "/images/projects/restaurant-interior/main-dining-hall-with-chandeliers.jpg",
        "alt": "3D rendering of a classical restaurant dining hall with crystal chandeliers, fluted columns and burgundy velvet chairs",
        "caption": "Main dining hall",
        "width": 1537,
        "height": 865
      },
      {
        "src": "/images/projects/restaurant-interior/dining-hall-and-glazed-lounge-partitions.jpg",
        "alt": "3D rendering of a restaurant dining area beside Ionic columns and dark-framed glass partitions opening to a lounge",
        "caption": "Dining hall with glazed lounge partitions",
        "width": 1537,
        "height": 865
      },
      {
        "src": "/images/projects/restaurant-interior/bar-and-cashier-with-arched-doorway.jpg",
        "alt": "3D rendering of a restaurant bar and marble cashier counter beside an arched black doorway under a crystal chandelier",
        "caption": "Bar, cashier counter and arched doorway",
        "width": 1537,
        "height": 865
      },
      {
        "src": "/images/projects/restaurant-interior/bar-with-arched-backlit-shelving.jpg",
        "alt": "3D rendering of a restaurant bar with three backlit arched bottle displays, geometric wall pattern and velvet stools",
        "caption": "Bar with arched backlit shelving",
        "width": 1537,
        "height": 865
      },
      {
        "src": "/images/projects/restaurant-interior/glazed-lounge-with-arched-doorway.jpg",
        "alt": "3D rendering of a glass-roofed restaurant lounge with white sofas, burgundy armchairs and an arched glazed door",
        "caption": "Glass-roofed lounge",
        "width": 1537,
        "height": 865
      },
      {
        "src": "/images/projects/restaurant-interior/glazed-lounge-under-glass-roof.jpg",
        "alt": "3D rendering of a restaurant lounge with wood-framed windows, bracket pendant lights and burgundy and white seating",
        "caption": "Lounge seating along the windows",
        "width": 1537,
        "height": 865
      },
      {
        "src": "/images/projects/restaurant-interior/pastry-counter-with-display-case.jpg",
        "alt": "3D rendering of a restaurant pastry counter with a glass display case, marble cladding and a coffee machine",
        "caption": "Pastry and coffee counter",
        "width": 777,
        "height": 437
      },
      {
        "src": "/images/projects/restaurant-interior/dining-table-setting-detail.jpg",
        "alt": "3D rendering of a cream dining table with gold-trimmed cabriole legs, a hydrangea centerpiece and velvet chairs",
        "caption": "Table setting detail",
        "width": 777,
        "height": 437
      }
    ]
  },
  {
    "slug": "faber-castell-exhibition",
    "title": "Faber-Castell Showroom — Design Concept",
    "titleAr": "معرض فابر كاستل",
    "subtitle": "Art-supply showroom with category bays, a children's area and a workshop zone",
    "category": "Retail",
    "projectType": "Art-supply showroom",
    "medium": "3D Visualization",
    "overview": "An art-supply showroom concept, presented in 3D visualizations. The plan is arranged as a sequence of zones: a reception counter set against a green-to-teal cube wall, a central aisle lined with arched, backlit display niches, product bays for oil and gouache colors, a children's area, a workshop zone with easels, and a timeline wall. A deep green, white and light-oak palette ties the zones together over a speckled terrazzo-look floor.",
    "highlights": [
      "Reception counter backed by a three-dimensional cube wall graded from green to teal",
      "Arched, LED-outlined wall niches with light-wood shelving for each product category",
      "Feature wall of color tiles graded from teal through violet to red inside a lit arched frame",
      "Children's area with a layered, backlit green relief wall and a low painting table",
      "Workshop zone with an oval wooden table, easels and suspended colored cubes",
      "Slatted wood ceiling bands with white track lighting and linear LED strips"
    ],
    "materials": [
      {
        "name": "Light oak-look wood",
        "use": "Display plinths, shelving and ceiling slat bands"
      },
      {
        "name": "Terrazzo-look flooring",
        "use": "Speckled white floor throughout"
      },
      {
        "name": "Deep green painted finish",
        "use": "Curved display units, arches and feature walls"
      },
      {
        "name": "Glass",
        "use": "Display cases on light-wood plinths"
      },
      {
        "name": "Integrated LED strips",
        "use": "Outlining arched niches, arches and ceiling coves"
      },
      {
        "name": "Modular cube wall panels",
        "use": "Reception feature wall in green and teal"
      }
    ],
    "palette": [
      "#1E3A26",
      "#F5F5F3",
      "#C8A97E",
      "#DADBDD",
      "#3AACAF",
      "#8A9150",
      "#B3203A"
    ],
    "tags": [
      "Retail",
      "Showroom",
      "Art Supplies"
    ],
    "featured": true,
    "cover": {
      "src": "/images/projects/faber-castell-exhibition/reception-desk-with-green-cube-wall.jpg",
      "alt": "3D rendering of a showroom reception counter in light wood, set against a cube wall graded from green to teal",
      "caption": "Reception counter and green-to-teal cube wall",
      "width": 1250,
      "height": 940
    },
    "images": [
      {
        "src": "/images/projects/faber-castell-exhibition/reception-desk-with-green-cube-wall.jpg",
        "alt": "3D rendering of a showroom reception counter in light wood, set against a cube wall graded from green to teal",
        "caption": "Reception counter and green-to-teal cube wall",
        "width": 1250,
        "height": 940
      },
      {
        "src": "/images/projects/faber-castell-exhibition/green-storefront-with-ribbon-sculpture.jpg",
        "alt": "3D rendering of an art-supply showroom storefront in deep green, with a ribbon sculpture and a giant pencil column",
        "caption": "Storefront with ribbon sculpture and pencil column",
        "width": 1296,
        "height": 816
      },
      {
        "src": "/images/projects/faber-castell-exhibition/main-aisle-with-arched-display-niches.jpg",
        "alt": "3D rendering of a showroom aisle with arched backlit niches, wood display plinths and a slatted wood ceiling",
        "caption": "Main aisle with arched display niches",
        "width": 1500,
        "height": 1500
      },
      {
        "src": "/images/projects/faber-castell-exhibition/color-gradient-tile-feature-wall.jpg",
        "alt": "3D rendering of a showroom feature wall of color tiles graded from teal to red inside a lit arched frame",
        "caption": "Color-gradient tile feature wall",
        "width": 1148,
        "height": 864
      },
      {
        "src": "/images/projects/faber-castell-exhibition/oil-colors-display-bay.jpg",
        "alt": "3D rendering of an oil colors display bay with green panels, backlit wood shelves and glass display cases",
        "caption": "Oil colors bay with backlit shelving",
        "width": 1184,
        "height": 864
      },
      {
        "src": "/images/projects/faber-castell-exhibition/childrens-area-with-sculpted-wall.jpg",
        "alt": "3D rendering of a children's area seen through a green arch, with a layered relief wall and a low painting table",
        "caption": "Children's area framed by a green arch",
        "width": 1500,
        "height": 1500
      },
      {
        "src": "/images/projects/faber-castell-exhibition/art-workshop-zone-with-hanging-cubes.jpg",
        "alt": "3D rendering of a workshop zone with an oval wooden table, easels, a color cubby wall and suspended cubes",
        "caption": "Workshop zone with easels and hanging cubes",
        "width": 1500,
        "height": 1500
      },
      {
        "src": "/images/projects/faber-castell-exhibition/timeline-wall-with-display-cases.jpg",
        "alt": "3D rendering of a timeline wall of tall white panels above glass display cases on light-wood plinths",
        "caption": "Timeline wall with glass display cases",
        "width": 1225,
        "height": 940
      }
    ]
  },
  {
    "slug": "bank-branch",
    "title": "Bank Branch Interior",
    "titleAr": "بنك",
    "subtitle": "Red, white and charcoal banking hall with teller line, glass offices and ATM lobby",
    "category": "Commercial",
    "projectType": "Bank branch",
    "medium": "3D Visualization",
    "overview": "A bank branch interior, presented as a series of 3D renderings. A banking hall with red-banded white columns and black beam seating leads to a teller line of white counters with glass screens and suspended number displays. Glass-enclosed offices, customer service desks, a marble-look reception desk, a manager's office with backlit shelving, a meeting table and a self-service ATM lobby complete the layout.",
    "highlights": [
      "White columns wrapped with red and black bands at the top and base",
      "Teller line of white counters with red dividers, glass screens and suspended number displays",
      "Waiting area of black beam seating divided by planter boxes of greenery",
      "Glass-walled offices, including a money transfer room, beside customer service desks",
      "Manager's office with backlit shelf niches in charcoal panels around a wood-slat feature wall",
      "Black ceiling bulkheads with recessed linear LED strips set at angles"
    ],
    "materials": [
      {
        "name": "Red and white gloss panels",
        "use": "Column cladding, feature walls and teller counter dividers"
      },
      {
        "name": "Vertical wood-look slats",
        "use": "Wall behind the teller line and manager's office feature wall"
      },
      {
        "name": "Charcoal stone-look panels",
        "use": "Manager's office and meeting area walls with shelf niches"
      },
      {
        "name": "Clear glass partitions",
        "use": "Enclosed offices and teller screens"
      },
      {
        "name": "Light marble-look tiles",
        "use": "Banking hall flooring"
      },
      {
        "name": "Grey marble-look cladding",
        "use": "Reception desk front"
      }
    ],
    "palette": [
      "Signal red #B3201C",
      "White #F2EEEC",
      "Charcoal #332C2A",
      "Light wood #A88563",
      "Pale stone grey #C9BBB3"
    ],
    "tags": [
      "Commercial Interior",
      "Banking"
    ],
    "featured": true,
    "cover": {
      "src": "/images/projects/bank-branch/banking-hall-with-red-banded-columns.jpg",
      "alt": "3D rendering of a bank branch hall with red-banded white columns, black beam seating and glass-walled offices",
      "caption": "Banking hall and waiting area",
      "width": 1537,
      "height": 865
    },
    "images": [
      {
        "src": "/images/projects/bank-branch/banking-hall-with-red-banded-columns.jpg",
        "alt": "3D rendering of a bank branch hall with red-banded white columns, black beam seating and glass-walled offices",
        "caption": "Banking hall and waiting area",
        "width": 1537,
        "height": 865
      },
      {
        "src": "/images/projects/bank-branch/waiting-area-facing-teller-counters.jpg",
        "alt": "3D rendering of a bank waiting area with black benches and planters facing teller counters and a wood-slat wall",
        "caption": "Waiting seating facing the teller line",
        "width": 1537,
        "height": 865
      },
      {
        "src": "/images/projects/bank-branch/marble-reception-desk-and-kiosk.jpg",
        "alt": "3D rendering of a bank reception desk in grey marble-look finish beside a red service kiosk and charcoal fin wall",
        "caption": "Reception desk and service kiosk",
        "width": 1537,
        "height": 865
      },
      {
        "src": "/images/projects/bank-branch/customer-service-desks-along-windows.jpg",
        "alt": "3D rendering of bank customer service desks along the windows on a red floor strip, with a brochure wall beyond",
        "caption": "Customer service desks by the windows",
        "width": 1537,
        "height": 865
      },
      {
        "src": "/images/projects/bank-branch/glass-enclosed-money-transfer-office.jpg",
        "alt": "3D rendering of a glass-enclosed money transfer office in a bank branch, with a white desk and red fascia",
        "caption": "Glass-enclosed money transfer office",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/images/projects/bank-branch/manager-office-with-backlit-shelving.jpg",
        "alt": "3D rendering of a bank manager's office with a wood desk, backlit shelf niches and a vertical wood-slat feature wall",
        "caption": "Manager's office",
        "width": 1537,
        "height": 865
      },
      {
        "src": "/images/projects/bank-branch/meeting-table-near-teller-line.jpg",
        "alt": "3D rendering of a long white meeting table with black chairs in a bank branch, beside a backlit bookshelf niche",
        "caption": "Meeting table and display niche",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/images/projects/bank-branch/self-service-atm-lobby.jpg",
        "alt": "3D rendering of a bank self-service lobby with red ATMs, a red feature wall and a white desk with two tablets",
        "caption": "Self-service ATM lobby",
        "width": 1280,
        "height": 720
      }
    ]
  },
  {
    "slug": "kitchen-and-dining-nook",
    "title": "Open Kitchen with Dining and Lounge",
    "titleAr": "مطبخ مع قعدة",
    "subtitle": "Open-plan kitchen, dining and sofa seating in charcoal, marble-look stone and warm wood",
    "category": "Residential",
    "projectType": "Open-plan kitchen, dining and living area",
    "medium": "3D Visualization",
    "overview": "An open-plan living space that brings together a kitchen, a dining area and a sofa seating area, shown as a series of 3D renderings. Charcoal handleless cabinetry is paired with a marble-look stone backsplash and worktops, and a curved island with a fluted base anchors the kitchen. A long dining table with cognac leather-look chairs sits beside full-height curtained windows, while the lounge side is framed by a vertical wood-slat wall, a TV wall and a linear fireplace.",
    "highlights": [
      "Curved kitchen island with a rounded marble-look top, fluted side panel and wooden saddle-seat bar stools",
      "Marble-look stone slab running from the worktop up the backsplash and around the window over the sink",
      "Clusters of smoked-glass globe pendants with brass bands above the island and the dining table",
      "Dining table on a sculptural tapered pedestal base, surrounded by cognac leather-look chairs on slim black frames",
      "Tall appliance wall with a fridge, built-in oven and microwave set beneath open shelving",
      "Lounge side with a vertical dark wood-slat feature wall, a charcoal TV wall and a linear fireplace"
    ],
    "materials": [
      {
        "name": "Charcoal matte cabinetry",
        "use": "Kitchen base, wall and tall units"
      },
      {
        "name": "Marble-look stone with warm veining",
        "use": "Worktops, island top and backsplash"
      },
      {
        "name": "Warm wood plank flooring",
        "use": "Floor throughout the open-plan space"
      },
      {
        "name": "Smoked glass with brass banding",
        "use": "Pendant lights over island and dining table"
      },
      {
        "name": "Cognac leather-look upholstery",
        "use": "Dining chairs"
      },
      {
        "name": "Dark vertical wood slats",
        "use": "Feature wall behind the sofa"
      }
    ],
    "palette": [
      "Charcoal grey",
      "Warm white",
      "Cream marble with beige veining",
      "Cognac tan",
      "Walnut brown",
      "Brass"
    ],
    "tags": [
      "Kitchen",
      "Open-plan Living",
      "Residential"
    ],
    "featured": true,
    "cover": {
      "src": "/images/projects/kitchen-and-dining-nook/open-plan-kitchen-island-and-dining.jpg",
      "alt": "3D rendering of an open-plan kitchen and dining area with charcoal cabinets, a fluted island and globe pendant lights",
      "caption": "Kitchen, island and dining area",
      "width": 1280,
      "height": 720
    },
    "images": [
      {
        "src": "/images/projects/kitchen-and-dining-nook/open-plan-kitchen-island-and-dining.jpg",
        "alt": "3D rendering of an open-plan kitchen and dining area with charcoal cabinets, a fluted island and globe pendant lights",
        "caption": "Kitchen, island and dining area",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/images/projects/kitchen-and-dining-nook/kitchen-island-under-globe-pendants.jpg",
        "alt": "3D rendering of a kitchen island with a curved marble-look top, wooden bar stools and a window above the sink",
        "caption": "Curved island and marble-look backsplash",
        "width": 1278,
        "height": 718
      },
      {
        "src": "/images/projects/kitchen-and-dining-nook/dining-table-with-leather-chairs.jpg",
        "alt": "3D rendering of a dining area with cognac leather-look chairs, a sculptural table base and framed line-art prints",
        "caption": "Dining table beside full-height curtains",
        "width": 1278,
        "height": 718
      },
      {
        "src": "/images/projects/kitchen-and-dining-nook/tall-appliance-wall-with-open-shelves.jpg",
        "alt": "3D rendering of a kitchen appliance wall with a black fridge, built-in oven and microwave under open shelving",
        "caption": "Tall appliance wall",
        "width": 1278,
        "height": 718
      },
      {
        "src": "/images/projects/kitchen-and-dining-nook/island-countertop-styling-detail.jpg",
        "alt": "3D rendering close-up of a marble-look kitchen countertop with a glass vase, wicker basket and wooden bowl",
        "caption": "Countertop detail",
        "width": 1278,
        "height": 718
      },
      {
        "src": "/images/projects/kitchen-and-dining-nook/seating-area-with-fireplace-tv-wall.jpg",
        "alt": "3D rendering of a seating area with a grey sofa, black arc floor lamp and a TV wall over a linear fireplace",
        "caption": "Seating area and TV wall",
        "width": 944,
        "height": 531
      },
      {
        "src": "/images/projects/kitchen-and-dining-nook/sofa-against-wood-slat-wall.jpg",
        "alt": "3D rendering of a lounge corner with a charcoal modular sofa against a vertical wood-slat wall and framed prints",
        "caption": "Sofa and wood-slat feature wall",
        "width": 1278,
        "height": 718
      }
    ]
  },
  {
    "slug": "clothing-store",
    "title": "Clothing Boutique Interior",
    "titleAr": "محل اواعي",
    "subtitle": "Curved white boutique with gold-finish rails, arched niches and sculptural displays",
    "category": "Retail",
    "projectType": "Clothing boutique interior",
    "medium": "3D Visualization",
    "overview": "A clothing boutique interior design concept presented in 3D renderings, covering the storefront, sales floor, cash desk and shoe and handbag displays. Glossy white walls, columns and platforms are shaped with soft curves and backlit arched niches, set on a polished grey-veined marble-look floor. Gold-finish metal runs through ceiling-hung clothing rails, lattice shelving and a sculptural looped display rail beside the curved cash desk.",
    "highlights": [
      "Curved white cash desk with a gold-finish base in front of a backlit arched niche",
      "Sculptural looped clothing rail in polished gold-finish metal",
      "Backlit arched wall niches for shoes and handbags",
      "Gold-finish rails suspended from the ceiling and lattice-pattern shelving units",
      "Black ribbed and white round display tables on raised white platforms",
      "Mirrored free-form ceiling feature with linear recessed light strips"
    ],
    "materials": [
      {
        "name": "Glossy white finish",
        "use": "Walls, columns, cash desk and display platforms"
      },
      {
        "name": "Gold-finish metal",
        "use": "Clothing rails, lattice shelving, looped display and desk base"
      },
      {
        "name": "Grey-veined marble-look tile",
        "use": "Polished floor throughout the sales area"
      },
      {
        "name": "Black ribbed finish",
        "use": "Round display tables"
      },
      {
        "name": "Mirror and reflective panels",
        "use": "Ceiling feature and full-length mirrors"
      },
      {
        "name": "Dark-framed glazing",
        "use": "Shopfront display windows and entrance"
      }
    ],
    "palette": [
      "White",
      "Champagne gold",
      "Black",
      "Light grey"
    ],
    "tags": [
      "Retail",
      "Boutique",
      "Contemporary"
    ],
    "featured": true,
    "cover": {
      "src": "/images/projects/clothing-store/cash-desk-and-sculptural-clothing-rail.jpg",
      "alt": "3D rendering of a clothing boutique with a curved white cash desk, backlit arched niche and gold looped clothing rail",
      "caption": "Cash desk and sculptural clothing rail",
      "width": 1280,
      "height": 720
    },
    "images": [
      {
        "src": "/images/projects/clothing-store/cash-desk-and-sculptural-clothing-rail.jpg",
        "alt": "3D rendering of a clothing boutique with a curved white cash desk, backlit arched niche and gold looped clothing rail",
        "caption": "Cash desk and sculptural clothing rail",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/images/projects/clothing-store/boutique-storefront-with-display-windows.jpg",
        "alt": "3D rendering of a boutique storefront with a black sign panel, glazed entrance and two mannequin display windows",
        "caption": "Storefront and display windows",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/images/projects/clothing-store/curved-cash-desk-with-backlit-niche.jpg",
        "alt": "3D rendering of a boutique cash desk in glossy white with a gold base, set before a backlit arched wall niche",
        "caption": "Curved cash desk",
        "width": 1537,
        "height": 865
      },
      {
        "src": "/images/projects/clothing-store/display-corner-with-gold-lattice-shelving.jpg",
        "alt": "3D rendering of a boutique display corner with gold lattice shelving, wall-hung clothing rails and full-length mirrors",
        "caption": "Display corner with lattice shelving",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/images/projects/clothing-store/arched-shoe-niche-and-display-plinths.jpg",
        "alt": "3D rendering of a boutique shoe display in a backlit arched niche, with ceiling-hung gold rails and round plinths",
        "caption": "Arched shoe niche",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/images/projects/clothing-store/sales-floor-with-mirrored-ceiling-feature.jpg",
        "alt": "3D rendering of a boutique sales floor with a mirrored free-form ceiling feature, white columns and a large shop window",
        "caption": "Sales floor and mirrored ceiling",
        "width": 1280,
        "height": 720
      },
      {
        "src": "/images/projects/clothing-store/handbag-niche-and-view-to-cash-desk.jpg",
        "alt": "3D rendering of a boutique interior with handbags in a recessed wall niche and a view across the store to the cash desk",
        "caption": "Handbag niche and view to the cash desk",
        "width": 1537,
        "height": 865
      },
      {
        "src": "/images/projects/clothing-store/shoe-shelving-and-window-display.jpg",
        "alt": "3D rendering of a boutique with backlit shoe shelving, a black round display table and mannequins in the shop window",
        "caption": "Shoe shelving and window display",
        "width": 1280,
        "height": 720
      }
    ]
  },
  {
    "slug": "bedroom-design",
    "title": "Bedroom and Dressing Area",
    "titleAr": "غرفة نوم",
    "subtitle": "Muted bedroom with backlit slatted panels, sculptural lighting and an open dressing area",
    "category": "Residential",
    "projectType": "Bedroom with dressing area",
    "medium": "3D Visualization",
    "overview": "A bedroom design with an open dressing area, shown in evening and daylight renderings. The bed wall pairs a molded panel and a sweeping metal wall sculpture with backlit vertical slats, an S-shaped linear wall light and slim capsule pendants. Charcoal curtains, grey bedding and a glossy brown curved bench keep the palette muted. The dressing area uses black metal-framed open shelving, a vanity desk with gold-trimmed legs and integrated shelf lighting.",
    "highlights": [
      "Bed wall framed by backlit vertical slatted panels",
      "Sweeping wall sculpture of dark metallic teardrop pieces above the bed",
      "S-shaped linear LED wall light and slim capsule pendants beside the bed",
      "Ceiling with perimeter cove lighting and black linear track lights",
      "Open dressing area with black metal-framed shelving and integrated shelf lighting",
      "Vanity desk with gold-trimmed legs and a matching upholstered stool"
    ],
    "materials": [
      {
        "name": "Dark vertical slats with backlighting",
        "use": "Panels flanking the bed wall"
      },
      {
        "name": "Light wood-look flooring",
        "use": "Floors in the bedroom and dressing area"
      },
      {
        "name": "Dark metal",
        "use": "Wall sculpture and open shelving frames"
      },
      {
        "name": "Charcoal velvet-look fabric",
        "use": "Floor-to-ceiling curtains"
      },
      {
        "name": "White marble-look stone",
        "use": "Round bedside table"
      },
      {
        "name": "Brushed gold metal trim",
        "use": "Vanity desk legs and stool base"
      }
    ],
    "palette": [
      "Warm grey",
      "Taupe",
      "Charcoal",
      "Chocolate brown",
      "Black",
      "Light oak tones"
    ],
    "tags": [
      "Residential",
      "Bedroom",
      "Dressing Area"
    ],
    "featured": true,
    "cover": {
      "src": "/images/projects/bedroom-design/bed-wall-with-slatted-panels.jpg",
      "alt": "3D rendering of a bedroom bed wall with backlit slatted panels, a metal wall sculpture and linear wall lights",
      "caption": "Bed wall, evening view",
      "width": 1537,
      "height": 865
    },
    "images": [
      {
        "src": "/images/projects/bedroom-design/bed-wall-with-slatted-panels.jpg",
        "alt": "3D rendering of a bedroom bed wall with backlit slatted panels, a metal wall sculpture and linear wall lights",
        "caption": "Bed wall, evening view",
        "width": 1537,
        "height": 865
      },
      {
        "src": "/images/projects/bedroom-design/bed-with-wall-sculpture.jpg",
        "alt": "3D rendering of a low upholstered bed with grey linens, a brown throw and a sweeping wall sculpture above",
        "caption": "Bed and wall sculpture",
        "width": 1537,
        "height": 865
      },
      {
        "src": "/images/projects/bedroom-design/angled-bed-view-with-curtains.jpg",
        "alt": "3D rendering of a bedroom seen at an angle, with charcoal curtains, a glowing wall light and a glossy bench",
        "caption": "Angled view toward the window",
        "width": 1537,
        "height": 865
      },
      {
        "src": "/images/projects/bedroom-design/wide-view-with-track-lighting.jpg",
        "alt": "3D rendering of a bedroom from the corner, showing ceiling cove lighting, black track lights and a grey rug",
        "caption": "Ceiling and lighting layout",
        "width": 1537,
        "height": 865
      },
      {
        "src": "/images/projects/bedroom-design/sculptural-wall-light-detail.jpg",
        "alt": "3D rendering detail of an S-shaped LED wall light beside backlit slats and a bedside table with dried grass",
        "caption": "Wall light and slat detail",
        "width": 1537,
        "height": 865
      },
      {
        "src": "/images/projects/bedroom-design/open-dressing-area-daylight.jpg",
        "alt": "3D rendering of an open dressing area with black metal shelving, hanging clothes and a vanity desk in daylight",
        "caption": "Dressing area in daylight",
        "width": 1537,
        "height": 865
      },
      {
        "src": "/images/projects/bedroom-design/dressing-area-evening-lighting.jpg",
        "alt": "3D rendering of a dressing area at night with lit black shelving, a gold-trimmed vanity desk and a grey stool",
        "caption": "Dressing area with shelf lighting",
        "width": 1537,
        "height": 865
      }
    ]
  },
  {
    "slug": "master-bedroom",
    "title": "Master Bedroom Suite",
    "titleAr": "ماستر",
    "subtitle": "Bedroom, sitting area, vanity and walk-in closet in warm neutrals and olive green",
    "category": "Residential",
    "projectType": "Master bedroom suite",
    "medium": "3D Visualization",
    "overview": "A master bedroom suite visualized as one open plan: a bed area, a sitting area with a TV wall, a vanity wall and a walk-in closet. White walls with classical plaster moldings, herringbone wood-look flooring and leaf-motif chandeliers in cove-lit ceiling trays set a soft, classic-contemporary tone. Olive-green upholstery, gold accents and wood-look panels add warmth, while the closet pairs glass-fronted wardrobes with vertical LED strips.",
    "highlights": [
      "Leaf-motif ring chandeliers set into recessed, cove-lit ceiling trays",
      "TV wall combining a marble-look center panel, wood-look side panels and a floating shelf",
      "Partition wall separating the bed area from the sitting area",
      "Floating vanity with a backlit oval mirror between lit display niches",
      "Walk-in closet with glass-fronted wardrobes and vertical LED strips",
      "Herringbone wood-look flooring throughout the suite"
    ],
    "materials": [
      {
        "name": "Herringbone wood-look flooring",
        "use": "Floors throughout the suite"
      },
      {
        "name": "Classical plaster moldings",
        "use": "Framed panels on the white walls"
      },
      {
        "name": "Marble-look panel",
        "use": "Center of the TV wall"
      },
      {
        "name": "Warm wood-look veneer",
        "use": "TV wall side panels and wardrobe interiors"
      },
      {
        "name": "Glass with dark metal frames",
        "use": "Walk-in closet wardrobe doors"
      },
      {
        "name": "Olive-green upholstery",
        "use": "Lounge chairs and the bench at the foot of the bed"
      }
    ],
    "palette": [
      "Warm white",
      "Light oak tones",
      "Olive green",
      "Gold",
      "Walnut brown",
      "Taupe grey"
    ],
    "tags": [
      "Residential",
      "Bedroom",
      "Walk-in Closet"
    ],
    "featured": false,
    "cover": {
      "src": "/images/projects/master-bedroom/sitting-area-with-tv-wall.jpg",
      "alt": "3D rendering of a master bedroom sitting area with olive lounge chairs, a TV wall and leaf-motif chandeliers",
      "caption": "Sitting area and TV wall",
      "width": 1040,
      "height": 585
    },
    "images": [
      {
        "src": "/images/projects/master-bedroom/sitting-area-with-tv-wall.jpg",
        "alt": "3D rendering of a master bedroom sitting area with olive lounge chairs, a TV wall and leaf-motif chandeliers",
        "caption": "Sitting area and TV wall",
        "width": 1040,
        "height": 585
      },
      {
        "src": "/images/projects/master-bedroom/bed-with-channeled-headboard.jpg",
        "alt": "3D rendering of a master bedroom bed with a channeled brown headboard, olive bench and metal disc wall art",
        "caption": "Bed area beside the sitting area",
        "width": 730,
        "height": 410
      },
      {
        "src": "/images/projects/master-bedroom/vanity-wall-with-lit-niches.jpg",
        "alt": "3D rendering of a bedroom vanity wall with an oval mirror, lit display niches and a leaf chandelier above",
        "caption": "Vanity wall framed by lit niches",
        "width": 944,
        "height": 531
      },
      {
        "src": "/images/projects/master-bedroom/floating-vanity-with-oval-mirror.jpg",
        "alt": "3D rendering of a floating cream vanity with paneled drawers, a backlit oval mirror and a woven pouf",
        "caption": "Floating vanity detail",
        "width": 1040,
        "height": 585
      },
      {
        "src": "/images/projects/master-bedroom/lounge-chairs-and-nesting-tables.jpg",
        "alt": "3D rendering of a bedroom sitting nook with olive barrel chairs, white nesting tables and an arched art panel",
        "caption": "Lounge chairs and nesting tables",
        "width": 730,
        "height": 410
      },
      {
        "src": "/images/projects/master-bedroom/walk-in-closet-wardrobe-wall.jpg",
        "alt": "3D rendering of a walk-in closet with glass-fronted wood-look wardrobes, LED strips and open shoe shelving",
        "caption": "Walk-in closet",
        "width": 1040,
        "height": 585
      },
      {
        "src": "/images/projects/master-bedroom/glass-wardrobe-with-led-strips.jpg",
        "alt": "3D rendering of glass wardrobe doors with vertical LED strips beside lit open shelves for shoes and bags",
        "caption": "Glass wardrobes and display shelves",
        "width": 1040,
        "height": 585
      },
      {
        "src": "/images/projects/master-bedroom/hallway-with-wood-door-and-planters.jpg",
        "alt": "3D rendering of a suite hallway with a wood-look door, tall potted plants and brass wall sconces",
        "caption": "Hallway beside the closet",
        "width": 1040,
        "height": 585
      }
    ]
  },
  {
    "slug": "camera-store",
    "title": "Camera Store — Design Concept",
    "titleAr": "محل كاميرات",
    "subtitle": "Dark retail interior with rough-stone display plinths, red arches and a domed rotunda",
    "category": "Retail",
    "projectType": "Camera store",
    "medium": "3D Visualization",
    "overview": "A camera store concept, presented in 3D visualizations. Charcoal walls, black vertical slats and a rough dark-rock feature wall form a moody backdrop for the products, with red slatted arches and red-lined oval niches as display focal points. Cameras sit on rough-hewn grey stone plinths and counters over a grey marble-look floor. A circular rotunda under a glass dome brings daylight into the plan and holds curved display shelving.",
    "highlights": [
      "Circular rotunda under a glass dome with curved, tiered display shelving",
      "Rough-hewn grey stone plinths and counters used as product displays",
      "Red slatted arches framing the feature walls behind the counters",
      "Oval and arched wall niches lined in red with integrated lighting",
      "Red line-drawing camera graphics on a dark textured wall",
      "Recessed linear LED lines running across the ceiling"
    ],
    "materials": [
      {
        "name": "Rough-cut grey stone",
        "use": "Display plinths and counters"
      },
      {
        "name": "Grey marble-look tiles",
        "use": "Flooring"
      },
      {
        "name": "Dark textured rock cladding",
        "use": "Feature walls and storefront piers"
      },
      {
        "name": "Black vertical slats",
        "use": "Wall paneling behind the counter and logo niche"
      },
      {
        "name": "Red slatted panels",
        "use": "Arched feature walls and niche linings"
      },
      {
        "name": "Glass with bronze-tone frame",
        "use": "Domed skylight over the rotunda"
      }
    ],
    "palette": [
      "#2D2926",
      "#34302D",
      "#A3202A",
      "#7A7673",
      "#B8B4B0",
      "#B58B55"
    ],
    "tags": [
      "Retail",
      "Camera Store"
    ],
    "featured": false,
    "cover": {
      "src": "/images/projects/camera-store/rotunda-with-glass-dome-skylight.jpg",
      "alt": "3D rendering of a camera store rotunda under a glass dome, with curved display shelves and two stone plinths",
      "caption": "Rotunda under a glass dome",
      "width": 1280,
      "height": 984
    },
    "images": [
      {
        "src": "/images/projects/camera-store/rotunda-with-glass-dome-skylight.jpg",
        "alt": "3D rendering of a camera store rotunda under a glass dome, with curved display shelves and two stone plinths",
        "caption": "Rotunda under a glass dome",
        "width": 1280,
        "height": 984
      },
      {
        "src": "/images/projects/camera-store/storefront-with-dark-stone-cladding.jpg",
        "alt": "3D rendering of a camera store storefront with dark stone-clad piers, a slatted fascia and full-height glazing",
        "caption": "Storefront with stone-clad piers and glazing",
        "width": 1179,
        "height": 907
      },
      {
        "src": "/images/projects/camera-store/main-aisle-with-stone-display-plinths.jpg",
        "alt": "3D rendering of a camera store aisle with rough grey stone display plinths and red slatted arches",
        "caption": "Main aisle with stone display plinths",
        "width": 1280,
        "height": 984
      },
      {
        "src": "/images/projects/camera-store/glazed-corner-with-rotunda-view.jpg",
        "alt": "3D rendering of a camera store corner with floor-to-ceiling glazing, a dark logo wall and a view into the rotunda",
        "caption": "Glazed corner opening onto the rotunda",
        "width": 1280,
        "height": 984
      },
      {
        "src": "/images/projects/camera-store/red-arched-feature-wall-and-counter.jpg",
        "alt": "3D rendering of a camera store display wall with a red slatted arch, oval red niches and a long stone counter",
        "caption": "Red arched display wall and stone counter",
        "width": 1280,
        "height": 984
      },
      {
        "src": "/images/projects/camera-store/stone-counter-under-red-arch.jpg",
        "alt": "3D rendering of a camera store counter of rough pale stone in front of a red arch framing a dark rock wall",
        "caption": "Stone counter beneath a red arch",
        "width": 1280,
        "height": 984
      },
      {
        "src": "/images/projects/camera-store/rock-wall-and-arched-seating-niche.jpg",
        "alt": "3D rendering of a camera store corner with a dark rock wall, a red-framed arched seating niche and a tripod",
        "caption": "Rock wall and arched seating niche",
        "width": 1280,
        "height": 984
      },
      {
        "src": "/images/projects/camera-store/dark-corridor-with-arched-shelving.jpg",
        "alt": "3D rendering of a dark camera store corridor with arched shelving niches and red-lit display shelves",
        "caption": "Back corridor with arched shelving",
        "width": 1280,
        "height": 984
      }
    ]
  },
  {
    "slug": "work-office",
    "title": "Contemporary Office Interior",
    "titleAr": "مكتب عمل",
    "subtitle": "Reception lounge, open workspace, private office and studio corner in warm neutrals",
    "category": "Commercial",
    "projectType": "Office interior",
    "medium": "3D Visualization",
    "overview": "An office interior visualized as a sequence of connected zones: a reception lounge, an open area with a shared work table, a private office and a photography studio corner. A warm palette of cream walls, beige floor tiles and terracotta accents runs throughout, with classic moulded wall panels set against modern furniture. Linear pendants, black cylinder downlights and wall sconces layer the lighting.",
    "highlights": [
      "Reception feature wall in a stone-like plaster finish with backlit lettering and a concealed cove light along its top edge",
      "Terracotta-painted gallery niche lined with black-and-white framed prints and a pair of dark lounge chairs",
      "Classic moulded wall panels with a terracotta lower band, lit by cylindrical up-and-down wall sconces",
      "Private office with a dark wood desk and a full-height dark wood shelving wall with LED-lit shelves",
      "Floor-to-ceiling black-framed windows following a curved facade",
      "Photography studio corner with a white curved backdrop and studio lighting"
    ],
    "materials": [
      {
        "name": "Textured plaster-look finish",
        "use": "Reception feature wall"
      },
      {
        "name": "Terracotta paint over moulded panels",
        "use": "Wainscot band and gallery niche"
      },
      {
        "name": "Dark wood veneer",
        "use": "Private office desk and built-in shelving wall"
      },
      {
        "name": "Light wood-look tabletop with black metal frame",
        "use": "Shared work table"
      },
      {
        "name": "Textured cream upholstery",
        "use": "Curved sofas and tub armchairs"
      },
      {
        "name": "Large-format beige floor tiles",
        "use": "Flooring throughout"
      }
    ],
    "palette": [
      "Cream",
      "Warm beige",
      "Terracotta",
      "Dark walnut brown",
      "Black"
    ],
    "tags": [
      "Office",
      "Workplace",
      "Warm Neutrals"
    ],
    "featured": false,
    "cover": {
      "src": "/images/projects/work-office/open-plan-view-with-terracotta-gallery-niche.jpg",
      "alt": "3D rendering of an open-plan office with a terracotta gallery niche, slim pendant lights and a raised work zone",
      "caption": "Open-plan view toward the work zone",
      "width": 1489,
      "height": 837
    },
    "images": [
      {
        "src": "/images/projects/work-office/open-plan-view-with-terracotta-gallery-niche.jpg",
        "alt": "3D rendering of an open-plan office with a terracotta gallery niche, slim pendant lights and a raised work zone",
        "caption": "Open-plan view toward the work zone",
        "width": 1489,
        "height": 837
      },
      {
        "src": "/images/projects/work-office/reception-lounge-with-curved-sofa.jpg",
        "alt": "3D rendering of an office reception lounge with a curved cream sofa and a backlit sign on a plaster-look wall",
        "caption": "Reception lounge",
        "width": 1489,
        "height": 837
      },
      {
        "src": "/images/projects/work-office/reception-corner-console-and-artwork.jpg",
        "alt": "3D rendering of an office reception corner with framed artwork above a slim console and a terracotta wainscot",
        "caption": "Reception corner with console and artwork",
        "width": 1489,
        "height": 837
      },
      {
        "src": "/images/projects/work-office/shared-work-table-beside-reception-lounge.jpg",
        "alt": "3D rendering of an office work area with a wood-top table, black high-back chairs and floor-to-ceiling windows",
        "caption": "Shared work table by the windows",
        "width": 1489,
        "height": 837
      },
      {
        "src": "/images/projects/work-office/curved-paneled-wall-with-sconces.jpg",
        "alt": "3D rendering of a curved office wall with moulded panels, a terracotta lower band, wall sconces and a tall mirror",
        "caption": "Curved paneled wall with sconces",
        "width": 1489,
        "height": 837
      },
      {
        "src": "/images/projects/work-office/executive-office-with-curved-window-wall.jpg",
        "alt": "3D rendering of a private office with a dark wood desk, cream armchairs and a curved wall of windows",
        "caption": "Private office with curved window wall",
        "width": 1489,
        "height": 837
      },
      {
        "src": "/images/projects/work-office/office-lounge-with-dark-wood-shelving.jpg",
        "alt": "3D rendering of an office seating area with a cream sofa before a dark wood shelving wall with LED-lit shelves",
        "caption": "Private office seating and shelving wall",
        "width": 1489,
        "height": 837
      },
      {
        "src": "/images/projects/work-office/photo-studio-corner-with-lighting-rigs.jpg",
        "alt": "3D rendering of a photography studio corner with a white backdrop, a green armchair and studio lights on stands",
        "caption": "Photography studio corner",
        "width": 1489,
        "height": 837
      }
    ]
  },
  {
    "slug": "parametric-reception",
    "title": "Parametric Reception",
    "titleAr": "باراميترك ريسيبشن",
    "subtitle": "Reception with a red fin-built desk, ribbed white wall and suspended ceiling sculpture",
    "category": "Commercial",
    "projectType": "Reception / lobby",
    "medium": "3D Visualization",
    "overview": "A reception space built around parametric, fin-based forms, shown in 3D renderings. A red desk of stacked contoured fins sits in front of a white wall of undulating vertical ribs, beneath a large suspended ceiling piece of red vertical blades. Blush walls with rounded corners, a multicolored terrazzo-look floor, linear wall lighting and a pair of pink upholstered armchairs complete the room.",
    "highlights": [
      "Reception desk built from stacked red contoured fins forming a wave-like front",
      "Feature wall of white vertical ribs with an undulating, sculpted surface",
      "Suspended ceiling installation of red vertical blades arranged in curving tiers",
      "Blush walls with rounded corners framing the room",
      "Vertical linear LED strips along the wall edges and small red accent spotlights",
      "Lounge corner with pink upholstered armchairs and a round glass side table"
    ],
    "materials": [
      {
        "name": "Red contoured fin panels",
        "use": "Reception desk and suspended ceiling installation"
      },
      {
        "name": "White contoured fin panels",
        "use": "Parametric feature wall behind the desk"
      },
      {
        "name": "Terrazzo-look flooring",
        "use": "Floor with multicolored chips on a white base"
      },
      {
        "name": "Blush matte wall finish",
        "use": "Walls and rounded corners"
      },
      {
        "name": "Pink textured upholstery",
        "use": "Lounge armchairs"
      }
    ],
    "palette": [
      "Coral red #D04D4C",
      "Blush #E4CDC6",
      "Warm white #F4E2DB",
      "Dusty pink #D38A7B",
      "Sage, mustard and charcoal terrazzo accents"
    ],
    "tags": [
      "Parametric Design",
      "Reception"
    ],
    "featured": false,
    "cover": {
      "src": "/images/projects/parametric-reception/red-fin-desk-under-suspended-ceiling-sculpture.jpg",
      "alt": "3D rendering of a reception with a red fin-built desk, white ribbed wall and red suspended ceiling sculpture",
      "caption": "Front view of the reception",
      "width": 1537,
      "height": 865
    },
    "images": [
      {
        "src": "/images/projects/parametric-reception/red-fin-desk-under-suspended-ceiling-sculpture.jpg",
        "alt": "3D rendering of a reception with a red fin-built desk, white ribbed wall and red suspended ceiling sculpture",
        "caption": "Front view of the reception",
        "width": 1537,
        "height": 865
      },
      {
        "src": "/images/projects/parametric-reception/angled-view-of-sculptural-reception.jpg",
        "alt": "3D rendering of a parametric reception seen at an angle, with red ceiling blades above a wave-form desk",
        "caption": "Angled view of desk and ceiling piece",
        "width": 765,
        "height": 430
      },
      {
        "src": "/images/projects/parametric-reception/ribbed-white-wall-and-lounge-seating.jpg",
        "alt": "3D rendering of a reception's white ribbed parametric wall and red desk, with pink armchairs and a potted branch",
        "caption": "Ribbed wall and lounge corner",
        "width": 765,
        "height": 430
      }
    ]
  },
  {
    "slug": "lounge-seating-area",
    "title": "Lounge Seating Area",
    "titleAr": "منطقة قعدة",
    "subtitle": "A living lounge in warm wood, taupe and soft gold, shown in daylight and evening light",
    "category": "Residential",
    "projectType": "Living room lounge",
    "medium": "3D Visualization",
    "overview": "A lounge seating area arranged around a low sofa, accent armchairs and glass-topped coffee tables. The rear wall combines dark vertical slat panels, flush warm-wood cladding and a black open shelving unit with integrated lighting, beside a large framed artwork and a cluster of small pendants. The scheme is shown in daylight and evening light, with sheer and dark curtains at tall windows.",
    "highlights": [
      "Rear wall layered with dark vertical slat panels, flush warm-wood cladding and a black open shelving unit with integrated LED lighting",
      "Stepped ceiling with a dark perimeter band framing the seating area",
      "Large framed graphic artwork paired with a cluster of small amber pendant lights",
      "Mixed seating: a low taupe sofa, cane-backed armchairs and a woven-frame lounge chair with a checked throw",
      "Glass-topped coffee tables on bronze-tone bases, styled with a tray, decanters and dried pampas grass",
      "Daylight, sunset and evening lighting studies of the same views"
    ],
    "materials": [
      {
        "name": "Warm wood-look cladding",
        "use": "Rear feature wall"
      },
      {
        "name": "Dark vertical slat panels",
        "use": "Wall paneling either side of the shelving"
      },
      {
        "name": "Marble-look floor tiles",
        "use": "Flooring"
      },
      {
        "name": "Glass and bronze-tone metal",
        "use": "Coffee and side tables"
      },
      {
        "name": "Woven cane and rope-look details",
        "use": "Armchair frames"
      },
      {
        "name": "Textured upholstery in taupe and cream",
        "use": "Sofa and armchairs"
      }
    ],
    "palette": [
      "Taupe",
      "Warm walnut brown",
      "Charcoal",
      "Cream",
      "Amber gold",
      "Burgundy accents"
    ],
    "tags": [
      "Living Room",
      "Lounge",
      "Lighting Study"
    ],
    "featured": false,
    "cover": {
      "src": "/images/projects/lounge-seating-area/lounge-seating-area-in-daylight.jpg",
      "alt": "3D rendering of a lounge seating area in daylight with a taupe sofa, wood-slat wall panels and open shelving",
      "caption": "Seating area in daylight",
      "width": 740,
      "height": 643
    },
    "images": [
      {
        "src": "/images/projects/lounge-seating-area/lounge-seating-area-in-daylight.jpg",
        "alt": "3D rendering of a lounge seating area in daylight with a taupe sofa, wood-slat wall panels and open shelving",
        "caption": "Seating area in daylight",
        "width": 740,
        "height": 643
      },
      {
        "src": "/images/projects/lounge-seating-area/lounge-seating-area-evening-lighting.jpg",
        "alt": "3D rendering of the lounge at night, with LED-lit shelving, small amber pendants and a framed graphic artwork",
        "caption": "Seating area with evening lighting",
        "width": 740,
        "height": 643
      },
      {
        "src": "/images/projects/lounge-seating-area/armchairs-by-window-at-sunset.jpg",
        "alt": "3D rendering of lounge armchairs by tall windows at sunset, with sheer curtains and slatted pendant lanterns",
        "caption": "Window corner at sunset",
        "width": 740,
        "height": 643
      },
      {
        "src": "/images/projects/lounge-seating-area/armchairs-by-window-at-night.jpg",
        "alt": "3D rendering of the lounge window corner at night, with a woven-frame armchair, side table and glowing lanterns",
        "caption": "Window corner at night",
        "width": 740,
        "height": 643
      },
      {
        "src": "/images/projects/lounge-seating-area/coffee-table-tray-detail.jpg",
        "alt": "3D rendering of a glass coffee table detail with a tray, crystal decanter, glasses and dried pampas grass",
        "caption": "Coffee table styling detail",
        "width": 740,
        "height": 643
      }
    ]
  },
  {
    "slug": "kids-bedroom",
    "title": "Shared Kids' Bedroom with Gaming Zone",
    "titleAr": "غرفة نوم اولاد",
    "subtitle": "A dark, gaming-themed shared bedroom with LED-lit platform beds and a racing corner",
    "category": "Residential",
    "projectType": "Shared children's bedroom",
    "medium": "3D Visualization",
    "overview": "A shared kids' bedroom concept with a strong gaming theme, presented as 3D renderings. Twin platform beds sit on LED-edged plinths either side of a backlit hexagon-panel wall, and two mirrored study desks flank a wardrobe with arched door panels. A racing simulator under neon game-symbol signs, a beanbag lounge and backlit shelving complete the room, tied together by light lines across the dark ceiling and floor.",
    "highlights": [
      "Twin platform beds raised on plinths edged with cyan LED strips",
      "Central hexagon-panel feature wall with glowing geometric light tiles, set against white brick-look cladding",
      "Linear light lines running across the dark ceiling and inlaid into the floor",
      "Mirrored study stations with white desks, upper cabinets and gaming chairs either side of an arched-door wardrobe",
      "Gaming corner with a racing simulator rig beneath colourful neon game-symbol signs",
      "Lounge corner with two leather beanbags and backlit dark open shelving"
    ],
    "materials": [
      {
        "name": "Dark textured plaster-look finish",
        "use": "Main walls"
      },
      {
        "name": "White brick-look cladding",
        "use": "Wall behind the twin beds"
      },
      {
        "name": "Hexagonal 3D wall panels with backlit light tiles",
        "use": "Central feature wall between the beds"
      },
      {
        "name": "Dark concrete-look flooring with inlaid linear lights",
        "use": "Floor and zoning lines"
      },
      {
        "name": "Dark leather-look upholstery",
        "use": "Platform beds and beanbags"
      },
      {
        "name": "Matte white cabinetry",
        "use": "Study desks and upper cabinets"
      }
    ],
    "palette": [
      "Charcoal black",
      "Slate navy",
      "Ice-blue LED glow",
      "White",
      "Burgundy red",
      "Warm white accent light"
    ],
    "tags": [
      "Bedroom",
      "Kids' Room",
      "Gaming Room"
    ],
    "featured": false,
    "cover": {
      "src": "/images/projects/kids-bedroom/twin-beds-with-hexagon-feature-wall.jpg",
      "alt": "3D rendering of a shared kids' bedroom with twin platform beds on LED-edged plinths beside a glowing hexagon-panel wall",
      "caption": "Twin beds flanking the hexagon feature wall",
      "width": 1600,
      "height": 1600
    },
    "images": [
      {
        "src": "/images/projects/kids-bedroom/twin-beds-with-hexagon-feature-wall.jpg",
        "alt": "3D rendering of a shared kids' bedroom with twin platform beds on LED-edged plinths beside a glowing hexagon-panel wall",
        "caption": "Twin beds flanking the hexagon feature wall",
        "width": 1600,
        "height": 1600
      },
      {
        "src": "/images/projects/kids-bedroom/platform-bed-with-led-plinth.jpg",
        "alt": "3D rendering of a kids' bedroom platform bed on a cyan-lit plinth beside a hexagon-panel wall and slatted window blinds",
        "caption": "Platform bed on an LED-lit plinth",
        "width": 1600,
        "height": 1600
      },
      {
        "src": "/images/projects/kids-bedroom/twin-desks-and-arched-wardrobe.jpg",
        "alt": "3D rendering of a shared kids' bedroom with two study desks and gaming chairs either side of an arched-door wardrobe",
        "caption": "Twin study desks and arched wardrobe",
        "width": 1600,
        "height": 1600
      },
      {
        "src": "/images/projects/kids-bedroom/neon-signs-and-racing-seat.jpg",
        "alt": "3D rendering of a kids' bedroom gaming corner with colourful neon game-symbol signs above a red racing simulator seat",
        "caption": "Neon game-symbol signs above the racing seat",
        "width": 1600,
        "height": 1600
      },
      {
        "src": "/images/projects/kids-bedroom/racing-simulator-gaming-corner.jpg",
        "alt": "3D rendering of a kids' bedroom racing simulator facing a mounted screen under neon signs, with the wardrobe behind",
        "caption": "Racing simulator corner",
        "width": 1600,
        "height": 1600
      },
      {
        "src": "/images/projects/kids-bedroom/racing-simulator-close-up.jpg",
        "alt": "3D rendering of a red and black racing simulator seat with wheel and pedals in a kids' bedroom with ceiling light lines",
        "caption": "Racing simulator seat, wheel and pedals",
        "width": 1600,
        "height": 1600
      },
      {
        "src": "/images/projects/kids-bedroom/beanbags-and-backlit-shelving.jpg",
        "alt": "3D rendering of a kids' bedroom lounge corner with two leather beanbags in front of backlit open display shelving",
        "caption": "Beanbag lounge and backlit shelving",
        "width": 1600,
        "height": 1600
      },
      {
        "src": "/images/projects/kids-bedroom/shelving-and-lounge-angled-view.jpg",
        "alt": "3D rendering of a kids' bedroom with backlit dark shelving and beanbags, looking toward the beds and glowing wall panel",
        "caption": "Shelving and lounge looking toward the beds",
        "width": 1600,
        "height": 1600
      }
    ]
  },
  {
    "slug": "boys-bedroom",
    "title": "Boy's Bedroom with Built-In Study Wall",
    "titleAr": "غرفة نوم ولد",
    "subtitle": "A calm, neutral bedroom concept with slatted wood, a built-in study wall and storage",
    "category": "Residential",
    "projectType": "Boy's bedroom",
    "medium": "3D Visualization",
    "overview": "A boy's bedroom design concept shown in 3D renderings, arranged around a single upholstered bed, a built-in study wall and full-height wardrobes. Vertical slatted wood panels with concealed lighting frame the bed against a charcoal wall, while light grey cabinetry, a warm wood desk and wood-look flooring keep the palette calm and neutral. Black ceiling track spotlights, slim pendants and a large two-tier drum pendant layer the lighting.",
    "highlights": [
      "Bed wall framed by vertical slatted wood panels with concealed LED strips against a charcoal backdrop",
      "Slim black pendant lights hanging either side of a single upholstered bed",
      "Built-in study wall combining a light wood desk, upper cabinets and a lit open shelving column",
      "Full-height handleless wardrobes with long vertical recessed pulls",
      "Black ceiling track spotlights paired with a large two-tier drum pendant",
      "Textured concrete-look walls, woven curtains and wood-look plank flooring"
    ],
    "materials": [
      {
        "name": "Slatted wood-look wall panels",
        "use": "Vertical cladding framing the bed wall"
      },
      {
        "name": "Wood-look plank flooring",
        "use": "Floor throughout the room"
      },
      {
        "name": "Matte light grey cabinetry",
        "use": "Wardrobes and study wall cabinets"
      },
      {
        "name": "Light wood-look finish",
        "use": "Study desk and low display shelf"
      },
      {
        "name": "Textured concrete-look plaster",
        "use": "Wall finish"
      },
      {
        "name": "Woven textured fabric",
        "use": "Full-height curtains and bedding"
      }
    ],
    "palette": [
      "Warm oak",
      "Light grey",
      "Greige",
      "Charcoal",
      "Cream",
      "Black accents"
    ],
    "tags": [
      "Bedroom",
      "Kids' Room",
      "Neutral Palette"
    ],
    "featured": false,
    "cover": {
      "src": "/images/projects/boys-bedroom/bed-wall-with-slatted-wood-panels.jpg",
      "alt": "3D rendering of a boy's bedroom with a single upholstered bed between slatted wood panels, slim pendants and framed artwork",
      "caption": "Bed wall framed by slatted wood panels",
      "width": 1289,
      "height": 755
    },
    "images": [
      {
        "src": "/images/projects/boys-bedroom/bed-wall-with-slatted-wood-panels.jpg",
        "alt": "3D rendering of a boy's bedroom with a single upholstered bed between slatted wood panels, slim pendants and framed artwork",
        "caption": "Bed wall framed by slatted wood panels",
        "width": 1289,
        "height": 755
      },
      {
        "src": "/images/projects/boys-bedroom/full-room-overhead-view.jpg",
        "alt": "3D rendering of a boy's bedroom seen from above, with a single bed on a rug, corner study desk and a large drum pendant",
        "caption": "Overhead view of the full room",
        "width": 1277,
        "height": 752
      },
      {
        "src": "/images/projects/boys-bedroom/study-desk-with-built-in-storage.jpg",
        "alt": "3D rendering of a boy's bedroom study corner with a light wood desk, grey wall cabinets and a lit open shelving column",
        "caption": "Study corner with built-in storage",
        "width": 1288,
        "height": 768
      },
      {
        "src": "/images/projects/boys-bedroom/wardrobes-and-desk-from-above.jpg",
        "alt": "3D rendering of a boy's bedroom from above, showing full-height light grey wardrobes, a wood corner desk and track lights",
        "caption": "Full-height wardrobes and corner desk",
        "width": 1280,
        "height": 768
      }
    ]
  },
  {
    "slug": "private-room",
    "title": "Private Room in Deep Teal",
    "titleAr": "غرفة خاصة",
    "subtitle": "A teal-walled room with a grand piano, red armchair and a dress-form corner",
    "category": "Residential",
    "projectType": "Private room / personal lounge",
    "medium": "3D Visualization",
    "overview": "A private room designed around deep teal, textured walls and a dark wood floor, shown as a series of 3D renderings. A red armchair on a slim gold-toned wire frame sits beside a black tulip side table and a backlit jungle-print artwork, with a black grand piano and a tripod floor lamp along the same wall. A corner styled with a dress form, a tall plant and a leaning painting adds a personal note, and a large window and concealed cove lighting give the room distinct daytime and evening moods.",
    "highlights": [
      "Deep teal walls with a mottled, textured finish wrapping the whole room",
      "Red armchair on a slim gold-toned wire frame beside a glossy black tulip side table",
      "Backlit jungle-print artwork with leopards and palm leaves as the focal point of the main wall",
      "Black grand piano with carved legs and an ornate music stand, next to a tripod floor lamp",
      "Concealed cove lighting along ceiling and wall edges, plus dome pendants and a wall picture light",
      "Corner vignette with a dress form in a white dress and hat, a tall potted plant and a leaning painting"
    ],
    "materials": [
      {
        "name": "Textured teal wall finish",
        "use": "All walls"
      },
      {
        "name": "Dark wood plank flooring",
        "use": "Floor"
      },
      {
        "name": "Red upholstery",
        "use": "Armchair seat and back"
      },
      {
        "name": "Gold-toned metal wire",
        "use": "Armchair frame"
      },
      {
        "name": "Glossy black finish",
        "use": "Tulip side table and grand piano"
      },
      {
        "name": "Low-pile mauve-grey rug",
        "use": "Area rug in front of the seating wall"
      }
    ],
    "palette": [
      "Deep teal",
      "Dark walnut brown",
      "Crimson red",
      "Gold",
      "Black",
      "Mauve grey"
    ],
    "tags": [
      "Private Room",
      "Residential",
      "Bold Color"
    ],
    "featured": false,
    "cover": {
      "src": "/images/projects/private-room/teal-room-with-piano-and-window.jpg",
      "alt": "3D rendering of a teal private room in daylight with a red armchair, grand piano, tripod lamp and large window",
      "caption": "The room in daylight",
      "width": 843,
      "height": 643
    },
    "images": [
      {
        "src": "/images/projects/private-room/teal-room-with-piano-and-window.jpg",
        "alt": "3D rendering of a teal private room in daylight with a red armchair, grand piano, tripod lamp and large window",
        "caption": "The room in daylight",
        "width": 843,
        "height": 643
      },
      {
        "src": "/images/projects/private-room/teal-room-evening-cove-lighting.jpg",
        "alt": "3D rendering of the same teal room at night, lit by cove lighting, dome pendants and a backlit jungle-print artwork",
        "caption": "Evening lighting scheme",
        "width": 843,
        "height": 643
      },
      {
        "src": "/images/projects/private-room/red-armchair-with-brass-frame.jpg",
        "alt": "3D rendering close-up of a red armchair on a gold wire frame beside a black tulip side table and jungle artwork",
        "caption": "Armchair and side table detail",
        "width": 843,
        "height": 643
      },
      {
        "src": "/images/projects/private-room/dress-form-corner-with-plant.jpg",
        "alt": "3D rendering of a teal room corner with a dress form in a white dress and hat, a tall plant and a leaning painting",
        "caption": "Dress-form corner",
        "width": 843,
        "height": 643
      }
    ]
  }
]
