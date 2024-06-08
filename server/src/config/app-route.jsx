import React, { useMemo } from 'react';
import { Outlet } from "react-router-dom";
import App from "./../app";
import { useSelector } from "react-redux";
import DashboardV1 from "../pages/dashboard/dashboard-v1";
import EmailInbox from "./../pages/email/email-inbox";
import EmailCompose from "./../pages/email/email-compose";
import EmailDetail from "./../pages/email/email-detail";
import Widgets from "./../pages/widget/widget";
import UIGeneral from "./../pages/ui/ui-general";
import UITypography from "./../pages/ui/ui-typography";
import UITabsAccordion from "./../pages/ui/ui-tabs-accordion";
import UIModalNotification from "./../pages/ui/ui-modal-notification";
import UIWidgetBoxes from "./../pages/ui/ui-widget-boxes";
import UIMediaObject from "./../pages/ui/ui-media-object";
import UIButtons from "./../pages/ui/ui-buttons";
import UIIconDuotone from "./../pages/ui/ui-icon-duotone";
import UIIconFontAwesome from "./../pages/ui/ui-icon-fontawesome";
import UIIconBootstrap from "./../pages/ui/ui-icon-bootstrap";
import UIIconSimpleLineIcons from "./../pages/ui/ui-icon-simple-line-icons";
import UILanguageBarIcon from "./../pages/ui/ui-language-bar-icon";
import UISocialButtons from "./../pages/ui/ui-social-buttons";
import Bootstrap5 from "./../pages/bootstrap/bootstrap-5";
import FormElements from "./../pages/form/form-elements";
import FormPlugins from "./../pages/form/form-plugins";
import FormWizards from "./../pages/form/form-wizards";
import TableElements from "./../pages/table/table-elements";
import TablePlugins from "./../pages/table/table-plugins";
import PosCustomerOrder from "./../pages/pos/customer-order";
import PosKitchenOrder from "./../pages/pos/kitchen-order";
import PosCounterCheckout from "./../pages/pos/counter-checkout";
import PosTableBooking from "./../pages/pos/table-booking";
import PosMenuStock from "./../pages/pos/menu-stock";
import ChartJS from "./../pages/chart/chart-js";
import ChartApex from "./../pages/chart/chart-apex";
import Calendar from "./../pages/calendar/calendar";
import Map from "./../pages/map/map";
import Gallery from "./../pages/gallery/gallery";
import PageBlank from "./../pages/option/page-blank";
import PageWithFooter from "./../pages/option/page-with-footer";
import PageWithFixedFooter from "./../pages/option/page-with-fixed-footer";
import PageWithoutSidebar from "./../pages/option/page-without-sidebar";
import PageWithRightSidebar from "./../pages/option/page-with-right-sidebar";
import PageWithMinifiedSidebar from "./../pages/option/page-with-minified-sidebar";
import PageWithTwoSidebar from "./../pages/option/page-with-two-sidebar";
import PageFullHeight from "./../pages/option/page-full-height";
import PageWithWideSidebar from "./../pages/option/page-with-wide-sidebar";
import PageWithLightSidebar from "./../pages/option/page-with-light-sidebar";
import PageWithMegaMenu from "./../pages/option/page-with-mega-menu";
import PageWithTopMenu from "./../pages/option/page-with-top-menu";
import PageWithBoxedLayout from "./../pages/option/page-with-boxed-layout";
import PageWithMixedMenu from "./../pages/option/page-with-mixed-menu";
import PageBoxedLayoutWithMixedMenu from "./../pages/option/page-boxed-layout-with-mixed-menu";
import PageWithTransparentSidebar from "./../pages/option/page-with-transparent-sidebar";
import PageWithSearchSidebar from "./../pages/option/page-with-search-sidebar";
import ExtraTimeline from "./../pages/extra/extra-timeline";
import ExtraComingSoon from "./../pages/extra/extra-coming-soon";
import ExtraSearch from "./../pages/extra/extra-search";
import ExtraInvoice from "./../pages/extra/extra-invoice";
import RollPermissionError from "./../pages/extra/roll-permission-error";
import ExtraError from './../pages/extra/extra-error'
import ExtraProfile from "./../pages/extra/extra-profile";
import ExtraScrumBoard from "./../pages/extra/extra-scrum-board";
import ExtraCookieAcceptanceBanner from "./../pages/extra/extra-cookie-acceptance-banner";
import ExtraOrders from "./../pages/extra/extra-orders";
import ExtraOrderDetails from "./../pages/extra/extra-order-details";
import ExtraProducts from "./../pages/extra/extra-products";
import ExtraProductDetails from "./../pages/extra/extra-product-details";
import ExtraFileManager from "./../pages/extra/extra-file-manager";
import ExtraPricingPage from "./../pages/extra/extra-pricing-page";
import ExtraMessengerPage from "./../pages/extra/extra-messenger-page";
import ExtraDataManagement from "./../pages/extra/extra-data-management";
import ExtraSettingsPage from "./../pages/extra/extra-settings-page";
import HelperCSS from "./../pages/helper/helper-css";
import PrivateRoute from "./private";
import DataTable from "../components/datable";
import policyConfig from './policy-configuration';
import User from "../utils/user";
import LoginV2 from "../pages/user/login";
import News from "../pages/news";
import CustomerList from "../pages/customer";
import UsersList from '../pages/user/list'
import NewsDetail from "../pages/news-detail";
import NewsCreate from "../pages/news-create";
import NewsEdit from "../pages/news-edit";
import NewsCategoriesList from '../pages/categories-list';
import NewsTagList from '../pages/tag-list';
//import CustomerProfile from "../pages/customer-profile/profile";


const { isAuthenticated } = new User();

const routeAccessRollwise = (elem, Component, role) => {
  const data = policyConfig[elem]
  const routeAccess = data.accessedBy

  const isRole = routeAccess && routeAccess.includes(role);
  return isRole ? <Component role={role} /> : <RollPermissionError />;
}

const CurrentRoute = ({ elem, component }) => {
  const { role } = useSelector((state) => {
    return state["login"];
  });

  const memoizedComponent = useMemo(() => routeAccessRollwise(elem, component, role), [elem, component]);
  return memoizedComponent;
};

const AppRoute = [
  {
    path: "*",
    element: <App />,
    children: [
      {
        path: "*",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: (
              <PrivateRoute>
                <DashboardV1 />
              </PrivateRoute>
            ),
          },
          // { path: 'v2', element: <DashboardV2/> },
          // { path: 'v3', element: <DashboardV3/> }
        ],
      },
      {
         path: 'login',
         element: <LoginV2 isAuthenticated={isAuthenticated}/>,
         // children: [
         //  // { path: 'login-v1', element:<LoginV1/> },
             // { path: 'login', element: <LoginV2/> },
         //  // { path: 'login-v3', element:<LoginV3/> },
         //  // { path: 'register-v3', element:<RegisterV3/> }
         // ]
      },
      {
        path: "dashboard",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: (
              <PrivateRoute>
                <DashboardV1 />
              </PrivateRoute>
            ),
          },
          // { path: 'v2', element: <DashboardV2/> },
          // { path: 'v3', element: <DashboardV3/> }
        ],
      },
      {
        path: "RollPermissionError",
        element: <RollPermissionError />
      },
      {
        path: "datatable",
        element: <DataTable />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "email/*",
        element: <Outlet />,
        children: [
          { path: "inbox", element: <EmailInbox /> },
          { path: "compose", element: <EmailCompose /> },
          { path: "detail", element: <EmailDetail /> },
        ],
      },
      {
        path: "widgets",
        element: <Widgets />,
      },
      {
        path: "ui/*",
        element: <Outlet />,
        children: [
          { path: "general", element: <UIGeneral /> },
          { path: "typography", element: <UITypography /> },
          { path: "tabs-accordion", element: <UITabsAccordion /> },
          { path: "modal-notification", element: <UIModalNotification /> },
          { path: "widget-boxes", element: <UIWidgetBoxes /> },
          { path: "media-object", element: <UIMediaObject /> },
          { path: "buttons", element: <UIButtons /> },
          { path: "icon-duotone", element: <UIIconDuotone /> },
          { path: "icon-fontawesome", element: <UIIconFontAwesome /> },
          { path: "icon-bootstrap", element: <UIIconBootstrap /> },
          {
            path: "icon-simple-line-icons",
            element: <UIIconSimpleLineIcons />,
          },
          { path: "language-bar-icon", element: <UILanguageBarIcon /> },
          { path: "social-buttons", element: <UISocialButtons /> },
        ],
      },
      {
        path: "bootstrap-5",
        element: <Bootstrap5 />,
      },
      {
        path: "form/*",
        element: <Outlet />,
        children: [
          { path: "elements", element: <FormElements /> },
          { path: "plugins", element: <FormPlugins /> },
          { path: "wizards", element: <FormWizards /> },
        ],
      },
      {
        path: "table/*",
        element: <Outlet />,
        children: [
          { path: "elements", element: <TableElements /> },
          { path: "plugins", element: <TablePlugins /> },
        ],
      },
      {
        path: "pos/*",
        element: <Outlet />,
        children: [
          { path: "customer-order", element: <PosCustomerOrder /> },
          { path: "kitchen-order", element: <PosKitchenOrder /> },
          { path: "counter-checkout", element: <PosCounterCheckout /> },
          { path: "table-booking", element: <PosTableBooking /> },
          { path: "menu-stock", element: <PosMenuStock /> },
        ],
      },
      {
        path: "chart/*",
        element: <Outlet />,
        children: [
          { path: "js", element: <ChartJS /> },
          { path: "apex", element: <ChartApex /> },
        ],
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "map",
        element: <Map />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "page-option/*",
        element: <Outlet />,
        children: [
          { path: "blank", element: <PageBlank /> },
          { path: "with-footer", element: <PageWithFooter /> },
          { path: "with-fixed-footer", element: <PageWithFixedFooter /> },
          { path: "without-sidebar", element: <PageWithoutSidebar /> },
          { path: "with-right-sidebar", element: <PageWithRightSidebar /> },
          {
            path: "with-minified-sidebar",
            element: <PageWithMinifiedSidebar />,
          },
          { path: "with-two-sidebar", element: <PageWithTwoSidebar /> },
          { path: "full-height", element: <PageFullHeight /> },
          { path: "with-wide-sidebar", element: <PageWithWideSidebar /> },
          { path: "with-light-sidebar", element: <PageWithLightSidebar /> },
          { path: "with-mega-menu", element: <PageWithMegaMenu /> },
          { path: "with-top-menu", element: <PageWithTopMenu /> },
          { path: "with-boxed-layout", element: <PageWithBoxedLayout /> },
          { path: "with-mixed-menu", element: <PageWithMixedMenu /> },
          {
            path: "boxed-layout-with-mixed-menu",
            element: <PageBoxedLayoutWithMixedMenu />,
          },
          { path: "with-boxed-layout", element: <PageWithBoxedLayout /> },
          {
            path: "with-transparent-sidebar",
            element: <PageWithTransparentSidebar />,
          },
          { path: "with-search-sidebar", element: <PageWithSearchSidebar /> },
        ],
      },
      {
        path: "extra/*",
        element: <Outlet />,
        children: [
          { path: "timeline", element: <ExtraTimeline /> },
          { path: "coming-soon", element: <ExtraComingSoon /> },
          { path: "search", element: <ExtraSearch /> },
          { path: "invoice", element: <ExtraInvoice /> },
          { path: "error", element: <ExtraError /> },
          { path: "profile", element: <ExtraProfile /> },
          { path: "scrum-board", element: <ExtraScrumBoard /> },
          {
            path: "cookie-acceptance-banner",
            element: <ExtraCookieAcceptanceBanner />,
          },
          { path: "orders", element: <ExtraOrders /> },
          { path: "order-details", element: <ExtraOrderDetails /> },
          { path: "products", element: <ExtraProducts /> },
          { path: "product-details", element: <ExtraProductDetails /> },
          { path: "file-manager", element: <ExtraFileManager /> },
          { path: "pricing-page", element: <ExtraPricingPage /> },
          { path: "messenger-page", element: <ExtraMessengerPage /> },
          { path: "data-management", element: <ExtraDataManagement /> },
          { path: "settings-page", element: <ExtraSettingsPage /> },
        ],
      },
      // {
      //   path: "",
      //   element: <Outlet />,
      //   children: [
      //     // { path: 'login-v1', element:<LoginV1/> },
      //     {
      //       path: "login",
      //       element: <LoginV2 isAuthenticated={isAuthenticated} />,
      //     },
      //     // { path: 'login-v3', element:<LoginV3/> },
      //     // { path: 'register-v3', element:<RegisterV3/> }
      //   ],
      // },
      // {
      //   path: policyConfig['loansRoute'].route,
      //   element: <CurrentRoute elem='loansRoute' component={Loans} />,
      // },
      // {
      //   path: policyConfig['usersRoute'].route,
      //   element: <CurrentRoute elem='usersRoute' component={UserList} />,
      // },
      // {
      //   path: policyConfig['loansDetailsRoute'].route,
      //   element: <CurrentRoute elem='loansDetailsRoute' component={LoansDetails} />,
      // },
      {
        path: policyConfig['customersRoute'].route,
        element: <CurrentRoute elem='customersRoute' component={CustomerList} />,
      },
      {
        path: policyConfig['usersRoute'].route,
        element: <CurrentRoute elem='usersRoute' component={UsersList} />,
      },
      {
        path: policyConfig['newsDetailRoute'].route,
        element: <CurrentRoute elem='newsDetailRoute' component={NewsDetail} />,
      },
      {
        path: policyConfig['newsCreateRoute'].route,
        element: <CurrentRoute elem='newsCreateRoute' component={NewsCreate} />,
      },
      {
        path: policyConfig['newsEditRoute'].route,
        element: <CurrentRoute elem='newsEditRoute' component={NewsEdit} />,
      },
      {
        path: policyConfig['newsCategoryList'].route,
        element: <CurrentRoute elem='newsCategoryList' component={NewsCategoriesList} />,
      },
      {
        path: policyConfig['newsTagList'].route,
        element: <CurrentRoute elem='newsTagList' component={NewsTagList} />,
      },
      // {
      //   path: policyConfig['customerProfileRoute'].route,
      //   element: <CurrentRoute elem='customersRoute' component={CustomerProfile} />,
      // },
      // {
      //   path: policyConfig['userProfileRoute'].route,
      //   element: <CurrentRoute elem='userProfileRoute' component={UserProfile} />,
      // },
      // {
      //   path: policyConfig['userWalletDetailRoute'].route,
      //   element: <CurrentRoute elem='userWalletDetailRoute' component={WalletStatementDetails} />,
      // },
      {
        path: "helper/css",
        element: <HelperCSS />,
      },
    ],
  },
];

export default AppRoute;