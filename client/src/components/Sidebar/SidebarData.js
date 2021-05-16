export const SideBarPathIndex = {
  "/": 0,
  "/add": 1,
  "/dispatch": 2,
  "/return": 3,
  "/barcode-generator": 4,
  "/currentstock": 5,
  //   "/admin/about": 6,
};

export const SidebarData = [
  {
    option_name: "Dashboard",
    path: "/",
    icon: "fas fa-columns",
    cName: "sidebarOption",
  },
  {
    option_name: "Add Item",
    path: "/add",
    icon: "fas fa-plus-square",
    cName: "sidebarOption",
  },
  {
    option_name: "Dispatch ",
    path: "/dispatch",
    icon: "fas fa-minus-square",
    cName: "sidebarOption",
  },
  // {
  // 	option_name: 'Manage HODs',
  // 	path: '/admin/manageHod',
  // 	icon: 'fas fa-user-plus',
  // 	cName: 'sidebar_option'
  // },
  {
    option_name: "Return ",
    path: "/return",
    icon: "fas fa-undo-alt",
    cName: "sidebarOption",
  },

  {
    option_name: "Barcoder",
    path: "/barcode-generator",
    icon: "fas fa-hashtag fa-lg",
    cName: "sidebarOption",
  },
  {
    option_name: "Current Stock",
    path: "/currentstock",
    icon: "fas fa-box-open",
    cName: "sidebarOption",
  },
  //   {
  //     option_name: "About App",
  //     path: adminLink + "/about",
  //     icon: "fab fa-medapps",
  //     cName: "sidebar_option about_app",
  //   },
];
