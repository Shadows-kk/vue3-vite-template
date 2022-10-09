import eRequest from "@/service/index";
// 1.无效缺陷统计
export function invalidBugStatistic(queryData) {
  return eRequest.post({
    url: "/api/TestAssessmentStatistic/InvalidBugStatistic",
    data: queryData,
  });
}
// 2.项目权重统计
export function projectWeight(queryData) {
  return eRequest.post({
    url: "/api/TestAssessmentStatistic/ProjectWeight",
    data: queryData,
  });
}
// 3.严重缺陷统计
export function severityBugStatistic(queryData) {
  return eRequest.post({
    url: "/api/TestAssessmentStatistic/SeverityBugStatistic",
    data: queryData,
  });
}
