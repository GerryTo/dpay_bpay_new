//NOTE: USING ROUTE
//
//example to use route
// this for route without children
// {
//   label: "Example",
//   key: "A",
//   icon: <PieChartOutlined />,
//   element: <Dashboard />,
//   link: "/",
// }
// this for route with child/children
// {
//   label: "Example Page",
//   key: "B",
//   icon: <DesktopOutlined />,
//   children: [
//     {
//       label: "Child Example",
//       key: "B1",
//       element: <ExamplePage />,
//       link: "/example",
//     },
//     {
//       label: "Child Example 2",
//       key: "B2",
//       element: <ExamplePage />,
//       link: "/example2",
//     },
//   ],
// },

import ExamplePage from "./layouts/Example-page/data";
import Dashboard from "./layouts/dashboard";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";

export const mockdataRoutes = [
  {
    label: "Dashboard",
    key: "A",
    icon: <PieChartOutlined />,
    element: <Dashboard />,
    link: "/",
  },
  {
    label: "Example Page",
    key: "B",
    icon: <DesktopOutlined />,
    children: [
      {
        label: "Child Example",
        key: "B1",
        element: <ExamplePage />,
        link: "/example",
      },
      {
        label: "Child Example 2",
        key: "B2",
        element: <ExamplePage />,
        link: "/example2",
      },
    ],
  },
];
