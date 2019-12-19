const changeContent = function(event){
	const frame = document.querySelectorAll(".frame");
	const target = '.frame#'+ this.innerHTML;
	console.log(target);
	document.querySelector(".frame.selected").classList.add("deselected");
	document.querySelector(".frame.selected").classList.remove("selected");
	document.querySelector(target).classList.add("selected");
	document.querySelector(target).classList.remove("deselected");
};

const make_PBLObjective = function(){
	const pbl_objective = document.querySelector("#pbl_objective");
	const pbl_project = document.createElement("h2");
	const pbl_description = document.createElement("ul");

	const pbl_project_text = document.createTextNode(Course.pbl.pbl_project);
	for(i=0; i<Course.pbl.pbl_project_description.length ; i++){
			const pbl_description_list = document.createElement("li");
			const  pbl_description_list_text = document.createTextNode(Course.pbl.pbl_project_description[i]);

			pbl_description_list.appendChild(pbl_description_list_text);
			pbl_description.appendChild(pbl_description_list);
	}
	pbl_project.appendChild(pbl_project_text);
	pbl_objective.appendChild(pbl_project);
	pbl_objective.appendChild(pbl_description);
}

const make_PBLGroup = function(){
	const pbl_group_container = document.querySelector("#pbl_GGroup");
	
	const section1_button = document.createElement("button");

	const section1_container  = document.createElement("div");
	section1_container.id="sec1";
	for(i=0; i<Course.pbl.pbl_group.section1.length;i++){
		const group_container = document.createElement("div");
		const group_name = document.createElement("h4");
		const group_list = document.createElement("ul");
		const group_leader = document.createElement("li");
		const group_page = document.createElement("a");

		const group_name_text = document.createTextNode(Course.pbl.pbl_group.section1[i].team_name);
		const group_leader_text = document.createTextNode(Course.pbl.pbl_group.section1[i].leader);
		const group_page_text = document.createTextNode("홈페이지");
			
		group_page.href=Course.pbl.pbl_group.section1[i].team_page;

		group_container.classList.add("pbl_group_container");
		group_list.classList.add("pbl_group_list")
		
			group_name.appendChild(group_name_text);
			group_leader.appendChild(group_leader_text);
			group_list.appendChild(group_leader); 
			group_page.appendChild(group_page_text);
			for(j=0;j<Course.pbl.pbl_group.section1[i].team_member.length;j++){
				let group_teamone = document.createElement("li");
				let group_teamone_text = document.createTextNode(Course.pbl.pbl_group.section1[i].team_member[j]);
				
				group_teamone.appendChild(group_teamone_text);
				group_list.appendChild(group_teamone);
			}
			group_container.appendChild(group_name);
			group_container.appendChild(group_list);
			group_container.appendChild(group_page);

			section1_container.appendChild(group_container);
	}
	pbl_group_container.appendChild(section1_container);
}

const fold_pbl_group = function(){
	const pbl_group = document.querySelector("#pbl_GGroup");
	pbl_group.classList.toggle("fold");
}

make_Timeline();
focusOn();
make_PBLObjective();
make_PBLGroup();

document.querySelectorAll(".dropdown-list").forEach((element)=>{
	element.addEventListener('click',changeContent.bind(element));
})

document.querySelector("#pbl_groupBtn").addEventListener('click', fold_pbl_group);

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight;

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
window.onload = hasScrolled;