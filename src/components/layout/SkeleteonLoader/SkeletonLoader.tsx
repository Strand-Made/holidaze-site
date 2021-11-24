import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Box from "../Box/Box";

interface ISkeletonLoader {
  width: number | string;
  height: number | string;
}

const SkeletonLoader = ({ width, height }: ISkeletonLoader) => {
  return (
    <Box>
      <SkeletonTheme>
        <Skeleton />
      </SkeletonTheme>
    </Box>
  );
};

export default SkeletonLoader;
