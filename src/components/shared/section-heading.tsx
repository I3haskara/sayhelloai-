type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="caption mb-4 uppercase tracking-[0.2em] text-[#4f6084] dark:text-[#b5c0e1]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="heading-lg text-balance">{title}</h2>
      {body ? <p className="body-lg mt-6 text-[#4f6084] dark:text-[#b5c0e1]">{body}</p> : null}
    </div>
  );
}
