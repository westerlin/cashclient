/*

   Javascripting for Client

*/

function ajax(url,data,callback) {
        var req = false;
        try{
                req = new XMLHttpRequest();
                }
        catch(e) {
                try {
                        req = new ActiveXObject("Msxml2.XMLHTTP");
                        }
                catch(e) {
                        try{
                                req = new ActiceXObject("Microsoft.XMLHTTP");
                                }
                        catch(e) {
                                // browser does not support AJAX
                                return false;
                                }
                        }
                }
        req.open("POST",url,true);
        req.setRequestHeader("Content-Type","application/json");
        req.onreadystatechange = function() {
                if (req.readyState == 4) callback(req);
                    }
        req.send(data);
        return true;
        }

function showPanel(number){
        panels = document.getElementsByClassName("form");
        console.log(panels.lenght)
        for (i=0;i<panels.length;i++){
                if (i != number){
                    console.log("Hiding panel "+i)
                    panels[i].classList.add("hide");
                } else {
                    panels[i].classList.remove("hide");
            }
     }
   }


function log(text){
        obj = document.getElementById("log");
        if(obj)
            date = new Date();
            logtimer = date.toTimeString().slice(0,8)+" ";
            logtimer += ("0" + (date.getDay())).slice(-2)+"-";
            logtimer += ("0" + (date.getMonth() +　1)).slice(-2)+"-";
            logtimer += (""+date.getYear()).slice(-2);
            
            obj.innerHTML += "<p class=\"logentry\">"+logtimer+": "+text+"</p>";
            obj.scrollTop = obj.scrollHeight-obj.offsetHeight -1;
        }        

function receiver(req){
        if (req.status==200){
                response = JSON.parse(req.responseText);
                log(JSON.stringify(response));
                }
        else {
            alert("Error Message Code:"+req.status+", "+req.statusText);
                }
        }
        
function sendRaw(){
        data = JSON.stringify({"request":"user"});
        url = "http://localhost:5010/json";
        if (!ajax(url,data,receiver))
            log("Something went wrong when communicating with rest-API..");
      }

function sendIssuance(){
        amount=document.getElementById("c1").value;
        currency=document.getElementById("c2").value;
        data = JSON.stringify({"request":"issuance","currency":currency,"amount":amount});
        url = "http://localhost:5010/issuance";
        if (!ajax(url,data,receiver))
            log("Something went wrong when communicating with rest-API..");
      }

function sendTransfer(){
        amount=document.getElementById("c3").value;
        currency=document.getElementById("c4").value;
        recipient=document.getElementById("c5").value;
        data = JSON.stringify({"request":"transfer","currency":currency,"amount":amount,"receiver":recipient});
        url = "http://localhost:5010/transfer";
        if (!ajax(url,data,receiver))
            log("Something went wrong when communicating with rest-API..");
      }

