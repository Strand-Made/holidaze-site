import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Helmet } from "react-helmet-async";
import RelativeWrapper from "./components/layout/navigation/MobileNav/RelativeWrapper";
import Navbar from "./components/layout/navigation/Navbar";
import GlobalStyle from "./globalStyle/GlobalStyle";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Establishments from "./pages/Establishments";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Spacer from "./components/layout/utilities/Spacer/Spacer";
import Footer from "./components/layout/Footer/Footer";
import Establishment from "./pages/Establishment";
import CreateEstablishment from "./pages/CreateEstablishment";
import Super from "./pages/Super";
import Results from "./pages/Results";

function App() {
  return (
    <AuthProvider>
      <Helmet>
        <title>Holidaze</title>
        <meta
          name="description"
          content="Holidaze offers great hotels, b&bs and guesthouses in Bergen. We vet all our hosts, so you get the best experience "
        />
      </Helmet>
      <RelativeWrapper>
        <GlobalStyle />
        <Navbar />
        <Spacer mb="1" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results/:search" element={<Results />} />
          <Route path="/establishments" element={<Establishments />} />
          <Route
            path="/establishments/:establishmentSlug"
            element={<Establishment />}
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="admin" element={<Admin />} />
          <Route
            path="/admin/create-establishment"
            element={<CreateEstablishment />}
          />
          <Route path="/super" element={<Super />} />

          <Route path="*" element={<main>This page doesn't exist</main>} />
        </Routes>
      </RelativeWrapper>

      <Footer />
    </AuthProvider>
  );
}

export default App;
