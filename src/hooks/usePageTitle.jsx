import { useEffect } from "react";

export function usePageTitle(pageTitle) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `arlan abante`;

    return () => {
      document.title = previousTitle;
    };
  }, [pageTitle]);
}
