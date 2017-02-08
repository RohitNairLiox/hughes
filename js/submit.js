    $("#submitBTN").click(function(e) {
        e.preventDefault();
        var firstname = $('#usxfirstname').val();
        var lastname = $('#usxlastname').val();
        var email = $('#usxmail').val();
        var message = $('#usxmessage').val();
        alert('Accepted');
            $.ajax({
                    type: 'POST',
                    url: 'submit.php',
                    data: { firstName: firstname, lastName: latname },
                    success: function(response) {
                        $('#result').html(response);
                    }
                });

    });
