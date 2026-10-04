import {
  Award,
  BookOpen,
  Brain,
  Calculator,
  ClipboardCheck,
  FlaskConical,
  Globe,
  Leaf,
  Library,
  MessagesSquare,
  SpellCheck,
  Crown,
  Gem,
  GraduationCap,
  Heart,
  Laptop,
  Lightbulb,
  Mic,
  Music,
  Palette,
  PenTool,
  Puzzle,
  Shield,
  Sparkles,
  Sprout,
  Sun,
  Target,
  TrendingUp,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";

// All site content lives here so it can be edited in one place.
// Source: Ms Bee company profile and official price list.

export const site = {
  name: "Ms Bee Educational Support",
  fullName: "Ms Bee Educational Support and Tutorial Center",
  shortName: "Ms Bee",
  tagline: "Learn • Grow • Succeed",
  slogan: "Quality Learning. Better Future.",
  motto: "Building Strong Foundations for Bright Futures",
  phones: [
    { display: "0912 199 969", tel: "+251912199969" },
    { display: "0929 050 675", tel: "+251929050675" },
    { display: "+251 98 776 2492", tel: "+251987762492" },
  ],
  whatsapp: "251929050675",
  address: {
    area: "Torhailoch",
    detail: "In front of Queens Supermarket, near Lebawi International School",
    city: "Addis Ababa, Ethiopia",
  },
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Torhailoch+Queens+Supermarket+Addis+Ababa",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs & Fees" },
  { href: "/early-years", label: "Early Years" },
  { href: "/summer-camp", label: "Summer Camp" },
  { href: "/books", label: "Books" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
];

export const formatEtb = (n: number) => `${n.toLocaleString("en-US")} ETB`;

export type ProgramKey = "tutoring" | "early-years" | "camp";

// Overview cards on the home page.
export const programs: {
  key: ProgramKey;
  title: string;
  href: string;
  ages: string;
  description: string;
  icon: LucideIcon;
  color: string;
  highlights: string[];
}[] = [
  {
    key: "tutoring",
    title: "Tutoring & Academic Support",
    href: "/programs",
    ages: "KG – High School",
    description:
      "Focus groups, one-to-one sessions, a VIP intensive program, and online classes — homework help and exam preparation that builds real understanding.",
    icon: GraduationCap,
    color: "from-sky-400 to-blue-600",
    highlights: ["Focus groups", "One-to-one", "VIP intensive", "Online classes"],
  },
  {
    key: "early-years",
    title: "Early Years & Daycare",
    href: "/early-years",
    ages: "Young learners",
    description:
      "Kindergarten readiness with Jolly Phonics, reading and writing, and play-based learning in a safe, caring environment.",
    icon: Sprout,
    color: "from-emerald-400 to-green-600",
    highlights: ["Jolly Phonics", "School readiness", "Play-based", "Weekend program"],
  },
  {
    key: "camp",
    title: "Summer Camp",
    href: "/summer-camp",
    ages: "July – August",
    description:
      "Themed weekly activities — art and craft, storytelling, music, public speaking, and problem-solving — so learning never takes a holiday.",
    icon: Sun,
    color: "from-honey-400 to-orange-500",
    highlights: ["Weekly themes", "Art & craft", "Storytelling", "Confidence building"],
  },
];

export const stats = [
  { value: 5, prefix: "", suffix: "", label: "Learning programs" },
  { value: 15, prefix: "1:", suffix: "", label: "Max focus-group ratio" },
  { value: 5, prefix: "", suffix: " days", label: "A week, flexible times" },
  { value: 100, prefix: "", suffix: "%", label: "Child-centered learning" },
];

// Competitive advantages from the company profile.
export const whyUs: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Personal Attention",
    text: "Small class sizes and one-to-one options so every child gets the support they need.",
    icon: Users,
  },
  {
    title: "Strong Foundations",
    text: "A clear focus on literacy, numeracy, and critical thinking — the skills everything else builds on.",
    icon: Puzzle,
  },
  {
    title: "Safe & Welcoming",
    text: "A child-friendly environment where children feel comfortable, confident, and curious.",
    icon: Shield,
  },
  {
    title: "Passionate Educators",
    text: "Experienced teachers who integrate creativity with academics and love what they do.",
    icon: Heart,
  },
  {
    title: "Trusted Curriculum",
    text: "Lessons and books based on Cambridge, Pearson, and the Ethiopian curriculum.",
    icon: Library,
  },
  {
    title: "Organised & Connected",
    text: "A sophisticated school management system keeps student records, attendance, and progress well organised.",
    icon: ClipboardCheck,
  },
];

// Curriculum sources for our learning materials.
export const curricula: { name: string; text: string; icon: LucideIcon }[] = [
  { name: "Cambridge", text: "Internationally recognised Cambridge-based books and resources.", icon: Globe },
  { name: "Pearson", text: "Structured Pearson-based materials for steady, measurable progress.", icon: BookOpen },
  { name: "Ethiopian Curriculum", text: "Aligned with the national curriculum so tutoring supports schoolwork.", icon: Library },
];

// English language skills taught with curriculum-based books.
export const englishSkills: { name: string; icon: LucideIcon; text: string }[] = [
  { name: "Grammar", icon: SpellCheck, text: "Clear rules and plenty of practice for correct, confident English." },
  { name: "Reading", icon: BookOpen, text: "Fluency, comprehension, and a real love of books." },
  { name: "Phonics", icon: Sparkles, text: "Jolly Phonics-based sounds and blending for strong early readers." },
  { name: "Spoken English", icon: MessagesSquare, text: "Speaking and listening practice that builds fluency and confidence." },
  { name: "Writing", icon: PenTool, text: "Handwriting, sentences, and creative and structured writing." },
];

export const managementSystem = {
  title: "Powered by a school management system",
  text: "We use a sophisticated school management system to keep student records, attendance, schedules, and progress organised, so every child's learning journey is tracked and nothing falls through the cracks.",
  points: ["Student records", "Attendance tracking", "Progress monitoring", "Organised scheduling"],
};

export const coreValues: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Excellence", text: "Delivering high-standard educational services.", icon: Award },
  { title: "Child-Centered Learning", text: "Focusing on individual needs and learning styles.", icon: Heart },
  { title: "Creativity", text: "Encouraging imagination and innovation.", icon: Palette },
  { title: "Integrity", text: "Building trust with parents and students.", icon: Shield },
  { title: "Growth Mindset", text: "Promoting continuous learning and improvement.", icon: TrendingUp },
];

export const mission = [
  "Provide personalized and high-quality academic support",
  "Build strong foundational skills in literacy, numeracy, and critical thinking",
  "Promote creativity, communication, and confidence in children",
  "Support parents by bridging gaps between school learning and home support",
];

export const vision =
  "To become a leading educational support center recognized for transforming young learners into confident, independent, and lifelong learners.";

export const teachingApproach: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Play-Based Learning", text: "Especially for younger children — learning through discovery and fun.", icon: Puzzle },
  { title: "Structured Support", text: "Clear goals and steady academic progress, aligned with school.", icon: BookOpen },
  { title: "Interactive Teaching", text: "Hands-on, activity-based lessons that keep children engaged.", icon: Sparkles },
  { title: "Continuous Feedback", text: "Ongoing assessment so parents always know how their child is doing.", icon: Target },
];

export const futureGoals = [
  "Expand services to include digital learning programs",
  "Deepen partnerships with international curricula and schools",
  "Open additional branches across the city",
  "Grow the Ms Bee Activity Books collection with new titles and levels",
];

export const subjects: { name: string; icon: LucideIcon; text: string }[] = [
  { name: "After-School Tutoring", icon: BookOpen, text: "Structured support for primary and secondary students." },
  { name: "Homework Assistance", icon: PenTool, text: "Help completing and understanding daily assignments." },
  { name: "Exam Preparation", icon: GraduationCap, text: "Revision, practice, and confidence before exams." },
  { name: "Literacy & Numeracy", icon: Calculator, text: "Strong reading, writing, and maths foundations." },
  { name: "Critical Thinking", icon: Brain, text: "Problem-solving skills that last a lifetime." },
  { name: "Study Skills", icon: Lightbulb, text: "Time management and learning how to learn." },
];

// Official price list (monthly, paid in advance).
export const focusGroup = {
  title: "Focus Group — Monthly Plan",
  note: "Monthly advance payment",
  groups: [
    {
      name: "High School",
      detail: "Ratio 1:15",
      icon: GraduationCap,
      options: [
        { label: "3 times per week", price: 10000 },
        { label: "5 times per week", price: 15000 },
      ],
    },
    {
      name: "Kindergarten, Primary & Middle School",
      detail: "Small groups",
      icon: BookOpen,
      options: [
        { label: "3 times per week", price: 10000 },
        { label: "5 times per week", price: 15000 },
      ],
    },
  ],
  footnote: "Flexible time is available — we work around your schedule.",
};

export const oneToOne = {
  title: "One-to-One — Personalized Learning",
  text: "For students who need individualized attention and targeted academic support.",
  icon: User,
  options: [
    { label: "3 times per week", price: 12000 },
    { label: "5 times per week", price: 20000 },
  ],
};

export const vip = {
  title: "VIP Intensive Program",
  text: "Quality learning, maximum results.",
  icon: Gem,
  badge: Crown,
  hourly: 2000,
  days: "5 days per week",
  monthly: 40000,
  includes: ["Free books", "Free learning materials", "Flexible scheduling"],
};

export const earlyYears = {
  title: "Early Years Readiness Program",
  subtitle: "Weekend program — monthly fee",
  text: "Designed to help young learners build strong foundations in early literacy, numeracy, communication, confidence, and school readiness.",
  options: [
    { label: "Group", price: 9500, unit: "/ month" },
    { label: "One-to-One", price: 13000, unit: "/ month" },
    { label: "Siblings Package", price: 11500, unit: "per child / month" },
  ],
};

export const online = {
  title: "Online Class with Ms Bee",
  icon: Laptop,
  price: 10000,
  schedule: "5 times a week",
  text: "Live lessons with a Ms Bee teacher from the comfort of home.",
};

export const earlyYearsFocus: { name: string; icon: LucideIcon; text: string }[] = [
  { name: "Jolly Phonics", icon: BookOpen, text: "Fun, multi-sensory phonics that gets children reading." },
  { name: "Reading & Writing", icon: PenTool, text: "Letter formation, early writing, and a love of books." },
  { name: "Early Numeracy", icon: Calculator, text: "Counting, shapes, and number sense through play." },
  { name: "Communication", icon: Mic, text: "Speaking, listening, and sharing ideas with confidence." },
  { name: "Play-Based Learning", icon: Puzzle, text: "Hands-on activities that turn curiosity into learning." },
  { name: "School Readiness", icon: Sprout, text: "Routines, independence, and social skills for kindergarten." },
];

export const campWeeks: { week: number; theme: string; icon: LucideIcon; text: string }[] = [
  { week: 1, theme: "Buzzing Into Summer", icon: Sun, text: "Team games, getting to know the hive, and setting summer goals." },
  { week: 2, theme: "Art & Craft Studio", icon: Palette, text: "Painting, crafting, and creating a mini gallery for families." },
  { week: 3, theme: "Storytelling & Poetry", icon: BookOpen, text: "Reading adventures, writing our own stories, and reciting poems." },
  { week: 4, theme: "Little Thinkers", icon: Brain, text: "Puzzles, problem-solving challenges, and critical thinking games." },
  { week: 5, theme: "Music & Movement", icon: Music, text: "Songs, rhythm, dance, and interactive musical learning." },
  { week: 6, theme: "Little Scientists", icon: FlaskConical, text: "Simple experiments, curious questions, and discovering how things work." },
  { week: 7, theme: "Nature Explorers", icon: Leaf, text: "Animals, plants, and the world around us, inspired by our Nature activity book." },
  { week: 8, theme: "Speak Up, Shine Bright", icon: Mic, text: "Spoken English, public speaking, and a showcase finale for families." },
];

export const campActivities = [
  "A new theme every week, July – August",
  "Art and craft sessions",
  "Storytelling and poetry",
  "Music and interactive learning",
  "Public speaking and confidence building",
  "Critical thinking and problem-solving",
];

export const faqs: { q: string; a: string; program?: ProgramKey }[] = [
  {
    q: "How do I enroll my child?",
    a: "Call us on 0912 199 969 or 0929 050 675, message us on WhatsApp, visit us in Torhailoch, or send the form on our Contact page. We'll help you choose the right program.",
  },
  {
    q: "How is payment made?",
    a: "Fees are paid monthly, in advance. See our Programs & Fees page for the full price list.",
    program: "tutoring",
  },
  {
    q: "Can sessions fit around my child's school schedule?",
    a: "Yes. Flexible times are available and we work around your schedule. The VIP Intensive Program also includes fully flexible scheduling.",
    program: "tutoring",
  },
  {
    q: "What's the difference between focus group, one-to-one, and VIP?",
    a: "Focus groups are small classes (up to 1:15 for high school). One-to-one gives your child a dedicated teacher. VIP is an intensive 5-day-a-week program that includes free books and learning materials.",
    program: "tutoring",
  },
  {
    q: "Which curriculum and books do you use?",
    a: "We use Cambridge, Pearson, and Ethiopian curriculum-based books, covering English grammar, reading, phonics, spoken English, and writing, alongside our own Ms Bee Activity Books.",
    program: "tutoring",
  },
  {
    q: "How do you keep track of my child's progress?",
    a: "We use a sophisticated school management system to keep student records, attendance, and progress organised, together with continuous assessment and feedback to parents.",
    program: "tutoring",
  },
  {
    q: "Do you offer online classes?",
    a: "Yes — online classes run 5 times a week for 10,000 ETB per month.",
    program: "tutoring",
  },
  {
    q: "Is there a discount for siblings?",
    a: "Our Early Years Readiness Program has a Siblings Package at 11,500 ETB per child per month.",
    program: "early-years",
  },
  {
    q: "When does the Early Years program run?",
    a: "The Early Years Readiness Program runs on weekends, with group and one-to-one options.",
    program: "early-years",
  },
  {
    q: "When is summer camp and how much does it cost?",
    a: "Summer camp runs every year in July and August only, with a new theme each week. Fees are announced each season, so call us to reserve a place.",
    program: "camp",
  },
  {
    q: "Where are you located?",
    a: "Torhailoch, Addis Ababa — in front of Queens Supermarket, near Lebawi International School.",
  },
];

export type GalleryCategory = "Tutoring" | "Summer Camp" | "Early Years";

export const gallery: { id: number; title: string; category: GalleryCategory; emoji: string; gradient: string }[] = [
  { id: 1, title: "Reading circle", category: "Tutoring", emoji: "📚", gradient: "from-sky-200 to-blue-300" },
  { id: 2, title: "Art & craft day", category: "Summer Camp", emoji: "🎨", gradient: "from-orange-200 to-red-300" },
  { id: 3, title: "Jolly Phonics", category: "Early Years", emoji: "🔤", gradient: "from-pink-200 to-fuchsia-300" },
  { id: 4, title: "Maths practice", category: "Tutoring", emoji: "🧮", gradient: "from-indigo-200 to-violet-300" },
  { id: 5, title: "Music & movement", category: "Summer Camp", emoji: "🎵", gradient: "from-cyan-200 to-sky-300" },
  { id: 6, title: "Play-based learning", category: "Early Years", emoji: "🧸", gradient: "from-amber-200 to-orange-300" },
  { id: 7, title: "Exam preparation", category: "Tutoring", emoji: "📝", gradient: "from-emerald-200 to-teal-300" },
  { id: 8, title: "Storytelling", category: "Summer Camp", emoji: "📖", gradient: "from-lime-200 to-green-300" },
  { id: 9, title: "Building blocks", category: "Early Years", emoji: "🧱", gradient: "from-rose-200 to-red-300" },
  { id: 10, title: "Public speaking", category: "Summer Camp", emoji: "🎤", gradient: "from-violet-200 to-purple-300" },
  { id: 11, title: "Story time", category: "Early Years", emoji: "🐝", gradient: "from-yellow-200 to-honey-300" },
  { id: 12, title: "Online class", category: "Tutoring", emoji: "💻", gradient: "from-slate-200 to-gray-300" },
];

export type BookSubject = "Early Learning" | "Math" | "Phonics & Reading" | "Writing" | "Science" | "Art";

const HA = "HA Vision Publishers";
const MSB = "Ms. Bee Publishers";

// Ms Bee Activity Books — Ms Bee's own brand.
export const books: {
  slug: string;
  title: string;
  series: string;
  level: string;
  subject: BookSubject;
  cover: string;
  description: string;
  skills: string[];
  accent: string;
  publisher?: string;
  year?: number;
}[] = [
  {
    slug: "first-step",
    title: "First Step",
    series: "Activity Book · Ages 3–4",
    level: "Ages 3–4",
    subject: "Early Learning",
    cover: "/books/first-step.jpg",
    description: "Ms Bee's first activity book for little learners, with more than 60 activities that build the pre-writing and fine motor skills children need before school.",
    skills: ["60+ activities", "Pre-writing skills", "Fine motor practice"],
    accent: "bg-orange-500",
    publisher: MSB,
  },
  {
    slug: "first-step-all-in-one",
    title: "First Step: All in One",
    series: "Math · Science · English · Handwriting",
    level: "Ages 3–4",
    subject: "Early Learning",
    cover: "/books/first-step-all-in-one.jpg",
    description: "Four subjects in one book: early maths, science, English, and handwriting, with more than 60 activities for ages 3–4.",
    skills: ["60+ activities", "Math, science & English", "Handwriting & fine motor"],
    accent: "bg-rose-400",
    publisher: MSB,
  },
  {
    slug: "alphabet-tracing-book-1",
    title: "Alphabet Tracing Book for Kids",
    series: "First Handwriting · Book 1",
    level: "Book 1",
    subject: "Writing",
    cover: "/books/alphabet-tracing-book-1.jpg",
    description: "A first handwriting book where children trace every letter of the alphabet and grow neat, confident writing habits.",
    skills: ["Letter tracing", "Pencil grip & control", "Letter recognition"],
    accent: "bg-sky-600",
  },
  {
    slug: "alphabet-tracing",
    title: "Alphabet Tracing",
    series: "Handwriting Practice Book",
    level: "Level I",
    subject: "Writing",
    cover: "/books/alphabet-tracing.jpg",
    description: "Guided tracing of every letter, capital and small, to build confident, neat handwriting from A to Z.",
    skills: ["Letter formation", "Pencil control", "Letter recognition"],
    accent: "bg-red-500",
    publisher: HA,
    year: 2023,
  },
  {
    slug: "jolly-phonics-cvc-words",
    title: "Jolly Phonics CVC Words",
    series: "Consonant–Vowel–Consonant",
    level: "Level II",
    subject: "Phonics & Reading",
    cover: "/books/jolly-phonics-cvc-words.jpg",
    description: "Blend sounds into simple three-letter words like cat, sun, and pig, the next step to independent reading.",
    skills: ["Sound blending", "Word building", "Early reading"],
    accent: "bg-cyan-500",
    publisher: HA,
    year: 2023,
  },
  {
    slug: "math-counting-1-20",
    title: "Counting Numbers 1–20",
    series: "Math · Fruits and Vegetables",
    level: "Level 1",
    subject: "Math",
    cover: "/books/math-counting-1-20.jpg",
    description: "Count, trace, and match numbers 1 to 20 with colourful fruits and vegetables. Early numeracy made delicious!",
    skills: ["Counting 1–20", "Number writing", "One-to-one matching"],
    accent: "bg-honey-500",
    publisher: HA,
    year: 2023,
  },
  {
    slug: "math-level-2",
    title: "Math",
    series: "Numbers & Operations",
    level: "Level II",
    subject: "Math",
    cover: "/books/math-level-2.jpg",
    description: "The next step in maths: numbers, adding and taking away, and fun number puzzles that build confidence.",
    skills: ["Number sense", "Addition & subtraction", "Problem-solving"],
    accent: "bg-violet-500",
    publisher: HA,
    year: 2023,
  },
  {
    slug: "nature",
    title: "Nature",
    series: "Animals & the World Around Us",
    level: "All levels",
    subject: "Science",
    cover: "/books/nature.jpg",
    description: "Meet giraffes, zebras, elephants, lions, and more. Activities that spark curiosity about animals and nature.",
    skills: ["Animal names & facts", "Observation", "Early science vocabulary"],
    accent: "bg-green-600",
    publisher: HA,
    year: 2023,
  },
  {
    slug: "color-by-numbers",
    title: "Color by Numbers",
    series: "Activity & Colouring",
    level: "All levels",
    subject: "Art",
    cover: "/books/color-by-numbers.jpg",
    description: "Follow the number key to reveal colourful pictures while practising number and colour recognition.",
    skills: ["Number recognition", "Colour names", "Fine motor skills"],
    accent: "bg-pink-500",
    publisher: HA,
    year: 2023,
  },
];
