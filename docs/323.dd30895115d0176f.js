"use strict";(self.webpackChunkopentools=self.webpackChunkopentools||[]).push([[323],{3323:(f,c,i)=>{i.r(c),i.d(c,{BorderOutlineComponent:()=>v});var p=i(4450),u=i(8846),_=i(9381),a=i(8281),h=i(284),g=i(8797),e=i(1295);function C(t,s){if(1&t&&(e.TgZ(0,"option",2),e._uU(1),e.qZA()),2&t){const d=s.$implicit;e.Q6J("ngValue",d.value),e.xp6(1),e.Oqu(d.label)}}let m=(()=>{var t;class s{get value(){return this._value}set value(o){o!==this._value&&(this._value=o,this.onChange(o))}constructor(){this.list=[],this._value="",this.onChange=o=>{},this.onTouch=()=>{},this.id=`input_${Math.floor(1e4*Math.random()+1)}`}registerOnChange(o){this.onChange=o}registerOnTouched(o){this.onTouch=o}writeValue(o){this._value=o,this.onChange(o)}change(o){this.writeValue(o)}validate(o){return this.control=o,null}}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-select"]],inputs:{list:"list"},standalone:!0,features:[e._Bn([{provide:a.JU,useExisting:(0,e.Gpc)(()=>t),multi:!0}]),e.jDz],decls:2,vars:4,consts:[[3,"name","id","ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],[3,"ngValue"]],template:function(o,n){1&o&&(e.TgZ(0,"select",0),e.NdJ("ngModelChange",function(r){return n.value=r}),e.YNc(1,C,2,2,"option",1),e.qZA()),2&o&&(e.Q6J("name",n.id)("id",n.id)("ngModel",n.value),e.xp6(1),e.Q6J("ngForOf",n.list))},dependencies:[p.ez,p.sg,a.u5,a.YN,a.Kr,a.EJ,a.JJ,a.On],styles:["select[_ngcontent-%COMP%]{width:300px;height:40px;border:1px solid var(--borderColor);padding:5px 15px;font-size:14px;font-weight:400;background:transparent;border-radius:6px;animation:_ngcontent-%COMP%_select-animation .3s ease-in-out;-webkit-appearance:none;appearance:none;color:var(--textColor);outline:none;transition:border-color .3s ease-in-out;transition:background-color .3s ease-in-out;cursor:pointer}select[_ngcontent-%COMP%]:focus{border-color:var(--textColor);transition:border-color .3s ease-in-out}select[_ngcontent-%COMP%]:hover{background:var(--bgColorSecondary);transition:background-color .3s ease-in-out}@keyframes _ngcontent-%COMP%_select-animation{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}"]}),s})();var b=i(2494);let v=(()=>{var t;class s{constructor(){this.individualBorders=!1,this.allBorderWidth=1,this.color="rgb(0, 0, 0)",this.boxColor="rgb(30, 136, 229)",this.boxContainerColor="rgb(255, 255, 255)",this.opacity=100,this.borderTypes=[{label:"Solid",value:"solid"},{label:"Dashed",value:"dashed"},{label:"Dotted",value:"dotted"},{label:"Double",value:"double"},{label:"Groove",value:"groove"},{label:"Ridge",value:"ridge"},{label:"Inset",value:"inset"},{label:"Outset",value:"outset"},{label:"Hidden",value:"hidden"}],this.type=this.borderTypes[0].value}get colorWithOpacity(){return`${this.color.slice(0,-1)}, ${this.opacity/100})`}get code(){return`border: ${this.allBorderWidth}px ${this.type} ${this.colorWithOpacity}`}onResetAll(){this.individualBorders=!1,this.allBorderWidth=1,this.color="rgb(0, 0, 0)",this.boxColor="rgb(30, 136, 229)",this.boxContainerColor="rgb(255, 255, 255)",this.opacity=100,this.type=this.borderTypes[0].value}log(o){console.log(o),console.log("type",this.type)}}return(t=s).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-border-outline"]],standalone:!0,features:[e.jDz],decls:58,vars:31,consts:[[1,"view"],[1,"view__header"],[3,"click"],[1,"material-symbols-outlined"],[1,"view__content"],[1,"view__content__options"],[1,"view__content__options__card"],[1,"option"],[1,"option__title"],[3,"max","min","ngModel","ngModelChange"],[1,"color"],["ngx-colors-trigger","","format","rgba",3,"ngModel","ngModelChange"],[3,"ngModel","list","ngModelChange"],[1,"view__content__preview"],[1,"box-container"],[1,"box-header"],["ngx-colors-trigger","","colorPickerControls","no-alpha","format","rgba",3,"ngModel","ngModelChange"],[1,"box-content"],[1,"box"],[1,"view__result"],[3,"code"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"Border / Outline Generator"),e.qZA(),e.TgZ(4,"button",2),e.NdJ("click",function(){return n.onResetAll()}),e.TgZ(5,"span",3),e._uU(6," restart_alt "),e.qZA()()(),e._UZ(7,"app-view-separator"),e.TgZ(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"span"),e._uU(14),e.qZA(),e.TgZ(15,"button",2),e.NdJ("click",function(){return n.allBorderWidth=1}),e.TgZ(16,"span",3),e._uU(17," restart_alt "),e.qZA()()(),e.TgZ(18,"app-slider",9),e.NdJ("ngModelChange",function(r){return n.allBorderWidth=r}),e.qZA()(),e.TgZ(19,"div",7)(20,"div",8)(21,"span",10)(22,"ngx-colors",11),e.NdJ("ngModelChange",function(r){return n.color=r}),e.qZA(),e._uU(23),e.qZA(),e.TgZ(24,"button",2),e.NdJ("click",function(){return n.color="rgb(0, 0, 0)"}),e.TgZ(25,"span",3),e._uU(26," restart_alt "),e.qZA()()()(),e.TgZ(27,"div",7)(28,"div",8)(29,"span"),e._uU(30),e.qZA(),e.TgZ(31,"button",2),e.NdJ("click",function(){return n.opacity=100}),e.TgZ(32,"span",3),e._uU(33," restart_alt "),e.qZA()()(),e.TgZ(34,"app-slider",9),e.NdJ("ngModelChange",function(r){return n.opacity=r}),e.qZA()(),e.TgZ(35,"div",7)(36,"div",8)(37,"span"),e._uU(38,"Type : "),e.qZA(),e.TgZ(39,"button",2),e.NdJ("click",function(){return n.opacity=100}),e.TgZ(40,"span",3),e._uU(41," restart_alt "),e.qZA()()(),e.TgZ(42,"app-select",12),e.NdJ("ngModelChange",function(r){return n.type=r})("ngModelChange",function(r){return n.log(r)}),e.qZA()()()(),e.TgZ(43,"div",13)(44,"div",14)(45,"div",15)(46,"div",10)(47,"span"),e._uU(48,"Background : "),e.qZA(),e.TgZ(49,"ngx-colors",16),e.NdJ("ngModelChange",function(r){return n.boxContainerColor=r}),e.qZA()(),e.TgZ(50,"div",10)(51,"span"),e._uU(52,"Box : "),e.qZA(),e.TgZ(53,"ngx-colors",16),e.NdJ("ngModelChange",function(r){return n.boxColor=r}),e.qZA()()(),e.TgZ(54,"div",17),e._UZ(55,"div",18),e.qZA()()()(),e.TgZ(56,"div",19),e._UZ(57,"app-code",20),e.qZA()()),2&o&&(e.xp6(1),e.Q6J("@fadeIn",void 0),e.xp6(7),e.Q6J("@fadeIn",void 0),e.xp6(6),e.hij("Width : ",n.allBorderWidth,"px "),e.xp6(4),e.Q6J("max",50)("min",0)("ngModel",n.allBorderWidth),e.xp6(4),e.Q6J("ngModel",n.color),e.xp6(1),e.hij(" Color : ",n.color," "),e.xp6(7),e.hij("Opacity : ",n.opacity/100," "),e.xp6(4),e.Q6J("max",100)("min",0)("ngModel",n.opacity),e.xp6(8),e.Q6J("ngModel",n.type)("list",n.borderTypes),e.xp6(2),e.Udp("background",n.boxContainerColor),e.xp6(3),e.Udp("color",n.boxContainerColor),e.xp6(2),e.Q6J("ngModel",n.boxContainerColor),e.xp6(2),e.Udp("color",n.boxContainerColor),e.xp6(2),e.Q6J("ngModel",n.boxColor),e.xp6(2),e.Udp("background",n.boxColor),e.$m1("border","",n.allBorderWidth,"px ",n.type," ",n.colorWithOpacity,""),e.xp6(1),e.Q6J("@fadeIn",void 0),e.xp6(1),e.Q6J("code",n.code))},dependencies:[p.ez,u.r,a.u5,a.JJ,a.On,h.P,g.To,g.qZ,g.u_,m,b.Q],styles:[".box-container[_ngcontent-%COMP%]{border-radius:10px;width:100%;border:1px solid var(--borderColor);max-height:450px}.box-container[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]{padding-top:10px}.box-container[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;margin-left:20px}.box-container[_ngcontent-%COMP%]   .box-header[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{filter:invert(1);margin-right:10px}.box-container[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.box-container[_ngcontent-%COMP%]   .box-content[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{width:80px;height:80px;margin:130px 0}"],data:{animation:[_._]}}),s})()}}]);