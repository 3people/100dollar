const coursebox = document.querySelectorAll(".coursebox");
const coursebox_content = document.querySelectorAll(".coursebox_content");
const coursebox_btn = document.querySelectorAll(".coursebox_btn");
const trig_under = document.querySelector("#trig_under");
const trig_post = document.querySelector("#trig_post");	

const post_load = false;



const coursebox_mouseover = function(index){
	this.classList.add("selected");
	coursebox_content[index].classList.add("hidden");

};

const coursebox_mouseout = function(index){
	this.classList.remove("selected");
	coursebox_content[index].classList.remove("hidden");

};



const triger_postgraduate = function(e){
		this.classList.add("selected");
		trig_under.classList.remove("selected");

		document.querySelector(".content.selected").classList.remove("selected");
		setTimeout(()=>{
			document.querySelector("#Postgraduate").classList.add("selected")},500);
};
const triger_undergraduate = function(e){
		this.classList.add("selected");
		trig_post.classList.remove("selected");
		document.querySelector(".content.selected").classList.remove("selected");

		setTimeout(()=>{
			document.querySelector("#Undergraduate").classList.add("selected")},500);
};


coursebox.forEach((element,index)=>{
	element.addEventListener("mouseover",coursebox_mouseover.bind(element,index))
});
coursebox.forEach((element,index)=>{
	element.addEventListener("mouseout",coursebox_mouseout.bind(element,index))
});

trig_under.addEventListener('click',triger_undergraduate.bind(trig_under));
trig_post.addEventListener('click',triger_postgraduate.bind(trig_post));