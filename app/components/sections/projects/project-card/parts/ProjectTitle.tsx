type ProjectTitleProps = {
  name: string;
};

export default function ProjectTitle({ name }: ProjectTitleProps) {
  return (
    <h3
      style={{
        fontFamily: "Cormorant Garamond, serif",
        fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
        fontWeight: 500,
        letterSpacing: "-0.01em",
        marginBottom: 28,
      }}
    >
      {name}
    </h3>
  );
}
