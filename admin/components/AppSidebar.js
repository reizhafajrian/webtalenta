import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";

import { AppSidebarNav } from "./AppSidebarNav";

import SimpleBar from "simplebar-react";
// import "simplebar/dist/simplebar.min.css";

import navigation from "../_nav";
// import Link from "next/link";
// sidebar nav config

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);
  useEffect(() => {
    console.log(sidebarShow, "visible");
  }, [sidebarShow]);

  return (
    <CSidebar
      position="fixed"
      selfHiding="md"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onHide={() => {
        dispatch({ type: "set", sidebarShow: false });
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/"></CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() =>
          dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
        }
      />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
