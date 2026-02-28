export type Severity = "高" | "中" | "低";
export type AlertStatus = "待处理" | "处理中" | "已处理";

export type AlertItem = {
  id: string;
  title: string;
  severity: Severity;
  impact: string;
  reason: string;
  action: string;
  status: AlertStatus;
  source: string;
};

export type ServiceStatus = "已完成" | "进行中" | "待完成";

export type ServiceLogItem = {
  id: string;
  date: string;
  item: string;
  category: "对账" | "工资" | "社保" | "报税" | "开票" | "异常处理" | "资金";
  status: ServiceStatus;
  summary: string;
  owner: "财务" | "运营" | "客户待确认";
  nextAction: string;
};

export const metrics = {
  monthlyProfit: "¥ 286,000",
  profitRate: "11.8%",
  cashflow: "短期安全（34天）",
  inventoryHealth: "78 / 100",
  riskCount: "8 条"
};

export const trendData = {
  months: ["1月", "2月", "3月", "4月", "5月", "6月"],
  profit: [31, 35, 33, 37, 34, 28.6],
  cashflow: [52, 49, 46, 43, 39, 34],
  turnover: [42, 41, 38, 37, 35, 33]
};

export const ownerSummary =
  "本月利润较上月下降约 15.9%，核心受达人佣金上调与退货率波动叠加影响；现金流当前可覆盖 34 天，但下月双平台备货将新增约 120 万现金支出压力。建议优先优化爆款 SKU-A17 的佣金结构，并将高退货渠道的库存周转天数控制回 30 天以内。";

export const alerts: AlertItem[] = [
  {
    id: "a1",
    title: "SKU-A17 库存不足",
    severity: "高",
    impact: "影响对象：爆款护肤礼盒 SKU-A17",
    reason: "可售库存仅 4.8 天，低于安全阈值 10 天",
    action: "今日发起补货，优先保障达人直播场次",
    status: "处理中",
    source: "库存不足"
  },
  {
    id: "a2",
    title: "达人佣金抬升导致毛利异常",
    severity: "高",
    impact: "影响对象：抖音渠道 5 月第 4 周",
    reason: "佣金率从 28% 提升至 34%，退款率同步上行",
    action: "调整佣金结构并设定毛利底线",
    status: "待处理",
    source: "毛利异常"
  },
  {
    id: "a3",
    title: "渠道投放费用超标",
    severity: "中",
    impact: "影响对象：小红书新品投放",
    reason: "当月已超预算 18%，转化率未达预期",
    action: "暂停低 ROI 广告组，复核素材投放",
    status: "待处理",
    source: "费用超标"
  },
  {
    id: "a4",
    title: "供应商发票追票提醒",
    severity: "中",
    impact: "影响对象：包材供应商华南三厂",
    reason: "两笔 24 万发票超 9 天未回传",
    action: "财务今日追票并设置 48h 升级规则",
    status: "处理中",
    source: "追票提醒"
  },
  {
    id: "a5",
    title: "下月备货现金流风险",
    severity: "高",
    impact: "影响对象：6 月备货计划",
    reason: "预计采购支出增加 120 万，回款错配",
    action: "分批下单并协商账期，锁定授信额度",
    status: "待处理",
    source: "现金流风险"
  }
];

export const aiAnalysis: Record<
  string,
  {
    why: string;
    impact: string[];
    suggestions: { priority: "高" | "中" | "低"; text: string }[];
    nextPriority: string;
  }
> = {
  a1: {
    why: "SKU-A17 在本周达人活动中销量提升 26%，但补货按历史均值执行，导致库存消耗速度超过补货节奏。",
    impact: ["预计影响本周销售额约 ¥42 万", "若断货 3 天，渠道利润率下降约 1.2%"],
    suggestions: [
      { priority: "高", text: "将 A17 进入直播保障清单，补货提前期从 5 天缩短到 2 天" },
      { priority: "中", text: "设置库存低于 7 天自动触发采购审批" },
      { priority: "低", text: "为长尾渠道配置替代 SKU 分流需求" }
    ],
    nextPriority: "先处理直播场次补货，再完善自动预警阈值。"
  },
  a2: {
    why: "达人佣金率上升 + 退款率提升 + 平台补贴减少共同拉低毛利；销量虽增长 19%，但单位贡献利润下降。",
    impact: ["预计本周利润减少 ¥86,000", "抖音渠道利润率从 14.6% 下降至 9.1%"],
    suggestions: [
      { priority: "高", text: "按达人分层重签佣金，设置 11% 毛利保底线" },
      { priority: "高", text: "对退款率高于 9% 的内容模型暂停投放" },
      { priority: "中", text: "提升高毛利组合包占比，替换低毛利引流品" },
      { priority: "低", text: "申请平台活动券，冲抵部分佣金成本" }
    ],
    nextPriority: "优先完成佣金重签和高退款内容止损，两项动作可在 7 天内恢复约 3.2 个点利润率。"
  },
  a3: {
    why: "新品投放周期延长，低转化素材未及时下线，导致预算执行偏离。",
    impact: ["预计多支出 ¥54,000", "渠道 ROI 从 2.1 下降到 1.5"],
    suggestions: [
      { priority: "高", text: "24 小时内下线 ROI < 1.6 广告组" },
      { priority: "中", text: "重新分配预算至高转化素材" }
    ],
    nextPriority: "先止损，再优化素材结构。"
  },
  a4: {
    why: "供应商回票节点未纳入采购结算考核，导致追票动作滞后。",
    impact: ["影响本月进项税抵扣约 ¥24 万", "延迟将压缩财务结账效率"],
    suggestions: [
      { priority: "高", text: "发起 48 小时追票升级并同步采购负责人" },
      { priority: "中", text: "将回票时效纳入下期供应商评分" }
    ],
    nextPriority: "先完成追票闭环，再固化规则。"
  },
  a5: {
    why: "大促备货集中在月初，而达人渠道回款周期为 T+21，导致短期现金流错配。",
    impact: ["预计现金缺口峰值 ¥1,200,000", "现金安全天数将短暂降至 18 天"],
    suggestions: [
      { priority: "高", text: "分批下单，先保障高周转 SKU" },
      { priority: "高", text: "与核心供应商协商 15 天账期延展" },
      { priority: "中", text: "申请短期授信额度并锁定利率" }
    ],
    nextPriority: "本周内完成账期协商与授信锁定，避免备货窗口断档。"
  }
};

export const serviceMonthlyOverview = {
  planned: 12,
  completed: 7,
  inProgress: 3,
  pending: 2
};

export const serviceSummaryCards: {
  title: string;
  status: ServiceStatus;
  note: string;
}[] = [
  { title: "对账进度", status: "已完成", note: "2 月平台账单全部核对完成，差异已归档。" },
  { title: "工资计算", status: "进行中", note: "工资测算完成，待客户确认最终发放版本。" },
  { title: "社保公积金", status: "已完成", note: "本月申报已完成并回传缴费凭证。" },
  { title: "税务申报", status: "进行中", note: "增值税申报资料已整理，等待最终提交。" }
];

export const serviceLogs: ServiceLogItem[] = [
  {
    id: "s1",
    date: "2026-02-28",
    item: "某 SKU 毛利异常完成分析",
    category: "异常处理",
    status: "已完成",
    summary: "已定位毛利下滑由达人佣金上升和退款率波动导致，形成分析结论。",
    owner: "财务",
    nextAction: "运营按建议调整达人佣金结构并跟踪一周毛利恢复。"
  },
  {
    id: "s2",
    date: "2026-02-27",
    item: "2 月平台对账已完成",
    category: "对账",
    status: "已完成",
    summary: "抖音与小红书账单核对完毕，异常单据已同步运营。",
    owner: "财务",
    nextAction: "归档对账报告并进入月度复盘。"
  },
  {
    id: "s3",
    date: "2026-02-26",
    item: "2 月工资测算完成，待客户确认",
    category: "工资",
    status: "进行中",
    summary: "固定薪资与绩效测算已完成，等待客户确认 2 名员工补贴口径。",
    owner: "客户待确认",
    nextAction: "待客户确认工资表后生成最终发放清单。"
  },
  {
    id: "s4",
    date: "2026-02-25",
    item: "社保公积金申报完成",
    category: "社保",
    status: "已完成",
    summary: "本月社保公积金已申报并提交缴费，凭证已回传。",
    owner: "财务",
    nextAction: "更新员工成本台账。"
  },
  {
    id: "s5",
    date: "2026-02-24",
    item: "增值税申报进行中",
    category: "报税",
    status: "进行中",
    summary: "销项与进项数据已核对，待完成附表复核后提交。",
    owner: "财务",
    nextAction: "本周五前提交税务申报。"
  },
  {
    id: "s6",
    date: "2026-02-23",
    item: "银行制单待处理",
    category: "资金",
    status: "待完成",
    summary: "供应商付款指令已生成，尚未完成网银制单。",
    owner: "运营",
    nextAction: "今日 17:00 前完成银行付款指令处理。"
  }
];

export const todoItems = [
  "待客户确认工资表",
  "待提交税务申报",
  "待补充成本票",
  "待处理银行付款指令"
];
