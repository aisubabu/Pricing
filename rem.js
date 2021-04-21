function BuyNow()
{
    var x = new XMLHttpRequest();
    x.open("GET","https://jsonplaceholder.typicode.com/photos",true);
    x.send();
    x.onreadystatechange = function(){
    if (this.status == 200 && this.readyState == 4)
    {
        var data = JSON.parse(this.responseText);
        for (var i = 0; i < 10; i++)
        {
            document.getElementById("data").innerHTML += 
            (
             "<div class='container'>"  + 
                "<img  class='imageAjax' src=" + data[i].thumbnailUrl + "/>"+
            "<div class='title'>" + data[i].title +"</div>" +
            "<a href=" + data[i].url + "></a>" +
            "</div>"  
            ) 
        }
    }
}

}
$.ajax({
    url:"https://jsonplaceholder.typicode.com/photos",
    type:"GET",
    success:function(data){
        var data = JSON.parse(data.Jun1);
        for (var i = 0; i < 10; i++)
        {
            document.getElementById("data").innerHTML += 
            (
             "<div class='container'>"  + 
                "<img  class='imageAjax' src=" + data[i].thumbnailUrl + "/>"+
            "<div class='title'>" + data[i].title +"</div>" +
            "<a href=" + data[i].url + "></a>" +
            "</div>"  
            ) 
        }
    },
    error:function(){
        console.log("Sorry,data not found!")
    }
});