$(function () {
    $("#favourite").on("click",function () {
        if(localStorage.getItem("prop1")==null){
            var id = $("#prop1").text();
            var description = $("#des").text();

            var prop1 = {"id":id, "description": description,}
            localStorage.setItem("prop1", JSON.stringify(prop1))
        }else{
            alert("Already added ! ")
        }

    })
})

$(function () {
    $("#remove").on("click",function () {
        localStorage.removeItem("prop1");
    })
})