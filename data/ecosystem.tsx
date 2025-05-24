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
    icon: <IconEngine />,
  },
  {
    title: "Human-Powered Signals",
    description:
      "Backed by a human core (not bots), Simba's Edge delivers high-accuracy, multi-TP trading signals, curated by our proprietary intelligence engine.",
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
      "Bots don't trade like this. We've seen the charts — human edge wins.",
    icon: <IconBrain />,
  },
];

export const simbaVerse = [
  {
    title: "Simplifying Web3 Education",
    description:
      "SimbaVerse is Simbaland's educational hub, offering courses, webinars, and community-led learning for beginners and enthusiasts",
    icon: <IconPlugConnected />,
  },
  {
    title: "Learn Web3 Today",
    description:
      "From crypto basics to trading strategies, it's designed to build competence without complexity",
    icon: <IconBook />,
  },
];

export const simbaDen = [
  {
    title: "Early-Stage Access",
    description:
      "Simba's Den is Simbaland's project discovery platform, helping users explore select early-stage Web3 initiatives",
    icon: <IconDeviceIpadCog />,
  },
  {
    title: "Carefully Curated",
    description:
      "We conduct due diligence on featured projects to provide transparency and reduce research fatigue — but participation is always at your own risk",
    icon: <IconCoins />,
  },
];

export const ecoData = [
  {
    title: (
      <span className="text-golden-brown">Simba&apos;s Edge</span>
    ),
    content: (
      <div>
        <p className="mb-8 text-xs font-normal md:text-sm text-neutral-200">
          Real Trading Mastery. Delivered Daily.
        </p>
        <SimbaEdgeSection />
      </div>
    ),
    icon: '/simba-edge.jpg',
  },
  {
    title: (
      <span className="text-golden-brown">SimbaVerse</span>
    ),
    content: (
      <div>
        <p className="mb-8 text-xs font-normal md:text-sm text-neutral-200">
          Learn & Level Up
        </p>
        <SimbaVerseSection />
      </div>
    ),
    icon: '/simba-verse.jpg',
  },
  {
    title: (
      <span className="text-golden-brown">Simba&apos;s Den</span>
    ),
    content: (
      <div>
        <p className="mb-4 text-xs font-normal md:text-sm text-neutral-200">
          Access Curated Opportunities
        </p>
        <SimbaDenSection />
      </div>
    ),
    icon: '/simba-den.jpg',
  },
];