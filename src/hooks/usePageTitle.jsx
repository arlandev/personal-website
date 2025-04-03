import { useEffect } from "react";

export function usePageTitle(pageTitle) {
  useEffect(() => {
    console.log("Setting page title to:", `Arlan <> ${pageTitle}`);
    const previousTitle = document.title;
    document.title = `Arlan <> ${pageTitle}`;

    return () => {
      document.title = previousTitle;
    };
  }, [pageTitle]);
}
