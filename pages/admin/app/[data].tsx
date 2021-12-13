import React, { useEffect, useState } from "react";
import AppSidebar from "../../../admin/components/AppSidebar";
import AppContent from "../../../admin/components/AppContent";
import AppHeader from "../../../admin/components/AppHeader";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../../admin/store";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { server } from "../../../admin/constant";
type Props = {
  data: any;
};

// export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
//   const res = await fetch(server + "/api/admin/article");
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: {
//           data: "create-article",
//         },
//         // path: "/admin/app/:data",
//       },
//     ],
//     fallback: true,
//   };
// }

const Index = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    const res = await fetch(server + "/api/admin/article");
    const data = await res.json();
    setdata(data);
  };
  useEffect(() => {
    getData();
  }, []);
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
