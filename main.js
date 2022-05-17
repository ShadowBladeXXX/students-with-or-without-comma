var name_of_student_array=[];
function submit(){
    for(var j=1; j <5; j++){
        var student=document.getElementById("name_of_the_student_"+j).value;
        console.log(student);
        name_of_student_array.push("<h4>"+student+"</h4>");
        
       console.log(name_of_student_array);
       document.getElementById("display_name_with_commas").innerHTML=name_of_student_array;
       
    }
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";


}
function sorting(){
    name_of_student_array.sort();
    document.getElementById("display_name_without_commas").innerHTML=name_of_student_array.join(" ");
    document.getElementById("submit_button").style.display="inline-block";
    document.getElementById("sort_button").style.display="none";
}