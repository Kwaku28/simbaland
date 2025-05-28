import {
  SimbaDenSection,
  SimbaEdgeSection,
  SimbaVerseSection,
} from "@/components/ui/featue-card";
import {
  IconBook,
  IconBrain,
  IconCoins,
  IconCurrencyDollar,
  IconDeviceIpadCog,
  IconEngine,
  IconPlugConnected,
  IconTrendingUp,
} from "@tabler/icons-react";

export const simbaEdge = [
  {
    title: "Strategic Engine",
    description:
      "Our flagship crypto futures signal engine — powered by elite trading intuition and strategy.",
    icon: <IconEngine className="xl:size-10 2xl:size-14" />,
  },
  {
    title: "Human-Powered Signals",
    description:
      "Backed by a human core (not bots), Simba’s Edge delivers high-accuracy, multi-TP trading signals, curated by our proprietary intelligence engine.",
    icon: <IconTrendingUp className="xl:size-10 2xl:size-14" />,
  },
  {
    title: "Trusted for Results",
    description: "Trusted by communities, built for results.",
    icon: <IconCurrencyDollar className="xl:size-10 2xl:size-14" />,
  },
  {
    title: "100% Human Touch",
    description:
      "Bots don’t trade like this. We’ve seen the charts — human edge wins.",
    icon: <IconBrain className="xl:size-10 2xl:size-14" />,
  },
];

export const simbaVerse = [
  {
    title: "Simplifying Web3 Education",
    description:
      "SimbaVerse is Simbaland’s educational hub, offering courses, webinars, and community-led learning for beginners and enthusiasts",
    icon: <IconPlugConnected className="xl:size-10 2xl:size-14" />,
  },
  {
    title: "Learn Web3 Today",
    description:
      "From crypto basics to trading strategies, it’s designed to build competence without complexity",
    icon: <IconBook className="xl:size-10 2xl:size-14" />,
  },
];

export const simbaDen = [
  {
    title: "Early-Stage Access",
    description:
      "Simba’s Den is Simbaland’s project discovery platform, helping users explore select early-stage Web3 initiatives",
    icon: <IconDeviceIpadCog className="xl:size-10 2xl:size-14" />,
  },
  {
    title: "Carefully Curated",
    description:
      "We conduct due diligence on featured projects to provide transparency and reduce research fatigue — but participation is always at your own risk",
    icon: <IconCoins className="xl:size-10 2xl:size-14" />,
  },
];

export const ecoData = [
  {
    title: "Simba's Edge",
    content: (
      <div>
        <p className="mb-8 text-xs font-bold italic md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-neutral-200">
          Real Trading Mastery. Delivered Daily.
        </p>
        <SimbaEdgeSection />
      </div>
    ),
    icon: '/simba-edge.jpg',
  },
  {
    title: "Simba Verse",
    content: (
      <div>
        <p className="mb-8 text-xs font-bold italic md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-neutral-200">
          Learn & Level Up
        </p>
        <SimbaVerseSection />
      </div>
    ),
    icon: '/simba-verse.jpg',
  },
  {
    title: "Simba’s Den",
    content: (
      <div>
        <p className="mb-4 text-xs font-bold italic md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-neutral-200">
          Access Curated Opportunities
        </p>
        <SimbaDenSection />
      </div>
    ),
    icon: '/simba-den.jpg',
  },
];
