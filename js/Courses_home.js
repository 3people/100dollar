const trig_under = document.querySelector("#trig_under");
const trig_post = document.querySelector("#trig_post");

const triger_postgraduate = function(e){
		console.log("selected")
		document.querySelector(".content.selected").classList.remove("selected");
		// document.querySelector(".sectionContent").style["background-color"]="#727";
		setTimeout(()=>{
			document.querySelector("#Postgraduate").classList.add("selected")},500);
};
const triger_undergraduate = function(e){
		document.querySelector(".content.selected").classList.remove("selected");
		// document.querySelector(".sectionContent").style["background-color"]="#727";
		setTimeout(()=>{
			document.querySelector("#Undergraduate").classList.add("selected")},500);
};

trig_under.addEventListener('click',triger_undergraduate);
trig_post.addEventListener('click',triger_postgraduate);