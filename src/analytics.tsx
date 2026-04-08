import { useEffect } from "react";
import ReactGA from "react-ga4";

ReactGA.initialize("G-E9XY1K59NC");

export default function AnalyticsTracker({ page }: { page: string }) {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: page,
    });
  }, [page]);

  return null;
}