function paginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
}

paginationHelper.prototype.itemCount = function() {
    return this.collection.length;
};

paginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
};

paginationHelper.prototype.pageItemCount = function(pageIndex) {
    if(pageIndex < this.pageCount() - 1){
        return this.itemsPerPage;
    }
    else if(pageIndex == this.pageCount() - 1){
        return this.itemCount() - pageIndex * this.itemsPerPage;
    }
    else{
        return -1;
    }
};

paginationHelper.prototype.pageIndex = function(itemIndex) {
    if(itemIndex >=0 && itemIndex < this.itemCount()){
        return Math.floor(itemIndex / this.itemsPerPage);
    }
    return -1;
};

module.exports = {paginationHelper};