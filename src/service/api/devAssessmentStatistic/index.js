import eRequest from "@/service/index";
// 1.严重缺陷查询
export function severityBugStatistic(searchData) {
  return eRequest.post({
    url: "api/DevAssessmentStatistic/SeverityBugStatistic",
    data: searchData,
  });
}
// 2.激活缺陷查询
export function activatedBugStatistic(searchData) {
  return eRequest.post({
    url: "api/DevAssessmentStatistic/ActivatedBugStatistic",
    data: searchData,
  });
}
