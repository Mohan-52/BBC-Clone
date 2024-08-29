function on(formId){
    const selectedForm = document.getElementById(formId);
    if (selectedForm.style.display === 'block') {
        selectedForm.style.display = 'none';
    } else {
    var forms=document.querySelectorAll(".allforms");
    forms.forEach(function (myfun){
        myfun.style.display='none';
    });
    document.getElementById(formId).style.display='block';
}
}



function openAndClose(Idname){
const selectedOne=document.getElementById(Idname);
if (selectedOne.style.display === 'block') {
    selectedOne.style.display = 'none';
} else {
    selectedOne.style.display = 'block';


}
}

const link=document.querySelector(".link");
window.addEventListener("scroll",function totop(){
    if (pageYOffset > 100){
        link.classList.add("link-active");
    }
    else {
        link.classList.remove("link-active");
    }
});