<template>
  <div id="dashboard">
    <div class="row">
      <div class="col-md-6 col-lg-6 col-xl-3 d-lg-half-block b-50">
        <div class="idb-block mb-30 dash-card">
          <div class="idb-block-content">
            <div class="d-flex justify-content-between mb-20">
              <h5 class="m-0">Total Revenue</h5>
              <b-dropdown variant="link" class="no-caret-icon">
                <template slot="button-content">
                  <i class="ti-more-alt"></i>
                </template>
                <b-dropdown-item href="#"><i class="ti-eye"></i> View</b-dropdown-item>
                <b-dropdown-item href="#"><i class="ti-pencil"></i> Edit</b-dropdown-item>
                <b-dropdown-item href="#"><i class="ti-trash"></i> Delete</b-dropdown-item>
              </b-dropdown>
            </div>
            <div class="row">
              <div class="col-xs-6 col-sm-7 col-md-7">
                <h2 class="card-count">
                  <i-count-up
                    :start="0"
                    :end="256"
                    :decimals="0"
                    :duration="10"
                    :options="counterOptions"
                  ></i-count-up>
                </h2>
                <p class="mb-0">Revenue Today</p>
              </div>
              <div class="col-xs-6 col-sm-5 col-md-5">
                <revenue-mini-chart :width="100" :height="50"></revenue-mini-chart>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-6 col-xl-3 d-lg-half-block b-50">
        <div class="idb-block mb-30 dash-card">
          <div class="idb-block-content">
            <div class="d-flex justify-content-between mb-20">
              <h5 class="m-0">Total Orders</h5>
              <b-dropdown variant="link" class="no-caret-icon">
                <template slot="button-content">
                  <i class="ti-more-alt"></i>
                </template>
                <b-dropdown-item href="#"><i class="ti-eye"></i> View</b-dropdown-item>
                <b-dropdown-item href="#"><i class="ti-pencil"></i> Edit</b-dropdown-item>
                <b-dropdown-item href="#"><i class="ti-trash"></i> Delete</b-dropdown-item>
              </b-dropdown>
            </div>
            <div class="row">
              <div class="col-xs-6 col-sm-7 col-md-7">
                <h2 class="card-count">
                  <i-count-up
                    :start="0"
                    :end="4100"
                    :decimals="0"
                    :duration="10"
                    :options="counterOptions"
                  ></i-count-up>
                  <sup class="text-success font-sm">+30% <i class="ti-arrow-up"></i></sup></h2>
                <p class="m-0">New Orders Today</p>
              </div>
              <div class="col-xs-6 col-sm-5 col-md-5">
                <total-orders-mini-chart :width="100" :height="65"></total-orders-mini-chart>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-6 col-xl-3 d-lg-half-block b-50">
        <div class="idb-block mb-30 dash-card">
          <div class="idb-block-content">
            <div class="d-flex justify-content-between mb-20">
              <h5 class="m-0">Daily Sales</h5>
              <b-dropdown variant="link" class="no-caret-icon">
                <template slot="button-content">
                  <i class="ti-more-alt"></i>
                </template>
                <b-dropdown-item href="#"><i class="ti-eye"></i> View</b-dropdown-item>
                <b-dropdown-item href="#"><i class="ti-pencil"></i> Edit</b-dropdown-item>
                <b-dropdown-item href="#"><i class="ti-trash"></i> Delete</b-dropdown-item>
              </b-dropdown>
            </div>
            <div class="d-flex justify-content-between mb-20">
              <div class="d-flex align-self-center">
                <p class="m-0">Sales Today</p>
              </div>
              <div class="d-flex align-self-center">
                <h2 class="card-count">
                  <i-count-up
                    :start="0"
                    :end="42"
                    :decimals="0"
                    :duration="10"
                    :options="counterOptions"
                  ></i-count-up>%
                </h2>
              </div>
            </div>
            <b-progress :value="55" height="5px" variant="primary gradient-primary"></b-progress>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-6 col-xl-3 d-lg-half-block b-50">
        <div class="idb-block mb-30 dash-card">
          <div class="idb-block-content">
            <div class="d-flex justify-content-between mb-20">
              <h5 class="m-0">Expences</h5>
              <b-dropdown variant="link" class="no-caret-icon">
                <template slot="button-content">
                  <i class="ti-more-alt"></i>
                </template>
                <b-dropdown-item href="#"><i class="ti-eye"></i> View</b-dropdown-item>
                <b-dropdown-item href="#"><i class="ti-pencil"></i> Edit</b-dropdown-item>
                <b-dropdown-item href="#"><i class="ti-trash"></i> Delete</b-dropdown-item>
              </b-dropdown>
            </div>
            <div class="d-flex justify-content-between mb-20">
              <div class="d-flex align-self-center">
                <p class="m-0">Total Expence</p>
              </div>
              <div class="d-flex align-self-center">
                <h2 class="card-count">
                  <i-count-up
                    :start="0"
                    :end="55"
                    :decimals="0"
                    :duration="10"
                    :options="counterOptions"
                  ></i-count-up>%
                </h2>
              </div>
            </div>
            <b-progress :value="85" height="5px" variant="danger gradient-danger"></b-progress>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xl-6">
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Sales Report</h2>
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
            <sales-report-chart :width="300" :height="200"></sales-report-chart>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-12 col-xl-6">
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>User Stats</h2>
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
            <stacked-line-chart :width="300" :height="200"></stacked-line-chart>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xl-4 d-lg-half-block">
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Sales By Category</h2>
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
            <div class="doughnut-chart">
              <doughnut-chart :width="300" :height="200"></doughnut-chart>
            </div>
          </div>
          <div class="idb-block-footer doughnut-stats hidden-xs-down">
            <div class="row">
              <div class="col-xs-6 col-sm-3 col-md-3">
                <h5>25000</h5>
                <span>Total Sales</span>
              </div>
              <div class="col-xs-6 col-sm-3 col-md-3">
                <h5>16000</h5>
                <span>Male</span>
              </div>
              <div class="col-xs-6 col-sm-3 col-md-3">
                <h5>8000</h5>
                <span>Female</span>
              </div>
              <div class="col-xs-6 col-sm-3 col-md-3">
                <h5>16000</h5>
                <span>Kids</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-12 col-xl-8 d-lg-half-block">
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Trending</h2>
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
          <div class="idb-block-content p-0">
            <div class="table-responsive">
              <table class="table table-no-border table-middle">
                <tbody>
                  <tr>
                    <td>Reactify Reactjs Admin Theme</td>
                    <td>1,35,400</td>
                    <td>
                      <bar-chart :width="100" :height="30" :data="tinyBarChartData1" color="#F64A32"></bar-chart>
                    </td>
                  </tr>
                  <tr>
                    <td>Mali Gardening Theme</td>
                    <td>4,15,450</td>
                    <td>
                      <bar-chart :width="100" :height="30" :data="tinyBarChartData2" color="#17C7DF"></bar-chart>
                    </td>
                  </tr>
                  <tr>
                    <td>Saral Construction Theme</td>
                    <td>2,15,120</td>
                    <td>
                      <bar-chart :width="100" :height="30" :data="tinyBarChartData3" color="#F64A32"></bar-chart>
                    </td>
                  </tr>
                  <tr>
                    <td>Aadi Construction Theme</td>
                    <td>5,25,220</td>
                    <td>
                      <bar-chart :width="100" :height="30" :data="tinyBarChartData4" color="#FEA200"></bar-chart>
                    </td>
                  </tr>
                  <tr>
                    <td>Angel’s Fashion Blog</td>
                    <td>15,400</td>
                    <td>
                      <bar-chart :width="100" :height="30" :data="tinyBarChartData5" color="#F64A32"></bar-chart>
                    </td>
                  </tr>
                  <tr>
                    <td>Chankya Admin Theme</td>
                    <td>6,18,201</td>
                    <td>
                      <bar-chart :width="100" :height="30" :data="tinyBarChartData6" color="#17C7DF"></bar-chart>
                    </td>
                  </tr>
                  <tr>
                    <td>Photography Wordpress Theme </td>
                    <td>2,80,800</td>
                    <td>
                      <bar-chart :width="100" :height="30" :data="tinyBarChartData7" color="#FEA200"></bar-chart>
                    </td>
                  </tr>
                  <tr>
                    <td>Law Firm Wordpress Theme</td>
                    <td>5,40,620</td>
                    <td>
                      <bar-chart :width="100" :height="30" :data="tinyBarChartData8" color="#17C7DF"></bar-chart>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xl-8 d-lg-helf-block d-md-full">
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>New Article</h2>
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
          <div class="idb-full-block">
            <div class="table-responsive">
              <table class="table table-middle">
                <tbody>
                  <tr>
                    <td><img src="/static/img/user-2.jpg" class="rounded-circle artical-user" width="120" height="120" /></td>
                    <td>
                      <h5>How to build your own store in less then 10 min with Adminify</h5>
                      <p class="fs-12 artical-author">By: Nelson Juliyet</p>
                      <div class="post-actions mb-20">
                        <a href="javascript:;" class="mr-3"><i class="ti-pencil-alt"></i>Edit Post</a>
                        <a href="javascript:;"><i class="ti-trash"></i>Delete Post</a>
                      </div>
                      <button class="btn btn-danger">PUBLISH</button>
                    </td>
                    <td>
                      <img class="rounded" src="/static/img/post-1.jpg" width="234" height="156" alt="post" />
                    </td>
                  </tr>
                  <tr>
                    <td><img src="/static/img/user-4.jpg" class="rounded-circle artical-user" width="120" height="120" /></td>
                    <td>
                      <h5>How Adminify is faster than the others</h5>
                      <p class="fs-12 artical-author">By: Elia Span</p>
                      <div class="post-actions mb-20">
                        <a href="javascript:;" class="mr-3"><i class="ti-pencil-alt"></i>Edit Post</a>
                        <a href="javascript:;"><i class="ti-trash"></i>Delete Post</a>
                      </div>
                      <button class="btn btn-primary">PUBLISHED</button>
                    </td>
                    <td>
                      <img class="rounded" src="/static/img/post-2.jpg" width="234" height="156" alt="post" />
                    </td>
                  </tr>
                  <tr>
                    <td><img src="/static/img/user-3.jpg" class="rounded-circle artical-user" width="120" height="120" /></td>
                    <td>
                      <h5>Five steps to build your own store with Adminify</h5>
                      <p class="fs-12 artical-author">By: John Doe</p>
                      <div class="post-actions mb-20">
                        <a href="javascript:;" class="mr-3"><i class="ti-pencil-alt"></i>Edit Post</a>
                        <a href="javascript:;"><i class="ti-trash"></i>Delete Post</a>
                      </div>
                      <button class="btn btn-primary">PUBLISHED</button>
                    </td>
                    <td>
                      <img class="rounded" src="/static/img/post-3.jpg" width="234" height="156" alt="post" />
                    </td>
                  </tr>
                  <tr>
                    <td><img src="/static/img/user-4.jpg" class="rounded-circle artical-user" width="120" height="120" /></td>
                    <td>
                      <h5>How to use Adminify in your existing project</h5>
                      <p class="fs-12 artical-author">By: Nelson Juliyet</p>
                      <div class="post-actions mb-20">
                        <a href="javascript:;" class="mr-3"><i class="ti-pencil-alt"></i>Edit Post</a>
                        <a href="javascript:;"><i class="ti-trash"></i>Delete Post</a>
                      </div>
                      <button class="btn btn-danger">PUBLISH</button>
                    </td>
                    <td>
                      <img class="rounded" src="/static/img/post-2.jpg" width="234" height="156" alt="post" />
                    </td>
                  </tr>
                  <tr>
                    <td><img src="/static/img/user-5.jpg" class="rounded-circle artical-user" width="120" height="120" /></td>
                    <td>
                      <h5>How to build your own store in less then 10 min with Adminify</h5>
                      <p class="fs-12 artical-author">By: Nelson Juliyet</p>
                      <div class="post-actions mb-20">
                        <a href="javascript:;" class="mr-3"><i class="ti-pencil-alt"></i>Edit Post</a>
                        <a href="javascript:;"><i class="ti-trash"></i>Delete Post</a>
                      </div>
                      <button class="btn btn-danger">PUBLISH</button>
                    </td>
                    <td>
                      <img class="rounded" src="/static/img/post-3.jpg" width="234" height="156" alt="post" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="idb-block overflow-hide">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Global Sales By Top Location</h2>
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
            <global-sales></global-sales>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-12 col-xl-4 d-lg-helf-block d-md-full">
        <div class="idb-block">
          <vue-tabs centered type="tabs">
            <v-tab icon="ti-comments">
              <div class="idb-block-title">
                <h2>Direct Chat</h2>
              </div>
              <div class="idb-full-block">
                <chat></chat>
              </div>
            </v-tab>
            <v-tab icon="ti-headphone-alt">
              <div class="idb-block-title">
                <h2>Support Requests</h2>
              </div>
              <div class="idb-block-content support-block">
                <div class="media mb-20">
                  <div class="d-flex mr-20 pos-relative">
                    <img src="/static/img/user-1.jpg" class="rounded-circle" alt="user" width="70" height="70" />
                    <span class="badge badge-success badge-label-sm badge-thumb-top-right badge-pill fa-notify">&nbsp;</span>
                  </div>
                  <div class="media-body">
                    <p>Is this theme support server side rendering? I want to use server side rendering.</p>
                    <div class="d-flex justify-content-between">
                      <span class="fs-12">JohnDoe212</span>
                      <span class="fs-12">21 hours ago</span>
                    </div>
                  </div>
                </div>
                <div class="media mb-20">
                  <div class="d-flex mr-20 pos-relative">
                    <img src="/static/img/user-2.jpg" class="rounded-circle" alt="user" width="70" height="70" />
                    <span class="badge badge-danger badge-label-sm badge-thumb-top-right badge-pill fa-notify">&nbsp;</span>
                  </div>
                  <div class="media-body">
                    <p>Hey! I like this template. I want to purchase this theme but i have a question i.e., Is this theme have html template?</p>
                    <div class="d-flex justify-content-between">
                      <span class="fs-12">JohnDoe212</span>
                      <span class="fs-12">21 hours ago</span>
                    </div>
                  </div>
                </div>
                <div class="media mb-20">
                  <div class="d-flex mr-20 pos-relative">
                    <img src="/static/img/user-3.jpg" class="rounded-circle" alt="user" width="70" height="70" />
                    <span class="badge badge-warning badge-label-sm badge-thumb-top-right badge-pill fa-notify">&nbsp;</span>
                  </div>
                  <div class="media-body">
                    <p>Is this theme support server side rendering? I want to use server side rendering.</p>
                    <div class="d-flex justify-content-between">
                      <span class="fs-12">JohnDoe212</span>
                      <span class="fs-12">21 hours ago</span>
                    </div>
                  </div>
                </div>
                <div class="media mb-20">
                  <div class="d-flex mr-20 pos-relative">
                    <img src="/static/img/user-4.jpg" class="rounded-circle" alt="user" width="70" height="70" />
                    <span class="badge badge-danger badge-label-sm badge-thumb-top-right badge-pill fa-notify">&nbsp;</span>
                  </div>
                  <div class="media-body">
                    <p>Hey! I like this template. I want to purchase this theme but i have a question i.e., Is this theme have html template?</p>
                    <div class="d-flex justify-content-between">
                      <span class="fs-12">JohnDoe212</span>
                      <span class="fs-12">21 hours ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </v-tab>
          </vue-tabs>
        </div>
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Best Seller</h2>
              </div>
              <div class="d-flex align-self-center">
                <b-button variant="outline-secondary" class="btn-pill btn-small"><i class="ti-filter mr-10"></i>Today</b-button>
              </div>
            </div>
          </div>
          <div class="idb-full-block">
            <slick ref="slick" :options="slickOptions">
              <div class="idb-block-content">
                <div class="product-image mb-25">
                  <img src="/static/img/1.jpg" class="img-fluid w-100 pos-relative" alt="product" width="414" height="414" />
                </div>
                <div class="d-flex justify-content-between mb-10">
                  <h3>Night suit in black</h3>
                  <h3 class="text-muted">$145.00</h3>
                </div>
                <div class="product-ratings mb-15">
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                </div>
                <div class="product-stats row">
                  <div class="col-sm-4 col-md-4">
                    <h2>19,200</h2>
                    <h4>Sales</h4>
                  </div>
                  <div class="col-sm-4 col-md-4">
                    <h2>4.8</h2>
                    <h4>Ratings</h4>
                  </div>
                  <div class="col-sm-4 col-md-4">
                    <h2>25</h2>
                    <h4>Comments</h4>
                  </div>
                </div>
              </div>
              <div class="idb-block-content">
                <div class="product-image mb-25">
                  <img src="/static/img/2.jpg" class="img-fluid w-100 pos-relative" alt="product" width="414" height="414">
                </div>
                <div class="d-flex justify-content-between mb-10">
                  <h3>Night suit in black</h3>
                  <h3 class="text-muted">$145.00</h3>
                </div>
                <div class="product-ratings mb-15">
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                </div>
                <div class="product-stats row">
                  <div class="col-sm-4 col-md-4">
                    <h2>19,200</h2>
                    <h4>Sales</h4>
                  </div>
                  <div class="col-sm-4 col-md-4">
                    <h2>4.8</h2>
                    <h4>Ratings</h4>
                  </div>
                  <div class="col-sm-4 col-md-4">
                    <h2>25</h2>
                    <h4>Comments</h4>
                  </div>
                </div>
              </div>
              <div class="idb-block-content">
                <div class="product-image mb-25">
                  <img src="/static/img/3.jpg" class="img-fluid w-100 pos-relative" alt="product" width="414" height="414">
                </div>
                <div class="d-flex justify-content-between mb-10">
                  <h3>Night suit in black</h3>
                  <h3 class="text-muted">$145.00</h3>
                </div>
                <div class="product-ratings mb-15">
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                </div>
                <div class="product-stats row">
                  <div class="col-sm-4 col-md-4">
                    <h2>19,200</h2>
                    <h4>Sales</h4>
                  </div>
                  <div class="col-sm-4 col-md-4">
                    <h2>4.8</h2>
                    <h4>Ratings</h4>
                  </div>
                  <div class="col-sm-4 col-md-4">
                    <h2>25</h2>
                    <h4>Comments</h4>
                  </div>
                </div>
              </div>
              <div class="idb-block-content">
                <div class="product-image mb-25">
                  <img src="/static/img/4.jpg" class="img-fluid w-100 pos-relative" alt="product" width="414" height="414">
                </div>
                <div class="d-flex justify-content-between mb-10">
                  <h3>Night suit in black</h3>
                  <h3 class="text-muted">$145.00</h3>
                </div>
                <div class="product-ratings mb-15">
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star text-warning"></i>
                </div>
                <div class="product-stats row">
                  <div class="col-sm-4 col-md-4">
                    <h2>19,200</h2>
                    <h4>Sales</h4>
                  </div>
                  <div class="col-sm-4 col-md-4">
                    <h2>4.8</h2>
                    <h4>Ratings</h4>
                  </div>
                  <div class="col-sm-4 col-md-4">
                    <h2>25</h2>
                    <h4>Comments</h4>
                  </div>
                </div>
              </div>
            </slick>
            <div class="action">
              <b-button-group class="btn-group-justified">
                <b-button variant="outline-secondary"><i class="ti-pencil-alt mr-10"></i> Edit</b-button>
                <b-button variant="outline-secondary"><i class="ti-trash mr-10"></i> Delete</b-button>
              </b-button-group>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-lg-6 col-xl-3 d-lg-half-block b-50">
        <div class="gradient-primary idb-block border-rad-lg">
          <div class="idb-block-content">
            <div class="mb-40">
              <vue-easy-pie-chart
                :percent="82"
                :size="200"
                :line-width="10"
                track-color="rgba(0,0,0,0.4)"
                scale-color="#FFF"
                bar-color="#FFF"
                animate="4000"
                ></vue-easy-pie-chart>
            </div>
            <h3 class="text-center text-white">Sales Target</h3>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-6 col-xl-3 d-lg-half-block b-50">
        <div class="gradient-danger idb-block border-rad-lg">
          <div class="idb-block-content">
            <div class="mb-40">
              <vue-easy-pie-chart
                :percent="75"
                :size="200"
                :line-width="10"
                track-color="rgba(0,0,0,0.4)"
                scale-color="#FFF"
                bar-color="#FFF"
                animate="2000"
                ></vue-easy-pie-chart>
            </div>
            <h3 class="text-center text-white">Orders</h3>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-6 col-xl-3 d-lg-half-block b-50">
        <div class="gradient-warning idb-block border-rad-lg">
          <div class="idb-block-content">
            <div class="mb-40">
              <vue-easy-pie-chart
                :percent="80"
                :size="200"
                :line-width="10"
                track-color="rgba(0,0,0,0.4)"
                scale-color="#FFF"
                bar-color="#FFF"
                animate="2000"
                ></vue-easy-pie-chart>
            </div>
            <h3 class="text-center text-white">New Visitors</h3>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-6 col-xl-3 d-lg-half-block b-50">
        <div class="gradient-pink idb-block border-rad-lg">
          <div class="idb-block-content">
            <div class="mb-40">
              <vue-easy-pie-chart
                :percent="60"
                :size="200"
                :line-width="10"
                track-color="rgba(0,0,0,0.4)"
                scale-color="#FFF"
                bar-color="#FFF"
                animate="2000"
                ></vue-easy-pie-chart>
            </div>
            <h3 class="text-center text-white">Subscriptions</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xl-6 d-lg-full">
        <div class="idb-block overflow-hide">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Overall Traffic Status</h2>
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
            <div class="d-flex traffic-status justify-content-start hidden-sm-down">
              <div class="p-30">
                <span class="pb-10 d-block">Online Sources</span>
                <div class="d-flex justify-content-between">
                  <h2 class="mb-0 mr-25">3500</h2>
                  <i class="ti-arrow-up text-primary text-right font-2x"></i>
                </div>
              </div>
              <div class="p-30">
                <span class="pb-10 d-block">Today</span>
                <div class="d-flex justify-content-between">
                  <h2 class="mb-0 mr-25">170,20</h2>
                  <i class="ti-arrow-up text-primary text-right font-2x"></i>
                </div>
              </div>
              <div class="p-30 d-xs-none">
                <span class="pb-10 d-block">Last Month%</span>
                <div class="d-flex justify-content-between">
                  <h2 class="mb-0 mr-25">20.30%</h2>
                  <i class="ti-arrow-down text-danger text-right font-2x"></i>
                </div>
              </div>
            </div>
            <overall-traffic-chart :width="400" :height="130"></overall-traffic-chart>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-12 col-xl-6 d-lg-full">
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Todo List</h2>
              </div>
              <div class="d-flex align-self-center">
                <b-button variant="outline-secondary" class="btn-pill btn-small"><i class="ti-filter mr-10"></i>Today</b-button>
              </div>
            </div>
          </div>
          <div class="idb-block-content py-0">
            <todo-list></todo-list>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Recent Order &amp; Status</h2>
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
          <div class="idb-full-block">
            <div class="table-responsive">
              <table class="table table-middle custom-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer Name</th>
                    <th>Order Date</th>
                    <th>Ship Date</th>
                    <th>Payment</th>
                    <th>Tracking ID</th>
                    <th class="w-15">Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-danger">#124555</td>
                    <td>
                      <img class="img-fluid rounded-circle mr-10" src="/static/img/user-1.jpg" width="50"height="50" />
                      <span>Felton Crumrine</span>
                    </td>
                    <td>13 Oct 2017, 04:00Pm</td>
                    <td>18 Oct 2017</td>
                    <td><span class="badge gradient-primary">panding</span></td>
                    <td>AWD-2345544</td>
                    <td>
                      <b-progress :value="42" height="5px" variant="danger"></b-progress>
                      <span class="fs-12">Dispatched</span>
                    </td>
                    <td class="table-action">
                      <a href="javascript:;"><i class="ti-check-box"></i></a>
                      <a href="javascript:;"><i class="ti-pencil-alt"></i></a>
                      <a href="javascript:;"><i class="ti-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-danger">#124556</td>
                    <td>
                      <img class="img-fluid rounded-circle mr-10" src="/static/img/user-2.jpg" width="50"height="50" />
                      <span>Karma Seabolt</span>
                    </td>
                    <td>14 Oct 2017, 04:00Pm</td>
                    <td>19 Oct 2017</td>
                    <td><span class="badge gradient-danger">paid</span></td>
                    <td>AWD-2345545</td>
                    <td>
                      <b-progress :value="68" height="5px" variant="warning"></b-progress>
                      <span class="fs-12">Dispatched</span>
                    </td>
                    <td class="table-action">
                      <a href="javascript:;"><i class="ti-check-box"></i></a>
                      <a href="javascript:;"><i class="ti-pencil-alt"></i></a>
                      <a href="javascript:;"><i class="ti-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-danger">#124557</td>
                    <td>
                      <img class="img-fluid rounded-circle mr-10" src="/static/img/user-3.jpg" width="50"height="50" />
                      <span>Ahmad Badon</span>
                    </td>
                    <td>15 Oct 2017, 04:00Pm</td>
                    <td>20 Oct 2017</td>
                    <td><span class="badge gradient-danger">paid</span></td>
                    <td>AWD-2345546</td>
                    <td>
                      <b-progress :value="42" height="5px" variant="danger"></b-progress>
                      <span class="fs-12">Dispatched</span>
                    </td>
                    <td class="table-action">
                      <a href="javascript:;"><i class="ti-check-box"></i></a>
                      <a href="javascript:;"><i class="ti-pencil-alt"></i></a>
                      <a href="javascript:;"><i class="ti-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-danger">#124558</td>
                    <td>
                      <img class="img-fluid rounded-circle mr-10" src="/static/img/user-4.jpg" width="50"height="50" />
                      <span>Lottie Emmert</span>
                    </td>
                    <td>16 Oct 2017, 04:00Pm</td>
                    <td>21 Oct 2017</td>
                    <td><span class="badge gradient-primary">panding</span></td>
                    <td>AWD-2345547</td>
                    <td>
                      <b-progress :value="68" height="5px" variant="warning"></b-progress>
                      <span class="fs-12">Dispatched</span>
                    </td>
                    <td class="table-action">
                      <a href="javascript:;"><i class="ti-check-box"></i></a>
                      <a href="javascript:;"><i class="ti-pencil-alt"></i></a>
                      <a href="javascript:;"><i class="ti-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-danger">#124559</td>
                    <td>
                      <img class="img-fluid rounded-circle mr-10" src="/static/img/user-5.jpg" width="50"height="50" />
                      <span>Lelah Howard</span>
                    </td>
                    <td>17 Oct 2017, 04:00Pm</td>
                    <td>22 Oct 2017</td>
                    <td><span class="badge gradient-danger">paid</span></td>
                    <td>AWD-2345548</td>
                    <td>
                      <b-progress :value="60" height="5px" variant="danger"></b-progress>
                      <span class="fs-12">Dispatched</span>
                    </td>
                    <td class="table-action">
                      <a href="javascript:;"><i class="ti-check-box"></i></a>
                      <a href="javascript:;"><i class="ti-pencil-alt"></i></a>
                      <a href="javascript:;"><i class="ti-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-danger">#124560</td>
                    <td>
                      <img class="img-fluid rounded-circle mr-10" src="/static/img/user-6.jpg" width="50"height="50" />
                      <span>Sacha Kothari</span>
                    </td>
                    <td>18 Oct 2017, 04:00Pm</td>
                    <td>23 Oct 2017</td>
                    <td><span class="badge gradient-warning">COD</span></td>
                    <td>AWD-2345549</td>
                    <td>
                      <b-progress :value="60" height="5px" variant="danger"></b-progress>
                      <span class="fs-12">Dispatched</span>
                    </td>
                    <td class="table-action">
                      <a href="javascript:;"><i class="ti-check-box"></i></a>
                      <a href="javascript:;"><i class="ti-pencil-alt"></i></a>
                      <a href="javascript:;"><i class="ti-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-danger">#124561</td>
                    <td>
                      <img class="img-fluid rounded-circle mr-10" src="/static/img/user-7.jpg" width="50"height="50" />
                      <span>Sasha Eckles</span>
                    </td>
                    <td>19 Oct 2017, 04:00Pm</td>
                    <td>24 Oct 2017</td>
                    <td><span class="badge gradient-warning">COD</span></td>
                    <td>AWD-2345550</td>
                    <td>
                      <b-progress :value="90" height="5px" variant="primary"></b-progress>
                      <span class="fs-12">Dispatched</span>
                    </td>
                    <td class="table-action">
                      <a href="javascript:;"><i class="ti-check-box"></i></a>
                      <a href="javascript:;"><i class="ti-pencil-alt"></i></a>
                      <a href="javascript:;"><i class="ti-trash"></i></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-4 d-md-full">
        <div class="idb-block">
          <div class="idb-block-content">
            <div class="media">
              <div class="d-flex mr-30">
                <i class="fa fa-facebook-official font-5x facebook-color"></i>
              </div>
              <div class="media-body py-10">
                <h3>#adminify</h3>
                <p class="m-0">24k Followers - 1500 Likes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-4 d-md-full">
        <div class="idb-block">
          <div class="idb-block-content">
            <div class="media">
              <div class="d-flex mr-30">
                <i class="fa fa-google-plus font-5x google-color"></i>
              </div>
              <div class="media-body py-10">
                <h3>#adminify</h3>
                <p class="m-0">24k Followers - 1500 Likes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-4 d-md-full">
        <div class="idb-block">
          <div class="idb-block-content">
            <div class="media">
              <div class="d-flex mr-30">
                <i class="fa fa-twitter-square font-5x twitter-color"></i>
              </div>
              <div class="media-body py-10">
                <h3>#adminify</h3>
                <p class="m-0">24k Followers - 1500 Likes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-8 d-md-full">
        <div class="idb-block">
          <div class="idb-block-content">
            <div class="row site-status">
              <div class="col-sm-12 col-md-12 col-lg-5 py-20">
                <div class="d-flex justify-content-between border-bottom-2 mb-20">
                  <div class="align-items-start">
                    <h2><b>1280</b></h2>
                    <p>Sold</p>
                  </div>
                  <div class="align-items-end">
                    <h2><b>1640</b></h2>
                    <p>In-Stock</p>
                  </div>
                </div>
                <div>
                  <h2 class="text-danger"><b>$192846</b></h2>
                  <p>Sales</p>
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-7">
                <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="chart-wrap mb-20">
                      <div class="d-flex justify-content-between">
                        <h5>Total orders : </h5>
                        <p class="fw-bold">380</p>
                      </div>
                      <area-chart :data="totalOrders" :width="300" :height="80" color="#17C7DF"></area-chart>
                    </div>
                    <div class="chart-wrap mb-20">
                      <div class="d-flex justify-content-between">
                        <h5>Total sales : </h5>
                        <p class="fw-bold">$312900</p>
                      </div>
                      <area-chart :data="totalSales" :width="300" :height="80" color="#F64A32"></area-chart>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="chart-wrap mb-20">
                      <div class="d-flex justify-content-between">
                        <h5>New customers : </h5>
                        <p class="fw-bold">120</p>
                      </div>
                      <area-chart :data="newCustomers" :width="300" :height="80" color="#FEA200"></area-chart>
                    </div>
                    <div class="chart-wrap mb-20">
                      <div class="d-flex justify-content-between">
                        <h5>Total customers : </h5>
                        <p class="fw-bold">950</p>
                      </div>
                      <area-chart :data="totalCustomers" :width="300" :height="80" color="#ED276D"></area-chart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-4 d-md-full">
        <today-weather></today-weather>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-4 d-md-full">
        <div class="card idb-block border-0">
          <div class="card-thumbnail mb-10">
            <img class="img-fluid" src="/static/img/post-1.jpg" height="273" alt="blog" />
            <a href="javascript:;" class="btn btn-danger btn-rounded square-50 btn-right"><i class="ti-sharethis"></i></a>
          </div>
          <div class="card-body">
            <div class="media mb-20">
              <div class="d-flex mr-20">
                <img src="/static/img/user-1.jpg" class="rounded-circle" width="80" height="80" alt="author" />
              </div>
              <div class="media-body pt-15">
                <h5>Alejandro Garza</h5>
                <p>Share Public Post- a hours ago</p>
              </div>
            </div>
            <div class="blog-content">
              <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dolores facilis maiores minus itaque excepturi.</p>
              <div class="post-actions mb-20">
                <a href="javascrit:;"><i class="ti-comment"></i>21 Comments</a>
                <a href="javascrit:;"><i class="ti-thumb-up"></i>16 Likes</a>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between">
              <div class="align-self-center">
                <a class="btn btn-danger btn-small" href="javascript:;">Reply</a>
              </div>
              <div class="footer-action align-self-center">
                <a href="javascript:;"><i class="ti-pencil-alt"></i></a>
                <a href="javascript:;"><i class="ti-trash"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-4 d-md-full">
        <div class="card idb-block border-0">
          <div class="media p-20">
            <div class="d-flex mr-20">
              <img src="/static/img/user-2.jpg" class="rounded-circle" width="80" height="80" alt="author" />
            </div>
            <div class="media-body pt-15">
              <h5>Alejandro Garza</h5>
              <p class="fs-12">Share Public Post- a hours ago</p>
            </div>
          </div>
          <div class="card gradient-primary border-0 rounded-0">
            <a href="javascript:;" class="btn btn-danger btn-rounded square-50 btn-right"><i class="ti-sharethis"></i></a>
            <div class="p-50">
              <h3 class="text-white text-line-h mb-0">Technology Tools: Web 2.0 in the Classroom</h3>
            </div>
          </div>
          <div class="card-body">
            <div class="blog-content">
              <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dolores facilis maiores minus itaque excepturi.</p>
              <div class="post-actions mb-20">
                <a href="javascrit:;"><i class="ti-comment"></i>21 Comments</a>
                <a href="javascrit:;"><i class="ti-thumb-up"></i>16 Likes</a>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between">
              <div class="align-self-center">
                <a class="btn btn-danger btn-small" href="javascript:;">Reply</a>
              </div>
              <div class="footer-action align-self-center">
                <a href="javascript:;"><i class="ti-pencil-alt"></i></a>
                <a href="javascript:;"><i class="ti-trash"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-4 d-md-full">
        <div class="idb-block">
          <div class="pos-relative">
            <img class="img-fluid w-100" src="/static/img/post-2.jpg" width="500" height="500" />
            <div class="blog-actions">
              <a href="javascript:;"><i class="ti-pencil-alt"></i></a>
              <a href="javascript:;"><i class="ti-trash"></i></a>
              <a href="javascript:;"><i class="ti-sharethis"></i></a>
            </div>
            <div class="idb-position-absolute">
              <div class="blog-content">
                <p class="fs-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dolores facilis maiores minus itaque excepturi.</p>
                <div class="media">
                  <div class="d-flex mr-20">
                    <img src="/static/img/user-1.jpg" class="rounded-circle" width="50" height="50" alt="author" />
                  </div>
                  <div class="media-body">
                    <p class="mb-10">Alejandro Garza</p>
                    <p class="fs-12 m-0">Share Public Post- a hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RevenueMiniChart from './dashboard/dashboard-v1/RevenueMiniChart'
import TotalOrdersMiniChart from './dashboard/dashboard-v1/TotalOrdersMiniChart'
import SalesReportChart from './dashboard/dashboard-v1/SalesReportChart'
import StackedLineChart from './dashboard/dashboard-v1/StackedLineChart'
import DoughnutChart from './dashboard/dashboard-v1/DoughnutChart'
import RadialProgressBar from 'vue-radial-progress/dist/vue-radial-progress.min'
import OverallTrafficChart from './dashboard/dashboard-v1/OverallTrafficChart'
import AreaChart from './dashboard/dashboard-v1/AreaChart.vue'
import BarChart from './dashboard/dashboard-v1/BarChart.vue'
import {VueTabs, VTab} from 'vue-nav-tabs'
import Chat from './dashboard/dashboard-v1/Chat.vue'
import Slick from 'vue-slick'
import Mapbox from 'mapbox-gl-vue'
import TodayWeather from '../components/Widgets/TodayWeather.vue'
import TodoList from '../components/Widgets/TodoList.vue'
import GlobalSales from './dashboard/dashboard-v1/GlobalSales.vue'
import ICountUp from 'vue-countup-v2'
import VueEasyPieChart from 'vue-easy-pie-chart'
import 'vue-easy-pie-chart/dist/vue-easy-pie-chart.css'

export default {
  name: 'dashboard',
  components: {
    RevenueMiniChart,
    TotalOrdersMiniChart,
    SalesReportChart,
    StackedLineChart,
    DoughnutChart,
    RadialProgressBar,
    OverallTrafficChart,
    AreaChart,
    BarChart,
    VueTabs,
    VTab,
    Chat,
    Slick,
    Mapbox,
    TodayWeather,
    TodoList,
    GlobalSales,
    ICountUp,
    VueEasyPieChart
  },
  data: function () {
    return {
      totalOrders: [440, 300, 200, 360, 380, 220, 440, 500, 410, 420, 380, 440],
      totalSales: [220, 150, 100, 140, 420, 110, 350, 150, 205, 350, 180, 220],
      newCustomers: [340, 400, 200, 360, 380, 220, 440, 500, 410, 420, 380, 400],
      totalCustomers: [480, 150, 200, 360, 380, 220, 440, 500, 410, 420, 380, 200],
      tinyBarChartData1: [300, 500, 700, 600, 420, 750, 600],
      tinyBarChartData2: [100, 250, 350, 400, 700, 600, 400],
      tinyBarChartData3: [120, 450, 550, 320, 240, 650, 700],
      tinyBarChartData4: [300, 500, 700, 600, 420, 750, 600],
      tinyBarChartData5: [500, 150, 350, 400, 150, 200, 100],
      tinyBarChartData6: [300, 500, 700, 600, 420, 750, 600],
      tinyBarChartData7: [300, 500, 700, 600, 420, 750, 600],
      tinyBarChartData8: [450, 350, 600, 750, 560, 250, 450],
      slickOptions: {
        slidesToShow: 1,
        arrows: true,
        prevArrow: '<a href="#" class="prev-arrow"><i class="ti-angle-left"></i><a/>',
        nextArrow: '<a href="#" class="next-arrow"><i class="ti-angle-right"></i></a>'
      },
      counterOptions: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      }
    }
  }
}
</script>
