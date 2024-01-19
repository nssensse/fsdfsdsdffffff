




$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `https://nsnsnsnsfjds-icjm.vercel.app/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){

    })

})

if(window.location.pathname != "/"){
    $ondelete = $(".table2 tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `https://nsnsnsnsfjds-icjm.vercel.app/api/users/${id}`,
            "method" : "DELETE"
        }

        if(2>1){
            $.ajax(request).done(function(response){
                location.reload();
            })
        }

    })
}