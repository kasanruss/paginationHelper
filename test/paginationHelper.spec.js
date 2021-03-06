const {expect} = require('chai');
const {paginationHelper} = require('./paginationHelper.js');

describe('Solution', function() {
    it('pagination test', function() {
        let helper = new paginationHelper(['a','b','c','d','e','f'], 4);
        expect(helper.pageCount()).eq(2);
        expect(helper.itemCount()).eq(6);
        expect(helper.pageItemCount(0)).eq(4);
        expect(helper.pageItemCount(1)).eq(2);
        expect(helper.pageItemCount(2)).eq(-1);
        expect(helper.pageIndex(5)).eq(1);
        expect(helper.pageIndex(2)).eq(0);
        expect(helper.pageIndex(20)).eq(-1);
        expect(helper.pageIndex(-10)).eq(-1);
    });
});
