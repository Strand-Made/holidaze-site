/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import Container from "../components/layout/Container/Container";
import Heading from "../components/Typography/Heading";
import CreateEstablishmentForm from "../components/forms/CreateEstablishment/CreateEstablishmentForm";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../api/baseUrl";
import Main from "../components/layout/Main/Main";
import { FetchStatus } from "../utils/globalTypes";

const CreateEstablishment = () => {
  const [error, setError] = useState("");
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.IDLE);
  const [files, setFiles] = useState<Blob | string>("");

  let navigate = useNavigate();
  const { auth } = useAuth();
  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, [auth, navigate]);

  async function createEstablishment(data: any) {
    const url = `${baseUrl}/establishments`;
    setStatus(FetchStatus.FETCHING);
    const res = await axios({
      method: "POST",
      url: url,
      headers: {
        Authorization: `Bearer ${auth.token} `,
      },
      data: data,
    })
      .then((res) => {
        console.log(res.data);
        const imageUpload = async (res: any) => {
          const uploadUrl = `${baseUrl}/upload`;
          const formData = new FormData();
          const id = res.data.id;
          formData.append("files", files);
          formData.append("refId", id);
          formData.append("ref", "establishments");
          formData.append("field", "image");

          const imageRes = await axios({
            method: "POST",
            url: uploadUrl,
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
            data: formData,
          });
        };
        imageUpload(res);
        setStatus(FetchStatus.SUCCESS);
      })
      .catch((err) => {
        setError(err.toString());
        setStatus(FetchStatus.ERROR);
      });
  }

  return (
    <>
      <Helmet>
        <title>Create Establishment | Holidaze</title>
        <meta
          name="description"
          content="Creating your next establishments is a breeze with our creator"
        />
      </Helmet>
      <Main>
        <Container>
          <Heading>New Establishment</Heading>
          <Link to="/admin">Go back</Link>
          <CreateEstablishmentForm
            createEstablishment={createEstablishment}
            status={status}
            error={error}
            setFiles={setFiles}
            auth={auth}
          />
        </Container>
      </Main>
    </>
  );
};

export default CreateEstablishment;
