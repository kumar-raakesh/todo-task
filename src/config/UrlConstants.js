// import { root } from "postcss";

/**
 * this file can be use to get paths for api call
 */
// rootPath of url
// export const rootPath = "http://125.16.139.20:6666/leap_gw";
export const rootPath = "http://125.16.139.20:7778/leap_gw";

/* user apis */
export const USER_AUTHENTICATION = `${rootPath}/users/authenticate`;
export const SIGNOUT = `${rootPath}/users/logout`;
export const CHANGE_PASSWORD = `${rootPath}/users/changePassword`;
export const REFRESH_TOKEN = `${rootPath}/refreshToken`;

export const FORGOT_PASSWORD_OTP = `${rootPath}/sendPasswordOTP`;
export const VERIFY_OTP = `${rootPath}/verifyOTP`;
export const RESET_PASSWORD = `${rootPath}/resetPassword`;

/* apps api */
export const APPS_LISTING = `${rootPath}/apps`;
export const CLONE_APP = `${rootPath}/apps/clone/`;
export const CREATE_APP = `${rootPath}/apps`;
export const APP_HISTORY = `${rootPath}/apps/apphistory`;

/* config api */
export const LANGUAGE = `${rootPath}/configapi/languages`;
export const PASSWORD_STRENGTH = `${rootPath}/configapi/passwordstrength`;
export const SIMULATION_INFO = `${rootPath}/configapi/simulationinfo`;

/* template listing api */
export const TEMPLATES_LISTING = `${rootPath}/api/templates/`;
export const TEMPLATES_CLONING = `${rootPath}/api/templates/clone/`;

/* create app and config*/
export const PALETTE_LIST = `${rootPath}/palette/`;
export const MACROS = `${rootPath}/configapi/macros/`;
export const OPERATORS = `${rootPath}/configapi/operators/`;
export const META_INFO = `${rootPath}/plugins/`;
export const FETCH_UPDATE_APP = `${rootPath}/apps/`;
export const APP_VALIDATE = `${rootPath}/apps/validate/`;

/* Web socket url */
export const WEBSOCKET_URL = `ws://125.16.139.20:4508`;
export const WS_APP_URL = `http://125.16.139.20:4508/samvaadak/apps/`;
// const wsAppUrl = `http://125.16.139.20:4508/samvaadak/apps/${appId}?MSISDN=9876543210&subscriberNumber=9900244985&subscriberNumberNAI=9900244985&transactionCurrency=transactionCurrency&originTransactionID=1&originTimeStamp=76757575&debugId=${sessionId}`  for testing refrences
export const DB_QUERY_EXEC = `${rootPath}/plugins/database`;

/* Soap URLs */

// export const SOAP_MOCK = "http://172.25.25.103:8092/mock/soap";  // removed this during integration to actual data

export const GET_SOAP_RESULT = (typeID, slug_name) => {
  return `${rootPath}/plugins/soap/${typeID}/${slug_name}/`;
};
export const GET_SOAP_TEST = (typeId, slug_name) => {
  return `${rootPath}/plugins/soap/${typeId}/${slug_name}?mode=testConn`;
};

/* HTTP module URLs */
export const HTTP_EXEC = `${rootPath}/plugins/channelModules/http/exec`;

/*SMS Module URLs */

export const SMS_TEST = `${rootPath}/plugins/channelModules/sms/exec?mode=testConn`;

/* IT Admin APIs */
export const SOAP_IT_UPLOAD = `${rootPath}/plugins/soap`;
export const SOAP_IT_DEPLOY = `${rootPath}/plugins/soap/deploy`;
export const SOAP_IT_DELETE = `${rootPath}/plugins/soap/`;
export const SOAP_IT_DEPLOY_CONFIRM = `${rootPath}/plugins/soap/confirm`;
export const GET_NOTIFICATIONS = `${rootPath}/workflow/notifications/`;
export const GET_ALL_USER_LIST = `${rootPath}/users/?app_count=true`;
export const GET_ALL_ROLE_LIST = `${rootPath}/roles/`;
export const GET_ALL_APPS_LIST = `${rootPath}/dashboard/?app_count=true`;
export const GET_RECENTLY_CREATED_USER_LIST = `${rootPath}/users/?sort=updatedAt&order=desc&page=1&size=5`;
export const GET_RECENTLY_CREATED_APPS_LIST = `${rootPath}/apps/?sortf=updatedAt&order=desc&status=6&size=5`;
export const CREATE_USER_WITHOUT_PASSWORD = `${rootPath}/users/createUserWithoutPassword/`;
export const DELETE_USER_ACCOUNT = userID => {
  return `${rootPath}/users/deleteUser/${userID}/purge`;
};

export const DEACTIVATE_USER_ACCOUNT = userID => {
  return `${rootPath}/users/deactivate/${userID}/`;
};

export const ACTIVATE_USER_ACCOUNT = userID => {
  return `${rootPath}/users/activate/${userID}/`;
};

export const APPLICATION_OPERATIONS = (appID, operation) => {
  return `${rootPath}/workflow/${appID}/${operation}/`;
};

export const EMAIL_ACTIVATION_LINK = "www.google.com"; //to be changed accordingly by backEnd team after project completion
export const USER_ACTIVATION_LINK = `${rootPath}/configapi/userActivationLink`;
// export const GET_RECENTLY_CREATED_USER_LIST = `${rootPath}/users/?sort='createdAt'&order=desc&page=1&size=5`;
export const GET_OVERVIEW_DATA = `${rootPath}/api/appsOverview`;

export const EDIT_INFO_UPLOAD = `${rootPath}/`; // paste edit info's uploader API link here---mapping already done
// export const LANGUAGE_UPLOAD = `${rootPath}/api/locale/1534230230361`;
export const LANGUAGE_UPLOAD = `${rootPath}/api/locale/`;
export const APP_LANGUAGE_LIST = `${rootPath}/api/locale/list/`;
export const APP_LANGUAGE_DELETE = `${rootPath}/api/locale/`;
export const DOWNLOAD_TEMPLATE = `${rootPath}/api/locale/`;
export const DOWNLOAD_LANGUAGE_RESOURCE = `${rootPath}/api/locale/`;

export const LEAP_DASHBOARD_STATS = `${rootPath}/dashboard/stats`;

export const GET_TOP_FAILED_APPS = `${rootPath}/reports/overview/topfailapps`;
export const GET_TOP_USED_APPS = `${rootPath}/reports/overview/topusedapps`;
export const GET_TOP_SUCCESS_APPS = `${rootPath}/reports/overview/topsuccapps`;
export const GET_TOP_20_APPS = `${rootPath}/reports/overview/top20apps`;
export const MARKETING_OVERVIEW_SUMMARY = `${rootPath}/reports/overview/summary`;

export const GET_INTERFACE_STATS_TOTAL_APPS = `${rootPath}/reports/interfacestats/interfacetotalapps?startTime=1498124815436&endTime=1529660815434&interval=1h&moduleName=SOAP`;
export const GET_INTERFACE_STATS_AVG_TRANS_SECONDS = `${rootPath}/reports/interfacestats/interfaceavgtrans?startTime=1498124815436&endTime=1529660815434&interval=1h&moduleName=SOAP`;
export const GET_INTERFACE_STATS_AVG_RESP_TIME = `${rootPath}/reports/interfacestats/interfaceavgres?startTime=1498124815436&endTime=1529660815434&interval=1h&moduleName=SOAP`;
export const GET_INTERFACE_STATS_TOTAL_TRANS = `${rootPath}/reports/interfacestats/interfacetotaltrans?startTime=1498124815436&endTime=1529660815434&interval=1h&moduleName=SOAP`;

export const GET_TOP_20_APPS_TOTAL = `${rootPath}/reports/top20apps/total`;
export const GET_TOP_20_APPS_USERS = `${rootPath}/reports/top20apps/users`;
export const GET_TOP_20_APPS_SUCCESS = `${rootPath}/reports/top20apps/success`;

export const DEVELOPERS_LIST = `${rootPath}/users/?token=app-developer`;

export const REASSIGN_DEVELOPER = `${rootPath}/api`;

// export const GET_AUDIT_TRAIL = `${rootPath}/reports/auditTrail?startTime=1499600597558&endTime=${new Date().getTime()}`;
export const GET_AUDIT_TRAIL = `${rootPath}/reports/auditTrail`;

export const GET_APP_COMMENTS = `${rootPath}/apps/eventsperapp`;

export const GET_PLUGIN_MANAGEMENT_LIST = `${rootPath}/pm`;
export const GET_PLUGIN_CATEGORY_LIST = `${rootPath}/pm/categories`;
export const PLUGIN_SETTINGS = `${rootPath}/pm/settings`;

// Chart APi for Reports => Application Stats
export const REPORT_APPS_ACTIVE_USERS = `${rootPath}/reports/appstats/activeusers`;
export const REPORT_APPS_AVG_RES = `${rootPath}/reports/appstats/appsavgres`;
export const REPORT_APPS_TOTAL_TRANS = `${rootPath}/reports/appstats/apptotaltrans`;
export const REPORT_TOTAL_TRANS_MODULE_WISE = `${rootPath}/reports/appstats/modulewisetrans`;
export const REPORT_APP_ERROR_STATUS = `${rootPath}/reports/appstats/apperrorcodes`;

// Chart APi for Reports => Interface Stats
export const INTERFACE_TOTAL_TRANS = `${rootPath}/reports/interfacestats/interfacetotaltrans`;
export const INTERFACE_TOTAL_APPS = `${rootPath}/reports/interfacestats/interfacetotalapps`;
export const INTERFACE_AVG_RES = `${rootPath}/reports/interfacestats/interfaceavgres`;
export const INTERFACE_AVG_TRANS = `${rootPath}/reports/licencecapacity/interfaceavgTransactions`;

// Chart APi for Reports => TPS REPORTS
export const TPS_TOTAL_USERS = `${rootPath}/reports/tpsstats/tpstotalusers`;
export const TPS_TOTAL_TRANS = `${rootPath}/reports/tpsstats/tpstotaltrans`;
export const TPS_AVG_TRANS = `${rootPath}/reports/tpsstats/tpsAvgTrans`;
export const LICENCED_THRESHOLD_CROSSED = `${rootPath}/reports/licencecapacity/licencethresholdcrossed`;
export const LICENCED_CAPACITY_UTILIZATION = `${rootPath}/reports/licencecapacity/licenceCapacityUtilization`;
export const LICENCED_CAPACITY_THRESHOLD = `${rootPath}/reports/licencecapacity/licenceCapacityThresholds`;
export const TPS_UNIQUE_USERS = `${rootPath}/reports/tpsstats/tpsuniqueusers`;

// Chart APi for Marketing => Overview => App Ageing
export const APP_AGEING_STATUS = `${rootPath}/reports/appagingstatus`;

// NOTIFICATION APIs
export const UN_READ_NOTIFICATIONS = `${rootPath}/workflow/unreadnotificationcount`;
export const ALL_NOTIFICATIONS = `${rootPath}/workflow/listnotifications`;
export const MARK_NOTIFICATIONS_READ = `${rootPath}/workflow/marknotoficationsread`;

// COPY URL for Marketing Admin => Applications
export const COPY_URL = `${rootPath}/api/copyurl`;

// GRAFANA URL for HEALTH_MONITOR
export const HEALTH_MONITOR_URL = `http://125.16.139.20:5656/d/5Bj_Yw7mz/testdata-graph-panel-last-1h?orgId=2`;
