(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52585bb5"],{"059f":function(t,e,a){"use strict";var l=a("4a3d"),o=a.n(l);o.a},"4a3d":function(t,e,a){},"7cc7":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",[a("div",{staticClass:"cc-mar-b-10",staticStyle:{width:"100%"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"部门名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.onSubmit}},[t._v("搜索")]),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.onSubmit}},[t._v("添加")]),t._v(" "),a("el-button",{attrs:{icon:"el-icon-download"},on:{click:t.onSubmit}},[t._v("导出")])],1),t._v(" "),a("c-super-table",{ref:"myTable",attrs:{"table-interface":t.tableInter,options:t.optionData}},[a("el-table-column",{attrs:{slot:"temp_stauts",width:"60",label:"状态"},slot:"temp_stauts",scopedSlots:t._u([{key:"default",fn:function(e){var l=e.row;return[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:l.status,callback:function(e){t.$set(l,"status",e)},expression:"row.status"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{slot:"temp_action",width:"150",label:"状态"},slot:"temp_action"},[[a("el-button",{attrs:{size:"mini"}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"}},[t._v("删除")])]],2)],1)],1)],1)},o=[],n=a("c24f"),i={components:{},data:function(){return{tableInter:n["b"],optionData:{tableOption:{height:"720",bottomOffset:34},tableHeader:[{type:"selection",width:"60"},{type:"index",label:"序号",width:"50",sortable:!0},{label:"菜单名称",prop:"name"},{label:"菜单编号",prop:"code"},{label:"父级菜单",prop:"pcode"},{label:"菜单地址",prop:"url",showOverflowTooltip:!0},{label:"排序",prop:"sort",width:"50"},{label:"层级",prop:"levels",width:"50"},{label:"是否菜单",prop:"isMenuName",width:"50"},{type:"slot",label:"状态",slot:"temp_stauts",prop:"status",width:"150"},{type:"slot",label:"状态",slot:"temp_action",prop:"stauts",width:"150"}],pagination:{isShow:!1,background:!0}},data:[{checked:!0,children:[{checked:"",children:[{checked:"",children:[],disabled:"",id:25,nodeId:"25",nodeParentId:"24",pid:24,spread:!1,title:"开发部"},{checked:"",children:[],disabled:"",id:26,nodeId:"26",nodeParentId:"24",pid:24,spread:!1,title:"运营部"},{checked:"",children:[],disabled:"",id:27,nodeId:"27",nodeParentId:"24",pid:24,spread:!1,title:"战略部"}],disabled:"",id:24,nodeId:"24",nodeParentId:"0",pid:0,spread:!0,title:"总公司"}],disabled:"",id:0,nodeId:"0",nodeParentId:"-1",pid:-1,spread:!0,title:"顶级"}],defaultProps:{children:"children",label:"title"},form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},computed:{},mounted:function(){},methods:{onSubmit:function(){console.log("submit!")}}},d=i,s=(a("059f"),a("2877")),c=Object(s["a"])(d,l,o,!1,null,"5dda9370",null);e["default"]=c.exports}}]);