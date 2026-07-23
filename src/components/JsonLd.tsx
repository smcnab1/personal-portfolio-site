type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON is serialised from trusted application data and angle brackets are escaped.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
