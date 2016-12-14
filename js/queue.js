var Queue = function() {
	this.source = [];
};

Queue.prototype.enqueue = function( data ) {
	this.source.push( data );
};

Queue.prototype.dequeue = function() {
	return this.source.shift();
};

Queue.prototype.length = function() {
	return this.source.length;
};

Queue.prototype.clear = function() {
	this.source = [];
}