/*! DataTables 2.1.3
 * © SpryMedia Ltd - datatables.net/license
 */

import jQuery from 'jquery';

// DataTables code uses $ internally, but we want to be able to
// reassign $ with the `use` method, so it is a regular var.
var $ = jQuery;

_buildInclude('core.main.js');

export default DataTable;
