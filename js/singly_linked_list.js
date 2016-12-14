var SinglyList = function() {
		this.length = 0;
		this.head = null;
	},
	Node = function( data ) {
		this.data = data;
		this.next = null;
	};

SinglyList.prototype.add = function( data ) {
	var node = new Node( data ),
		currentNode = this.head;

	if( !currentNode ) {
		this.head = node;
		this.length++;

		return node;
	}

	while( currentNode.next ) {
		currentNode = currentNode.next;
	}

	currentNode.next = node;
	this.length++;

	return node;
};

SinglyList.prototype.searchNodeAt = function( position ) {
	var currentNode = this.head,
		length = this.length,
		count = 1;

	if( length === 0 || position < 1 || position > length ) {
		throw new Error( "Fail" );
	}

	while( count < position ) {
		currentNode = currentNode.next;
		count++;
	}

	return currentNode;
};

SinglyList.prototype.remove = function( position ) {
	var currentNode = this.head,
		length = this.length,
		count = 0,
		beforeNodeToDelete = null,
		nodeToDelete = null,
		deletedNode = null;

	if( position < 0 || position > length ) {
		throw new Error( "Fail" );
	}

	if( position === 1 ) {
		this.head = currentNode.next;
		deletedNode = currentNode;
		currentNode = null;
		this.length--;

		return deletedNode;
	}

	while( count < position ) {
		beforeNodeToDelete = currentNode;
		nodeToDelete = currentNode.next;
		count++;
	}

	beforeNodeToDelete.next = nodeToDelete.next;
	deletedNode = nodeToDelete;
	nodeToDelete = null;
	this.length--;

	return deletedNode;
};