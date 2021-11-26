import { useAuth } from "../context/AuthContext";
import Container from "../components/layout/Container/Container";
import Heading from "../components/Typography/Heading";
import Enquiries from "../components/admin-dashboard/Enquiries/Enquiries";
import EstablishmentsPanel from "../components/admin-dashboard/EstablishmentsPanel/EstablishmentsPanel";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Switcher from "../components/layout/utilities/Switcher/Switcher";
import Emphasize from "../components/Typography/Emphasize";
import axios from "axios";
import { baseUrl } from "../api/baseUrl";
import EstablishmentElement from "../components/admin-dashboard/EstablishmentsPanel/EstablishmentElement";
import Box from "../components/layout/Box/Box";
import Spacer from "../components/layout/utilities/Spacer/Spacer";
import Main from "../components/layout/Main/Main";
import useToggle from "../hooks/useToggle";
import EnquiriesContainer from "../components/admin-dashboard/Enquiries/EnquiriesContainer/EnquiriresContainer";
import EnquiryModal from "../components/admin-dashboard/Enquiries/EnquiryModal/EnquiriyModal";

const Admin = () => {
  let navigate = useNavigate();
  const { auth } = useAuth();
  const [enquiries, setEnquiries] = useState([]);
  const [openEnquiry, setOpenEnquiry] = useState(null);
  const [establishments, setEstablishments] = useState([]);
  const [toggle, setToggle] = useToggle(false);

  const user = auth?.userinfo?.email;
  const userType = auth.userinfo.type;

  useEffect(() => {
    document.title = "Admin | Holidaze";
    if (!auth) {
      navigate("/login");
    }
    if (userType === "super") {
      navigate("/super");
    }
  });

  useEffect(() => {
    const url = `${baseUrl}/enquiries`;
    const token = auth.token;
    async function getEnquiries() {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { data } = res;

        const userEnquiries = data.filter((enquiry) => {
          if (enquiry.users_permissions_user.email === user) {
            return enquiry;
          }
          return null;
        });
        setEnquiries(userEnquiries);
      } catch (error) {
        console.log(error);
      }
    }
    getEnquiries();
  }, [user, auth.token]);

  useEffect(() => {
    const url = `${baseUrl}/establishments`;
    async function getEstablishments() {
      try {
        const res = await axios.get(url);
        const { data } = res;
        const isOwner = data.filter((establishment) => {
          if (establishment.user.email === user) {
            return establishment;
          }
          return null;
        });
        setEstablishments(isOwner);
      } catch (error) {
        console.log(error);
      }
    }
    getEstablishments();
  }, [user]);

  return (
    <Main>
      <Container>
        <Heading>Admin Dashboard</Heading>
        <span>
          Welcome <Emphasize>{user}</Emphasize>
        </span>
        <Spacer mt={"3"} />
        <Switcher space={2} threshold={800} limit={4}>
          <Box>
            <Heading.H2>Your Enquiries</Heading.H2>
            <EnquiriesContainer>
              {enquiries.length > 0 ? (
                enquiries.map((enquiry) => (
                  <Enquiries
                    key={enquiry.id}
                    enquiry={enquiry}
                    setToggle={setToggle}
                    setOpenEnquiry={setOpenEnquiry}
                  />
                ))
              ) : (
                <p>You have no enquiries at this moment</p>
              )}
            </EnquiriesContainer>
          </Box>
          <EstablishmentsPanel>
            {establishments.map((establishment) => (
              <EstablishmentElement
                key={establishment.id}
                name={establishment.title}
                slug={establishment.slug}
              />
            ))}
          </EstablishmentsPanel>

          {toggle && (
            <EnquiryModal
              enquiry={openEnquiry}
              token={auth.token}
              setToggle={setToggle}
              toggle={toggle}
            />
          )}
        </Switcher>
      </Container>
    </Main>
  );
};

export default Admin;
