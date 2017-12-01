<template>
  <div id="inbox-widget">
    <div class="idb-block">
      <div class="idb-block-title">
        <div class="d-flex justify-content-between">
          <div class="d-flex align-self-center">
            <h2>Inbox</h2>
          </div>
          <div class="d-flex align-self-center">
            <b-button variant="danger" size="sm" class="text-uppercase btn-small">Compose</b-button>
          </div>
        </div>
      </div>
      <div class="idb-full-block">
        <div class="input-group pt-10 custom-search">
          <input type="text" class="form-control" placeholder="Search for..." />
          <span class="input-group-btn">
            <b-button variant="secondary"><i class="ti-search"></i></b-button>
          </span>
        </div>
        <b-card no-body class="border-0">
          <b-tabs ref="tabs" card>
            <b-tab title="All" active>
              <div class="table-responsive">
                <table class="table table-middle">
                  <tbody>
                    <tr>
                      <td>
                        <label class="custom-control custom-checkbox">
                          <input class="custom-control-input" type="checkbox" />
                          <span class="custom-control-indicator"></span>
                        </label>
                      </td>
                      <td>
                        <p class="mb-10 fs-12">support@theironnetwork.org | sep 11</p>
                        <h5>Create new profile request.</h5>
                      </td>
                      <td><i class="ti-heart"></i></td>
                    </tr>
                    <tr>
                      <td>
                        <label class="custom-control custom-checkbox">
                          <input class="custom-control-input" type="checkbox" />
                          <span class="custom-control-indicator"></span>
                        </label>
                      </td>
                      <td>
                        <p class="mb-10 fs-12">support@theironnetwork.org | sep 11</p>
                        <h5>Create new profile request.</h5>
                      </td>
                      <td><i class="ti-heart"></i></td>
                    </tr>
                    <tr>
                      <td>
                        <label class="custom-control custom-checkbox">
                          <input class="custom-control-input" type="checkbox" />
                          <span class="custom-control-indicator"></span>
                        </label>
                      </td>
                      <td>
                        <p class="mb-10 fs-12">support@theironnetwork.org | sep 11</p>
                        <h5>Create new profile request.</h5>
                      </td>
                      <td><i class="ti-heart"></i></td>
                    </tr>
                    <tr>
                      <td>
                        <label class="custom-control custom-checkbox">
                          <input class="custom-control-input" type="checkbox" />
                          <span class="custom-control-indicator"></span>
                        </label>
                      </td>
                      <td>
                        <p class="mb-10 fs-12">support@theironnetwork.org | sep 11</p>
                        <h5>New project requirement as per discussed.</h5>
                      </td>
                      <td><i class="ti-heart"></i></td>
                    </tr>
                    <tr>
                      <td>
                        <label class="custom-control custom-checkbox">
                          <input class="custom-control-input" type="checkbox" />
                          <span class="custom-control-indicator"></span>
                        </label>
                      </td>
                      <td>
                        <p class="mb-10 fs-12">support@theironnetwork.org | sep 11</p>
                        <h5>Create new profile request.</h5>
                      </td>
                      <td><i class="ti-heart"></i></td>
                    </tr>
                    <tr>
                      <td>
                        <label class="custom-control custom-checkbox">
                          <input class="custom-control-input" type="checkbox" />
                          <span class="custom-control-indicator"></span>
                        </label>
                      </td>
                      <td>
                        <p class="mb-10 fs-12">support@theironnetwork.org | sep 11</p>
                        <h5>New project requirement as per discussed.</h5>
                      </td>
                      <td><i class="ti-heart"></i></td>
                    </tr>
                    <tr>
                      <td>
                        <label class="custom-control custom-checkbox">
                          <input class="custom-control-input" type="checkbox" />
                          <span class="custom-control-indicator"></span>
                        </label>
                      </td>
                      <td>
                        <p class="mb-10 fs-12">support@theironnetwork.org | sep 11</p>
                        <h5>Create new profile request.</h5>
                      </td>
                      <td><i class="ti-heart"></i></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-tab>
            <b-tab title="Unread">
              <div class="table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td class="border-top-0">
                        <label class="custom-control custom-checkbox">
                          <input class="custom-control-input" type="checkbox" />
                          <span class="custom-control-indicator"></span>
                        </label>
                      </td>
                      <td class="border-top-0">
                        <p class="mb-10 fs-12">support@theironnetwork.org | sep 11</p>
                        <h5>New project requirement as per discussed.</h5>
                      </td>
                      <td class="border-top-0"><i class="ti-heart"></i></td>
                    </tr>
                    <tr>
                      <td class="border-top-0">
                        <label class="custom-control custom-checkbox">
                          <input class="custom-control-input" type="checkbox" />
                          <span class="custom-control-indicator"></span>
                        </label>
                      </td>
                      <td class="border-top-0">
                        <p class="mb-10 fs-12">support@theironnetwork.org | sep 11</p>
                        <h5>New project requirement as per discussed.</h5>
                      </td>
                      <td class="border-top-0"><i class="ti-heart"></i></td>
                    </tr>
                    <tr>
                      <td>
                        <label class="custom-control custom-checkbox">
                          <input class="custom-control-input" type="checkbox" />
                          <span class="custom-control-indicator"></span>
                        </label>
                      </td>
                      <td>
                        <p class="mb-10 fs-12">support@theironnetwork.org | sep 11</p>
                        <h5>Create new profile request.</h5>
                      </td>
                      <td><i class="ti-heart"></i></td>
                    </tr>
                    <tr>
                      <td>
                        <label class="custom-control custom-checkbox">
                          <input class="custom-control-input" type="checkbox" />
                          <span class="custom-control-indicator"></span>
                        </label>
                      </td>
                      <td>
                        <p class="mb-10 fs-12">support@theironnetwork.org | sep 11</p>
                        <h5>New project requirement as per discussed.</h5>
                      </td>
                      <td><i class="ti-heart"></i></td>
                    </tr>
                    <tr>
                      <td>
                        <label class="custom-control custom-checkbox">
                          <input class="custom-control-input" type="checkbox" />
                          <span class="custom-control-indicator"></span>
                        </label>
                      </td>
                      <td>
                        <p class="mb-10 fs-12">support@theironnetwork.org | sep 11</p>
                        <h5>Create new profile request.</h5>
                      </td>
                      <td><i class="ti-heart"></i></td>
                    </tr>
                    <tr>
                      <td>
                        <label class="custom-control custom-checkbox">
                          <input class="custom-control-input" type="checkbox" />
                          <span class="custom-control-indicator"></span>
                        </label>
                      </td>
                      <td>
                        <p class="mb-10 fs-12">Create new profile request. | sep 11</p>
                        <h5>New project requirement as per discussed.</h5>
                      </td>
                      <td><i class="ti-heart"></i></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'inbox-widget'
}
</script>
