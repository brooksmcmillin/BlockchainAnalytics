<template>
  <div id="basic-table">
    <div class="idb-block">
      <div class="idb-block-title">
        <h2>Basic Tables</h2>
      </div>
      <div class="idb-block-content">
        <p class="text-muted mb-30">Using the most basic table markup, here’s how <code class="highlighter-rouge">.table</code>-based tables look in Bootstrap. <strong>All table styles are inherited in Bootstrap 4</strong>, meaning any nested tables will be styled in the same manner as the parent.</p>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="idb-block">
      <div class="idb-block-title">
        <h2>Table Inverse</h2>
      </div>
      <div class="idb-block-content">
        <p class="text-muted mb-30">You can also invert the colors&mdash;with light text on dark backgrounds&mdash;with <code class="highlighter-rouge">.table-inverse</code>.</p>
        <div class="table-responsive">
          <table class="table table-inverse">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="idb-block">
      <div class="idb-block-title">
        <h2>Table Head</h2>
      </div>
      <div class="idb-block-content">
        <div class="table-responsive">
          <table class="table">
            <thead class="thead-default">
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="idb-block">
      <div class="idb-block-title">
        <h2>Striped Rows</h2>
      </div>
      <div class="idb-block-content">
        <p class="text-muted mb-3">Use <code class="highlighter-rouge">.table-striped</code> to add zebra-striping to any table row within the <code class="highlighter-rouge">&lt;tbody&gt;</code>.</p>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="idb-block">
      <div class="idb-block-title">
        <h2>Bordered Table</h2>
      </div>
      <div class="idb-block-content">
        <p class="text-muted mb-3">Add <code class="highlighter-rouge">.table-bordered</code> for borders on all sides of the table and cells.</p>
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@TwBootstrap</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="idb-block">
      <div class="idb-block-title">
        <h2>Hoverable Table</h2>
      </div>
      <div class="idb-block-content">
        <p class="text-muted mb-30">Add <code class="highlighter-rouge">.table-hover</code> to enable a hover state on table rows within a <code class="highlighter-rouge">&lt;tbody&gt;</code>.</p>
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div claas="idb-block">
      <div class="idb-block-title">
        <h2>Contextual Table</h2>
      </div>
      <div class="idb-block-content">
        <div class="table-responsive">
          <table class="table table-inverse">
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Column heading</th>
                      <th>Column heading</th>
                      <th>Column heading</th>
                  </tr>
              </thead>
              <tbody>
                  <tr class="bg-primary">
                      <th scope="row">1</th>
                      <td>Column content</td>
                      <td>Column content</td>
                      <td>Column content</td>
                  </tr>
                  <tr>
                      <th scope="row">2</th>
                      <td>Column content</td>
                      <td>Column content</td>
                      <td>Column content</td>
                  </tr>
                  <tr class="bg-success">
                      <th scope="row">3</th>
                      <td>Column content</td>
                      <td>Column content</td>
                      <td>Column content</td>
                  </tr>
                  <tr>
                      <th scope="row">4</th>
                      <td>Column content</td>
                      <td>Column content</td>
                      <td>Column content</td>
                  </tr>
                  <tr class="bg-info">
                      <th scope="row">5</th>
                      <td>Column content</td>
                      <td>Column content</td>
                      <td>Column content</td>
                  </tr>
                  <tr>
                      <th scope="row">6</th>
                      <td>Column content</td>
                      <td>Column content</td>
                      <td>Column content</td>
                  </tr>
                  <tr class="bg-warning">
                      <th scope="row">7</th>
                      <td>Column content</td>
                      <td>Column content</td>
                      <td>Column content</td>
                  </tr>
                  <tr>
                      <th scope="row">8</th>
                      <td>Column content</td>
                      <td>Column content</td>
                      <td>Column content</td>
                  </tr>
                  <tr class="bg-danger">
                      <th scope="row">9</th>
                      <td>Column content</td>
                      <td>Column content</td>
                      <td>Column content</td>
                  </tr>
              </tbody>
          </table>
      </div>
      </div>
    </div>
  </div>
</template>
