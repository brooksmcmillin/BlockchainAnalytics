<template>
  <div class="user-profile-wrapper">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-xl-3 d-lg-full">
        <div class="profile-sidebar idb-block">
          <div class="user-thumb text-center p-20">
            <img src="/static/img/user-1.jpg" class="img-fluid rounded-circle mb-30" alt="user thumb" width="110" height="110">
            <h3>Gerald Vaughn</h3>
            <small>Freelance Designer, Previously TapQ</small>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="d-flex justify-content-between">
                <div class="align-items-start">
                  <p class="m-0">Followers :</p>
                </div>
                <div class="align-items-end">
                  <h4>1,097</h4>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex justify-content-between">
                <div class="align-items-start">
                  <p class="m-0">Online Status :</p>
                </div>
                <div class="align-items-end">
                  <h4>Offline</h4>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex justify-content-between">
                <div class="align-items-start">
                  <p class="m-0">Last seen :</p>
                </div>
                <div class="align-items-end">
                  <h4>2 Days ago</h4>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex justify-content-between">
                <div class="align-items-start">
                  <p class="m-0">Last Updated :</p>
                </div>
                <div class="align-items-end">
                  <h4>A Month ago</h4>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="d-flex justify-content-between">
                <div class="align-items-start">
                  <p class="m-0">Connections :</p>
                </div>
                <div class="align-items-end">
                  <h4>2,097</h4>
                </div>
              </div>
            </li>
          </ul>
          <div class="address-block p-20">
            <address>
              <span><i class="ti-user mr-15"></i>GeraldVaugn</span>
              <span><i class="ti-comments mr-15"></i>geraldv@example.com</span>
              <span><i class="ti-mobile mr-15"></i>(01) 234 567 8901</span>
              <span><i class="ti-map-alt mr-15"></i>E51, Industrial Area, Phase 2, Mohali, Punjab.</span>
            </address>
          </div>
          <div class="map overflow-hide p-15">
            <gmap-map :center="center" :zoom="9" style="width: '100%'; height: 300px">
              <gmap-marker
                :position="markers.position"
                :clickable="true"
                :draggable="true"
                @click="center=markers.position"
              ></gmap-marker>
            </gmap-map>
          </div>
        </div>
        <div class="idb-block">
          <div class="card">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div class="d-flex justify-content-between">
                  <span class="font-lg">Friends</span>
                  <a class="btn btn-pill btn-primary btn-small" href="javascript:;">255</a>
                </div>
              </li>
              <li class="list-group-item">
                <div class="d-flex justify-content-between">
                  <span class="font-lg">Connections</span>
                  <a class="btn btn-pill btn-warning btn-small" href="javascript:;">1455</a>
                </div>
              </li>
              <li class="list-group-item">
                <div class="d-flex justify-content-between">
                  <span class="font-lg">Follower</span>
                  <a class="btn btn-pill btn-danger btn-small" href="javascript:;">648</a>
                </div>
              </li>
              <li class="list-group-item">
                <div class="d-flex justify-content-between">
                  <span class="font-lg">Posts</span>
                  <a class="btn btn-pill btn-success btn-small" href="javascript:;">325</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-xl-6 d-lg-full">
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Activity Timeline</h2>
              </div>
              <div class="d-flex align-self-center idb-contextual-link">
                <b-dropdown variant="link" class="no-caret-icon">
                  <template slot="button-content">
                    <i class="ti-more-alt"></i>
                  </template>
                  <b-dropdown-item href="#"><i class="ti-eye"></i> View</b-dropdown-item>
                  <b-dropdown-item href="#"><i class="ti-pencil"></i> Edit</b-dropdown-item>
                  <b-dropdown-item href="#"><i class="ti-trash"></i> Delete</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>
          <div class="idb-block-content">
            <div class="timeline-wrap">
              <span class="text-muted fs-12 mb-10 d-block">Today</span>
              <ul class="list-unstyled">
                <li>
                  <div class="media mb-30">
                    <img src="/static/img/user-5.jpg" alt="user" class="d-flex mr-30 rounded-circle" width="50" height="50" />
                    <div class="media-body">
                      <div class="mb-20">
                        <h6 class="fs-14">John S. Added a review about last order<span class="text-primary">#148855</span></h6>
                        <p class="text-muted fs-12">10 min ago</p>
                      </div>
                      <div class="card p-15">
                        <ul class="list-inline mb-10">
                          <li class="list-inline-item"><a href="javascript:;" class="text-warning"><i class="fa fa-star"></i></a></li>
                          <li class="list-inline-item"><a href="javascript:;" class="text-warning"><i class="fa fa-star"></i></a></li>
                          <li class="list-inline-item"><a href="javascript:;" class="text-warning"><i class="fa fa-star"></i></a></li>
                          <li class="list-inline-item"><a href="javascript:;" class="text-warning"><i class="fa fa-star"></i></a></li>
                          <li class="list-inline-item"><a href="javascript:;" class="text-warning"><i class="fa fa-star"></i></a></li>
                        </ul>
                        <h6 class="fs-12">Received product and it was awesome as per described. Thank you team adminify.</h6>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="media mb-30">
                    <img src="/static/img/user-6.jpg" class="d-flex mr-30 rounded-circle" alt="user" width="50" height="50" />
                    <div class="media-body">
                      <div class="mb-20">
                        <h6 class="fs-14">Seller <span class="text-primary">Jasmin K.</span> Added New products.</h6>
                        <p class="text-muted fs-12">1 hour ago</p>
                      </div>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <img src="/static/img/10.jpg" alt="product" width="151" height="100" class="img-fluid card mb-10">
                          <h4 class="fs-14 m-0">Garden sprinkler</h4>
                          <span class="fs-12">$152.00</span>
                        </li>
                        <li class="list-inline-item">
                          <img src="/static/img/3.jpg" alt="product" width="151" height="100" class="img-fluid card mb-10">
                          <h4 class="fs-14 m-0">Portable Invoice</h4>
                          <span class="fs-12">$152.00</span>
                        </li>
                        <li class="list-inline-item">
                          <img src="/static/img/4.jpg" alt="product" width="151" height="100" class="img-fluid card mb-10">
                          <h4 class="fs-14 m-0">Walkytalky phones</h4>
                          <span class="fs-12">$152.00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="media mb-30">
                    <img src="/static/img/user-7.jpg" alt="user" class="d-flex mr-30 rounded-circle" width="50" height="50" />
                    <div class="media-body">
                      <h6 class="fs-14"><span class="text-primary">JJasmin K.</span> New blog added</h6>
                      <p class="text-muted fs-12">10 min ago</p>
                      <div class="blog-wrap">
                        <div class="row">
                          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <img src="/static/img/post-3.jpg" alt="post" class="img-fluid w-100 mb-10" width="151" height="100">
                          </div>
                          <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <h6>How to setup your estore in 10 min.</h6>
                            <p class="fs-12">Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper </p>
                            <div class="post-actions mb-20">
                              <a href="javascript:;"><i class="ti-comment mr-10"></i>21 Comments</a>
                              <a href="javascript:;"><i class="ti-thumb-up mr-10"></i>16 Likes</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Photos</h2>
          </div>
          <div class="idb-block-content">
            <div class="row">
              <div class="col-sm-6 col-md-4">
                <img src="/static/img/gallery1.jpg" alt="gallery image" class="img-fluid w-100 mb-30" width="220" height="146">
              </div>
              <div class="col-sm-6 col-md-4">
                <img src="/static/img/gallery2.jpg" alt="gallery image" class="img-fluid w-100 mb-30" width="220" height="146">
              </div>
              <div class="col-sm-6 col-md-4">
                <img src="/static/img/gallery3.jpg" alt="gallery image" class="img-fluid w-100 mb-30" width="220" height="146">
              </div>
              <div class="col-sm-6 col-md-4">
                <img src="/static/img/gallery4.jpg" alt="gallery image" class="img-fluid w-100 mb-30" width="220" height="146">
              </div>
              <div class="col-sm-6 col-md-4">
                <img src="/static/img/gallery5.jpg" alt="gallery image" class="img-fluid w-100 mb-30" width="220" height="146">
              </div>
              <div class="col-sm-6 col-md-4">
                <img src="/static/img/gallery6.jpg" alt="gallery image" class="img-fluid w-100 mb-30" width="220" height="146">
              </div>
            </div>
          </div>
        </div>
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Your Blog Posts</h2>
          </div>
          <div class="idb-block-content">
            <div class="media media-sm mb-10">
              <div class="d-flex mr-20">
                <img src="/static/img/blog-1.jpg" alt="blog gallery image" class="img-fluid w-100" width="345" height="200">
              </div>
              <div class="media-body py-20">
                <div class="d-flex justify-content-between mb-20">
                  <span class="small">Share Public Post - a hours ago</span>
                  <div class="footer-action">
                    <a href="javascript:;"><i class="ti-pencil-alt"></i></a>
                    <a href="javascript:;"><i class="ti-trash"></i></a>
                  </div>
                </div>
                <p class="fs-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dolores facilis maiores minus itaque excepturi.</p>
                <div class="post-actions">
                  <a href="javascrit:;"><i class="ti-comment"></i>21 Comments</a>
                  <a href="javascrit:;"><i class="ti-thumb-up"></i>16 Likes</a>
                </div>
              </div>
            </div>
            <div class="media media-sm mb-10">
              <div class="d-flex mr-20">
                <img src="/static/img/blog-2.jpg" alt="blog gallery image" class="img-fluid w-100" width="345" height="200">
              </div>
              <div class="media-body py-20">
                <div class="d-flex justify-content-between mb-20">
                  <span class="small">Share Public Post - a hours ago</span>
                  <div class="footer-action">
                    <a href="javascript:;"><i class="ti-pencil-alt"></i></a>
                    <a href="javascript:;"><i class="ti-trash"></i></a>
                  </div>
                </div>
                <p class="fs-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dolores facilis maiores minus itaque excepturi.</p>
                <div class="post-actions">
                  <a href="javascrit:;"><i class="ti-comment"></i>21 Comments</a>
                  <a href="javascrit:;"><i class="ti-thumb-up"></i>16 Likes</a>
                </div>
              </div>
            </div>
            <div class="media media-sm mb-10">
              <div class="d-flex mr-20">
                <img src="/static/img/blog-3.jpg" alt="blog gallery image" class="img-fluid w-100" width="345" height="200">
              </div>
              <div class="media-body py-20">
                <div class="d-flex justify-content-between mb-20">
                  <span class="small">Share Public Post - a hours ago</span>
                  <div class="footer-action">
                    <a href="javascript:;"><i class="ti-pencil-alt"></i></a>
                    <a href="javascript:;"><i class="ti-trash"></i></a>
                  </div>
                </div>
                <p class="fs-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dolores facilis maiores minus itaque excepturi.</p>
                <div class="post-actions">
                  <a href="javascrit:;"><i class="ti-comment"></i>21 Comments</a>
                  <a href="javascrit:;"><i class="ti-thumb-up"></i>16 Likes</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-xl-3 d-lg-full">
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Skills</h2>
              </div>
              <div class="d-flex align-self-center idb-contextual-link">
                <b-dropdown variant="link" class="no-caret-icon">
                  <template slot="button-content">
                    <i class="ti-more-alt"></i>
                  </template>
                  <b-dropdown-item href="#"><i class="ti-eye"></i> View</b-dropdown-item>
                  <b-dropdown-item href="#"><i class="ti-pencil"></i> Edit</b-dropdown-item>
                  <b-dropdown-item href="#"><i class="ti-trash"></i> Delete</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>
          <div class="idb-block-content">
            <div class="mb-20">
              <div class="d-flex justify-content-between">
                <h6 class="mb-20">Sketch</h6>
                <span class="fs-14">17.98%</span>
              </div>
              <b-progress height="6px" :value="50" class="mb-2" variant="primary gradient-primary"></b-progress>
            </div>
            <div class="mb-20">
              <div class="d-flex justify-content-between">
                <h6 class="mb-20">Photoshop</h6>
                <span class="fs-14">52.00%</span>
              </div>
              <b-progress height="6px" :value="75" class="mb-2" variant="warning gradient-warning"></b-progress>
            </div>
            <div class="mb-20">
              <div class="d-flex justify-content-between">
                <h6 class="mb-20">Illustrator</h6>
                <span class="fs-14">17.98%</span>
              </div>
              <b-progress height="6px" :value="17.9" class="mb-2" variant="warning gradient-danger"></b-progress>
            </div>
            <div class="mb-20">
              <div class="d-flex justify-content-between">
                <h6 class="mb-20">CoralDraw</h6>
                <span class="fs-14">25.69%</span>
              </div>
              <b-progress height="6px" :value="23.73" class="mb-2" variant="info gradient-info"></b-progress>
            </div>
            <div class="mb-20">
              <div class="d-flex justify-content-between">
                <h6 class="mb-20">HTML</h6>
                <span class="fs-14">20.25%</span>
              </div>
              <b-progress height="6px" :value="50.6" class="mb-2" variant="danger gradient-danger"></b-progress>
            </div>
          </div>
        </div>
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Who to follow</h2>
          </div>
          <div class="idb-block-content">
            <div class="media mb-15">
              <img src="/static/img/user-1.jpg" class="d-flex mr-20 rounded-circle" alt="user image" width="70" height="70">
              <div class="media-body">
                <div class="d-flex justify-content-start">
                  <h4>Barbara Walton</h4>
                  <span class="fs-12 text-muted ml-10">@Barbara</span>
                </div>
                <a href="javascript:;" class="btn btn-small btn-primary btn-pill">Following</a>
              </div>
            </div>
            <div class="media mb-15">
              <img src="/static/img/user-2.jpg" class="d-flex mr-20 rounded-circle" alt="user image" width="70" height="70">
              <div class="media-body">
                <div class="d-flex justify-content-start">
                  <h4>Elnora Fisher</h4>
                  <span class="fs-12 text-muted ml-10">@elonar</span>
                </div>
                <a href="javascript:;" class="btn btn-small btn-light btn-pill">Follow</a>
              </div>
            </div>
            <div class="media mb-15">
              <img src="/static/img/user-3.jpg" class="d-flex mr-20 rounded-circle" alt="user image" width="70" height="70">
              <div class="media-body">
                <div class="d-flex justify-content-start">
                  <h4>Nancy Curry</h4>
                  <span class="fs-12 text-muted ml-10">@elonar</span>
                </div>
                <a href="javascript:;" class="btn btn-small btn-light btn-pill">Follow</a>
              </div>
            </div>
            <div class="media mb-15">
              <img src="/static/img/user-4.jpg" class="d-flex mr-20 rounded-circle" alt="user image" width="70" height="70">
              <div class="media-body">
                <div class="d-flex justify-content-start">
                  <h4>Rena Steele</h4>
                  <span class="fs-12 text-muted ml-10">@elonar</span>
                </div>
                <a href="javascript:;" class="btn btn-small btn-danger btn-pill">Unfollow</a>
              </div>
            </div>
            <div class="media mb-15">
              <img src="/static/img/user-5.jpg" class="d-flex mr-20 rounded-circle" alt="user image" width="70" height="70">
              <div class="media-body">
                <div class="d-flex justify-content-start">
                  <h4>Ora Peterson</h4>
                  <span class="fs-12 text-muted ml-10">@elonar</span>
                </div>
                <a href="javascript:;" class="btn btn-small btn-primary btn-pill">Following</a>
              </div>
            </div>
          </div>
        </div>
        <div class="idb-block">
          <div class="idb-block-title">
            <h2>Connections</h2>
          </div>
          <div class="idb-block-content">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div class="media mb-15">
                  <img src="/static/img/user-1.jpg" class="d-flex mr-20 rounded-circle" alt="user image" width="70" height="70">
                  <div class="media-body pt-10">
                    <h4>Barbara Walton</h4>
                    <span class="fs-12 text-muted">Project Architect</span>
                  </div>
                </div>
                <div class="media mb-15">
                  <img src="/static/img/user-2.jpg" class="d-flex mr-20 rounded-circle" alt="user image" width="70" height="70">
                  <div class="media-body pt-10">
                    <h4>Barbara Walton</h4>
                    <span class="fs-12 text-muted">Thomas Stevens</span>
                  </div>
                </div>
                <div class="media mb-15">
                  <img src="/static/img/user-3.jpg" class="d-flex mr-20 rounded-circle" alt="user image" width="70" height="70">
                  <div class="media-body pt-10">
                    <h4>Barbara Walton</h4>
                    <span class="fs-12 text-muted">Jared Wheeler</span>
                  </div>
                </div>
                <div class="media mb-15">
                  <img src="/static/img/user-4.jpg" class="d-flex mr-20 rounded-circle" alt="user image" width="70" height="70">
                  <div class="media-body pt-10">
                    <h4>Barbara Walton</h4>
                    <span class="fs-12 text-muted">Clayton Keller</span>
                  </div>
                </div>
                <div class="media mb-15">
                  <img src="/static/img/user-5.jpg" class="d-flex mr-20 rounded-circle" alt="user image" width="70" height="70">
                  <div class="media-body pt-10">
                    <h4>Barbara Walton</h4>
                    <span class="fs-12 text-muted">Eula Parks</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      center: {lat: 30.7, lng: 76.7},
      markers: {
        position: {lat: 30.7, lng: 76.7}
      }
    }
  }
}
</script>
