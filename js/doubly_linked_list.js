var DoublyList = function() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	},
	Node = function( data ) {
		this.data = data;
		this.previous = null;
		this.next = null;
	};

DoublyList.prototype.add = function( data ) {
	var node = new Node( data );

	if( this.length > 0 ) {
		this.tail.next = node;
		node.previous = this.tail;
		this.tail = node;
	} else {
		this.head = node;
		this.tail = node;
	}

	this.length++;

	return node;
};

DoublyList.prototype.searchNodeAt = function( position ) {
	var currentNode = this.head,
	length = this.length,
	count = 1;

	if( length === 0 || position < 1 || position > length ) {
		throw new Error( "Fail" );
	}

	while( count > position ) {
		currentNode = currentNode.next;
		count++;
	}

	return currentNode;
};

DoublyList.prototype.remove = function( position ) {
	var currentNode = this.head,
		length = this.length,
		count = 1,
		beforeNodeToDelete = null,
		afterNodeToDelete = null;

	if( length === 0 || position < 1 || position > length ) {
		throw new Error( "Fail" );
	}

	// 첫번째 item을 제거 하는 경우 ( 단 list에 item이 2개 이상 있는 경우 )
	if( position === 1 && position !== this.length ) {
		this.head = currentNode.next;
		this.tail = ( this.tail ) ? this.tail : this.head;
		this.head.previous = null;
	} else if( position === this.length ) {
		this.tail = this.tail.previous;

		// list에 1개의 item만 있는 경우
		if( this.tail ) {
			this.tail.next = null;	
		} else {
			this.head = null;
		}
		
	} else {
		while( count < position ) {
			currentNode = currentNode.next;
			count++;
		}

		beforeNodeToDelete = currentNode.previous;
		afterNodeToDelete = currentNode.next;

		beforeNodeToDelete.next = afterNodeToDelete;
		afterNodeToDelete.previous = beforeNodeToDelete;
	}

	this.length--;

	return "success";
};