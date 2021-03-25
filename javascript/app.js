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


