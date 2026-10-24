import type { ImageMetadata } from "astro";

// SUPtown Music & Arts
import suptownGalleryWall from "../assets/portfolio/suptown/gallery-wall.jpg";
import suptownLaunchAudience from "../assets/portfolio/suptown/launch-concert-audience.jpg";
import suptownLaunchViolin from "../assets/portfolio/suptown/launch-concert-violin.jpg";
import suptownPerformancePiano from "../assets/portfolio/suptown/performance-piano.jpg";
import suptownStudioDoors from "../assets/portfolio/suptown/studio-doors.jpg";
import suptownCorridorTriangle from "../assets/portfolio/suptown/corridor-triangle.jpg";
import suptownCorridorArt from "../assets/portfolio/suptown/corridor-art.jpg";
import suptownPracticeRooms from "../assets/portfolio/suptown/practice-rooms.jpg";
import suptownStage from "../assets/portfolio/suptown/stage-fireplace.jpg";
import suptownArtClass from "../assets/portfolio/suptown/art-class.jpg";
import suptownArtProgram from "../assets/portfolio/suptown/art-program.jpg";

// Fort Lee School of Music
import flsmReception from "../assets/portfolio/flsm/reception.jpg";
import flsmLogo from "../assets/portfolio/flsm/logo.jpg";
import flsmStreetFestival from "../assets/portfolio/flsm/street-festival.jpg";
import flsmHallway from "../assets/portfolio/flsm/hallway.jpg";
import flsmRoomThree from "../assets/portfolio/flsm/room-three.jpg";
import flsmPianoStudio from "../assets/portfolio/flsm/piano-studio.jpg";
import flsmInstrumentWall from "../assets/portfolio/flsm/instrument-wall.jpg";
import flsmPanorama from "../assets/portfolio/flsm/concert-panorama.jpg";
import flsmDiMenna from "../assets/portfolio/flsm/dimenna-concert.jpg";
import flsmGuitarOrchestra from "../assets/portfolio/flsm/guitar-orchestra.jpg";
import flsmGuestArtist from "../assets/portfolio/flsm/guest-artist.jpg";
import flsmSoundPlay from "../assets/portfolio/flsm/soundplay-concert.jpg";
import flsmMap from "../assets/music-school-map.png";
import flsmInstrumentsMap from "../assets/music-school-instruments.png";

// ST∆CK
import stackHero from "../assets/portfolio/stack/hero.jpg";
import stackPlan from "../assets/portfolio/stack/appstore-plan.png";
import stackCoach from "../assets/portfolio/stack/appstore-coach.png";
import stackMuscles from "../assets/portfolio/stack/appstore-muscles.png";
import stackLog from "../assets/portfolio/stack/appstore-log.png";
import stackTrends from "../assets/portfolio/stack/appstore-trends.png";
import stackIcon from "../assets/portfolio/stack/app-icon.png";

// Praxis Stack (public demo, sample data only)
import praxisSiteHero from "../assets/portfolio/praxis/site-hero.png";
import praxisDashboard from "../assets/portfolio/praxis/demo-dashboard.png";
import praxisCalendar from "../assets/portfolio/praxis/demo-calendar-attended.png";
import praxisBilling from "../assets/portfolio/praxis/demo-billing.png";
import praxisInsights from "../assets/portfolio/praxis/demo-notes-insights.png";
import praxisPractice from "../assets/portfolio/praxis/demo-notes-practice.png";
import praxisPayroll from "../assets/portfolio/praxis/demo-payroll.png";

export const STACK_URL = "https://apps.apple.com/us/app/st-ck/id6768111057";

export interface Shot {
  src: ImageMetadata;
  alt: string;
  caption?: string;
  /** Width / height of the art-directed crop. Omit to keep the native ratio. */
  ratio?: number;
  /** object-position for cropped shots. */
  position?: string;
  /** Show the whole image on a plate instead of cropping (logos, icons). */
  plate?: "light" | "dark";
}

/**
 * full     one image across the gallery
 * pair     two equal columns
 * wide-left / wide-right   3 : 2 split, heights matched to the first shot
 * trio     three equal columns
 * phones   iPhone screenshots on a dark stage
 * screen   a product window on a dark stage
 */
export type RowLayout = "full" | "pair" | "wide-left" | "wide-right" | "trio" | "phones" | "screen";

export interface Row {
  layout: RowLayout;
  shots: Shot[];
}

export interface Chapter {
  eyebrow: string;
  title: string;
  text: string;
  rows: Row[];
}

export interface CaseStudy {
  slug: string;
  number: string;
  title: string;
  /** Spoken name when the visual title uses symbols (ST∆CK). */
  spokenTitle?: string;
  categories: string[];
  /** Short label for the index list. */
  when: string;
  tagline: string;
  summary: string;
  description: string;
  facts: { label: string; value: string }[];
  overview: string[];
  role: string[];
  outcomes: { value: string; label: string }[];
  /** Heading for the outcomes block; "Highlights" where results aren't metrics. */
  outcomesLabel?: string;
  hero: Shot;
  /** Crop used for the card on /portfolio. */
  cardRatio: number;
  chapters: Chapter[];
  links: { href: string; label: string }[];
  note?: string;
  /** Small mark shown beside the project links (app icon). */
  badge?: Shot;
  ogImage: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "suptown-music-arts",
    number: "01",
    title: "SUPtown Music & Arts",
    categories: ["Creative Environments", "Music & Culture", "Live Experiences"],
    when: "Opened 2019",
    tagline:
      "A street-level storefront in uptown Manhattan, rebuilt as one home for music lessons, live performance, and visual art.",
    summary:
      "Co-founded and led concept-to-launch development of a multidisciplinary music and arts venue — classrooms, a performance space, and an art gallery inside one fully renovated commercial space.",
    description:
      "SUPtown Music & Arts: a multidisciplinary music and arts venue in uptown Manhattan, co-founded by Michael Gilsinan and launched with a live concert in December 2019.",
    facts: [
      { label: "Role", value: "Co-founder" },
      { label: "Opened", value: "December 2019" },
      { label: "Location", value: "Uptown Manhattan, New York" },
      { label: "Program", value: "Music classrooms, performance space, art gallery" },
    ],
    overview: [
      "SUPtown Music & Arts was conceived as a multidisciplinary destination: music classrooms, a live performance space, and an art gallery inside one fully renovated commercial space. It became the second home of Fort Lee School of Music, in uptown Manhattan.",
      "The plan put learning, performing, and exhibiting under one roof. The front room hosts concerts and art classes, corridors double as exhibition walls, and a bold graphic system runs through the corridors and studios.",
    ],
    role: [
      "Co-founded the venue and led its development from concept to launch",
      "Helped shape the physical environment through a full renovation, working alongside the architects and build-out team",
      "Shaped programming, staffing, and the overall customer experience",
      "Launched with a live concert in December 2019, followed by the inaugural semester in January 2020",
    ],
    outcomes: [
      { value: "Dec 2019", label: "Launch concert in the new space" },
      { value: "Jan 2020", label: "Inaugural semester" },
      { value: "3 in 1", label: "Classrooms, stage, and gallery in one venue" },
    ],
    hero: {
      src: suptownGalleryWall,
      alt: "The SUPtown Music & Arts front room: a white gallery wall with the SUPtown logo, framed Art and Music posters, track lighting, and bold yellow diagonal color blocks above a lounge seating area.",
      caption: "The front room: gallery, lounge, and concert venue.",
    },
    cardRatio: 4 / 3,
    chapters: [
      {
        eyebrow: "Wayfinding",
        title: "Color and type that carry you through the space",
        text: "Diagonal planes of yellow and charcoal cut across walls and ceilings, and oversized numerals mark every studio door. The graphics turn a long, narrow storefront into a sequence of bright, legible rooms.",
        rows: [
          {
            layout: "full",
            shots: [
              {
                src: suptownStudioDoors,
                alt: "Two studio doors marked with oversized black numerals 7 and 8, small yellow square windows, and a charcoal diagonal painted across the wall.",
                caption: "Studios 7 and 8.",
                ratio: 21 / 9,
                position: "center 55%",
              },
            ],
          },
          {
            layout: "pair",
            shots: [
              {
                src: suptownCorridorTriangle,
                alt: "A white corridor with a large yellow triangle painted across the floor-to-ceiling wall; two people stand along the hallway.",
                ratio: 4 / 3,
              },
              {
                src: suptownPracticeRooms,
                alt: "Two bright yellow practice-room doorways set into a charcoal wall, with framed artwork and black metal chairs.",
                ratio: 4 / 3,
              },
            ],
          },
        ],
      },
      {
        eyebrow: "Performance",
        title: "A room that changes roles",
        text: "The front room works as a gallery most days and a concert hall on performance nights. A raised, stepped platform with a built-in modern fireplace gives recitals an intimate setting and doubles as seating.",
        rows: [
          {
            layout: "wide-left",
            shots: [
              {
                src: suptownStage,
                alt: "A woman sits on a raised, two-step platform with a long built-in modern fireplace behind it, beneath a row of track lights.",
                caption: "Stepped stage with built-in fireplace.",
                ratio: 3 / 2,
              },
              {
                src: suptownPerformancePiano,
                alt: "A grand piano in the foreground of the gallery room as an audience of families watches a student performance.",
                caption: "The gallery set for a recital.",
              },
            ],
          },
        ],
      },
      {
        eyebrow: "Opening night · December 2019",
        title: "Launching with live music",
        text: "SUPtown opened to the public with a concert in December 2019, with Fort Lee School of Music students performing in the new space. The inaugural semester began the following month.",
        rows: [
          {
            layout: "wide-right",
            shots: [
              {
                src: suptownLaunchViolin,
                alt: "A violinist and a young student in a red sweater perform side by side in front of a full room, with the SUPtown logo on the wall behind the audience.",
                caption: "A violin duet at the opening concert.",
                ratio: 4 / 5,
                position: "30% center",
              },
              {
                src: suptownLaunchAudience,
                alt: "A full audience of families and students seated in rows in the SUPtown gallery, framed posters and the SUPtown logo on the wall behind them.",
                caption: "A full house for the launch concert.",
              },
            ],
          },
        ],
      },
      {
        eyebrow: "Beyond music",
        title: "Art in the same rooms",
        text: "Visual art was part of the program alongside music. Figure-drawing classes used the stage steps, students painted at long communal tables, and the hallways doubled as walls for artwork.",
        rows: [
          {
            layout: "trio",
            shots: [
              {
                src: suptownArtClass,
                alt: "Students sit with sketchbooks drawing a model posed on the stepped stage during a figure drawing class.",
                caption: "Drawing from life on the stage steps.",
                ratio: 4 / 3,
              },
              {
                src: suptownArtProgram,
                alt: "Children paint at a long table covered in paper, with framed student art on the wall and the street visible through the storefront windows.",
                caption: "Art program, March 2020.",
                ratio: 4 / 3,
              },
              {
                src: suptownCorridorArt,
                alt: "Two musicians, one holding a guitar, sit in a gray hallway lined with framed artwork beside numbered studio doors.",
                caption: "Corridors double as exhibition space.",
                ratio: 4 / 3,
              },
            ],
          },
        ],
      },
    ],
    links: [
      { href: "https://www.fortleemusicschool.com/fort-lee-music-school-space", label: "See the space" },
      { href: "https://www.fortleemusicschool.com/events", label: "Events archive" },
    ],
    ogImage: "/og/portfolio-suptown-music-arts.jpg",
  },
  {
    slug: "fort-lee-school-of-music",
    number: "02",
    title: "Fort Lee School of Music",
    categories: ["Brand Experience", "Visual Identity", "Music Education"],
    when: "Founded 2010",
    tagline:
      "A music school grown into a recognizable brand — one identity carried from the logo to the hallways to the concert stage.",
    summary:
      "Founded in 2010 and grown to two locations, 30 staff, and more than 300 weekly classes, with a creative identity carried consistently across branding, interiors, and live events.",
    description:
      "Fort Lee School of Music: founded by Michael Gilsinan in 2010 and grown to two locations, 30 staff, 1,400+ students served, and 300+ weekly classes.",
    facts: [
      { label: "Role", value: "Founder" },
      { label: "Founded", value: "2010" },
      { label: "Locations", value: "Fort Lee, NJ · New York, NY" },
      { label: "Team", value: "30 teachers and staff" },
    ],
    overview: [
      "I founded Fort Lee School of Music in 2010, during my second year as a conservatory student, and grew it into a school with locations in Fort Lee, New Jersey, and New York City.",
      "Alongside teaching and operations, we built a consistent creative identity — visual branding, marketing materials, and physical spaces — that created a consistent experience across lessons, performances, and community events.",
    ],
    role: [
      "Founded the school and led it from launch through growth to two locations",
      "Co-developed the creative identity across visual branding, marketing materials, and physical environments",
      "Produced student and faculty concerts at venues including the DiMenna Center for Classical Music and Baruch College",
      "Built and led a team of 30 teachers and staff",
    ],
    outcomes: [
      { value: "1,400+", label: "Students served" },
      { value: "300+", label: "Classes every week" },
      { value: "30", label: "Teachers and staff" },
      { value: "2", label: "Locations, NJ and NYC" },
      { value: "+59%", label: "Revenue growth, 2017–2019" },
      { value: "50+", label: "Public concerts in NJ and NYC" },
    ],
    outcomesLabel: "Outcomes",
    hero: {
      src: flsmReception,
      alt: "The Fort Lee School of Music front desk: a white-and-red desk beneath the school logo, green and white color-blocked walls, and a door marked with an oversized numeral 1, its caret, and translations.",
      caption: "Reception and Studio 1, Fort Lee.",
      ratio: 16 / 10,
      position: "center 58%",
    },
    cardRatio: 4 / 3,
    chapters: [
      {
        eyebrow: "Identity",
        title: "A mark rooted in place",
        text: "The logo draws a suspension bridge out of beamed notes — Fort Lee sits at the foot of the George Washington Bridge. The mark and its blue-and-green palette carried across signage, banners, print, and the school's presence at community events.",
        rows: [
          {
            layout: "wide-right",
            shots: [
              {
                src: flsmLogo,
                alt: "The Fort Lee School of Music logo: a blue suspension bridge formed from beamed music notes over a green arc, above the school name.",
                caption: "The Fort Lee School of Music mark.",
                ratio: 1,
                plate: "light",
              },
              {
                src: flsmStreetFestival,
                alt: "Staff stand in front of a Fort Lee School of Music booth with a large green-and-white logo banner at an outdoor street festival.",
                caption: "Fort Lee Street Art & Music Festival, 2016.",
              },
            ],
          },
        ],
      },
      {
        eyebrow: "Environment",
        title: "Rooms named for scale degrees",
        text: "Every studio door carries an oversized numeral topped with a caret — the notation musicians use for scale degrees — along with its solfège syllable and the same number in Korean, Chinese, Hebrew, Spanish, and Russian. Bands of primary color frame the doors and lead students down the hall.",
        rows: [
          {
            layout: "pair",
            shots: [
              {
                src: flsmHallway,
                alt: "A bright hallway with a black grand piano, a yellow accent wall with children's tables, a wall of hanging folk instruments, and blue-framed doors marked with large numerals.",
                caption: "Main hallway, with Studio 6 at right.",
                ratio: 4 / 3,
              },
              {
                src: flsmRoomThree,
                alt: "An open studio door painted with a huge numeral 3 reveals a small room with a black baby grand piano, framed by red and blue trim.",
                caption: "Studio 3.",
                ratio: 4 / 3,
              },
            ],
          },
          {
            layout: "wide-left",
            shots: [
              {
                src: flsmPianoStudio,
                alt: "A large white studio with two grand pianos and a player seated at each, with blue trim outlining the doors and floor.",
                caption: "Two-piano studio.",
                ratio: 4 / 3,
              },
              {
                src: flsmInstrumentWall,
                alt: "A waiting area with a wall of mandolins and balalaikas, a mural, and child-size blue chairs.",
                caption: "Waiting area and instrument wall.",
              },
            ],
          },
        ],
      },
      {
        eyebrow: "Performance",
        title: "Giving every student a stage",
        text: "Student recitals, faculty concerts, and visiting artists filled the calendar — in the school's own rooms and on stages like the DiMenna Center for Classical Music in New York City. The school was also home to Fort Lee's first children's classical guitar orchestra.",
        rows: [
          {
            layout: "full",
            shots: [
              {
                src: flsmPanorama,
                alt: "A panoramic banner combining three photos of students and families gathered on wood-paneled concert stages.",
                caption: "Concert banner from the school's website.",
              },
            ],
          },
          {
            layout: "pair",
            shots: [
              {
                src: flsmDiMenna,
                alt: "Dozens of students in concert dress pose on a wood-paneled stage at the DiMenna Center for Classical Music.",
                caption: "Spring Concert 2019, DiMenna Center for Classical Music.",
                ratio: 3 / 2,
              },
              {
                src: flsmGuitarOrchestra,
                alt: "A teacher conducts a children's classical guitar orchestra seated at music stands in a sunlit hall.",
                caption: "The children's classical guitar orchestra, 2018.",
                ratio: 3 / 2,
              },
            ],
          },
          {
            layout: "pair",
            shots: [
              {
                src: flsmGuestArtist,
                alt: "A classical guitarist performs in front of a studio door painted with the numeral 7, its solfège syllable 'si', and translations.",
                caption: "Guest artist Celil Refik Kaya in concert, 2016.",
                ratio: 3 / 2,
                position: "center 30%",
              },
              {
                src: flsmSoundPlay,
                alt: "An audience in blue chairs watches a piano and violin performance in a studio with blue curtains and a grand piano.",
                caption: "SoundPlay concert series, Fort Lee, 2018.",
                ratio: 3 / 2,
              },
            ],
          },
        ],
      },
      {
        eyebrow: "Audience",
        title: "Knowing who we served",
        text: "Mapping enrollment showed where families traveled from and which instruments drew them: 1,419 students across the New York and New Jersey metro area, led by piano and guitar.",
        rows: [
          {
            layout: "pair",
            shots: [
              {
                src: flsmMap,
                alt: "Map of the New York / New Jersey metro area with orange markers showing where 1,419 students came from, clustered densely around Fort Lee and upper Manhattan.",
                caption: "Where students came from.",
              },
              {
                src: flsmInstrumentsMap,
                alt: "The same metro map with markers colored by instrument — piano, guitar, and voice the most common — led by 461 piano and 322 guitar students.",
                caption: "Enrollment by instrument.",
                ratio: 833 / 758,
              },
            ],
          },
        ],
      },
    ],
    links: [
      { href: "https://www.fortleemusicschool.com/", label: "fortleemusicschool.com" },
      { href: "https://www.fortleemusicschool.com/events", label: "Events archive" },
    ],
    ogImage: "/og/portfolio-fort-lee-school-of-music.jpg",
  },
  {
    slug: "stack",
    number: "03",
    title: "ST∆CK",
    spokenTitle: "Stack",
    categories: ["Consumer Product Design", "UI & UX", "AI"],
    when: "iOS · Live",
    tagline:
      "A strength-training app with a personal AI coach — conceived, designed, built, and shipped by one person.",
    summary:
      "A consumer iOS app combining personalized AI coaching, workout tracking, progress analytics, and Apple Health integration, taken from concept through design, development, and App Store launch.",
    description:
      "ST∆CK: a consumer iOS app with personalized AI coaching, workout tracking, progress analytics, and Apple Health sync, independently designed, built, and published by Michael Gilsinan.",
    facts: [
      { label: "Role", value: "Solo creator" },
      { label: "Platform", value: "iOS, iPhone and iPad" },
      { label: "Built with", value: "React Native, Expo, Railway" },
      { label: "Status", value: "Live on the App Store" },
    ],
    overview: [
      "ST∆CK started as a tool for my own training: a fast way to log sets at the gym and actually see progress over time. It grew into a complete consumer product with a personal AI coach, analytics, workout plans, and Apple Health sync.",
      "The design problem was density. Strength training produces a lot of numbers — sets, reps, weights, rest times, muscle groups, months of history. The interface had to make that information quick to enter mid-workout and easy to read at a glance.",
    ],
    role: [
      "Conceived the product and owned it end to end: UX, interface design, development, and App Store release",
      "Designed the visual system, from the interface to the app icon and App Store screenshots",
      "Built with React Native and Expo, a Railway backend, RevenueCat subscriptions, and Resend email",
      "Integrated Apple Health sync and an AI coach grounded in each lifter's own training history",
    ],
    outcomes: [
      { value: "Live", label: "On the App Store for iPhone and iPad" },
      { value: "22", label: "Muscle groups in the body heatmap" },
      { value: "1", label: "Person, from concept to launch" },
    ],
    hero: {
      src: stackHero,
      alt: "Five ST∆CK App Store screenshots in a row on a dark indigo background: workout plan, AI coach, muscle heatmap, workout log, and weekly volume trends.",
      caption: "App Store screenshots.",
    },
    cardRatio: 2,
    chapters: [
      {
        eyebrow: "Interface",
        title: "Designed for the gym floor",
        text: "A dark interface with a restrained palette led by indigo keeps attention on the numbers. The rest timer stays pinned to the top of the screen, each set is a single row of weight and reps, and logging sits at the center of the tab bar.",
        rows: [
          {
            layout: "phones",
            shots: [
              {
                src: stackPlan,
                alt: "ST∆CK workout plan screen: a rest timer above a front-and-back body map with trained muscles highlighted and a day-by-day checklist.",
                caption: "Plans fill in a body map as you train.",
              },
              {
                src: stackLog,
                alt: "ST∆CK workout log screen: a pinned rest timer above an exercise card for bench press with three sets of weight and reps.",
                caption: "Log sets without leaving the timer.",
              },
            ],
          },
        ],
      },
      {
        eyebrow: "AI coach",
        title: "Coaching grounded in your own data",
        text: "The aiCoach answers questions about form, rest, and programming using the lifter's actual history — recent sessions, muscle recovery, and personal records — so the advice is specific rather than generic.",
        rows: [
          {
            layout: "phones",
            shots: [
              {
                src: stackCoach,
                alt: "ST∆CK aiCoach screen: a chat where the coach answers how long to rest between sets, with guidance for strength, hypertrophy, and endurance.",
                caption: "Ask about form, rest, or programming.",
              },
            ],
          },
        ],
      },
      {
        eyebrow: "Analytics",
        title: "Making progress visible",
        text: "A full-body heatmap shows every muscle trained across 22 groups, filterable by 7, 30, 90, or 365 days. Weekly volume trends per exercise turn months of logged sets into a readable line.",
        rows: [
          {
            layout: "phones",
            shots: [
              {
                src: stackMuscles,
                alt: "ST∆CK muscles trained screen: a front-view body heatmap in shades of purple and pink with 7, 30, 90, 365-day filters and summary stats.",
                caption: "A heatmap across 22 muscle groups.",
              },
              {
                src: stackTrends,
                alt: "ST∆CK weekly volume trend for bench press: a line chart over months above a dated list of weights and reps.",
                caption: "Weekly volume, per exercise.",
              },
            ],
          },
        ],
      },
    ],
    links: [{ href: STACK_URL, label: "View on the App Store" }],
    badge: { src: stackIcon, alt: "The ST∆CK app icon: three stacked horizontal bars, the bottom one blue." },
    ogImage: "/og/portfolio-stack.jpg",
  },
  {
    slug: "praxis-stack",
    number: "04",
    title: "Praxis Stack",
    categories: ["Music Technology", "Digital Product Design", "Applied AI"],
    when: "Web · Live",
    tagline:
      "Studio-management software shaped by a decade of running a music school, with AI that reads every lesson note.",
    summary:
      "A platform for scheduling, attendance-based billing, payroll, and reporting that supports Fort Lee School of Music's continuing students, plus an AI feature that turns lesson notes into student and studio-wide insight.",
    description:
      "Praxis Stack: studio-management software for music schools with scheduling, attendance-based billing, payroll, reporting, and AI lesson-note insights, independently designed and built by Michael Gilsinan.",
    facts: [
      { label: "Role", value: "Solo designer and developer" },
      { label: "Platform", value: "Web" },
      { label: "Built for", value: "Fort Lee School of Music" },
      { label: "Status", value: "Live" },
    ],
    overview: [
      "Praxis Stack grew out of a decade of scheduling lessons, billing families, and paying teachers. It brings those jobs into one system that supports Fort Lee School of Music's continuing students and day-to-day operations.",
      "The core idea is that attendance is the source of truth. Mark a lesson attended and the family's ledger, the teacher's pay, and the studio's reports all update from that single action.",
    ],
    role: [
      "Designed, developed, and launched the platform independently",
      "Built around real workflows from running the school: scheduling, cancellations, family billing, and payroll",
      "Created an AI feature that analyzes instructor lesson notes to produce individual student insights and studio-wide trends",
      "Launched with a public website and a hands-on interactive demo",
    ],
    outcomes: [
      { value: "1 action", label: "Attendance drives billing, payroll, and reports" },
      { value: "Every note", label: "Read by AI for student and studio-wide insight" },
      { value: "Live", label: "Supporting the school's continuing students" },
    ],
    hero: {
      src: praxisSiteHero,
      alt: "The Praxis Stack website hero, reading 'Run the studio. Not the spreadsheets.', beside a dashboard window showing lessons this week, payments collected, attendance, and today's schedule.",
      caption: "praxisstack.com",
    },
    cardRatio: 2,
    chapters: [
      {
        eyebrow: "Home",
        title: "Start with the studio's day",
        text: "The home screen answers what an owner asks first: how many lessons are on this week, what has been collected, how attendance is trending, and who is coming in today.",
        rows: [
          {
            layout: "screen",
            shots: [
              {
                src: praxisDashboard,
                alt: "Praxis Stack home dashboard with cards for lessons this week, amount collected, and attendance rate, above today's lesson schedule with attended and scheduled statuses.",
                caption: "Home dashboard.",
              },
            ],
          },
        ],
      },
      {
        eyebrow: "Scheduling and billing",
        title: "Attendance is the source of truth",
        text: "Marking a lesson attended posts the charge to the family's ledger automatically — no double entry. Cancellation rules are a single choice, and families pay from a link by card or bank.",
        rows: [
          {
            layout: "screen",
            shots: [
              {
                src: praxisCalendar,
                alt: "Praxis Stack weekly calendar of color-coded lessons; a selected lesson is marked attended and the charge appears in the family ledger panel.",
                caption: "Weekly calendar: one click posts the charge.",
              },
            ],
          },
          {
            layout: "screen",
            shots: [
              {
                src: praxisBilling,
                alt: "Praxis Stack family billing ledger with invoices, payments, and a book purchase, beside a preview of the family's online pay page.",
                caption: "Family ledger and the pay page families see.",
              },
            ],
          },
        ],
      },
      {
        eyebrow: "Applied AI",
        title: "AI that reads every lesson note",
        text: "Teachers write notes the way they always have. The AI reads them across every student and surfaces what matters — recurring themes, students who need attention, and concrete action items — then pulls each student's repertoire, scales, and progress into structured practice tables.",
        rows: [
          {
            layout: "screen",
            shots: [
              {
                src: praxisInsights,
                alt: "A teacher's lesson note for a piano student beside AI-generated studio insights grouped into themes, students needing attention, and action items.",
                caption: "Studio-wide insights generated from lesson notes.",
              },
            ],
          },
          {
            layout: "screen",
            shots: [
              {
                src: praxisPractice,
                alt: "A lesson note beside an AI-built practice table listing the student's repertoire status, scales with tempos, and chords in progress.",
                caption: "Practice tables pulled from a student's notes.",
              },
            ],
          },
        ],
      },
      {
        eyebrow: "Payroll and reporting",
        title: "Teachers paid from lessons taught",
        text: "Pay is calculated from attended lessons at each teacher's rate, and revenue, payroll, and profit roll up into a twelve-month view.",
        rows: [
          {
            layout: "screen",
            shots: [
              {
                src: praxisPayroll,
                alt: "Praxis Stack payroll table showing lessons, rates, and earnings per teacher for a pay period, beside a twelve-month revenue, payroll, and profit chart.",
                caption: "Payroll and twelve-month profit.",
              },
            ],
          },
        ],
      },
    ],
    links: [
      { href: "https://www.praxisstack.com/", label: "praxisstack.com" },
      { href: "https://www.praxisstack.com/#demo", label: "Try the live demo" },
    ],
    note: "Screens are from Praxis Stack's public demo, which uses a fictional sample studio. No real student, family, or staff data appears on this page.",
    ogImage: "/og/portfolio-praxis-stack.jpg",
  },
];

export function spoken(study: Pick<CaseStudy, "title" | "spokenTitle">) {
  return study.spokenTitle ?? study.title;
}
