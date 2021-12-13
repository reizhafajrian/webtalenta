import React from "react";
// import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import AppSidebar from "../components/AppSidebar";
import AppContent from "../components/AppContent";
import AppHeader from "../components/AppHeader";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../store";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
type Props = {
  data: any;
};
export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/admin/article");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          data: "create-article",
        },
        // path: "/admin/app/:data",
      },
    ],
    fallback: true,
  };
}
const Index = ({ data }) => {
  return (
    <div>
      <Provider store={store}>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3">
            <AppContent dataarticle={data} />
          </div>
          {/* <AppFooter /> */}
        </div>
      </Provider>
    </div>
  );
};

export default Index;
