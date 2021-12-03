function changePhone1(){
    const phone1 = document.getElementById("phone1").value
    if(phone1.length ===3){
        document.getElementById("phone2").focus()
    }
}
function changePhone2(){
    const phone2 = document.getElementById("phone2").value
    if(phone2.length ===4){
        document.getElementById("phone3").focus()
    }
}
function changePhone3(){
    const phone2 = document.getElementById("phone2").value
}

let isStarted = false;

const getToken=()=>{
    if(isStarted === false){
        isStarted = true;
        let token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        document.getElementById("번호").innerText= token
        let time=180
        setInterval(function(){
            if (time>=0){
                const min = String(Math.floor(time/60)).padStart(2,"0")
                const sec = String(time%60).padStart(2,"0")
                document.getElementById("타이머").innerText = min+":"+sec
                time--
            }else{
                document.getElementById("버튼").disabled =true;
                isStarted = false;
            }
        },1000)
    } else {
    alert('이미 실행되었습니다')
    }
}

function checkValidation(){
    const phone1 = document.getElementById("phone1").value
    const phone2 = document.getElementById("phone2").value
    const phone3 = document.getElementById("phone3").value

    if (phone1.length===3 && phone2.length===4 && phone3.length===4){
        document.getElementById("mybutton").setAttribute("style","background-color: yellow")
        document.getElementById("mybutton").disabled = false;
    }
    else{
        document.getElementById("mybutton").setAttribute("style","background-color: none")
        document.getElementById("mybutton").disabled = true;
    }
}

function runbutton(){
    document.getElementById("mySubButton").setAttribute("style","background-color: yellow")
    document.getElementById("mySubButton").disabled=false;
}
function ok(){
    window.alert("인증되었습니다")
}