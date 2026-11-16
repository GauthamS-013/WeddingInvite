import { useEffect, useMemo, useRef, useState } from "react";
import {
  couple,
  weddingDate,
  dateLabel,
  rsvpBy,
  whatsappNumber,
  events,
} from "./data.js";

/* Reusable class strings */
const SECTION = "mx-auto max-w-3xl px-6 py-18 text-center";
const H2 =
  "mb-4 font-script text-[clamp(2.4rem,9vw,3.6rem)] font-normal text-wine";
const LEAD = "mx-auto max-w-[34rem] text-[1.35rem] italic";
const BTN =
  "inline-block cursor-pointer rounded-full bg-gold px-6 py-2.5 font-semibold text-[#3E3427] no-underline transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/40";
const FIELD =
  "w-full rounded-lg border border-[#F3E6E3] bg-blush px-3 py-2.5 text-ink";

/* Gold divider with a small flower in the middle */
function Divider({ className = "" }) {
  return (
    <div
      className={`my-8 flex items-center justify-center gap-3 text-gold ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-linear-to-r from-transparent to-current" />
      <svg
        viewBox="0 0 40 40"
        className="size-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <g transform="translate(20 20)">
          {[0, 72, 144, 216, 288].map((r) => (
            <ellipse
              key={r}
              cx="0"
              cy="-8"
              rx="4"
              ry="8"
              transform={`rotate(${r})`}
            />
          ))}
          <circle r="2.5" fill="currentColor" />
        </g>
      </svg>
      <span className="h-px w-16 bg-linear-to-l from-transparent to-current" />
    </div>
  );
}

/* Faint floral sprig for card corners */
function Sprig({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`pointer-events-none absolute size-16 text-gold opacity-40 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <path d="M6 60C14 40 28 22 58 6" />
      <path d="M16 44c-8-2-10-8-10-12 6 0 10 4 10 12z" />
      <path d="M26 30c-6-4-6-10-4-14 6 2 8 8 4 14z" />
      <path d="M38 20c0-8 6-10 10-10 0 6-4 10-10 10z" />
      <circle cx="58" cy="6" r="3" fill="currentColor" />
    </svg>
  );
}

/* Fades children in when they scroll into view */
function Reveal({ as: Tag = "section", className = SECTION, children }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setShown(true), io.disconnect()),
      { threshold: 0.15 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`${className} transition duration-1000 ${shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
    >
      {children}
    </Tag>
  );
}

function Hero() {
  const petals = useMemo(
    () =>
      Array.from({ length: 22 }, () => ({
        left: Math.random() * 100 + "%",
        "--dx": Math.random() * 160 - 80 + "px",
        animationDuration: 7 + Math.random() * 7 + "s",
        animationDelay: Math.random() * 8 + "s",
      })),
    [],
  );
  const name = "block animate-write [clip-path:inset(0_100%_0_0)]";
  return (
    <header className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-5 py-12 text-center text-[#f6efdc]">
      <p className="animate-fade text-[1.6rem] tracking-wider italic opacity-0 text-gold">
        The wedding of
      </p>
      <h1 className="my-4 w-full font-script text-[clamp(3.6rem,15vw,8rem)] leading-[1.05] font-normal text-gold">
        <span className={name} style={{ animationDelay: "1.2s" }}>
          {couple.bride}
        </span>
        <span
          className="block animate-pop text-[0.5em] opacity-0"
          style={{ animationDelay: "2.6s" }}
        >
          &amp;
        </span>
        <span className={name} style={{ animationDelay: "3s" }}>
          {couple.groom}
        </span>
      </h1>
      <div
        className="animate-fade opacity-0"
        style={{ animationDelay: "4.5s" }}
      >
        <Divider className="my-4" />
      </div>
      <p
        className="animate-fade text-xl tracking-[0.3em] text-wine uppercase opacity-0"
        style={{ animationDelay: "5s" }}
      >
        {dateLabel}
      </p>
      <div className="absolute bottom-6 h-12 w-px animate-drop bg-linear-to-b from-gold to-transparent opacity-0" />
      {petals.map((s, i) => (
        <i
          key={i}
          className="pointer-events-none absolute -top-8 h-7 w-5 animate-fall rounded-[80%_0_80%_0] bg-rose opacity-70"
          style={s}
        />
      ))}
    </header>
  );
}

function Invitation() {
  return (
    <Reveal>
      <h2 className={H2}>With Love and Joy</h2>
      <p className="text-[1.7rem] font-semibold tracking-wide">
        The Rama Family
      </p>
      <p className={`${LEAD} mt-2`}>
        invite you to the wedding of their daughter
      </p>

      <p className="mt-6 font-script text-5xl text-wine">Giri Nandini</p>
      <p className="mt-1 text-[1.35rem] italic">with</p>
      <p className="mt-1 font-script text-5xl text-wine">Siddharth Suresh</p>
      <p className="mt-2 text-[1.1rem] italic opacity-80">
        (S/o Suresh Kurup C and Manjula KU)
      </p>

      <Divider />
      <p className={LEAD}>
        With our families’ blessings, we invite you to celebrate the beginning
        of our forever. Your love and good wishes would mean the world to us.
      </p>
      <Divider className="mb-0" />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {events.map((ev) => (
          <article
            key={ev.title}
            className="relative overflow-hidden rounded-[6px_28px_6px_28px] border border-line bg-card px-6 py-8"
          >
            <Sprig className="top-1 right-1" />
            <Sprig className="bottom-1 left-1 rotate-180" />
            <h3 className="font-script text-4xl font-normal text-wine">
              {ev.title}
            </h3>
            <p className="mt-1.5 text-[1.45rem] font-semibold">
              {ev.date ?? dateLabel}
              <br />
              {ev.time}
            </p>
            <address className="mt-3 mb-5 not-italic">
              {ev.venue}
              <br />
              {ev.address}
            </address>
            <a
              className={BTN}
              href={ev.map}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Maps
            </a>
          </article>
        ))}
      </div>
    </Reveal>
  );
}

// function Invitation() {
//   return (
//     <Reveal>
//       <h2 className={H2}>You are invited</h2>
//       <p className={LEAD}>
//         Together with our families, we joyfully invite you to celebrate our wedding and share in the blessings of the day.
//       </p>
//       <div className="mx-auto mt-8 h-px w-24 bg-gold" />
//       <div className="mt-8 grid gap-6 sm:grid-cols-2">
//         {events.map((ev) => (
//           <article key={ev.title} className="rounded-[6px_28px_6px_28px] border border-line bg-card px-6 py-8">
//             <h3 className="font-script text-4xl font-normal text-wine">{ev.title}</h3>
//             <p className="mt-1.5 text-[1.45rem] font-semibold">{ev.date}<br />{ev.time}</p>
//             <address className="mt-3 mb-5 not-italic">{ev.venue}<br />{ev.address}</address>
//             <a className={BTN} href={ev.map} target="_blank" rel="noopener noreferrer">Open in Maps</a>
//           </article>
//         ))}
//       </div>
//     </Reveal>
//   )
// }

function useCountdown(target) {
  const calc = () => Math.max(0, new Date(target).getTime() - Date.now());
  const [ms, setMs] = useState(calc);
  useEffect(() => {
    const t = setInterval(() => setMs(calc()), 1000);
    return () => clearInterval(t);
  }, [target]);
  return {
    days: Math.floor(ms / 864e5),
    hours: Math.floor(ms / 36e5) % 24,
    mins: Math.floor(ms / 6e4) % 60,
    secs: Math.floor(ms / 1e3) % 60,
  };
}

function SaveTheDate() {
  const c = useCountdown(weddingDate);
  const d = new Date(weddingDate);
  const ist = (o, fn = "toLocaleDateString") =>
    d[fn]("en-IN", { timeZone: "Asia/Kolkata", ...o });
  const weekday = ist({ weekday: "long" });
  const day = ist({ day: "numeric" });
  const month = ist({ month: "long" });
  const year = ist({ year: "numeric" });
  const time = ist(
    { hour: "numeric", minute: "2-digit", hour12: true },
    "toLocaleTimeString",
  ).toUpperCase();
  const units = [
    ["days", "Days"],
    ["hours", "Hours"],
    ["mins", "Minutes"],
    ["secs", "Seconds"],
  ];

  return (
    <Reveal>
      <h2 className={H2}>Save the date</h2>

      <div className="relative mx-auto mt-6 w-full max-w-md rounded-[6px_36px_6px_36px] border-2 border-gold bg-card p-2 text-center">
        <div className="flex flex-col items-center rounded-[2px_30px_2px_30px] border border-gold/40 px-5 py-8">
          <p className="text-sm font-medium tracking-[0.35em] text-wine uppercase">
            {weekday}
          </p>
          <div className="my-5 flex w-full items-center justify-center gap-3">
            <span className="text-sm tracking-[0.2em] uppercase sm:text-base">
              {month}
            </span>
            <span className="border-x border-gold px-5 text-6xl leading-none font-semibold text-wine sm:text-7xl">
              {day}
            </span>
            <span className="text-sm tracking-[0.2em] sm:text-base">
              {year}
            </span>
          </div>
          <p className="text-2xl font-semibold text-wine">{time}</p>
          <p className="mt-3 text-base italic opacity-80">
            Reception the next day at 6:00 PM
          </p>
        </div>
      </div>

      <Divider />
      <p className="mb-5 text-[1.2rem] tracking-widest uppercase opacity-80">
        Counting down to our big day
      </p>

      <div
        className="mx-auto grid max-w-md grid-cols-4 gap-3"
        aria-label="Countdown to the wedding"
      >
        {units.map(([key, label]) => (
          <div
            key={key}
            className="rounded-2xl border border-gold/50 border-t-4 border-t-gold bg-card px-1 py-4 shadow-sm"
          >
            <b className="block text-[2rem] leading-none font-semibold text-wine tabular-nums">
              {String(c[key]).padStart(2, "0")}
            </b>
            <span className="mt-2 block text-[0.7rem] tracking-widest uppercase">
              {label}
            </span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function Rsvp() {
  const empty = {
    name: "",
    attending: "Joyfully accepting",
    guests: 1,
    note: "",
  };
  const [f, setF] = useState(empty);
  const [open, setOpen] = useState(false);
  const [who, setWho] = useState({ name: "", attending: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const close = () => {
    setOpen(false);
    setF(empty);
  };

  // Close the popup with the Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const submit = (e) => {
    e.preventDefault();
    const msg = `RSVP for ${couple.bride} & ${couple.groom}\nName: ${f.name}\n${f.attending}\nGuests: ${f.guests}\nNote: ${f.note}`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener",
    );
    setWho({ name: f.name, attending: f.attending });
    setOpen(true);
  };

  return (
    <Reveal>
      <h2 className={H2}>RSVP</h2>
      <p className={LEAD}>Kindly reply by {rsvpBy}.</p>

      <div className="relative mx-auto mt-8 w-full max-w-md rounded-[6px_36px_6px_36px] border-2 border-gold bg-card p-2">
        <div className="relative overflow-hidden rounded-[2px_30px_2px_30px] border border-gold/40 px-6 py-8">
          <Sprig className="top-1 right-1" />
          <Sprig className="bottom-1 left-1 rotate-180" />

          <form onSubmit={submit} className="grid gap-3.5 text-left">
            <div>
              <label htmlFor="n" className="text-[1.05rem]">
                Your name
              </label>
              <input
                id="n"
                required
                value={f.name}
                onChange={set("name")}
                className={FIELD}
              />
            </div>
            <div>
              <label htmlFor="a" className="text-[1.05rem]">
                Attending
              </label>
              <select
                id="a"
                value={f.attending}
                onChange={set("attending")}
                className={FIELD}
              >
                <option>Joyfully accepting</option>
                <option>Regretfully declining</option>
              </select>
            </div>
            <div>
              <label htmlFor="g" className="text-[1.05rem]">
                Number of guests
              </label>
              <input
                id="g"
                type="number"
                min="1"
                max="10"
                value={f.guests}
                onChange={set("guests")}
                className={FIELD}
              />
            </div>
            <div>
              <label htmlFor="t" className="text-[1.05rem]">
                A note for the couple
              </label>
              <textarea
                id="t"
                rows="3"
                value={f.note}
                onChange={set("note")}
                className={FIELD}
              />
            </div>
            <div className="text-center">
              <button type="submit" className={`${BTN} mt-2`}>
                Send RSVP
              </button>
            </div>
          </form>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-6"
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="rsvp-title"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm animate-pop rounded-[6px_28px_6px_28px] border-2 border-gold bg-card px-8 py-10 text-center text-body opacity-0"
          >
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-gold text-3xl text-ink">
              &#10003;
            </div>
            <h3
              id="rsvp-title"
              className="font-script text-4xl font-normal text-wine"
            >
              Thank you, {who.name}!
            </h3>
            <p className="mt-2 text-[1.2rem]">
              Your response has been submitted.
            </p>
            <p className="mt-1 text-[1.2rem] italic">{who.attending}</p>
            <button autoFocus onClick={close} className={`${BTN} mt-6`}>
              Close
            </button>
          </div>
        </div>
      )}
    </Reveal>
  );
}
function Credit() {
  return (
    <div className="group px-4 pb-3 text-left">
      <button
        type="button"
        aria-label="Site credit"
        className="inline-flex cursor-default items-center gap-1.5 text-[1rem] text-[#A8843D]/80 italic transition duration-500 hover:text-[#A8843D] focus:text-[#A8843D] focus:outline-none"
      >
        <span aria-hidden="true">&hearts;</span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-700 group-focus-within:max-w-[20rem] group-hover:max-w-[20rem]">
          Made with love by Gautham S
        </span>
      </button>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <Invitation />
      {/* <Carousel /> */}
      <SaveTheDate />
      <Rsvp />
      <Reveal as="footer" className="mx-auto max-w-155 px-6 py-16 text-center">
        <p className="mb-4 text-[1.4rem] italic">
          Your presence would be the greatest gift we could receive.
        </p>
        <p className="mb-4 text-[1.4rem] italic">With love,</p>
        <p className="font-script text-5xl text-wine">
          {couple.bride} &amp; {couple.groom}
        </p>
      </Reveal>
      <Credit />
    </>
  );
}
