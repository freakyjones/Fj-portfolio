export type SitrepStatus = "ACTIVE" | "RESOLVED" | "DEPRECATED";

export interface SitrepLog {
  id: string;
  timestamp: string;
  action: string;
  status: SitrepStatus;
}

export const sitrepLogs: SitrepLog[] = [
  { id: "1", timestamp: "T-0:00", action: "SYS_INIT // VERCEL_EDGE_NETWORK_BOOT", status: "ACTIVE" },
  { id: "2", timestamp: "T-1:14", action: "CI_CD // GITHUB_ACTIONS_DEPLOYMENT", status: "RESOLVED" },
  { id: "3", timestamp: "T-2:42", action: "TEST_SUITE // PLAYWRIGHT_E2E_PASS", status: "RESOLVED" },
  { id: "4", timestamp: "T-5:01", action: "LINT // STRICT_TYPE_CHECK_VALIDATED", status: "RESOLVED" },
  { id: "5", timestamp: "T-8:55", action: "LEGACY_ARCH // MONOLITHIC_STATE", status: "DEPRECATED" },
];
