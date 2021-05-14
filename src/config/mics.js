export const fonts = {
  regular: { fontFamily: "OpenSansRegular" },
  bold: { fontFamily: "OpenSansBold" }
};

export const colors = {
  primary: "#E51937",
  secondary: "#44AF69",
  links: "#29B6F6",
  black: "#191919",
  grey: "#A7A9AC",
  lightbackgrounds: "#F8F8F8",
  gray: "#979797"
};

export const statusColor = {
  draft: "#27B6F6",
  approvalPending: "#FF8A65",
  stagingApprove: "#FAA825",
  stagingSched: "#64B5F7",
  launchedSched: "#4BB6AC",
  staged: "#7985CB",
  launched: "#8ED677",
  retired: "#9E9E9E",
  softDeleted: "#CE93D8",
  deleted: "#EA1E31",
  rework: "#FF4152"
};

export const statusName = [
  {
    title: "Draft",
    name: "Draft",
    color: "#27B6F6",
    id: "draft"
  },
  {
    title: "Approval Pending",
    name: "Approval Pending",
    color: "#FF8A65",
    id: "approvalPending"
  },
  {
    title: "Staging (approve)",
    name: "Approve for Staging",
    color: "#FAA825",
    id: "stagingApprove"
  },
  {
    title: "Staging (sched)",
    name: "Scheduled for Staging",
    color: "#64B5F7",
    id: "stagingSched"
  },
  {
    title: "Launch (sched)",
    name: "Scheduled for Launch",
    color: "#4BB6AC",
    id: "launchingSched"
  },
  {
    title: "Staged",
    name: "Staged",
    color: "#7985CB",
    id: "staged"
  },
  {
    title: "Launched",
    name: "Launched",
    color: "#8ED677",
    id: "launched"
  },
  {
    title: "Retired",
    name: "Retired",
    color: "#9E9E9E",
    ignore: false,
    id: "retired"
  },
  {
    title: "Retire (sched)",
    name: "Scheduled for Retire",
    color: "#4E5E6D",
    id: "retireSched"
  }
];

export const disabledButtonConfig = {
  style: {
    marginRight: "17px",
    borderRadius: 3,
    boxShadow: "2px 2px 4px 0 rgba(204,204,204,0.5)"
  },
  buttonStyle: {
    backgroundColor: "#ECECEC",
    borderRadius: 3
  },
  labelStyle: {
    display: "flex",
    color: "#B5B5B5",
    fontFamily: "OpenSansBold",
    fontSize: "13px",
    fontWeight: "bold",
    textAlign: "center",
    padding: "0px 29px"
  },
  overlayStyle: {
    backgroundColor: "#ECECEC",
    border: "1px solid #DDDDDD"
  }
};

export const borderedDisabledButtonConfig = {
  style: {
    borderRadius: 3
  },
  buttonStyle: {
    borderRadius: 3
  },
  labelStyle: {
    color: "#B5B5B5",
    fontFamily: "OpenSansBold",
    fontSize: "13px",
    fontWeight: "bold",
    textAlign: "center"
  },
  overlayStyle: {
    backgroundColor: "#ECECEC",
    border: "1px solid #DDDDDD"
  }
};

export const solidButtonConfig = {
  style: {
    marginRight: "17px",
    borderRadius: 3
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    borderRadius: 3
  },
  labelStyle: {
    display: "flex",
    color: "#FFFFFF",
    fontFamily: "OpenSansBold",
    fontSize: "13px",
    fontWeight: "bold",
    textAlign: "center",
    padding: "0px 29px"
  },
  overlayStyle: {
    backgroundColor: "#E51937",
    border: "1px solid #E51937"
  }
};

export const borderedButtonConfig = {
  labelStyle: {
    color: "#E51937",
    fontFamily: "OpenSansRegular",
    fontSize: "13px",
    fontWeight: "600"
  },
  overlayStyle: {
    backgroundColor: "white",
    border: "1px solid #E51937"
  },
  style: {
    borderRadius: "3px"
  },
  buttonStyle: {
    borderRadius: "3px"
  }
};

export const inputConfig = {
  errorStyle: {
    bottom: -4,
    color: "#DC002A",
    fontFamily: "OpenSansRegular",
    fontSize: "12px",
    fontWeight: 600
  },
  style: {
    height: 38,
    fontSize: 14,
    margin: "28px 0 18px",
    borderRadius: 3
  },
  hintStyle: {
    bottom: 8,
    left: 16
  },
  floatingLabelFixed: true,
  floatingLabelStyle: {
    top: -4,
    fontSize: 16,
    color: "#666666",
    fontFamily: "OpenSansBold"
  },
  inputStyle: {
    marginTop: 0,
    padding: "0 16px",
    boxSizing: "border-box"
  },
  fullWidth: true
};

export const templateListColor = {
  a: "#E25142",
  b: "#51B9D0",
  c: "#F39B39",
  d: "#51B9D0",
  e: "#E25142",
  f: "#D73964",
  g: "#8F38A9",
  h: "#D73964",
  i: "#E25142",
  j: "#8F38A9",
  k: "#D1DA59",
  l: "#F39B39",
  m: "#68AB5B",
  n: "#8F38A9",
  o: "#68AB5B",
  p: "#D1DA59",
  q: "#E25142",
  r: "#F39B39",
  s: "#8F38A9",
  t: "#51B9D0",
  u: "#D73964",
  v: "#F39B39",
  w: "#D1DA59",
  x: "#51B9D0",
  y: "#D73964",
  z: "#D1DA59"
};

export const sortOptions = [
  {
    title: "Name (a-z)",
    className: "menuItem test--sort-name-asc",
    field: "name",
    order: "asc",
    id: "nameAsc"
  },
  {
    title: "Name (z-a)",
    className: "menuItem test--sort-name-desc",
    field: "name",
    order: "desc",
    id: "nameDesc"
  },
  {
    title: "Date (Oldest First)",
    className: "menuItem test--sort-dateUpdated-asc",
    field: "updatedAt",
    order: "asc",
    id: "dateAsc"
  },
  {
    title: "Date (Newest First)",
    className: "menuItem test--sort-dateUpdated-desc",
    field: "updatedAt",
    order: "desc",
    id: "dateDesc"
  },
  {
    title: "Status (Asc)",
    className: "menuItem test--sort-status-asc",
    field: "status",
    order: "asc",
    id: "statusAsc"
  },
  {
    title: "Status (Desc)",
    className: "menuItem test--sort-status-desc",
    field: "status",
    order: "desc",
    id: "statusDesc"
  }
];

export const datePickerLimit = {
  launchAppMaxDays: 30,
  reportsDateRangeLimit: {
    minDate: 30,
    maxDate: 30
  }
};

export const marketingAdmin = {
  overview: {
    startTime: 2 // value be refered as number of days
  },
  reports: {
    startTime: new Date(new Date().setDate(new Date().getDate() - 7)).getTime() // here number is number of days
  }
};

export const urlConfig = {
  itAdmin: [
    "overview",
    "users",
    "applications",
    "audit-trail",
    "plugin-management"
  ],
  mktAdmin: ["overview-m", "reports", "applications-m", "audit-trail"],
  rootAdmin: [
    "overview-root",
    "reports-it",
    "reports-mkt",
    "manage-users",
    "applications-root",
    "audit-trail"
  ],
  developer: []
};
