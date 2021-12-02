import ContentLoader from "react-content-loader";

interface IDashboardLoader {
  speed?: number;
  width?: number;
  height?: number;
}

const DashboardLoader = ({ speed, width, height }: IDashboardLoader) => {
  return (
    <ContentLoader
      speed={speed ? speed : 2}
      width={width ? width : 400}
      height={height ? height : 160}
      viewBox="0 0 400 160"
      backgroundColor="var(--cool-gray-2)"
    >
      <rect x="50" y="6" rx="4" ry="4" width="343" height="50" />
      <rect x="50" y="55" rx="4" ry="4" width="343" height="50" />
      <rect x="50" y="104" rx="4" ry="4" width="343" height="50" />
      <rect x="50" y="104" rx="4" ry="4" width="343" height="50" />
    </ContentLoader>
  );
};

export default DashboardLoader;
