import Header from "../components/landing_page/header";
import Landing_body from "../components/landing_page/landing_body";
import Footer from "../components/landing_page/footer";
import UseHttp from "../hooks/http-hook";

const landingPage = () => {
  return (
    <div>
      <Header />
      <Landing_body />
      <Footer />
    </div>
  );
};

export default landingPage;
