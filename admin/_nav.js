import React from "react";
// import CIcon from '@coreui/icons-react'
// import {
//   cilBell,
//   cilCalculator,
//   cilChartPie,
//   cilCursor,
//   cilDrop,
//   cilNotes,
//   cilPencil,
//   cilPuzzle,
//   cilSpeedometer,
//   cilStar,
// } from '@coreui/icons-react'
import Link from "next/link";
import { HiViewGridAdd } from "react-icons/hi";
import { MdInvertColors } from "react-icons/md";

import { CNavGroup, CNavItem, CNavLink, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: Link,
    name: "Add Article",
    href: "/admin/app/create-article",
    icon: <HiViewGridAdd className={"nav-icon"} />,
    badge: {
      color: "info",
    },
  },
  // {
  //   component: CNavTitle,
  //   name: "Theme",
  // },
  // {
  //   component: Link,
  //   name: "Colors",
  //   href: "/admin/app/color",
  //   icon: <MdInvertColors className={"nav-icon"} />,
  // },
  // {
  //   component: CNavItem,
  //   name: "Typography",
  //   href: "/theme/typography",
  //   // icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavTitle,
  //   name: "Components",
  // },
  // {
  //   component: CNavGroup,
  //   name: "Base",
  //   href: "/base",
  //   // icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: "Accordion",
  //       href: "/base/accordion",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Breadcrumb",
  //       href: "/base/breadcrumbs",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Cards",
  //       href: "/base/cards",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Carousel",
  //       href: "/base/carousels",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Collapse",
  //       href: "/base/collapses",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "List group",
  //       href: "/base/list-groups",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Navs & Tabs",
  //       href: "/base/navs",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Pagination",
  //       href: "/base/paginations",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Popovers",
  //       href: "/base/popovers",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Progress",
  //       href: "/base/progress",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Spinners",
  //       href: "/base/spinners",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Tables",
  //       href: "/base/tables",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Tooltips",
  //       href: "/base/tooltips",
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: "Buttons",
  //   href: "/buttons",
  //   // icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: "Buttons",
  //       href: "/buttons/buttons",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Buttons groups",
  //       href: "/buttons/button-groups",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Dropdowns",
  //       href: "/buttons/dropdowns",
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: "Forms",
  //   // icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: "Form Control",
  //       href: "/forms/form-control",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Select",
  //       href: "/forms/select",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Checks & Radios",
  //       href: "/forms/checks-radios",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Range",
  //       href: "/forms/range",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Input Group",
  //       href: "/forms/input-group",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Floating Labels",
  //       href: "/forms/floating-labels",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Layout",
  //       href: "/forms/layout",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Validation",
  //       href: "/forms/validation",
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: "Charts",
  //   href: "/charts",
  //   // icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: "Icons",
  //   // icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: "CoreUI Free",
  //       href: "/icons/coreui-icons",
  //       badge: {
  //         color: "success",
  //         text: "NEW",
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: "CoreUI Flags",
  //       href: "/icons/flags",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "CoreUI Brands",
  //       href: "/icons/brands",
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: "Notifications",
  //   // icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: "Alerts",
  //       href: "/notifications/alerts",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Badges",
  //       href: "/notifications/badges",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Modal",
  //       href: "/notifications/modals",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Toasts",
  //       href: "/notifications/toasts",
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: "Widgets",
  //   href: "/widgets",
  //   // icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: "info",
  //     text: "NEW",
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: "Extras",
  // },
  // {
  //   component: CNavGroup,
  //   name: "Pages",
  //   // icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: "Login",
  //       href: "/login",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Register",
  //       href: "/register",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Error 404",
  //       href: "/404",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "Error 500",
  //       href: "/500",
  //     },
  //   ],
  // },
];

export default _nav;
