/******/ (() => { // webpackBootstrap
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
let filters = {
  all: function (todos) {
    return todos;
  },
  active: function (todos) {
    return todos.filter(todo => !todo.completed);
  },
  completed: function (todos) {
    return todos.filter(todo => todo.completed);
  }
};
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
    filtered: function () {
      return filters[this.visibility](this.todos);
    },
    remaining: function () {
      return this.todos.filter(todo => !todo.completed).length;
    },
    allDone: {
      get: function () {
        return this.remaining === 0;
      },
      set: function (value) {
        this.todos.forEach(function (todo) {
          todo.completed = value;
        });
      }
    }
  },
  methods: {
    create: function () {
      if (this.newTodo == '') return;
      this.todos.push({
        text: this.newTodo.trim(),
        id: this.currentId,
        completed: false
      });
      this.newTodo = '';
      this.currentId++;
    },
    destroy: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    clear: function () {
      this.todos = this.todos.filter(todo => !todo.completed);
    },
    editTodo: function (todo) {
      this.editingTodo = todo;
      this.beforeEditCache = todo.text;
    },
    doneEdit: function (todo) {
      if (todo.text == '') this.destroy(todo);
      this.editingTodo = null;
      this.beforeEditCache = '';
    },
    cancelEdit: function (todo) {
      this.editingTodo = null;
      todo.text = this.beforeEditCache;
      this.beforeEditCache = '';
    }
  },
  directives: {
    "todo-focus": function (el, binding) {
      if (binding.value) {
        el.focus();
      }
    }
  }
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtdnVlLy4vanMvYXBwLmpzIl0sIm5hbWVzIjpbImZpbHRlcnMiLCJhbGwiLCJ0b2RvcyIsImFjdGl2ZSIsImZpbHRlciIsInRvZG8iLCJjb21wbGV0ZWQiLCJhcHAiLCJWdWUiLCJlbCIsImRhdGEiLCJuZXdUb2RvIiwiY3VycmVudElkIiwidmlzaWJpbGl0eSIsImVkaXRpbmdUb2RvIiwiYmVmb3JlRWRpdENhY2hlIiwiY29tcHV0ZWQiLCJmaWx0ZXJlZCIsInJlbWFpbmluZyIsImxlbmd0aCIsImFsbERvbmUiLCJnZXQiLCJzZXQiLCJ2YWx1ZSIsImZvckVhY2giLCJtZXRob2RzIiwiY3JlYXRlIiwicHVzaCIsInRleHQiLCJ0cmltIiwiaWQiLCJkZXN0cm95Iiwic3BsaWNlIiwiaW5kZXhPZiIsImNsZWFyIiwiZWRpdFRvZG8iLCJkb25lRWRpdCIsImNhbmNlbEVkaXQiLCJkaXJlY3RpdmVzIiwiYmluZGluZyIsImZvY3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFJQSxPQUFPLEdBQUc7QUFDYkMsS0FBRyxFQUFFLFVBQVVDLEtBQVYsRUFBaUI7QUFDckIsV0FBT0EsS0FBUDtBQUNBLEdBSFk7QUFJYkMsUUFBTSxFQUFFLFVBQVVELEtBQVYsRUFBaUI7QUFDeEIsV0FBT0EsS0FBSyxDQUFDRSxNQUFOLENBQ05DLElBQUksSUFBSSxDQUFDQSxJQUFJLENBQUNDLFNBRFIsQ0FBUDtBQUdBLEdBUlk7QUFTYkEsV0FBUyxFQUFFLFVBQVVKLEtBQVYsRUFBaUI7QUFDM0IsV0FBT0EsS0FBSyxDQUFDRSxNQUFOLENBQ05DLElBQUksSUFBSUEsSUFBSSxDQUFDQyxTQURQLENBQVA7QUFHQTtBQWJZLENBQWQ7QUFnQkEsSUFBSUMsR0FBRyxHQUFHLElBQUlDLEdBQUosQ0FBUTtBQUNqQkMsSUFBRSxFQUFFLFdBRGE7QUFFakJDLE1BQUksRUFBRTtBQUNMUixTQUFLLEVBQUUsRUFERjtBQUVMUyxXQUFPLEVBQUUsRUFGSjtBQUdMQyxhQUFTLEVBQUUsQ0FITjtBQUlMQyxjQUFVLEVBQUUsS0FKUDtBQUtMQyxlQUFXLEVBQUUsSUFMUjtBQU1MQyxtQkFBZSxFQUFFO0FBTlosR0FGVztBQVVqQkMsVUFBUSxFQUFFO0FBQ1RDLFlBQVEsRUFBRSxZQUFXO0FBQ3BCLGFBQU9qQixPQUFPLENBQUMsS0FBS2EsVUFBTixDQUFQLENBQXlCLEtBQUtYLEtBQTlCLENBQVA7QUFDQSxLQUhRO0FBSVRnQixhQUFTLEVBQUUsWUFBVztBQUNyQixhQUFPLEtBQUtoQixLQUFMLENBQVdFLE1BQVgsQ0FBa0JDLElBQUksSUFBSSxDQUFDQSxJQUFJLENBQUNDLFNBQWhDLEVBQTJDYSxNQUFsRDtBQUNBLEtBTlE7QUFPVEMsV0FBTyxFQUFFO0FBQ1JDLFNBQUcsRUFBRSxZQUFXO0FBQ2YsZUFBTyxLQUFLSCxTQUFMLEtBQW1CLENBQTFCO0FBQ0EsT0FITztBQUlSSSxTQUFHLEVBQUUsVUFBU0MsS0FBVCxFQUFnQjtBQUNwQixhQUFLckIsS0FBTCxDQUFXc0IsT0FBWCxDQUFtQixVQUFTbkIsSUFBVCxFQUFlO0FBQ2pDQSxjQUFJLENBQUNDLFNBQUwsR0FBaUJpQixLQUFqQjtBQUNBLFNBRkQ7QUFHQTtBQVJPO0FBUEEsR0FWTztBQTRCakJFLFNBQU8sRUFBRTtBQUNSQyxVQUFNLEVBQUUsWUFBVztBQUNsQixVQUFJLEtBQUtmLE9BQUwsSUFBZ0IsRUFBcEIsRUFDQztBQUNELFdBQUtULEtBQUwsQ0FBV3lCLElBQVgsQ0FBZ0I7QUFDZkMsWUFBSSxFQUFFLEtBQUtqQixPQUFMLENBQWFrQixJQUFiLEVBRFM7QUFFZkMsVUFBRSxFQUFFLEtBQUtsQixTQUZNO0FBR2ZOLGlCQUFTLEVBQUU7QUFISSxPQUFoQjtBQUtBLFdBQUtLLE9BQUwsR0FBZSxFQUFmO0FBQ0EsV0FBS0MsU0FBTDtBQUNBLEtBWE87QUFZUm1CLFdBQU8sRUFBRSxVQUFTMUIsSUFBVCxFQUFlO0FBQ3ZCLFdBQUtILEtBQUwsQ0FBVzhCLE1BQVgsQ0FBa0IsS0FBSzlCLEtBQUwsQ0FBVytCLE9BQVgsQ0FBbUI1QixJQUFuQixDQUFsQixFQUE0QyxDQUE1QztBQUNBLEtBZE87QUFlUjZCLFNBQUssRUFBRSxZQUFXO0FBQ2pCLFdBQUtoQyxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXRSxNQUFYLENBQWtCQyxJQUFJLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxTQUFoQyxDQUFiO0FBQ0EsS0FqQk87QUFrQlI2QixZQUFRLEVBQUUsVUFBUzlCLElBQVQsRUFBZTtBQUN4QixXQUFLUyxXQUFMLEdBQW1CVCxJQUFuQjtBQUNBLFdBQUtVLGVBQUwsR0FBdUJWLElBQUksQ0FBQ3VCLElBQTVCO0FBQ0EsS0FyQk87QUFzQlJRLFlBQVEsRUFBRSxVQUFTL0IsSUFBVCxFQUFlO0FBQ3hCLFVBQUlBLElBQUksQ0FBQ3VCLElBQUwsSUFBYSxFQUFqQixFQUNDLEtBQUtHLE9BQUwsQ0FBYTFCLElBQWI7QUFDRCxXQUFLUyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsV0FBS0MsZUFBTCxHQUF1QixFQUF2QjtBQUNBLEtBM0JPO0FBNEJSc0IsY0FBVSxFQUFFLFVBQVNoQyxJQUFULEVBQWU7QUFDMUIsV0FBS1MsV0FBTCxHQUFtQixJQUFuQjtBQUNBVCxVQUFJLENBQUN1QixJQUFMLEdBQVksS0FBS2IsZUFBakI7QUFDQSxXQUFLQSxlQUFMLEdBQXVCLEVBQXZCO0FBQ0E7QUFoQ08sR0E1QlE7QUE4RGpCdUIsWUFBVSxFQUFFO0FBQ1gsa0JBQWMsVUFBUzdCLEVBQVQsRUFBYThCLE9BQWIsRUFBc0I7QUFDbkMsVUFBSUEsT0FBTyxDQUFDaEIsS0FBWixFQUFtQjtBQUNsQmQsVUFBRSxDQUFDK0IsS0FBSDtBQUNBO0FBQ0Q7QUFMVTtBQTlESyxDQUFSLENBQVYsQyIsImZpbGUiOiJqcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZmlsdGVycyA9IHtcclxuXHRhbGw6IGZ1bmN0aW9uICh0b2RvcykgeyBcclxuXHRcdHJldHVybiB0b2Rvc1xyXG5cdH0sXHJcblx0YWN0aXZlOiBmdW5jdGlvbiAodG9kb3MpIHtcclxuXHRcdHJldHVybiB0b2Rvcy5maWx0ZXIoXHJcblx0XHRcdHRvZG8gPT4gIXRvZG8uY29tcGxldGVkXHJcblx0XHRcdClcclxuXHR9LFxyXG5cdGNvbXBsZXRlZDogZnVuY3Rpb24gKHRvZG9zKSB7XHJcblx0XHRyZXR1cm4gdG9kb3MuZmlsdGVyKFxyXG5cdFx0XHR0b2RvID0+IHRvZG8uY29tcGxldGVkXHJcblx0XHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmxldCBhcHAgPSBuZXcgVnVlKHtcclxuXHRlbDogJyN0b2RvLWFwcCcsXHJcblx0ZGF0YToge1xyXG5cdFx0dG9kb3M6IFtdLFxyXG5cdFx0bmV3VG9kbzogJycsXHJcblx0XHRjdXJyZW50SWQ6IDAsXHJcblx0XHR2aXNpYmlsaXR5OiAnYWxsJyxcclxuXHRcdGVkaXRpbmdUb2RvOiBudWxsLFxyXG5cdFx0YmVmb3JlRWRpdENhY2hlOiAnJ1xyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdGZpbHRlcmVkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIGZpbHRlcnNbdGhpcy52aXNpYmlsaXR5XSh0aGlzLnRvZG9zKTtcclxuXHRcdH0sXHJcblx0XHRyZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy50b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5jb21wbGV0ZWQpLmxlbmd0aFxyXG5cdFx0fSxcclxuXHRcdGFsbERvbmU6IHtcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5yZW1haW5pbmcgPT09IDBcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0XHRcdHRoaXMudG9kb3MuZm9yRWFjaChmdW5jdGlvbih0b2RvKSB7XHJcblx0XHRcdFx0XHR0b2RvLmNvbXBsZXRlZCA9IHZhbHVlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGNyZWF0ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICh0aGlzLm5ld1RvZG8gPT0gJycpXHJcblx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdHRoaXMudG9kb3MucHVzaCh7XHJcblx0XHRcdFx0dGV4dDogdGhpcy5uZXdUb2RvLnRyaW0oKSxcclxuXHRcdFx0XHRpZDogdGhpcy5jdXJyZW50SWQsXHJcblx0XHRcdFx0Y29tcGxldGVkOiBmYWxzZVxyXG5cdFx0XHR9KVxyXG5cdFx0XHR0aGlzLm5ld1RvZG8gPSAnJ1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRJZCsrXHJcblx0XHR9LFxyXG5cdFx0ZGVzdHJveTogZnVuY3Rpb24odG9kbykge1xyXG5cdFx0XHR0aGlzLnRvZG9zLnNwbGljZSh0aGlzLnRvZG9zLmluZGV4T2YodG9kbyksIDEpXHJcblx0XHR9LFxyXG5cdFx0Y2xlYXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5jb21wbGV0ZWQpXHJcblx0XHR9LFxyXG5cdFx0ZWRpdFRvZG86IGZ1bmN0aW9uKHRvZG8pIHtcclxuXHRcdFx0dGhpcy5lZGl0aW5nVG9kbyA9IHRvZG9cclxuXHRcdFx0dGhpcy5iZWZvcmVFZGl0Q2FjaGUgPSB0b2RvLnRleHRcclxuXHRcdH0sXHJcblx0XHRkb25lRWRpdDogZnVuY3Rpb24odG9kbykge1xyXG5cdFx0XHRpZiAodG9kby50ZXh0ID09ICcnKVxyXG5cdFx0XHRcdHRoaXMuZGVzdHJveSh0b2RvKVxyXG5cdFx0XHR0aGlzLmVkaXRpbmdUb2RvID0gbnVsbFxyXG5cdFx0XHR0aGlzLmJlZm9yZUVkaXRDYWNoZSA9ICcnXHJcblx0XHR9LFxyXG5cdFx0Y2FuY2VsRWRpdDogZnVuY3Rpb24odG9kbykge1xyXG5cdFx0XHR0aGlzLmVkaXRpbmdUb2RvID0gbnVsbFxyXG5cdFx0XHR0b2RvLnRleHQgPSB0aGlzLmJlZm9yZUVkaXRDYWNoZVxyXG5cdFx0XHR0aGlzLmJlZm9yZUVkaXRDYWNoZSA9ICcnXHJcblx0XHR9XHJcblx0fSxcclxuXHRkaXJlY3RpdmVzOiB7XHJcblx0XHRcInRvZG8tZm9jdXNcIjogZnVuY3Rpb24oZWwsIGJpbmRpbmcpIHtcclxuXHRcdFx0aWYgKGJpbmRpbmcudmFsdWUpIHtcclxuXHRcdFx0XHRlbC5mb2N1cygpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxufSkiXSwic291cmNlUm9vdCI6IiJ9