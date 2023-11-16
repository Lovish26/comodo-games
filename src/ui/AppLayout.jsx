import { Outlet } from "react-router-dom";

import { useUser } from "../features/authentication/useUser";

import Header from "./Header";
import Footer from "./Footer";
import Spinner from "./Spinner";
import FullPage from "./FullPage";

function AppLayout() {
  const { isLoading } = useUser();

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
