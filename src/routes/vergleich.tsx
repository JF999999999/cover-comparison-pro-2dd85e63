import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/vergleich")({
  beforeLoad: () => {
    throw redirect({ to: "/ratgeber", statusCode: 301 });
  },
});
