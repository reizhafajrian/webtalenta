import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import Cookies from "universal-cookie";
const Index = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const loginApi = async () => {
    const cookies = new Cookies();
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .catch((err) => {
          console.log(err);
          return err;
        });

      cookies.set("token", res.token, { path: "/" });
      cookies.set("user", res.user, { path: "/" });
      window.location.href = "/admin/app";
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    console.log(token, "ini token");
  }, []);

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText></CInputGroupText>
                      <CFormInput
                        placeholder="Email"
                        autoComplete="username"
                        onChange={(e) => {
                          setform({ ...form, email: e.target.value });
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText></CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) =>
                          setform({ ...form, password: e.target.value })
                        }
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          color="primary"
                          className="px-4"
                          onClick={loginApi}
                        >
                          Login
                        </CButton>
                      </CCol>
                      {/* <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Index;
