const TechIcon = ({
  component,
  customSizeClassName = "size-8",
}: {
  component: React.ElementType;
  customSizeClassName?: string;
}) => {
  const Component = component;
  return (
    <>
      <Component
        className={`${customSizeClassName} fill-[url(#tech-icon-gradient)]`}
      />
      <svg className="absolute size-0">
        <defs>
          <linearGradient id="tech-icon-gradient">
            <stop offset="0%" stopColor="rgb(110 231 183)" />
            <stop offset="100%" stopColor="rgb(56 189 248)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-icon-gradient)" />
      </svg>
    </>
  );
};

export default TechIcon;
