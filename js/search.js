$(function () {
    var spinner = $("#spinner").spinner({
        min :0,
        max : 12,
        }
    );
})

$(function () {
    var spinner2 = $("#spinner2").spinner({
        min : 0,
        max: 12,
    });
})

$(function () {
    $("#property").selectmenu();
})

$(function () {
    $("#datepicker").datepicker();
})
$(function () {
    $("#datepicker2").datepicker({
        format:"yyyy"
    });
})

$(function () {
    $("#slider-range").slider({
        range:true,
        min: 10000,
        max:1000000,
        values:[10000, 1000000],
        slide:function(event, ui){
            $("#amount").val("LKR"+ui.values[0]+"- LKR"+ui.values[1]);
        }
    });
    $("#amount").val("LKR"+$("#slider-range").slider("values",0)+"- LKR"+$("#slider-range").slider("values",1));
})

$(function () {
    $("#search").on("click", function () {
        //var data = require("properties.json")
        var propType = $("#property").val();

        var minBed = $("#spinner").val();

        var maxBed = $("#spinner2").val();

        var minPrice = $("#slider-range").slider("option", "values")[0];
        var maxPrice = $("#slider-range").slider("option", "values")[1];

        var beginDate = $("#datepicker").val();
        var endDate = $("#datepicker2").val();
        console.log(endDate);
        var output = "<ul>";

        for (var i in data.properties){
            if((propType== data.properties[i].type)|| (propType == "Any")) {
                 console.log(data.properties[i].type)
                if ((minBed <= data.properties[i].bedrooms) && (maxBed >= data.properties[i].bedrooms)){
                    if ((data.properties[i].price >= minPrice) && (data.properties[i].price <= maxPrice)) {
                        //if((beginDate <= data.properties[i].added.month)&&(endDate >= data.properties[i].added.month)){
                        output+= "<h4><li>"+"LKR"+ data.properties[i].price +"</li></h4>" + "<img src="+ data.properties[i].picture+">"+"<p>"+data.properties[i].description+"</p>"+"<button class='btn btn-outline-primary '><a href='"+data.properties[i].url+"'>More Details</a></button>";
                        //}
                    }
                }
            }
        }
            output+="</ul>";
            document.getElementById("placeholder").innerHTML = output
    });
});

