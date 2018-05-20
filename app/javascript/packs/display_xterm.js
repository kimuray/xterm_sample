/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue/dist/vue.esm'
import { Terminal } from 'xterm'

const xterm = new Terminal()

new Vue({
  el: '#terminal',
  mounted() {
    xterm.open(this.$el)
    xterm.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
  },
})
