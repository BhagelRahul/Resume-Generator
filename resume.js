     /// add  skills
function addNewSKField(){
    
  let newNode=document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("skField");
  newNode.classList.add("mt-2");
  
  newNode.setAttribute("rows",3);
  newNode.setAttribute("placeholder","Enter here");
  
  let skOb=document.getElementById("sk");
  let skAddButtonOb=document.getElementById("skAddButton");
  
  skOb.insertBefore(newNode,skAddButtonOb);
  }
     
     
     /// add  WE 
function addNewWEField(){
    
let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("weField");
newNode.classList.add("mt-2");

newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");

let weOb=document.getElementById("we");
let weAddButtonOb=document.getElementById("weAddButton");

weOb.insertBefore(newNode,weAddButtonOb);
}

   // add projects
function addNewPJField(){
    
let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("pjField");
newNode.classList.add("mt-2");

newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");

let pjOb=document.getElementById("pj");
let pjAddButtonOb=document.getElementById("pjAddButton");

pjOb.insertBefore(newNode,pjAddButtonOb);
}

//add aq

function addNewAQField(){
    
let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("eqField");
newNode.classList.add("mt-2");

newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");

let aqOb=document.getElementById("aq");
let aqAddButtonOb=document.getElementById("aqAddButton");

aqOb.insertBefore(newNode, aqAddButtonOb);
}


//generating CV

function generateCV(){
   //for name
    let nameField=document.getElementById("nameField").value;

    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML=nameField;

    //for contact
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    //address
    document.getElementById('addressT').innerHTML=document.getElementById("addressField").value;

    document.getElementById('fbT').innerHTML=document.getElementById("fbField").value;

    document.getElementById('gitT').innerHTML=document.getElementById("gitField").value;

    document.getElementById('linkedT').innerHTML=document.getElementById("linkedField").value;


     //skills
     let sks=document.getElementsByClassName("skField");
     let str3="";

     for(let m of sks){
       str3=str3 +`<li> ${m.value}</li>`;
     }
     document.getElementById('skT').innerHTML=str3;

    ///objective
         document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
    
      //we
      let wes=document.getElementsByClassName("weField");
      let str="";

      for(let p of wes){
        str=str +`<li> ${p.value}</li>`;
      }
      document.getElementById('weT').innerHTML=str;

   
      //pj
      let pjs=document.getElementsByClassName("pjField");
      let str2="";

      for(let y of pjs){
        str2=str2 +`<li> ${y.value}</li>`;
      }
      document.getElementById('pjT').innerHTML=str2;

   
      //eq
      let aqs=document.getElementsByClassName("eqField");
      let str1="";

      for(let e of aqs){
        str1=str1 +`<li> ${e.value}</li>`;
      }
      document.getElementById('aqT').innerHTML=str1;
  

     document.getElementById("cv-form").style.display="none";
     document.getElementById("cv-template").style.display="block";
    
     

    }


// printing CV
 function printCV(){

    window.print();
 }
