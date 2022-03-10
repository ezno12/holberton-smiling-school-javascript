$(document).ready(function(){
    $.ajax({
          url: 'https://smileschool-api.hbtn.info/quotes',
          type: "get",
          beforeSend: function() {
        $("#QuotesLoader").show();
      },
          success: function(response) {
            $("#QuotesLoader").hide();
            for (let i = 0; i < response.length; i++) {
              let $html = $(`
              <div class="carousel-item carousel-item-content ${i === 0 ? 'active' : ''}">
                  <div class="row">
                      <div class="col-sm-3 text-center">
                          <img class="rounded-circle" src=${response[i].pic_url} class="d-block w-100" alt="random person image">
                      </div>
                      <div class="col-sm-8 ml-3 d-flex flex-column">
                          <div>&lt;&lt; ${response[i].text} &gt;&gt;</div>
                          <div class="font-weight-bold mt-3">${response[i].name}</div>
                          <div>${response[i].title}</div>
                      </div>
                  </div>
              </div>`);
              $("#quotesCarouselInner").append($html);
            }
          },
        });
    });