"use client";
import { useState } from "react";
import { useBrowserValue, useGlobalPrivacyControl } from "@/lib/browser-store";
export function PrivacyPreferences() {
  const [stored, setStored] = useBrowserValue(
    "rtc-analytics-preference",
    "denied",
  );
  const [choice, setChoice] = useState<boolean | null>(null);
  const [saved, setSaved] = useState(false);
  const gpc = useGlobalPrivacyControl();
  const analytics = choice ?? stored === "allowed";
  function setAnalytics(next: boolean) {
    setChoice(next);
  }
  function save() {
    setStored(analytics && !gpc ? "allowed" : "denied");
    setSaved(true);
  }
  return (
    <div className="preferences">
      <div>
        <span>
          <strong>Essential browser storage</strong>
          <small>
            Remembers your comparison selections and privacy preference.
          </small>
        </span>
        <span>Always on</span>
      </div>
      <div>
        <label htmlFor="analytics">
          <strong>Optional analytics</strong>
          <small>No analytics provider is currently connected.</small>
        </label>
        <input
          id="analytics"
          type="checkbox"
          checked={analytics && !gpc}
          disabled={gpc}
          onChange={(e) => {
            setAnalytics(e.target.checked);
            setSaved(false);
          }}
        />
      </div>
      {gpc && (
        <p>
          Global Privacy Control is enabled in your browser. Optional tracking
          remains off.
        </p>
      )}
      <button className="button" onClick={save}>
        Save preferences
      </button>
      {saved && (
        <p role="status">Your preferences have been saved in this browser.</p>
      )}
    </div>
  );
}
export function MessageDraft({
  correction = false,
  recipient = "",
}: {
  correction?: boolean;
  recipient?: string;
}) {
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const [text, setText] = useState("");
  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        setText(
          `${correction ? "Factual correction" : "Website inquiry"}\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nPage: ${data.get("page") || "General inquiry"}\n\n${data.get("message")}`,
        );
        setReady(true);
        setCopied(false);
      }}
    >
      <p>
        This preview prepares a message you can copy or download. It does not
        send your details to a company or mailing list.
      </p>
      {recipient && (
        <p>
          <a className="inline-link" href={`mailto:${recipient}`}>
            Email {recipient}
          </a>
        </p>
      )}
      <div className="form-row">
        <label>
          Your name
          <input name="name" required maxLength={100} />
        </label>
        <label>
          Email address
          <input name="email" type="email" required maxLength={254} />
        </label>
      </div>
      <label>
        Relevant page or company
        <input
          name="page"
          placeholder="Company name or page URL"
          maxLength={500}
        />
      </label>
      <label>
        {correction ? "What needs to be corrected?" : "How can we help?"}
        <textarea
          name="message"
          required
          rows={5}
          minLength={10}
          maxLength={5000}
          placeholder={
            correction
              ? "Describe the factual issue and include a supporting source."
              : "Write your message here."
          }
        />
      </label>
      <button className="button" type="submit">
        Prepare {correction ? "correction" : "message"}
      </button>
      {ready && (
        <div className="message-preview" role="status">
          <h3>Your message draft is ready</h3>
          <pre>{text}</pre>
          <div className="button-row">
            {recipient && (
              <a
                className="button"
                href={`mailto:${recipient}?subject=${encodeURIComponent(correction ? "Factual correction" : "Website inquiry")}&body=${encodeURIComponent(text)}`}
              >
                Open email app
              </a>
            )}
            <button
              className="button"
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(text);
                  setCopied(true);
                } catch {
                  setCopied(false);
                }
              }}
            >
              {copied ? "Copied" : "Copy message"}
            </button>
            <button
              type="button"
              className="button button-outline"
              onClick={() => {
                const url = URL.createObjectURL(
                  new Blob([text], { type: "text/plain" }),
                );
                const a = document.createElement("a");
                a.href = url;
                a.download = correction
                  ? "rtc-correction.txt"
                  : "rtc-inquiry.txt";
                a.click();
                setTimeout(() => URL.revokeObjectURL(url), 1000);
              }}
            >
              Download draft
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
