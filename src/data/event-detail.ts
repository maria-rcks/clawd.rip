export type ReactionPlatform = "x" | "reddit" | "hackernews" | "github" | "news" | "other";

export type EventReaction = {
  platform: ReactionPlatform;
  /** Display name or handle, e.g. "@theo", "u/whoever", "Simon Willison" */
  author: string;
  /** Optional context line, e.g. "1.2K upvotes · r/ClaudeAI" or "Apr 23, 2026" */
  meta?: string;
  /** Verbatim quote from the post or comment */
  quote: string;
  url: string;
};

export type EventImage = {
  /** Local path under public/, e.g. "/events/<slug>/chart.png" */
  src: string;
  alt: string;
  caption?: string;
  sourceUrl?: string;
  width?: number;
  height?: number;
};

export type EventDetail = {
  slug: string;
  /** One-sentence standfirst rendered under the title */
  deck: string;
  /** Body paragraphs. Minimal inline HTML allowed: <a>, <em>, <strong>, <code> */
  body: string[];
  /** Short, concrete facts and numbers rendered as "The receipts" */
  receipts?: string[];
  /** Community reactions; only real, sourced quotes */
  reactions: EventReaction[];
  images?: EventImage[];
  /** Closing "where it stands" paragraph */
  aftermath?: string;
};
