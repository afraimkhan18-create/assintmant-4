let currentTab = "all"
const active =["bg-navy", "border-navy", "text-white"];
const inactive = ["bg-transparent", "text-slate-700","border-slate-200", "text-black"];

const allContainer = document.getElementById('all-container')
const interviewContainer = document.getElementById('interview-container')
const rejectContainer = document.getElementById('reject-container')
const emptyState = document.getElementById('Empty-State')
console.log(allContainer,interviewContainer,rejectContainer);

function switchTab(tab) {
    console.log(tab);
    const tabs = ["all","Interview","Rejected"]
    for(let t of tabs) {
        const tabName = document.getElementById("tab-"+ t)
        if (t === tab) {
            tabName.classList.remove(...inactive)
            tabName.classList.add(...active)
        }
        else{
            tabName.classList.remove(...active)
            tabName.classList.add(...inactive)
        }
        
    }

    const pages = [allContainer,interviewContainer,rejectContainer]
    for(let section of pages) {
        section.classList.add('hidden')
    }

    // emptyState.classList.add('hidden')
    

    if (tab === "all") {
        allContainer.classList.remove("hidden")
        if (allContainer.children.length <1) {
           allContainer.classList.remove("hidden")  
        }
    }
    else if(tab === 'Interview'){
        interviewContainer.classList.remove("hidden")
        if (allContainer.children.length <1) {
             allContainer.classList.remove("hidden")
            
        }
    } else{ rejectContainer.classList.remove("hidden")
        if (allContainer.children.length <1) {
             allContainer.classList.remove("hidden")
            
        }
    }

    
    
}

// stat-update
const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview"); 
const rejectStat = document.getElementById("stat-reject");

totalStat.innerText = allContainer.children.length 

switchTab(currentTab)
document.getElementById('job-container').addEventListener("click", function(event) {
    const clickElement = event.target
    const card = clickElement.closest(".card");
    const parent = card.parentNode;
    const status = card.querySelector('.status');
    console.log(card);
    
    if (clickElement.classList.contains("Interview")) {
        // console.log('interview click');
        status.innerText="interviewed"
        interviewContainer.appendChild(card);
        updateStat() 
        
    }
    if (clickElement.classList.contains("Rejected")) {
        // console.log('Rejected click');
        status.innerText="Rejected"
         rejectContainer.appendChild(card);
         updateStat() 
        
    }
    if (clickElement.classList.contains("delete")) {
        console.log(parent);
        //  interviewContainer.appendChild(card)
        parent.removeChild(card)
        updateStat() 
        console.log(card);
        
        
    }
    
})

function updateStat() {
    totalStat.innerText = allContainer.children.length;
    interviewStat.innerText = interviewContainer.children.length;
    rejectStat.innerText = rejectContainer.children.length;

   const count ={
    all: allContainer.children.length,
    interview: interviewContainer.children.length,
    rejected: rejectContainer.children.length,

    
}

totalStat.innerText = count.all
interviewStat.innerText = count.interview
rejectStat.innerText = count.rejected
}

updateStat() 