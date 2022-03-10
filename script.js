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

        $.ajax({
          url: 'https://smileschool-api.hbtn.info/popular-tutorials',
          type: "get",
          beforeSend: function() {
            $("#VideosLoader").show();
          },
          success: function(response) {
            $("#VideosLoader").hide();
            for (let i = 0; i < response.length; i++) {
              let $stars = '';
              for (let j = 0; j < response[i].star; j++) {
                $stars += '<img src="./images/star_on.png" class="mr-1 carousel-star-icon" alt="star icon filled in purple">';
              }
              for (let j = 0; j < 5 - response[i].star; j++) {
                $stars += '<img src="./images/star_off.png" class="carousel-star-icon" alt="star icon filled in grey">';
              }
              let $html = $(`
                  <div class="text-center col-12 col-sm-6 col-md-3">
                      <div class="carousel-item active">
                          <img class="w-100" src="${response[i].thumb_url}" alt="smile image">
                          <div class="mx-3">
                              <div class="font-weight-bold text-dark text-left mt-3">
                                  ${response[i].title}
                              </div>
                              <div class="text-secondary text-left mt-3 mb-3">
                                  ${response[i]["sub-title"]}
                              </div>
                              <div class="d-flex align-items-center mb-3">
                                  <img src="${response[i].author_pic_url}" class="rounded-circle mr-3 video-carousel-img-profile" alt="profile image">
                                  <div class="purple-text font-weight-bold">${response[i].author}</div>
                              </div>
                              <div class="d-flex justify-content-between">
                                  <div class="d-flex pt-1">
                                  ${$stars}
                                  </div>
                                  <div class="purple-text font-weight-bold">
                                      ${response[i].duration}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>`);
                  $("#tutorialvideos").append($html);
              }
            },
          });
    });