import {
  Baby,
  BookOpen,
  Calculator,
  FlaskConical,
  GraduationCap,
  Heart,
  Leaf,
  Moon,
  Music,
  Palette,
  PenTool,
  Puzzle,
  Shield,
  Smile,
  Sparkles,
  Sun,
  Tent,
  Users,
  Utensils,
  Waves,
  type LucideIcon,
} from "lucide-react";

// All site content lives here so it can be edited in one place.

export const site = {
  name: "Ms Bee Educational Support",
  shortName: "Ms Bee",
  tagline: "Where little minds buzz with big ideas",
  phone: "(555) 123-4567",
  email: "hello@msbeeeducation.com",
  address: "123 Honeycomb Lane, Springfield",
  hours: [
    { days: "Monday – Friday", time: "7:00 AM – 6:30 PM" },
    { days: "Saturday (tutoring only)", time: "9:00 AM – 1:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tutoring", label: "Tutoring" },
  { href: "/summer-camp", label: "Summer Camp" },
  { href: "/daycare", label: "Daycare" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
];

export type ProgramKey = "tutoring" | "camp" | "daycare";

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
    title: "Educational Support",
    href: "/tutoring",
    ages: "Grades K – 12",
    description:
      "One-on-one and small-group tutoring, homework help, and test prep that builds confidence and real understanding.",
    icon: GraduationCap,
    color: "from-sky-400 to-blue-500",
    highlights: ["Reading & writing", "Math & science", "Test prep", "Homework club"],
  },
  {
    key: "camp",
    title: "Summer Camp",
    href: "/summer-camp",
    ages: "Ages 5 – 12",
    description:
      "Eight weeks of themed adventures — science, art, outdoor play, field trips, and friendships that last all year.",
    icon: Tent,
    color: "from-honey-400 to-orange-500",
    highlights: ["Weekly themes", "Field trips", "Splash days", "STEM projects"],
  },
  {
    key: "daycare",
    title: "Daycare Center",
    href: "/daycare",
    ages: "6 weeks – 5 years",
    description:
      "A warm, safe, play-based environment where infants, toddlers, and preschoolers learn and grow every day.",
    icon: Baby,
    color: "from-pink-400 to-berry-500",
    highlights: ["Low ratios", "Healthy meals", "Daily reports", "Pre-K readiness"],
  },
];

export const stats = [
  { value: 12, suffix: "+", label: "Years serving families" },
  { value: 850, suffix: "+", label: "Students supported" },
  { value: 98, suffix: "%", label: "Parent satisfaction" },
  { value: 8, suffix: "", label: "Themed camp weeks" },
];

export const whyUs: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Safe & Licensed",
    text: "State-licensed, CPR-certified staff, secure check-in, and background-checked teachers.",
    icon: Shield,
  },
  {
    title: "Caring Teachers",
    text: "Experienced educators who know every child by name and celebrate every win.",
    icon: Heart,
  },
  {
    title: "Learning Through Play",
    text: "Hands-on activities that make curiosity the engine of learning.",
    icon: Puzzle,
  },
  {
    title: "Family Partnership",
    text: "Daily updates, progress reports, and an open door for parents.",
    icon: Users,
  },
];

export const subjects: { name: string; icon: LucideIcon; text: string }[] = [
  { name: "Reading & Phonics", icon: BookOpen, text: "Fluency, comprehension, and a love of books." },
  { name: "Mathematics", icon: Calculator, text: "From counting to calculus, step by step." },
  { name: "Science", icon: FlaskConical, text: "Experiments that make concepts click." },
  { name: "Writing", icon: PenTool, text: "Essays, grammar, and creative storytelling." },
  { name: "Test Prep", icon: GraduationCap, text: "State tests, SAT/ACT, and study skills." },
  { name: "Homework Club", icon: Sparkles, text: "Daily after-school help in a calm space." },
];

export const tutoringPlans = [
  {
    name: "Homework Club",
    price: "$45",
    unit: "/ week",
    features: ["Mon–Thu after school", "Small groups (max 6)", "Snack included", "Weekly parent note"],
  },
  {
    name: "Small Group",
    price: "$35",
    unit: "/ session",
    features: ["60-minute sessions", "3–4 students per group", "Grouped by level", "Monthly progress report"],
    featured: true,
  },
  {
    name: "One-on-One",
    price: "$60",
    unit: "/ session",
    features: ["Personalized plan", "Flexible scheduling", "Free initial assessment", "Bi-weekly check-ins"],
  },
];

export const campWeeks: { week: number; dates: string; theme: string; icon: LucideIcon; text: string }[] = [
  { week: 1, dates: "Jun 15 – 19", theme: "Buzzing Into Summer", icon: Sun, text: "Team games, crafts, and getting to know the hive." },
  { week: 2, dates: "Jun 22 – 26", theme: "Little Scientists", icon: FlaskConical, text: "Volcanoes, slime, and kitchen chemistry." },
  { week: 3, dates: "Jun 29 – Jul 3", theme: "Under the Sea", icon: Waves, text: "Ocean creatures, splash day, and aquarium trip." },
  { week: 4, dates: "Jul 6 – 10", theme: "Art Explosion", icon: Palette, text: "Painting, sculpture, and a gallery show for families." },
  { week: 5, dates: "Jul 13 – 17", theme: "Into the Wild", icon: Leaf, text: "Nature hikes, bug hunts, and garden planting." },
  { week: 6, dates: "Jul 20 – 24", theme: "Music & Movement", icon: Music, text: "Drums, dance, and a talent show finale." },
  { week: 7, dates: "Jul 27 – 31", theme: "Space Explorers", icon: Sparkles, text: "Rockets, planets, and a planetarium visit." },
  { week: 8, dates: "Aug 3 – 7", theme: "Camp Olympics", icon: Smile, text: "Field day, relay races, and medal ceremony." },
];

export const campSchedule = [
  { time: "7:30 AM", activity: "Early drop-off & free play" },
  { time: "9:00 AM", activity: "Morning circle & theme kickoff" },
  { time: "9:30 AM", activity: "STEM or art project" },
  { time: "11:00 AM", activity: "Outdoor games" },
  { time: "12:00 PM", activity: "Lunch & quiet reading" },
  { time: "1:00 PM", activity: "Field trip / special guest / splash time" },
  { time: "3:00 PM", activity: "Snack & clubs" },
  { time: "4:00 PM", activity: "Pick-up & extended care until 6:30" },
];

export const daycareGroups: { name: string; ages: string; ratio: string; icon: LucideIcon; text: string; color: string }[] = [
  {
    name: "Honey Drops",
    ages: "6 weeks – 12 months",
    ratio: "1:4",
    icon: Baby,
    text: "Individual feeding and nap schedules, tummy time, sensory play, and lots of cuddles.",
    color: "bg-pink-100 text-pink-700",
  },
  {
    name: "Busy Bees",
    ages: "1 – 3 years",
    ratio: "1:6",
    icon: Puzzle,
    text: "Language-rich play, music, early motor skills, and gentle potty-training support.",
    color: "bg-honey-100 text-honey-700",
  },
  {
    name: "Queen Bees",
    ages: "3 – 5 years",
    ratio: "1:10",
    icon: GraduationCap,
    text: "Pre-K curriculum with letters, numbers, science centers, and kindergarten readiness.",
    color: "bg-sky-100 text-sky-700",
  },
];

export const daycareRoutine: { time: string; activity: string; icon: LucideIcon }[] = [
  { time: "7:00", activity: "Welcome & breakfast", icon: Utensils },
  { time: "8:30", activity: "Circle time & songs", icon: Music },
  { time: "9:30", activity: "Learning centers", icon: Puzzle },
  { time: "10:30", activity: "Outdoor play", icon: Sun },
  { time: "11:30", activity: "Lunch", icon: Utensils },
  { time: "12:30", activity: "Nap & rest", icon: Moon },
  { time: "3:00", activity: "Snack & art", icon: Palette },
  { time: "4:00", activity: "Free play & pick-up", icon: Smile },
];

export const testimonials = [
  {
    quote:
      "My son went from dreading math to asking for extra worksheets. The tutors at Ms Bee truly changed how he sees himself as a learner.",
    name: "Angela R.",
    role: "Parent, tutoring program",
  },
  {
    quote:
      "Summer camp was the highlight of our daughter's year. Every day she came home with a new story, a new craft, and a huge smile.",
    name: "Marcus T.",
    role: "Parent, summer camp",
  },
  {
    quote:
      "Leaving your baby with someone is hard. The Honey Drops teachers made it easy — the daily photo updates are everything.",
    name: "Priya S.",
    role: "Parent, infant daycare",
  },
  {
    quote:
      "Ms Bee's homework club is a lifesaver for working parents. Homework done, snack eaten, and happy kids at pick-up.",
    name: "David & Lena K.",
    role: "Parents of two",
  },
];

export const faqs: { q: string; a: string; program?: ProgramKey }[] = [
  {
    q: "How do I enroll my child?",
    a: "Fill out the enrollment form on our Contact page or call us. We'll schedule a tour and a free assessment (for tutoring) and help you choose the best program.",
  },
  {
    q: "Are your teachers certified?",
    a: "Yes. All lead teachers hold education degrees or early-childhood credentials, and every staff member is CPR/First Aid certified and background-checked.",
  },
  {
    q: "Do you provide meals?",
    a: "Daycare includes breakfast, lunch, and two snacks prepared with fresh ingredients. Camp includes snacks; campers bring their own lunch. We accommodate allergies.",
    program: "daycare",
  },
  {
    q: "Can I sign up for only some weeks of summer camp?",
    a: "Absolutely! Camp is booked by the week, so you can choose as many or as few weeks as you like. Families booking 4+ weeks get 10% off.",
    program: "camp",
  },
  {
    q: "How do you track tutoring progress?",
    a: "Every student starts with a free assessment. We set goals together and send progress reports so you always know how your child is doing.",
    program: "tutoring",
  },
  {
    q: "Do you offer sibling discounts?",
    a: "Yes — siblings enrolled in any program receive 10% off tuition.",
  },
];

export const team = [
  { name: "Ms. Beatrice Moore", role: "Founder & Director", bio: "Former elementary teacher with 20 years of experience and a passion for every child's potential.", color: "bg-honey-300" },
  { name: "Mr. James Okafor", role: "Lead Math & Science Tutor", bio: "Engineer-turned-educator who makes numbers fun and formulas make sense.", color: "bg-sky-300" },
  { name: "Ms. Sofia Ramirez", role: "Daycare Coordinator", bio: "Early childhood specialist who believes in learning through play and kindness.", color: "bg-pink-300" },
  { name: "Ms. Hannah Lee", role: "Summer Camp Director", bio: "Outdoor educator, artist, and the creative force behind our camp themes.", color: "bg-emerald-300" },
];

export type GalleryCategory = "Tutoring" | "Summer Camp" | "Daycare";

export const gallery: { id: number; title: string; category: GalleryCategory; emoji: string; gradient: string }[] = [
  { id: 1, title: "Reading circle", category: "Tutoring", emoji: "📚", gradient: "from-sky-200 to-blue-300" },
  { id: 2, title: "Volcano experiment", category: "Summer Camp", emoji: "🌋", gradient: "from-orange-200 to-red-300" },
  { id: 3, title: "Finger painting", category: "Daycare", emoji: "🎨", gradient: "from-pink-200 to-fuchsia-300" },
  { id: 4, title: "Math games", category: "Tutoring", emoji: "🧮", gradient: "from-indigo-200 to-violet-300" },
  { id: 5, title: "Splash day", category: "Summer Camp", emoji: "💦", gradient: "from-cyan-200 to-sky-300" },
  { id: 6, title: "Nap time buddies", category: "Daycare", emoji: "🧸", gradient: "from-amber-200 to-orange-300" },
  { id: 7, title: "Science fair", category: "Tutoring", emoji: "🔬", gradient: "from-emerald-200 to-teal-300" },
  { id: 8, title: "Nature hike", category: "Summer Camp", emoji: "🌲", gradient: "from-lime-200 to-green-300" },
  { id: 9, title: "Block towers", category: "Daycare", emoji: "🧱", gradient: "from-rose-200 to-red-300" },
  { id: 10, title: "Space week rockets", category: "Summer Camp", emoji: "🚀", gradient: "from-violet-200 to-purple-300" },
  { id: 11, title: "Story time", category: "Daycare", emoji: "📖", gradient: "from-yellow-200 to-honey-300" },
  { id: 12, title: "Writing workshop", category: "Tutoring", emoji: "✏️", gradient: "from-slate-200 to-gray-300" },
];
