"use strict";(self.webpackChunknexopos_4x=self.webpackChunknexopos_4x||[]).push([[935],{3935:(t,e,n)=>{n.r(e),n.d(e,{default:()=>l});var o=n(381),r=n.n(o),s=n(9785),a=n(7359),i=n(1487);const u={name:"ns-cash-flow",mounted:function(){},components:{nsDatepicker:s.Z,nsDateTimePicker:a.Z},data:function(){return{startDate:r()(),endDate:r()(),report:new Object}},computed:{balance:function(){return 0===Object.values(this.report).length?0:this.report.total_credit-this.report.total_debit},totalDebit:function(){return 0},totalCredit:function(){return 0}},methods:{setStartDate:function(t){this.startDate=t.format("YYYY/MM/DD HH:mm")},setEndDate:function(t){this.endDate=t.format("YYYY/MM/DD HH:mm")},loadReport:function(){var t=this,e=this.startDate,n=this.endDate;i.ih.post("/api/nexopos/v4/reports/cash-flow",{startDate:e,endDate:n}).subscribe({next:function(e){t.report=e,console.log(t.report)},error:function(t){i.kX.error(t.message).subscribe()}})}}},c=u;const l=(0,n(1900).Z)(c,undefined,undefined,!1,null,null,null).exports}}]);