type ProjectDescriptionProps = {
  description: string;
};

export default function ProjectDescription({
  description,
}: ProjectDescriptionProps) {
  return (
    <p
      style={{
        fontSize: 14,
        color: "var(--text-secondary)",
        lineHeight: 1.85,
        marginBottom: 10,
        fontWeight: 300,
      }}
    >
      {description}
    </p>
  );
}
