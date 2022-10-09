import eRequest from "@/service/index";
// 1.考核指标查询
export function assessmentRuleQuery(indexData) {
  return eRequest.post({
    url: "/api/AssessmentRule/query",
    data: indexData,
  });
}
// 2.考核指标新增
export function assessmentRuleAdd(indexData) {
  return eRequest.post({
    url: "/api/AssessmentRule/add",
    data: indexData,
  });
}
// 3.考核指标修改
export function assessmentRuleUpdate(indexData) {
  return eRequest.put({
    url: "/api/AssessmentRule/update",
    data: indexData,
  });
}
// 4.考核指标删除
export function assessmentRuleDelete(indexData) {
  return eRequest.delete({
    url: "/api/AssessmentRule/delete",
    params: indexData,
  });
}
