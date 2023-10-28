// Contact Form 

$(function () {
  "use strict";

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "assets/php/contact.php";

            // $.ajax({
            //     type: "POST",
            //     url: url,
            //     data: $(this).serialize(),
            //     success: function (data)
            //     {
            //         var messageAlert = 'alert-' + data.type;
            //         var messageText = data.message;

            //         var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
            //         if (messageAlert && messageText) {
            //             $('#contact-form').find('.messages').html(alertBox);
            //             $('#contact-form')[0].reset();
            //         }
            //     }
            // });

            e.preventDefault();
            $(".btn-send").val("Sending message...").attr("value","Sending message...")
            //AJAX request
            $.ajax({
                url: 'https://docs.google.com/forms/d/1yAWv_burHWARTnSGCbOKVEDTqudFAzyDLw4E_yPEgoI/formResponse',     //The public Google Form url, but replace /view with /formResponse
                data: $('#contact-form').serialize(), //Nifty jquery function that gets all the input data 
                type: 'POST', //tells ajax to post the data to the url
                dataType: "json", //the standard data type for most ajax requests
                statusCode: { 0: function(data) { //0 is when Google gives a CORS error, don't worry it went through
                    //success
                    $(".btn-send").val("Sent").attr("value","Sent").addClass("btn-success");
                    var alertBox = '<div class="alert alert-success alert-dismissable mb-5"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>Thanks, We received your query. We will get back to you soon.</div>';
                    $('#contact-form').find('.messages').html(alertBox);

                    setTimeout(function() {
                        $(".btn-send").delay( 1000 ).val("Send message").attr("value","Send message").removeClass("btn-success");
                        $('#contact-form')[0].reset();
                    }, 3000);
                },
                200: function(data) {//200 is a success code. it went through!
                    //success
                    $(".btn-send").val("Sent").attr("value","Sent").addClass("btn-success");
                    var alertBox = '<div class="alert alert-success alert-dismissable mb-5"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>Thanks, We received your query. We will get back to you soon.</div>';
                    $('#contact-form').find('.messages').html(alertBox);

                    setTimeout(function() {
                        $(".btn-send").delay( 1000 ).val("Send message").attr("value","Send message").removeClass("btn-success");
                        $('#contact-form')[0].reset();
                    }, 3000);
                },
                403: function(data) {//403 is when something went wrong and the submission didn't go through
                    //error
                    $(".btn-send").val("Send message").attr("value","Send message");
                    var alertBox = '<div class="alert alert-warning alert-dismissable mb-5"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>Oh no! something went wrong. we should check our code to make sure everything matches with Google</div>';
                    $('#contact-form').find('.messages').html(alertBox);
                    setTimeout(function() {
                        $(".btn-send").delay( 1000 ).val("Send message").attr("value","Send message").removeClass("btn-success");
                        $('#contact-form')[0].reset();
                    }, 3000);
                }
                }
            });
            return false;
        }
    })
});
