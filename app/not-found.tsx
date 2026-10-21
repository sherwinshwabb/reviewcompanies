import Link from "next/link";
import { Icon } from "@/components/icons";
export default function NotFound() {
  return (
    <main id="main-content" className="container not-found">
      <span className="eyebrow">404 · A SMALL DETOUR</span>
      <h1>
        Let’s find a<br />
        <em>clearer path.</em>
      </h1>
      <p>
        That page isn’t available. Your next comparison is just a click away.
      </p>
      <Link className="button" href="/categories">
        Explore the categories
        <Icon name="arrow" size={18} />
      </Link>
    </main>
  );
}
