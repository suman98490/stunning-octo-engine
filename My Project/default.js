 /*var car={
    car_name:"Mercedes Benz",
    Car_model:"2006",
    Car_Price:35000,

    cardetails : function()
    {
        return car.Car_Price;
    }
}
document.write("The car price is "+car.cardetails());*/
function Cars(car_name,car_model,car_price)
{
    this.car_name=car_name;
    this.car_model=car_model;
    this.car_price=car_price;
   
}
var c1 = new Cars("Toyota","Innova",2500);

document.write("Car price of "+c1.car_model+" is " +c1.car_price);
function buttonclicked()
{
    //alert("Thanks for registering");
    //var str=document.getElementById("heading").innerHTML="Not registered";
    //alert(str);
    //document.getElementsByName("Register").innerHTML="Register Here";
    /*var str1=document.getElementById("radio1");
    var str2=document.getElementById("radio2");
    if(str1.checked==true)
    {
        alert("Gender selected is "+str1.value);
    }
    else if(str2.checked==true)
    {
        alert("Gender selected is "+str2.value);
    }
    else{
        alert("Nothing is checked");
    }*/
    //var str=document.getElementById("States");
    //alert("Selected State is " +str.options[str.selectedIndex].value);
    //var str=document.getElementsByTagName("P");
    //str[0].style.color="red";
    /*var str=document.getElementsByClassName("tenth");
    for(var i=0;i<str.length;i++)
    {
        str[i].style.color="red";
    }*/
}
function setnewimage()
{
   document.getElementById("img1").src="sbi2.jpg";
}
function setoldimage()
{
    document.getElementById("img1").src="sbi.jpg";  
}
function validation()
{
    var uname=document.getElementById("username");
    var password=document.getElementById("pwd");
    if(uname.value.trim()=="" || password.value.trim()=="")
    {
        alert("Please enter User name or password to login");
        return false;
    }
    else if(uname.value==("suman98490")&&password.value==("suman98@"))
    {
        return true;
    }
    else{
        alert("Please enter a valid user namme or password to login");
        return false;
    }
}