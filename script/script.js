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
    currentTab =tab
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
    emptyState.classList.add('hidden')
    
    if (tab === "all") {
        allContainer.classList.remove("hidden")
    }
    else if(tab === 'Interview'){
        interviewContainer.classList.remove("hidden")
    } else{ 
        rejectContainer.classList.remove("hidden")
    }

    updateStat()
}

// stat-update
const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview"); 
const rejectStat = document.getElementById("stat-reject");
const availableStat = document.getElementById("Available")

switchTab(currentTab)

document.addEventListener("click", function(event) {
    const clickElement = event.target
    const card = clickElement.closest(".card");
    if (!card) return;
    const parent = card.parentNode;
    const status = card.querySelector('.status');
    console.log(card);
    
    if (clickElement.classList.contains("Interview")) {
        status.innerText="interviewed"
        interviewContainer.appendChild(card);
        updateStat() 
    }
    if (clickElement.classList.contains("Rejected")) {
        status.innerText="Rejected"
        rejectContainer.appendChild(card);
        updateStat() 
    }
    if (clickElement.classList.contains("delete")) {
        console.log(parent);
        parent.removeChild(card)
        updateStat() 
        console.log(card);
    }
})

function updateStat() {
    const count = {
        all: allContainer.children.length,
        Interview: interviewContainer.children.length,
        Rejected: rejectContainer.children.length,
    }
    totalStat.innerText = count.all
    interviewStat.innerText = count.Interview
    rejectStat.innerText = count.Rejected
    availableStat.innerText = count[currentTab]

    if (count[currentTab] < 1) {
        emptyState.classList.remove('hidden')
    } else {
        emptyState.classList.add('hidden')
    }
}
updateStat()