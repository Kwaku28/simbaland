import { SimbaDenSection, SimbaEdgeSection, SimbaVerseSection } from "@/components/ui/featue-card";
import {
  IconBook,
  IconBrain,
  IconCoins,
  IconCurrencyDollar,
  IconDeviceIpadCog,
  IconEaseInOut,
  IconEngine,
  IconPlugConnected,
  IconTrendingUp,
} from "@tabler/icons-react";

export const simbaEdge = [
  {
    title: "Strategic Engine",
    description:
      "Our flagship crypto futures signal engine — powered by elite trading intuition and strategy.",
    icon: <IconEngine />,
  },
  {
    title: "Human-Powered Signals",
    description:
      "Backed by a human core (not bots), Simba’s Edge delivers high-accuracy, multi-TP trading signals, curated by our proprietary intelligence engine.",
    icon: <IconTrendingUp />,
  },
  {
    title: "Trusted for Results",
    description: "Trusted by communities, built for results.",
    icon: <IconCurrencyDollar />,
  },
  {
    title: "100% Human Touch",
    description:
      "Bots don’t trade like this. We’ve seen the charts — human edge wins.",
    icon: <IconBrain />,
  },
];

export const simbaVerse = [
  {
    title: "Empowering African Web3",
    description:
      "An educational hub designed to onboard, train, and empower the next wave of African Web3 natives.",
    icon: <IconPlugConnected />,
  },
  {
    title: "Learn Web3 Today",
    description:
      "Courses, live sessions, and practical insights — whether you’re a beginner or a pro.",
    icon: <IconBook />,
  },
  {
    title: "Master the Market",
    description: "Learn the game. Master the market.",
    icon: <IconTrendingUp />,
  },
];

export const simbaDen = [
  {
    title: "Launchpad for Africa",
    description:
      "Simbaland’s upcoming launchpad gives retail African investors first-look access to vetted early-stage Web3 projects.",
    icon: <IconDeviceIpadCog />,
  },
  {
    title: "Curated Web3 Deals",
    description:
      "No tokens. No noise. Just curated deal flow, straight from the heart of the Web3 revolution.",
    icon: <IconCoins />,
  },
];

export const ecoData = [
  {
    title: "Simba's Edge",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Real Trading Mastery. Delivered Daily.
        </p>
        <SimbaEdgeSection />
      </div>
    ),
  },
  {
    title: "SimbaVerse",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Africa’s Gateway to Crypto Mastery.
        </p>
        <SimbaVerseSection />
      </div>
    ),
  },
  {
    title: "Simba’s Den (Coming Soon)",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Launch Early. Invest Early.
        </p>
        <SimbaDenSection />
      </div>
    ),
  },
];
