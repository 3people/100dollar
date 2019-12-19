

const Timeline = document.querySelector("#Timeline");
const Notice_list = document.querySelector("#notice_list");

let Course = {};
let course_name = new URL(location.href).searchParams.get("name");
console.log(course_name);

	
var req = new XMLHttpRequest();
req.onreadystatechange = function(e){
	console.log(""+req.readyState + req.status);
	if( req.readyState == 4) {
		if( req.status == 200){

			if(req.response.type == "course"){	
				console.log("course");
				Course = req.response.content;
				setTimeout(()=>{
					make_Timeline();
					focusOn();
					make_noticeList();
					make_sectionList();
					make_peopleSlider();
					make_courseObjectives();
				},200);
			}
				console.log(req.response);
		}
	}
};
req.responseType = "json";

req.open("GET",`json/${course_name}.json`,true);
req.send(null);


const make_Timeline = function(){
	const Timeline = document.querySelector("#Timeline");
	let cur_week = 0;
	// let lab_count = 0;
	console.log(Course.date);
	for(i=0;i<Course.date.length;i++){
		const newDiv = document.createElement("div");
		const slot_content = document.createElement("div");
		const slot_contentbox = document.createElement("div");
		const date = document.createElement("h4");

		const date_text = document.createTextNode(Course.date[i]);
		

		if(typeof Course.lecture_schedule[i] == "object"){
			for(var j=0; j<Course.lecture_schedule[i].length;j++){
				const k = Course.lecture_schedule[i][j];
				console.log(k);
				const subject = document.createElement("h4");
				const subject_text = document.createTextNode(Course.lecture[k].subject);
				const lec_note = document.createElement("a");
				const lec_note_text = document.createTextNode("lecture note");

				lec_note.href= Course.lecture[k].lecture_slide;
				subject.appendChild(subject_text);
				lec_note.appendChild(lec_note_text);
				subject.classList.add("subject");
				lec_note.classList.add("lec_note");
				slot_contentbox.appendChild(subject);
				slot_contentbox.appendChild(lec_note);
			}
		} else {
			console.log(i);
				const subject = document.createElement("h4");
				const subject_text = document.createTextNode(Course.lecture_schedule[i]);
				subject.appendChild(subject_text);
				slot_contentbox.appendChild(subject);
		}


		date.appendChild(date_text);

		newDiv.classList.add("time_slot");
		slot_content.classList.add("slot_content");
		slot_content.classList.add("class");
		slot_contentbox.classList.add("slot_contentbox");
		date.classList.add("date");

		

		if(Course.week[i] != cur_week){
			const newWeek = document.createElement("div");
			newWeek.classList.add("time_slot");
			newWeek.classList.add("week_slot");
			
			const week_date = document.createElement("div");
			week_date.appendChild(document.createTextNode(" "));

			const week = document.createElement("h4");
			const week_text = document.createTextNode("week"+Course.week[i]);
			
			const weekbox = document.createElement("div");
			weekbox.classList.add("weekbox");
			weekbox.classList.add("slot_content");

			week.appendChild(week_text);
			week.classList.add("week");

			weekbox.appendChild(week);
			newWeek.appendChild(week_date);
			newWeek.appendChild(weekbox);
			Timeline.appendChild(newWeek);
			// slot_content.appendChild(week);
			cur_week = Course.week[i];

		}

		newDiv.classList.add("week"+cur_week);

		slot_content.appendChild(slot_contentbox);
		newDiv.appendChild(date);
		newDiv.appendChild(slot_content);
		Timeline.appendChild(newDiv);

		if(Course.notice_schedule[i] != null){
			for (j=0;j<Course.notice_schedule[i].length;j++){
				const noticebox = document.createElement("div");
				const noticebox_subject = document.createElement("h5");
				const noticebox_content = document.createElement("p");

				const notice_index = Course.notice_schedule[i][j];
				console.log(notice_index);

				const noticebox_subjectText = document.createTextNode(Course.notice[notice_index].subject);
				const noticebox_contentText = document.createTextNode(Course.notice[notice_index].content);

				noticebox_subject.appendChild(noticebox_subjectText);
				noticebox_content.appendChild(noticebox_contentText);
				noticebox.appendChild(noticebox_subject);
				noticebox.appendChild(noticebox_content);
				slot_contentbox.appendChild(noticebox);
			}	
		}

		
		if(cur_week+1 <= Course.week[Course.week.length-1] && cur_week != Course.week[i+1] &&   Course.lab_schedule[cur_week-1] != null 	){



			const lab_index =  Course.lab_schedule[cur_week-1];
			if(Course.lab[lab_index]){
			const newLab = document.createElement("div");
			const lab_date = document.createElement("div");
			const lab_content = document.createElement("div");
			const lab_contentbox = document.createElement("div");
			const lab_subject = document.createElement("h4");
			const lab_note = document.createElement("a");

			const lab_subject_text = document.createTextNode("[lab] "+Course.lab[lab_index].subject);
			const lab_note_text = document.createTextNode("lab note");

			lab_date.appendChild(document.createTextNode(" ")); 
			lab_subject.appendChild(lab_subject_text);
			lab_note.appendChild(lab_note_text);

			lab_note.href=Course.lab[lab_index].lab_note;

			lab_content.classList.add("slot_content");
			lab_contentbox.classList.add("slot_contentbox");
			newLab.classList.add("time_slot");
			newLab.classList.add("lab");
			newLab.classList.add("week"+cur_week);


			lab_contentbox.appendChild(lab_subject);
			lab_contentbox.appendChild(lab_note);
			lab_content.appendChild(lab_contentbox)
			newLab.appendChild(lab_date);
			newLab.appendChild(lab_content);
			Timeline.appendChild(newLab);
			}

		}


		const curweek_slot = document.querySelectorAll(".week"+cur_week+" .slot_contentbox");
		curweek_slot.forEach((element)=>{
		// element.classList.remove("deselected");
		element.classList.add("selected");
	});
	}
};

const focusOn = function(){
	const cur_week = 5;
	const timeline = document.querySelector("#Timeline")
	const timeslot = document.querySelectorAll(".time_slot");
	const curweek_slot = document.querySelectorAll(".week"+cur_week);

	timeline.classList.add('focus');

	// timeslot.forEach((element)=>{
	// 	element.classList.add("deselected");
	// });

	curweek_slot.forEach((element)=>{
		element.classList.remove("deselected");
		element.classList.add("selected");
	});
}

const focusOut = function(){
	const timeline = document.querySelector("#Timeline");
	const timeslot = document.querySelectorAll(".time_slot.deselected");


	timeline.classList.remove('focus');
	timeslot.forEach((element)=>{
		element.classList.remove("deselected");
		element.classList.add("selected");
	});

}


const  make_noticeList = function (){
	const Notice_list = document.querySelector("#notice_list");

	const notice_list = Course.notice;

	for(var i=0; i<notice_list.length;i++){
		let newItem = document.createElement("li");
		let newItem_a = document.createElement("a");
		let newItem_subject = document.createTextNode(notice_list[i].subject);

		newItem_a.appendChild(newItem_subject);
		newItem.appendChild(newItem_a);
		Notice_list.appendChild(newItem);
	}
};

const make_sectionList = function(){
	const section = document.querySelector("#sections");

	const section_list = Course.section;

	for(var i =0; i<section_list.length;i++){
		let newItem = document.createElement("tr");		
		let newItem_name = document.createElement("td");		
		let newItem_lectureTime= document.createElement("td");		
		let newItem_lecturePlace= document.createElement("td");		
		let newItem_labTime= document.createElement("td");		
		let newItem_labPlace= document.createElement("td");		

		let newItem_nameText = document.createTextNode(`Class ${i+1} ( ${section_list[i].number})`);		
		let newItem_lectureTimeText= document.createTextNode( section_list[i].lecture_time);		
		let newItem_lecturePlaceText= document.createTextNode( section_list[i].lecture_place);		
		let newItem_labTimeText= document.createTextNode(section_list[i].lab_time);		
		let newItem_labPlaceText= document.createTextNode(section_list[i].lab_place);	

		newItem_name.appendChild(newItem_nameText);
		newItem_lectureTime.appendChild(newItem_lectureTimeText);
		newItem_lecturePlace.appendChild(newItem_lecturePlaceText);
		newItem_labTime.appendChild(newItem_labTimeText);
		newItem_labPlace.appendChild(newItem_labPlaceText);

		newItem.appendChild(newItem_name);
		newItem.appendChild(newItem_lectureTime);
		newItem.appendChild(newItem_lecturePlace);
		newItem.appendChild(newItem_labTime);
		newItem.appendChild(newItem_labPlace);

		section.appendChild(newItem);
	}
}

const make_peopleSlider = function () {
	const container = document.querySelector("#people_container");

	let peopleList = [];

	peopleList.push(Course.Lecturer);

	if(Course.Assistant){	
		Course.Assistant.forEach((element)=>{
			peopleList.push(element);
		});
	}
	console.log(peopleList);
	peopleList.forEach((element,index)=>{
		let newItem_slide_switches = document.createElement("input");
		let newItem_slide_label = document.createElement("label");
		container.appendChild(newItem_slide_switches);
		container.appendChild(newItem_slide_label);
		newItem_slide_switches.type = "radio";
		newItem_slide_switches.name = "slide-switches";
		newItem_slide_switches.id = `slide_text${index}`;
		newItem_slide_switches.classList.add("slide-switch");

		newItem_slide_label.htmlFor = `slide_text${index}`;
		newItem_slide_label.classList.add("slide-label");

		let newItem_div = document.createElement("div");

		newItem_div.classList.add("slide-content");
		if(index == 0) {
			newItem_slide_switches.checked = true;
			newItem_div.classList.add("padded");
		}

		container.appendChild(newItem_div);

		let newItem_name = document.createElement("h2");
		let newItem_nameText = document.createTextNode(element.name);
		let newItem_ul = document.createElement("ul");

		newItem_name.appendChild(newItem_nameText);
		newItem_div.appendChild(newItem_name);
		newItem_div.appendChild(newItem_ul);

		let newItem_office = document.createElement("li");
		let newItem_tel = document.createElement("li");
		let newItem_email = document.createElement("li");

		let newItem_officeText = document.createTextNode("Office : " + element.office);
		let newItem_telText = document.createTextNode("Tel : " + element.tel);
		let newItem_emailText = document.createTextNode("Email : " + element.email);

		newItem_office.appendChild(newItem_officeText);
		newItem_tel.appendChild(newItem_telText);
		newItem_email.appendChild(newItem_emailText);

		newItem_ul.appendChild(newItem_office);
		newItem_ul.appendChild(newItem_tel);
		newItem_ul.appendChild(newItem_email);
		if(element.img){

			let newItem_img =document.createElement("img");
			newItem_img.src=`${element.img}`;
			newItem_img.classList.add("peopleImg");
			newItem_div.appendChild(newItem_img);
		}
		newItem_div.appendChild(newItem_ul);
	});


}

const make_courseObjectives = function() {
	const course_container = document.querySelector("#coures_objectives");

	const courseObjective_main = document.createElement("p");
	const courseObjective_mainText = document.createTextNode(Course.course_objective.content.main);

	courseObjective_main.appendChild(courseObjective_mainText);
	course_container.appendChild(courseObjective_main);

	let courseObjective_itemList = document.createElement("ul");

	Course.course_objective.content.item.forEach((element)=>{
		let courseObjective_item = document.createElement("li");
		let courseObjective_itemText = document.createTextNode(element);

		courseObjective_item.appendChild(courseObjective_itemText);
		courseObjective_itemList.appendChild(courseObjective_item);
	});

	course_container.appendChild(courseObjective_itemList);


}


// document.querySelector("#timeline_btn").addEventListener('click',()=>{
// 	const timeline =document.querySelector("#Timeline");

// 	if(timeline.classList.contains('focus')){
// 		focusOut();
// 	}
// 	else {
// 		focusOn();
// 	}
// });
