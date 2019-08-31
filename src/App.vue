<template>
  <div id="app">
    <img src="./assets/logo.png">
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
 *{
    box-sizing: border-box;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
}
img{
  margin-bottom: 20px;
}
.container {
    max-width: 1000px;
    margin: 0 auto;
    font-size: 18px;
  }

</style>
