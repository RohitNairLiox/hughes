    $("#submitBTN").click(function(e) {
        e.preventDefault();
        var firstname = $('#usxfirstname').val();
        var lastname = $('#usxlastname').val();
        var email = $('#usxmail').val();
        var message = $('#usxmessage').val();
	alert('Accepted');
          $.ajax({
        type: 'POST',
        url: 'process.php',
        data: { text1: firstname, text2: lastname },
        success: function(response) {
            $('#result').html(response);
        }
    });
    });
