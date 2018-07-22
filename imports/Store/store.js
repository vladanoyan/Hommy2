import {observable, decorate} from 'mobx';
import {Post} from '/imports/api/posts';
import {Tracker} from 'meteor/tracker';


  class TodoStore {

  createTodo(subject, body) {
    if(Meteor.user()){
      Meteor.call('post.add', {subject, body})
    }
  }


  removeTodo(_id) {
    if(Meteor.user()){
      Meteor.call('post.delete',{_id})
    }
  }

  create(){
    this.todos = Post.find().fetch();
  }

  loginUser(email, password){
    Meteor.loginWithPassword(email, password)
  }

  logOut(){
    Meteor.logout((success, err) => {
      if (!err) {
        localStorage.clear();
      }
    })
  }

   addUser(data){
    Meteor.call('user.add', data)
  }

  init() {
   const self = this;
    Tracker.autorun(() => {
       Meteor.subscribe('posts.all');
      self.create()
    })

  }
}

decorate(TodoStore, {
  todos: observable
});

const store = new TodoStore();
store.init();
export default store
