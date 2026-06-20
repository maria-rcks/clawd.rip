import type { TimelineEvent } from "@/data/timeline";

export type TimelineCategory = TimelineEvent["category"];

export const timelineCategories = [
  "Legal",
  "Quality",
  "Reliability",
  "Safety",
  "Policy",
] as const satisfies readonly TimelineCategory[];

export const categoryStyles = {
  Legal:
    "border-[color-mix(in_srgb,var(--cat-legal)_45%,transparent)] bg-[color-mix(in_srgb,var(--cat-legal)_6%,transparent)] text-[color-mix(in_srgb,var(--cat-legal)_72%,transparent)]",
  Quality:
    "border-[color-mix(in_srgb,var(--cat-quality)_45%,transparent)] bg-[color-mix(in_srgb,var(--cat-quality)_6%,transparent)] text-[color-mix(in_srgb,var(--cat-quality)_72%,transparent)]",
  Reliability:
    "border-[color-mix(in_srgb,var(--cat-reliability)_45%,transparent)] bg-[color-mix(in_srgb,var(--cat-reliability)_6%,transparent)] text-[color-mix(in_srgb,var(--cat-reliability)_72%,transparent)]",
  Safety:
    "border-[color-mix(in_srgb,var(--cat-safety)_45%,transparent)] bg-[color-mix(in_srgb,var(--cat-safety)_6%,transparent)] text-[color-mix(in_srgb,var(--cat-safety)_72%,transparent)]",
  Policy:
    "border-[color-mix(in_srgb,var(--cat-policy)_45%,transparent)] bg-[color-mix(in_srgb,var(--cat-policy)_6%,transparent)] text-[color-mix(in_srgb,var(--cat-policy)_72%,transparent)]",
} as const satisfies Record<TimelineCategory, string>;

export const incidentLayerGroups = {
  Legal: Array.from({ length: 9 }, (_, index) => `/incident-layers/legal-${index}.avif`),
  Quality: Array.from({ length: 9 }, (_, index) => `/incident-layers/quality-${index}.avif`),
  Reliability: Array.from(
    { length: 9 },
    (_, index) => `/incident-layers/reliability-${index}.avif`,
  ),
  Policy: Array.from({ length: 9 }, (_, index) => `/incident-layers/policy-${index}.avif`),
  Safety: [
    "/incident-layers/policy-1.avif",
    "/incident-layers/policy-4.avif",
    "/incident-layers/quality-6.avif",
    "/incident-layers/reliability-2.avif",
    "/incident-layers/legal-4.avif",
    "/incident-layers/policy-7.avif",
    "/incident-layers/quality-2.avif",
    "/incident-layers/reliability-5.avif",
    "/incident-layers/legal-2.avif",
  ],
} satisfies Record<TimelineCategory, string[]>;

export const getIncidentLayers = (category: TimelineCategory, index: number) => {
  const group = incidentLayerGroups[category];
  return Array.from(
    { length: 3 },
    (_, layerIndex) => group[(index * 2 + layerIndex * 3) % group.length],
  );
};
