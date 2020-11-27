let filters = {
	all: function (todos) { 
		return todos
	},
	active: function (todos) {
		return todos.filter(
			todo => !todo.completed
			)
	},
	completed: function (todos) {
		return todos.filter(
			todo => todo.completed
			)
	}
}

let app = new Vue({
	el: '#todo-app',
	data: {
		todos: [],
		newTodo: '',
		currentId: 0,
		visibility: 'all',
		editingTodo: null,
		beforeEditCache: ''
	},
	computed: {
		filtered: function() {
			return filters[this.visibility](this.todos);
		},
		remaining: function() {
			return this.todos.filter(todo => !todo.completed).length
		},
		allDone: {
			get: function() {
				return this.remaining === 0
			},
			set: function(value) {
				this.todos.forEach(function(todo) {
					todo.completed = value
				})
			}
		},
	},
	methods: {
		create: function() {
			if (this.newTodo == '')
				return
			this.todos.push({
				text: this.newTodo.trim(),
				id: this.currentId,
				completed: false
			})
			this.newTodo = ''
			this.currentId++
		},
		destroy: function(todo) {
			this.todos.splice(this.todos.indexOf(todo), 1)
		},
		clear: function() {
			this.todos = this.todos.filter(todo => !todo.completed)
		},
		editTodo: function(todo) {
			this.editingTodo = todo
			this.beforeEditCache = todo.text
		},
		doneEdit: function(todo) {
			if (todo.text == '')
				this.destroy(todo)
			this.editingTodo = null
			this.beforeEditCache = ''
		},
		cancelEdit: function(todo) {
			this.editingTodo = null
			todo.text = this.beforeEditCache
			this.beforeEditCache = ''
		}
	},
	directives: {
		"todo-focus": function(el, binding) {
			if (binding.value) {
				el.focus();
			}
		}
	},
})