"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { categories } from "@/lib/catalog";
import { Brand, Icon } from "./icons";
import { categoryDisplayName } from "./ui";
export function Header() {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node))
        setMenu(false);
    };
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
    };
    document.addEventListener("click", close);
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", key);
    };
  }, []);
  return (
    <>
      <header className="header">
        <div className="container header-inner" ref={navRef}>
          <Link href="/" aria-label="Review Top Companies home">
            <Brand />
          </Link>
          <nav aria-label="Main navigation" className="desktop-nav">
            <button
              className={menu ? "nav-link active" : "nav-link"}
              aria-expanded={menu}
              aria-controls="category-menu"
              onClick={() => setMenu(!menu)}
            >
              Explore categories <Icon name="chevron" size={14} />
            </button>
            <Link
              className={pathname.startsWith("/methodology") ? "active" : ""}
              href="/methodology"
            >
              How we choose
            </Link>
            <Link
              className={pathname === "/about" ? "active" : ""}
              href="/about"
            >
              About us
            </Link>
          </nav>
          <div className="header-actions">
            <Link
              href="/search"
              className="icon-button"
              aria-label="Search the site"
            >
              <Icon name="search" size={21} />
            </Link>
            <button
              className="icon-button mobile-menu"
              aria-label={menu ? "Close menu" : "Open menu"}
              aria-expanded={menu}
              onClick={() => setMenu(!menu)}
            >
              <Icon name={menu ? "close" : "menu"} />
            </button>
          </div>
          {menu && (
            <div className="mega-menu" id="category-menu">
              <div className="menu-intro">
                <span className="eyebrow">A good place to start</span>
                <h3>
                  What’s your next
                  <br />
                  big decision?
                </h3>
                <Link href="/categories" onClick={() => setMenu(false)}>
                  Explore all categories <Icon name="arrow" size={16} />
                </Link>
              </div>
              <div className="menu-categories">
                {categories.map((c) => (
                  <Link key={c.id} href={c.path} onClick={() => setMenu(false)}>
                    <Icon name={c.icon} size={19} />
                    {c.title}
                  </Link>
                ))}
              </div>
              <div className="mobile-extra">
                <Link href="/companies" onClick={() => setMenu(false)}>
                  Company reviews
                </Link>
                <Link href="/methodology" onClick={() => setMenu(false)}>
                  How we review
                </Link>
                <Link href="/guides" onClick={() => setMenu(false)}>
                  Guides & insights
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/">
              <Brand light />
            </Link>
            <p>
              A little clarity.
              <br />A more confident choice.
            </p>
            <span>Company reviews and practical comparisons.</span>
          </div>
          <div>
            <h4>Explore</h4>
            <Link href="/categories">All 10 categories</Link>
            <Link href="/companies">Company reviews</Link>
            <Link href="/compare">Compare companies</Link>
            <Link href="/guides">Guides & insights</Link>
          </div>
          <div>
            <h4>Our publication</h4>
            <Link href="/about">About us</Link>
            <Link href="/methodology">How we review</Link>
            <Link href="/editorial-policy">Editorial policy</Link>
            <Link href="/corrections">Report a correction</Link>
          </div>
          <div>
            <h4>Get in touch</h4>
            <Link href="/contact">Contact us</Link>
            <Link href="/advertise">Work with us</Link>
            <Link href="/ownership">Ownership</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
        <nav
          className="footer-categories"
          aria-label="Explore categories in footer"
        >
          {categories.map((c) => (
            <Link href={c.path} key={c.id}>
              {categoryDisplayName(c.id, c.short)}
            </Link>
          ))}
        </nav>
        <div className="footer-bottom">
          <span>© 2026 Review Top Companies. All rights reserved.</span>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/advertising-disclosure">Advertising disclosure</Link>
            <Link href="/privacy-choices">Privacy choices</Link>
          </div>
          <span className="footer-signoff">Clarity comes first.</span>
        </div>
      </div>
    </footer>
  );
}
