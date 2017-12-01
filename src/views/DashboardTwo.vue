<template>
  <div id="dashboard-2">
    <div class="row mb-4">
      <div class="col-sm-12 col-md-12 col-xl-9 d-lg-full">
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Sales And Visitor Status</h2>
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
            <sales-and-visitor-chart :width="300" :height="150"></sales-and-visitor-chart>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-xl-3 d-lg-full">
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Statistic</h2>
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
            <div class="statistic-count">
              <div class="d-flex justify-content-between text-center border-bottom-1 pb-20 m-20">
                <div class="align-items-start stat-count">
                  <h2><b>1280</b></h2>
                  <p>Sold</p>
                </div>
                <div class="align-items-end stat-count">
                  <h2><b>1640</b></h2>
                  <p>In-Stock</p>
                </div>
              </div>
              <div class="sold-stoke text-center p-20">
                <h2 class="text-primary"><b>$192846</b></h2>
                <h4 class="text-muted">Amount of stocks sold</h4>
              </div>
              <ul class="list-group">
                <div class="list-group-item d-flex justify-content-between">
                  <h5>Total orders</h5>
                  <h5 class="text-muted">380</h5>
                </div>
                <div class="list-group-item d-flex justify-content-between">
                  <h5>Total sales</h5>
                  <h5 class="text-muted">$312900</h5>
                </div>
                <div class="list-group-item d-flex justify-content-between">
                  <h5>New customers</h5>
                  <h5 class="text-muted">120</h5>
                </div>
                <div class="list-group-item d-flex justify-content-between">
                  <h5>Total customers</h5>
                  <h5 class="text-muted">950</h5>
                </div>
              </ul>
              <div class="view-more-link text-right p-15">
                <a href="javascript:;">View More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-xl-4 d-lg-full">
        <inbox-widget></inbox-widget>
        <div class="idb-block gradient-danger text-white">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2 class="text-white">Recent Testimonial</h2>
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
            <slick ref="slick" :options="slickOptions">
              <div class="testimonial-content">
                <div class="media mb-20">
                  <div class="d-flex mr-20">
                    <img src="static/img/user-1.jpg" alt="user thumb" class="rounded-circle" width="70" height="70" />
                  </div>
                  <div class="media-body">
                    <p class="fs-14">Less email. More productive. Our customers see an average 48.6% reduction in internal email, helping them enjoy a simpler, more pleasant, and more productive work life.</p>
                    <h4 class="text-white">John Doe</h4>
                    <p class="m-0 fs-12">2 min ago</p>
                  </div>
                </div>
              </div>
              <div class="testimonial-content">
                <div class="media mb-20">
                  <div class="d-flex mr-20">
                    <img src="static/img/user-2.jpg" alt="user thumb" class="rounded-circle" width="70" height="70" />
                  </div>
                  <div class="media-body">
                    <p class="fs-14">Less email. More productive. Our customers see an average 48.6% reduction in internal email, helping them enjoy a simpler, more pleasant, and more productive work life.</p>
                    <h4 class="text-white">Mittie Duncom</h4>
                    <p class="m-0 fs-12">5 min ago</p>
                  </div>
                </div>
              </div>
              <div class="testimonial-content">
                <div class="media mb-20">
                  <div class="d-flex mr-20">
                    <img src="static/img/user-3.jpg" alt="user thumb" class="rounded-circle" width="70" height="70" />
                  </div>
                  <div class="media-body">
                    <p class="fs-14">Less email. More productive. Our customers see an average 48.6% reduction in internal email, helping them enjoy a simpler, more pleasant, and more productive work life.</p>
                    <h4 class="text-white">Duncom Mittie</h4>
                    <p class="m-0 fs-12">10 hours ago</p>
                  </div>
                </div>
              </div>
            </slick>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-xl-8 d-lg-full">
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Website Statistics</h2>
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
            <stacked-area-chart :width="300" :height="150"></stacked-area-chart>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-12 col-xl-6">
            <div class="idb-block">
              <div class="idb-block-title">
                <h2>Server Load</h2>
              </div>
              <div class="idb-block-content">
                <server-load></server-load>
              </div>
              <div class="idb-block-footer doughnut-stats">
                <div class="row">
                  <div class="col-sm-6 col-md-4">
                    <h5>75% / 100%</h5>
                    <span>CPU Load</span>
                  </div>
                  <div class="col-sm-6 col-md-4">
                    <h5>68% / 100%</h5>
                    <span>Storage Remain</span>
                  </div>
                  <div class="col-sm-6 col-md-4">
                    <h5>364mb/1Gb</h5>
                    <span>Bandwidth Use</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-xl-6">
            <div class="idb-block">
              <div class="idb-block-title">
                <div class="d-flex justify-content-between">
                  <div class="d-flex align-self-center">
                    <h2>Top Buyers</h2>
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
                <div class="buyers-list mb-15">
                  <div class="row">
                    <div class="col-lg-9 col-md-9 col-sm-8 col-8">
                      <div class="media">
                        <div class="d-flex mr-30 align-items-center">
                          <img class="rounded-circle" src="/static/img/user-1.jpg" width="65" height="65">
                        </div>
                        <div class="media-body">
                          <p class="m-0">Pearl Huff</p>
                          <span class="text-danger">29 Orders</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-4 col-4 text-right">
                      <p>$3000</p>
                    </div>
                  </div>
                </div>
                <div class="buyers-list mb-15">
                  <div class="row">
                    <div class="col-lg-9 col-md-9 col-sm-8 col-8">
                      <div class="media">
                        <div class="d-flex mr-30 align-items-center">
                          <img class="rounded-circle" src="/static/img/user-2.jpg" width="65" height="65">
                        </div>
                        <div class="media-body">
                          <p class="m-0">Jennie Mann</p>
                          <span class="text-danger">29 Orders</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-4 col-4 text-right">
                      <p>$3000</p>
                    </div>
                  </div>
                </div>
                <div class="buyers-list mb-15">
                  <div class="row">
                    <div class="col-lg-9 col-md-9 col-sm-8 col-8">
                      <div class="media">
                        <div class="d-flex mr-30 align-items-center">
                          <img class="rounded-circle" src="/static/img/user-3.jpg" width="65" height="65">
                        </div>
                        <div class="media-body">
                          <p class="m-0">Marian Fox</p>
                          <span class="text-danger">29 Orders</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-4 col-4 text-right">
                      <p>$3000</p>
                    </div>
                  </div>
                </div>
                <div class="buyers-list mb-15">
                  <div class="row">
                    <div class="col-lg-9 col-md-9 col-sm-8 col-8">
                      <div class="media">
                        <div class="d-flex mr-30 align-items-center">
                          <img class="rounded-circle" src="/static/img/user-4.jpg" width="65" height="65">
                        </div>
                        <div class="media-body">
                          <p class="m-0">Max Hodges</p>
                          <span class="text-danger">29 Orders</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-4 col-4 text-right">
                      <p>$3000</p>
                    </div>
                  </div>
                </div>
                <div class="buyers-list mb-15">
                  <div class="row">
                    <div class="col-lg-9 col-md-9 col-sm-8 col-8">
                      <div class="media">
                        <div class="d-flex mr-30 align-items-center">
                          <img class="rounded-circle" src="/static/img/user-4.jpg" width="65" height="65">
                        </div>
                        <div class="media-body">
                          <p class="m-0">Amy Marsh</p>
                          <span class="text-danger">29 Orders</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-4 col-4 text-right">
                      <p>$3000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-xl-3 d-lg-full">
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>System Reports</h2>
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
          <div class="idb-block-conten">
            <div class="element-list border-bottom-1 p-15">
              <div class="row">
                <div class="col-lg-9 col-md-9 col-sm-8 col-8">
                  <div class="media">
                    <div class="d-flex mr-30 align-self-center">
                      <span><i class="fa fa-file-pdf-o fa-2x text-danger" aria-hidden="true"></i></span>
                    </div>
                    <div class="media-body">
                      <h6 class="m-0">Sales Report</h6>
                      <span class="fs-12">10-Jan to 10-Feb</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-4 col-4 text-right">
                  <a href="javascript:;"><i class="ti-import" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
            <div class="element-list border-bottom-1 p-15">
              <div class="row">
                <div class="col-lg-9 col-md-9 col-sm-8 col-8">
                  <div class="media">
                    <div class="d-flex mr-30 align-self-center">
                      <span><i class="fa fa-file-pdf-o fa-2x text-danger" aria-hidden="true"></i></span>
                    </div>
                    <div class="media-body">
                      <h6 class="m-0">Revenue</h6>
                      <span class="fs-12">10-Jan to 10-Feb</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-4 col-4 text-right">
                  <a href="javascript:;"><i class="ti-import" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
            <div class="element-list border-bottom-1 p-15">
              <div class="row">
                <div class="col-lg-9 col-md-9 col-sm-8 col-8">
                  <div class="media">
                    <div class="d-flex mr-30 align-self-center">
                      <span><i class="fa fa-file-pdf-o fa-2x text-danger" aria-hidden="true"></i></span>
                    </div>
                    <div class="media-body">
                      <h6 class="m-0">Stock</h6>
                      <span class="fs-12">10-Jan to 10-Feb</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-4 col-4 text-right">
                  <a href="javascript:;"><i class="ti-import" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
            <div class="element-list border-bottom-1 p-15">
              <div class="row">
                <div class="col-lg-9 col-md-9 col-sm-8 col-8">
                  <div class="media">
                    <div class="d-flex mr-30 align-self-center">
                      <span><i class="fa fa-file-pdf-o fa-2x text-danger" aria-hidden="true"></i></span>
                    </div>
                    <div class="media-body">
                      <h6 class="m-0">Member Detail</h6>
                      <span class="fs-12">10-Jan to 10-Feb</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-4 col-4 text-right">
                  <a href="javascript:;"><i class="ti-import" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
            <div class="element-list border-bottom-1 p-15">
              <div class="row">
                <div class="col-lg-9 col-md-9 col-sm-8 col-8">
                  <div class="media">
                    <div class="d-flex mr-30 align-self-center">
                      <span><i class="fa fa-file-pdf-o fa-2x text-danger" aria-hidden="true"></i></span>
                    </div>
                    <div class="media-body">
                      <h6 class="m-0">Balance Sheet</h6>
                      <span class="fs-12">10-Jan to 10-Feb</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-4 col-4 text-right">
                  <a href="javascript:;"><i class="ti-import" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
            <div class="element-list border-bottom-1 p-15">
              <div class="row">
                <div class="col-lg-9 col-md-9 col-sm-8 col-8">
                  <div class="media">
                    <div class="d-flex mr-30 align-self-center">
                      <span><i class="fa fa-file-pdf-o fa-2x text-danger" aria-hidden="true"></i></span>
                    </div>
                    <div class="media-body">
                      <h6 class="m-0">Sales Report</h6>
                      <span class="fs-12">10-Jan to 10-Feb</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-4 col-4 text-right">
                  <a href="javascript:;"><i class="ti-import" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-xl-9 d-lg-full">
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Product Stats</h2>
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
            <product-stats-chart :width="300" :height="100"></product-stats-chart>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-sm-12 col-md-12 col-xl-6 d-lg-full">
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Recent Comments</h2>
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
            <table class="table table-hover custom-table">
              <tbody>
                <tr>
                  <td><img src="/static/img/user-1.jpg" alt="user" class="rounded-circle" width="50" height="50"></td>
                  <td>
                    <div class="d-flex justify-content-between mb-10">
                      <h5>Kate Doyle</h5>
                      <span class="text-muted fs-12">19 March 2017</span>
                    </div>
                    <p class="fs-14">Thanks for the chartlist. There are awesome designs and very user friendly.  Aenean commodo dui pellentesque molestie feugiat.</p>
                    <a href="javascript:;" class="btn btn-small btn-warning btn-pill">Pending</a>
                  </td>
                </tr>
                <tr>
                  <td><img src="/static/img/user-2.jpg" alt="user" class="rounded-circle" width="50" height="50"></td>
                  <td>
                    <div class="d-flex justify-content-between mb-10">
                      <h5>Don Barnett</h5>
                      <span class="text-muted fs-12">19 March 2017</span>
                    </div>
                    <p class="fs-14">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui pellentesque molestie feugiat.</p>
                    <a href="javascript:;" class="btn btn-small btn-warning btn-pill">Pending</a>
                  </td>
                </tr>
                <tr>
                  <td><img src="/static/img/user-3.jpg" alt="user" class="rounded-circle" width="50" height="50"></td>
                  <td>
                    <div class="d-flex justify-content-between mb-10">
                      <h5>Billy Day</h5>
                      <span class="text-muted fs-12">19 March 2017</span>
                    </div>
                    <p class="fs-14">Thanks for the chartlist. There are awesome designs and very user friendly.Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui pellentesque molestie feugiat.</p>
                    <a href="javascript:;" class="btn btn-small btn-pill btn-success">Approved</a>
                  </td>
                </tr>
                <tr>
                  <td><img src="/static/img/user-4.jpg" alt="user" class="rounded-circle" width="50" height="50"></td>
                  <td>
                    <div class="d-flex justify-content-between mb-10">
                      <h5>Trevor Moreno</h5>
                      <span class="text-muted fs-12">19 March 2017</span>
                    </div>
                    <p class="fs-14">Thanks for the chartlist. Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit.</p>
                    <a href="javascript:;" class="btn btn-small btn-pill btn-danger">Rejected</a>
                  </td>
                </tr>
                <tr>
                  <td><img src="/static/img/user-5.jpg" alt="user" class="rounded-circle" width="50" height="50"></td>
                  <td>
                    <div class="d-flex justify-content-between mb-10">
                      <h5>Trevor Moreno</h5>
                      <span class="text-muted fs-12">19 March 2017</span>
                    </div>
                    <p class="fs-14">Thanks for the chartlist. Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit.</p>
                    <a href="javascript:;" class="btn btn-small btn-pill btn-success">Approved</a>
                  </td>
                </tr>
              </tbody>
            </table>
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
                          <img src="/static/img/4.jpg" alt="product" width="151" height="100" class="img-fluid card mb-10">
                          <h4 class="fs-14 m-0">Portable Invoice</h4>
                          <span class="fs-12">$152.00</span>
                        </li>
                        <li class="list-inline-item">
                          <img src="/static/img/3.jpg" alt="product" width="151" height="100" class="img-fluid card mb-10">
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
                            <img src="/static/img/post-3.jpg" alt="post" class="img-fluid w-100" width="151" height="100">
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
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 d-md-full">
        <div class="idb-block campaign">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Advertise Campaign</h2>
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
            <div class="row">
              <div class="col-sm-12 col-md-8 col-xl-7">
                <advertise-campaign-chart :width="100" :height="100"></advertise-campaign-chart>
              </div>
              <div class="col-sm-12 col-md-4 col-xl-5 py-40">
                <ul class="list-unstyled">
                  <li>
                    <div class="float-left">
                      <span class="badge badge-primary badge-label-sm badge-pill fa-notify">&nbsp;</span>
                    </div>
                    <div class="media mb-30">
                      <div class="d-flex mr-30">
                      </div>
                      <div class="media-body">
                        <h6>Google ads</h6>
                        <h2>$6500</h2>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="float-left">
                      <span class="badge badge-danger badge-label-sm badge-pill fa-notify">&nbsp;</span>
                    </div>
                    <div class="media mb-30">
                      <div class="d-flex mr-30">
                      </div>
                      <div class="media-body">
                        <h6>Facebook ads</h6>
                        <h2>$3500</h2>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="float-left">
                      <span class="badge badge-warning badge-label-sm badge-pill fa-notify">&nbsp;</span>
                    </div>
                    <div class="media mb-30">
                      <div class="d-flex mr-30">
                      </div>
                      <div class="media-body">
                        <h6>Print Media</h6>
                        <h2>$1500</h2>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 d-md-full">
        <div class="idb-block real-traffic">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Real Time Traffic</h2>
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
            <real-time-traffic :width="350" :height="150"></real-time-traffic>
            <div class="d-flex justify-content-between">
              <div class="p-30">
                <h4>1500</h4>
                <p>Minimum Incoming Request</p>
              </div>
              <div class="p-30">
                <h4>5100</h4>
                <p>Highest Incoming Request</p>
              </div>
              <div class="p-30">
                <h4>41%</h4>
                <p>Avg. Per Hour</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-xl-4 d-lg-full">
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Cities and Clients</h2>
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
                <h6 class="mb-20">East Orin(2500)</h6>
                <span class="fs-14">17.98%</span>
              </div>
              <b-progress height="6px" :value="50" class="mb-2" variant="primary gradient-primary"></b-progress>
            </div>
            <div class="mb-20">
              <div class="d-flex justify-content-between">
                <h6 class="mb-20">Hesselton(3500)</h6>
                <span class="fs-14">52.00%</span>
              </div>
              <b-progress height="6px" :value="75" class="mb-2" variant="warning gradient-warning"></b-progress>
            </div>
            <div class="mb-20">
              <div class="d-flex justify-content-between">
                <h6 class="mb-20">Lake Aniyah(2800)</h6>
                <span class="fs-14">17.98%</span>
              </div>
              <b-progress height="6px" :value="17.9" class="mb-2" variant="warning gradient-danger"></b-progress>
            </div>
            <div class="mb-20">
              <div class="d-flex justify-content-between">
                <h6 class="mb-20">Flaviehaven(3000)</h6>
                <span class="fs-14">25.69%</span>
              </div>
              <b-progress height="6px" :value="23.73" class="mb-2" variant="info gradient-info"></b-progress>
            </div>
            <div class="mb-20">
              <div class="d-flex justify-content-between">
                <h6 class="mb-20">Sterlingberg(5000)</h6>
                <span class="fs-14">12.58%</span>
              </div>
              <b-progress height="6px" :value="47.63" class="mb-2" variant="primary gradient-pink"></b-progress>
            </div>
            <div class="mb-20">
              <div class="d-flex justify-content-between">
                <h6 class="mb-20">Moorechester(1500)</h6>
                <span class="fs-14">20.25%</span>
              </div>
              <b-progress height="6px" :value="50.6" class="mb-2" variant="danger gradient-danger"></b-progress>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-xl-8 d-lg-full">
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Coupons Stats</h2>
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
                    <th>Coupon Code</th>
                    <th>Title</th>
                    <th>Added on</th>
                    <th>Expired on</th>
                    <th>Status</th>
                    <th>Count</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-danger">FLAT10</td>
                    <td>Flat 10% off site wide</td>
                    <td>04 Sep 2017</td>
                    <td>04 Oct 2017</td>
                    <td><b-badge variant="primary">Active</b-badge></td>
                    <td>1450</td>
                    <td class="table-action">
                      <a href="javascript:;"><i class="ti-check-box"></i></a>
                      <a href="javascript:;"><i class="ti-pencil-alt"></i></a>
                      <a href="javascript:;"><i class="ti-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-danger">APP10OFF</td>
                    <td>Flat 10% off site wide</td>
                    <td>17 Apr 2017</td>
                    <td>17 May 2017</td>
                    <td><b-badge variant="danger">Expired</b-badge></td>
                    <td>1450</td>
                    <td class="table-action">
                      <a href="javascript:;"><i class="ti-check-box"></i></a>
                      <a href="javascript:;"><i class="ti-pencil-alt"></i></a>
                      <a href="javascript:;"><i class="ti-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-danger">GRAB25</td>
                    <td>Flat 10% off site wide</td>
                    <td>26 Oct 2017</td>
                    <td>4 Oct 2017</td>
                    <td><b-badge variant="success">Approved</b-badge></td>
                    <td>1450</td>
                    <td class="table-action">
                      <a href="javascript:;"><i class="ti-check-box"></i></a>
                      <a href="javascript:;"><i class="ti-pencil-alt"></i></a>
                      <a href="javascript:;"><i class="ti-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-danger">SUMMER10</td>
                    <td>Flat 10% off site wide</td>
                    <td>11 May 2017</td>
                    <td>11 Jun 2017</td>
                    <td><b-badge variant="danger">Expired</b-badge></td>
                    <td>1450</td>
                    <td class="table-action">
                      <a href="javascript:;"><i class="ti-check-box"></i></a>
                      <a href="javascript:;"><i class="ti-pencil-alt"></i></a>
                      <a href="javascript:;"><i class="ti-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-danger">NEW25</td>
                    <td>Flat 10% off site wide</td>
                    <td>17 Aug 2017</td>
                    <td>04 Oct 2017</td>
                    <td><b-badge variant="primary">Active</b-badge></td>
                    <td>1450</td>
                    <td class="table-action">
                      <a href="javascript:;"><i class="ti-check-box"></i></a>
                      <a href="javascript:;"><i class="ti-pencil-alt"></i></a>
                      <a href="javascript:;"><i class="ti-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-danger">ONLY10</td>
                    <td>Flat 10% off site wide</td>
                    <td>22 Jun 2017</td>
                    <td>04 Oct 2017</td>
                    <td><b-badge variant="primary">Active</b-badge></td>
                    <td>1450</td>
                    <td class="table-action">
                      <a href="javascript:;"><i class="ti-check-box"></i></a>
                      <a href="javascript:;"><i class="ti-pencil-alt"></i></a>
                      <a href="javascript:;"><i class="ti-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-danger">NEW25</td>
                    <td>Flat 10% off site wide</td>
                    <td>17 Aug 2017</td>
                    <td>04 Oct 2017</td>
                    <td><b-badge variant="success">Approved</b-badge></td>
                    <td>1450</td>
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
      <div class="col-sm-12 col-md-12 col-xl-4 d-md-full b-100">
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Browser Stats</h2>
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
                    <td class="w-75"><h4>Google Chrome</h4></td>
                    <td class="text-muted">25%</td>
                    <td class="text-right">
                      <radial-progress-bar
                        :diameter="50"
                        :completed-steps="25"
                        :total-steps="100"
                        startColor="#17C7DF"
                        stopColor="#17C7DF"
                        innerStrokeColor="rgba(0,0,0,0.2)"
                        :strokeWidth="6"
                        >
                      </radial-progress-bar>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-75"><h4>Firefox</h4></td>
                    <td class="text-muted">56%</td>
                    <td class="text-right">
                      <radial-progress-bar
                        :diameter="50"
                        :completed-steps="45"
                        :total-steps="100"
                        startColor="#F64A32"
                        stopColor="#F64A32"
                        innerStrokeColor="rgba(0,0,0,0.2)"
                        :strokeWidth="6"
                        >
                      </radial-progress-bar>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-75"><h4>Safari</h4></td>
                    <td class="text-muted">35%</td>
                    <td class="text-right">
                      <radial-progress-bar
                        :diameter="50"
                        :completed-steps="35"
                        :total-steps="100"
                        startColor="#FEA200"
                        stopColor="#FEA200"
                        innerStrokeColor="rgba(0,0,0,0.2)"
                        :strokeWidth="6"
                        >
                      </radial-progress-bar>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-75"><h4>Internet Explorer</h4></td>
                    <td class="text-muted">16%</td>
                    <td class="text-right">
                      <radial-progress-bar
                        :diameter="50"
                        :completed-steps="16"
                        :total-steps="100"
                        startColor="#ED276D"
                        stopColor="#ED276D"
                        innerStrokeColor="rgba(0,0,0,0.2)"
                        :strokeWidth="6"
                        >
                      </radial-progress-bar>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-75"><h4>Opera Mini</h4></td>
                    <td class="text-muted">10%</td>
                    <td class="text-right">
                      <radial-progress-bar
                        :diameter="50"
                        :completed-steps="10"
                        :total-steps="100"
                        startColor="#17C7DF"
                        stopColor="#17C7DF"
                        innerStrokeColor="rgba(0,0,0,0.2)"
                        :strokeWidth="6"
                        >
                      </radial-progress-bar>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-75"><h4>UC Browser</h4></td>
                    <td class="text-muted">45%</td>
                    <td class="text-right">
                      <radial-progress-bar
                        :diameter="50"
                        :completed-steps="45"
                        :total-steps="100"
                        startColor="#F64A32"
                        stopColor="#F64A32"
                        innerStrokeColor="rgba(0,0,0,0.2)"
                        :strokeWidth="6"
                        >
                      </radial-progress-bar>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-xl-4 d-md-full b-100">
        <today-weather-widget></today-weather-widget>
      </div>
      <div class="col-sm-12 col-md-12 col-xl-4 d-md-full b-100">
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Buyers Stats</h2>
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
            <buyers-stats-chart></buyers-stats-chart>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-4 col-lg-4 d-md-full">
        <div class="idb-block gradient-danger border-rad-lg overflow-hide">
          <div class="stats-card-wrap">
            <div class="clearfix px-20 pt-30">
              <div class="float-left">
                <h4>Net Profit</h4>
              </div>
              <div class="float-right">
                <h3>$48,190</h3>
                <p>This week</p>
              </div>
            </div>
            <area-chart :width="300" :height="100" :data="netProfit"></area-chart>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4 d-md-full">
        <div class="idb-block gradient-warning border-rad-lg overflow-hide">
          <div class="stats-card-wrap">
            <div class="clearfix px-20 pt-30">
              <div class="float-left">
                <h4>Site Views</h4>
              </div>
              <div class="float-right">
                <h3>83,710</h3>
                <p>This Month</p>
              </div>
            </div>
            <area-chart :width="300" :height="100" :data="siteView"></area-chart>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4 d-md-full">
        <div class="idb-block gradient-primary border-rad-lg overflow-hide">
          <div class="stats-card-wrap">
            <div class="clearfix px-20 pt-30">
              <div class="float-left">
                <h4>Subscribed</h4>
              </div>
              <div class="float-right">
                <h3>83,710</h3>
                <p>This Month</p>
              </div>
            </div>
            <area-chart :width="300" :height="100" :data="subscribed"></area-chart>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-4 mb-4 mb-50 b-100 d-md-full">
        <div class="facebook-bg clearfix social-grid">
          <div class="icon-social d-flex justify-content-center">
            <i class="fa fa-facebook  align-self-center "></i>
          </div>
          <div class="icon-info-social">
            <span class="name-social">
              Facebook
            </span>
            <span class="number-social">41 Like</span>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-4 mb-4 mb-50 b-100 d-md-full">
        <div class="google-bg clearfix social-grid">
          <div class="icon-social d-flex justify-content-center">
            <i class="fa fa-twitter  align-self-center "></i>
          </div>
          <div class="icon-info-social">
            <span class="name-social">
              Twitter
            </span>
            <span class="number-social">54k Follower</span>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-4 mb-4 mb-50 b-100 d-md-full">
        <div class="twitter-bg clearfix social-grid">
          <div class="icon-social d-flex justify-content-center">
            <i class="fa fa-google-plus  align-self-center "></i>
          </div>
          <div class="icon-info-social">
            <span class="name-social">
              Google
            </span>
            <span class="number-social">42 Cirlces</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-6 b-100 d-md-full">
        <div class="card idb-block border-0">
          <div class="card-thumbnail mb-10">
            <img class="img-fluid" src="/static/img/post-1.jpg" height="200" alt="blog" />
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
      <div class="col-sm-12 col-md-12 col-lg-6 b-100 d-md-full">
        <div class="idb-block">
          <div class="idb-block-title">
            <div class="d-flex justify-content-between">
              <div class="d-flex align-self-center">
                <h2>Add New Blog Item</h2>
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
            <b-form @submit="onSubmit">
              <dropzone id="myVueDropzone" url="https://httpbin.org/post" v-on:vdropzone-success="showSuccess" class="mb-20">
                <input type="hidden" name="token" value="xxx">
              </dropzone>
              <b-form-group
                id="exampleInputGroup1"
                label="Blog Title"
                label-for="blogTitle"
                >
                <b-form-input
                  id="blogTitle"
                  type="text"
                  v-model="form.blogTitle"
                  required
                  placeholder="Blog Title"
                  >
                </b-form-input>
                <div class="mt-30 mb-50">
                  <label>Description</label>
                  <wysiwyg v-model="myHTML" />
                </div>
                <div class="d-flex justify-content-between">
                  <div>
                    <b-button variant="primary">Post Blog</b-button>
                    <b-button variant="light">Schedule Later</b-button>
                  </div>
                  <a href="javascript:;" class="font-2x text-muted"><i class="ti-trash"></i></a>
                </div>
              </b-form-group>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SalesAndVisitorChart from './dashboard/dashboard-v2/SalesAndVisitorChart'
import InboxWidget from '../components/Widgets/Inbox.vue'
import TodayWeatherWidget from '../components/Widgets/TodayWeather2.vue'
import StackedAreaChart from './dashboard/dashboard-v2/StackedAreaChart'
import Slick from 'vue-slick'
import ProductStatsChart from './dashboard/dashboard-v2/ProductStatsChart'
import AdvertiseCampaignChart from './dashboard/dashboard-v2/AdvertiseCampaignChart'
import RealTimeTraffic from './dashboard/dashboard-v2/RealTimeTraffic'
import RadialProgressBar from 'vue-radial-progress/dist/vue-radial-progress.min'
import BuyersStatsChart from './dashboard/dashboard-v2/BuyersStatsChart'
import AreaChart from './dashboard/dashboard-v2/AreaChart'
import ServerLoad from './dashboard/dashboard-v2/ServerLoad.vue'
import Dropzone from 'vue2-dropzone'

export default {
  name: 'dashboard-2',
  components: {
    SalesAndVisitorChart,
    InboxWidget,
    TodayWeatherWidget,
    StackedAreaChart,
    Slick,
    ProductStatsChart,
    AdvertiseCampaignChart,
    RealTimeTraffic,
    RadialProgressBar,
    BuyersStatsChart,
    AreaChart,
    Dropzone,
    ServerLoad
  },
  data: function () {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: false,
        autoplay: true
      },
      form: {
        blogTitle: ''
      },
      myHTML: '',
      netProfit: [35, 30, 25, 30, 23, 27, 21, 29, 24, 18, 30, 35, 20],
      siteView: [45, 35, 22, 30, 23, 27, 21, 29, 24, 18, 30, 33, 15],
      subscribed: [20, 40, 21, 30, 23, 27, 21, 29, 24, 45, 30, 35, 10]
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    showSuccess (file) {
      console.log('A file was successfully uploaded')
    }
  }
}
</script>
