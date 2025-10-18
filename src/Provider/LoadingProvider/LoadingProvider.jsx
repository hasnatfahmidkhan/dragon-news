import { useState } from "react";
import { LoadingContext } from "../../Context/LoadingContext/LoadingContext";

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const triggerLoader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const loadingInfo = { loading, setLoading, triggerLoader };
  return (
    <LoadingContext.Provider value={loadingInfo}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
