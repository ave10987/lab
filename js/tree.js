var Tree = function( data ) {
		var node = new Node( data );
		this._root = node;
	}, Node = function( data ) {
		this.data = data;
		this.parent = null;
		this.children = [];
	}, findIndex = function( arr, data ) {
		var index,
			i = 0;

		for( ; i < arr.length; i++ ) {
			if( arr[ i ].data === data ) {
				index = i;
			}
		}

		return index;
	};

// root node 부터 시작하여 가장 아래 있는 node부터 탐색
Tree.prototype.treverseDepthFirst = function( callback ) {
	( function recurse( currentNode ) {

		var i = 0,
			length = currentNode.children.length;

		for( ; i < length; i++ ) {
			recurse( currentNode.children[ i ] );
		}

		callback( currentNode );
	})( this._root );
};

Tree.prototype.treverseBreadthFirst = function( callback ) {

	// queue 사용
	var queue = new Queue();

	queue.enqueue( this._root );
	currentTree = queue.dequeue();

	while( currentTree ) {

		var i = 0,
			length = currentTree.children.length;

		for( ; i < length; i++ ) {
			queue.enqueue( currentTree.children[ i ] );
		}

		callback( currentTree );
		currentTree = queue.dequeue();
	}
};

Tree.prototype.contains = function( callback, traversal ) {
	traversal.call( this, callback );
};

Tree.prototype.add = function( data, toData, treversal ) {

	var child = new Node( data ),
		parent = null,
		callback = function( node ) {
			if( node.data === toData ) {
				parent = node;
			}
		};

	this.contains( callback, traversal );

	if( parent ) {
		parent.children.push( child );
		child.parent = parent;
	} else {
		throw new Error( "Cannot add node" );
	}
};

Tree.prototype.remove = function( data, fromData, traversal ) {
	var tree = this,
		parent = null,
		childToRemove = null,
		index,
		callback = function( node ) {
			if( node.data === fromData ) {
				parent = node;
			}
		};

	this.contains( callback, traversal );

	if( parent ) {
		index = findIndex( parent.children, data );

		if( index === undefined ) {
			throw new Error( "Node does not exist" );
		} else {
			childToRemove = parent.children.splice( index, 1 );
		}
	} else {
		throw new Error( "parent does not exist" );
	}

	return childToRemove;
};

