/**
 * Absolute month + year rather than "2 years ago".
 * The page is statically generated, so a relative label freezes at build time —
 * and an old post reads better with a date than with a countdown of its age.
 */
export default function formatDate(dateProp: string) {
  const date = new Date(dateProp);

  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });
}
