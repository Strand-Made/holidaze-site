import { useAuth } from "../context/AuthContext";
import { Helmet } from "react-helmet-async";
import Container from "../components/layout/Container/Container";
import Heading from "../components/Typography/Heading";
import Enquiries from "../components/admin-dashboard/Enquiries/Enquiries";
import EstablishmentsPanel from "../components/admin-dashboard/EstablishmentsPanel/EstablishmentsPanel";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { EstablishmentType, FetchStatus } from "../utils/globalTypes";
import Message from "../components/Message/Message";
import DashboardLoader from "../components/layout/SkeleteonLoader/Dashboard/DashboardLoader";
import EmptyEnquiries from "../components/empty-states/EmptyEnquiries";
import EmptyEstablishments from "../components/empty-states/EmptyEstablishments";

type TUserEnquiries = {
  Message: String;
  Name: String;
  email: string;
  establishment_name: string;
  from_date: string;
  guests: number;
  id: number;
  users_permissions_user: {
    id: number;
    username: string;
    email: string;
    confirmed: boolean;
  };
};

const Admin = () => {
  let navigate = useNavigate();
  const { auth } = useAuth();

  const [enquiries, setEnquiries] = useState([]);
  const [openEnquiry, setOpenEnquiry] = useState<number | null>(null);

  const [establishments, setEstablishments] = useState([]);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.IDLE);

  const [establishError, setEstablishError] = useState("");
  const [establishStatus, setEstablishStatus] = useState<FetchStatus>(
    FetchStatus.IDLE
  );
  const [toggle, setToggle] = useToggle(false);

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
    const userType = auth.userinfo?.type;
    if (userType === "super") {
      navigate("/super");
    }
  }, [auth, navigate]);

  const user = auth.userinfo?.email;
  useEffect(() => {
    const url = `${baseUrl}/enquiries`;
    const token = auth?.token;
    async function getEnquiries() {
      try {
        setStatus(FetchStatus.FETCHING);
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { data } = res;
        const userEnquiries = data.filter((enquiry: TUserEnquiries) => {
          console.log(enquiry);
          if (enquiry.users_permissions_user.email === user) {
            return enquiry;
          }
          return null;
        });

        setEnquiries(userEnquiries);
        if (userEnquiries.length === 0) {
          return setStatus(FetchStatus.NO_RESULT);
        }
        setStatus(FetchStatus.SUCCESS);
      } catch (error: any) {
        setStatus(FetchStatus.ERROR);
        setError(error.toString());
      }
    }
    getEnquiries();
  }, [auth?.token, user, setStatus]);

  useEffect(() => {
    const url = `${baseUrl}/establishments`;
    async function getEstablishments() {
      try {
        setEstablishStatus(FetchStatus.FETCHING);
        const res = await axios.get(url);
        const { data } = res;

        const isOwner = data.filter((establishment: EstablishmentType) => {
          if (establishment.user?.email === user) {
            return establishment;
          }
          return null;
        });

        setEstablishments(isOwner);
        if (isOwner.length === 0) {
          return setEstablishStatus(FetchStatus.NO_RESULT);
        }
        setEstablishStatus(FetchStatus.SUCCESS);
      } catch (error: any) {
        setEstablishStatus(FetchStatus.ERROR);
        setEstablishError(error.toString());
      }
    }
    getEstablishments();
  }, [user]);

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Holidaze</title>
        <meta
          name="description"
          content="Manage your enquiries and your establishments with our easy to manage dashboard"
        />
      </Helmet>
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
                {status === FetchStatus.ERROR && (
                  <Message.Error>{error}</Message.Error>
                )}
                {status === FetchStatus.FETCHING && (
                  <DashboardLoader height={300} />
                )}

                {enquiries.length > 0
                  ? enquiries.map((enquiry: any) => (
                      <Enquiries
                        key={enquiry.id}
                        enquiry={enquiry}
                        setToggle={setToggle}
                        setOpenEnquiry={setOpenEnquiry}
                      />
                    ))
                  : null}
                {status === FetchStatus.NO_RESULT && <EmptyEnquiries />}
              </EnquiriesContainer>
            </Box>
            <EstablishmentsPanel>
              {establishStatus === FetchStatus.ERROR && (
                <Message.Error>{establishError}</Message.Error>
              )}
              {establishments.length > 0
                ? establishments.map((establishment: EstablishmentType) => (
                    <EstablishmentElement
                      key={establishment.id}
                      name={establishment.title}
                      slug={establishment.slug}
                    />
                  ))
                : null}
              {establishStatus === FetchStatus.NO_RESULT && (
                <EmptyEstablishments />
              )}
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
    </>
  );
};

export default Admin;
