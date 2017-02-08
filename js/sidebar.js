    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        var arrowMark = $("#arrowMark");
        if($(arrowMark).hasClass("glyphicon glyphicon-arrow-right")){
        	$(arrowMark).removeClass('glyphicon glyphicon-arrow-right').addClass('glyphicon glyphicon-arrow-left');
        }
        else{
        	$(arrowMark).removeClass('glyphicon glyphicon-arrow-left').addClass('glyphicon glyphicon-arrow-right');
        }
        

    });
