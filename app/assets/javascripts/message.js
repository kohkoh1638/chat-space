$(function(){
  function buildHTML(message){
    var content = message.content ? `${ message.content }` : "";
    var image = ( message.image.url ) ? `<img class= "lower-message__image" src=${message.image.url} >` : "";
    var html =
    `<div class="message" data-id="${message.id}">
      <div class="upper-message">
        <div class="upper-message__user-name">
          ${message.user_name}
        </div>
        <div class="upper-message__date">
          ${message.created_at}
        </div>
      </div>
      <div class="lower-meesage">
        <p class="lower-message__content">
          ${content}
        </p>
      </div>
      ${image}
    </div>`

    return html;
  }

  function ScrollToNewMessage(){
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
  }

  $('#new_message').on('submit', function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action')
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false,
      })
      .done(function(data){
        var html = buildHTML(data);
        $('.messages').append(html);
        ScrollToNewMessage();
        $('.form__message').val('');
        $(".form__submit").prop('disabled', false);
      })
      .fail(function(){
        alert('error');
       })
   })

      var reloadMessages = setInterval(function () {
        var last_message_id = $('.message').last().data('id');
        var group_id = $('.current-group__name').data('group');
        if (window.location.pathname.match(/\/groups\/\d+\/messages/)) {
          $.ajax({
            url: `/groups/${group_id}/api/messages`,
            type: "get",
            data: { id: last_message_id },
            dataType: "json"
          })
            .done(function (data) {
              data.forEach(function (message) {
                var html = buildHTML(message);
                $('.messages').append(html);
                $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight }, 'fast');
              });
            })
            .fail(function () {
              alert('自動更新に失敗しました');
            });
        } else {
          clearInterval(reloadMessages);
        }
      }, 5000);
    
    });
