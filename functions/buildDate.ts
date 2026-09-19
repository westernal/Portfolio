/**
 * When this build was generated.
 *
 * Every route here is `force-static`, so this module is evaluated once during
 * `next build` and the result is baked into the HTML. That is what makes it an
 * honest "last updated" rather than a decoration: the site is rebuilt on every
 * push, so the build date and the date the content last changed are the same
 * date. Nothing to remember to bump by hand, and nothing that can claim the site
 * was touched more recently than it was.
 */
const buildDate = new Date();

/** Also the copyright year, so the footer has one source instead of two. */
export const buildYear = buildDate.getFullYear();

/** ISO, for the `dateTime` attribute a machine reads. */
export const buildDateISO = buildDate.toISOString().slice(0, 10);

/** "19 September 2026" — the sitewide footer line. */
export const buildDateLong = buildDate.toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/** "September 2026" — enough precision for a résumé, and it ages better. */
export const buildMonth = buildDate.toLocaleDateString("en-GB", {
  month: "long",
  year: "numeric",
});
