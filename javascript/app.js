function colorFav (){
var FavColor = prompt('what is your favorite color?','red,blue,green')
if(FavColor === "red"){
    document.write('<h3 style="background-color: red;">' + FavColor + '</h3>')
}else if(FavColor === "blue"){
    document.write('<h3 style="background-color: blue; ">' + FavColor+ '</h3>')
    }else if(FavColor === "green"){
        document.write('<h3 style="background-color:green;" >' + FavColor+ '</h3>')
    }else{
        alert("welcome")
    }
}
colorFav();

    var image ="";
    console.log(image);
    var imagtype = prompt('what is your favorite type of music?','jazz,pop,rock' );
    var imgNumber = prompt( 'How many pictures do you want to see ?');
    
    while (imagtype != 'jazz' && imagtype != 'pop' && imagtype != 'rock') {
          imagtype = prompt('do it again','jazz,pop,rock')
        
    }
 
for(var i = 1 ; i<=imgNumber ;i++){
 if(imagtype == 'jazz') {
     image = image + '<img src="https://image.freepik.com/free-vector/hand-drawn-internation-jazz-day-concept_23-2148470433.jpg">' 
     console.log(image);
}else if (imagtype == 'pop') {
    image = image +  '<img src="https://samplecraze.com/wp-content/uploads/2020/06/pop2-3.jpg">'
    console.log
}else if (imagtype == 'rock') {
    image = image + '<img src="https://i.ytimg.com/vi/cMYGZ0CqKsc/sddefault.jpg">'
}else {
    alert(wlc)
}
}

document.write(image);
    
         
  

   
    
      
     