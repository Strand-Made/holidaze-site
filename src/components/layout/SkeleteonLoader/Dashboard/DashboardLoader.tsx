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
      backgroundColor="#d9d9d9"
      foregroundColor="#ededed"
    >
      <rect x="50" y="6" rx="4" ry="4" width="343" height="100" />

      <rect x="50" y="55" rx="4" ry="4" width="343" height="100" />

      <rect x="50" y="104" rx="4" ry="4" width="343" height="100" />
    </ContentLoader>
  );
};

export default DashboardLoader;
