let url = "http://universities.hipolabs.com/search?country=india";


let list = document.querySelector("#list");
let btn = document.querySelector("button")
let input = document.querySelector("input");

btn.addEventListener(`click`,async ()=>{
    let state = input.value;
    input.value="";
    await showColleges(state);
})

async function showColleges(state){
    let clgArr = await getColleges();
    list.innerHTML="";
    let found=false;
    document.querySelector(".state").innerText="";
    for (clg of clgArr){
        if(clg[`state-province`]==state){
            found=true;
            document.querySelector(".state").innerText=state;
            let li =document.createElement('li');
            li.innerText=clg.name;
            list.appendChild(li);
        }  
    }
    if(!found){
        alert(`no college found under state : ${state}  please ensure first latter of state is uppercase`);
    }
}

async function getColleges(){
    try {
        let result= await axios.get(url);
        return result.data;
    } catch (e) {
       console.log(`Error:${e}`);
    }
}