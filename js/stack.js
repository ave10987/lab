var Stack  = function() {
	this.top = 0;
	this.source = [];
};

Stack.prototype.push = function( data ) {
	this.top++;
	this.source.push( data );
};

Stack.prototype.pop = function() {
	this.top--;
	return this.source.pop();
};

Stack.prototype.length = function() {
	return this.source.length;
};

Stack.prototype.clear = function() {
	this.top = 0;
	this.source = [];
};
