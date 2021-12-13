import React from "react";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";

// import CIcon from '@coreui/icons-react'


import Cookies from "universal-cookie";
const AppHeaderDropdown = () => {
  const logout = () => {
    const cookies = new Cookies();
    const test = cookies.remove("token");
    cookies.remove("token", { path: "/" });
    cookies.remove("user", { path: "/" });
    window.location.href = "/admin/login";
  };
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar
          src={"https://style.anu.edu.au/_anu/4/images/placeholders/person.png"}
          size="md"
        />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Account
        </CDropdownHeader>
        <CDropdownItem onClick={logout}>Logout</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
