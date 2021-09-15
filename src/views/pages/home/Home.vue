<template>
  <div class="home">
    <div class="flex flex-wrap overflow-hidden">
      <Sidebar/>
        <div class="h-screen text-center p-10 w-2/4 bg-black-100">
          <div class="result p-5">
              <p>{{ msg.generate }}</p>
              <p class="pt-5 my-5 text-6xl text-red-500">
                <b>{{ result }}</b>
              </p>
              <button v-if="result !== ''" class="bg-red-400 rounded-sm px-1" v-on:click="deleteNumber(result)">delete</button>
          </div>
          <button class="bg-blue-400 rounded-sm px-3 py-1 mx-1" v-on:click="generate()">generate</button>
        </div>
        <div class="h-screen text-center p-10 w-1/4 bg-black-100">
          <div class="btn-reset mt-3 mb-10">
            <button class="bg-red-400 rounded-sm px-3 py-1 mx-1" v-on:click="reset()">reset all</button>
          </div>
          <div class="input-min">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="min">
              Min
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="min" id="min" type="number" placeholder="min: 0">
          </div>
          <div class="input-max">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="max">
              Min
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="max" id="max" type="number" placeholder="max: 999">
          </div>
        </div>
    </div>
  </div>
</template>

<script>

import Sidebar from '../../layouts/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    Sidebar
  },
  data() {
    return {
      msg: 
        {
          generate: 'Click button generate!'
        }
      ,
      min: 0,
      max: 0,
      result: '',
      deleted: [],
    }
  },

  methods: {

    generate: function () {
      try {
        let min = this.min;
        let max = this.max;
        return this.checkNumber(min, max);
      } catch (error) {
        console.log('error fn generate: ' + error)
        return;    
      }
    },

    deleteNumber: function (numb) { 
      try {
        let deletedVal = this.deleted;
        if (!deletedVal.includes(numb)) {
          this.deleted.push(numb);
        }
        return this.result = '';
      } catch (error) {
        console.log('error fn deleteNumber: ' + error)
        return;
      }
     },

    checkNumber: function (min, max) { 
      try {
        if (min > max) {
          alert("min data can't be greater than max!")
          this.min = 0;
          this.max = 0;
          return;
        }

        let deletedVal = this.deleted;

        if(max-min+1 == deletedVal.length){
          return this.result = "Done!";
        }

        let resultNumb = this.getRange(min, max);

        if (deletedVal.includes(resultNumb)) {
          return this.generate();
        }

        this.msg.generate = 'The result is!';
        this.result       = resultNumb;
      } catch (error) {
        console.log('error fn getRange: ' + error)
        return;
      }
     },

    getRange: function (min, max) { 
      try {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      } catch (error) {
        console.log('error fn checkNumber: ' + error)
        return;    
      }
    },
     
    reset: function () { 
      try {
        this.min = 0;
        this.max = 0;
        this.result = 0;
        this.deleted = [];
        this.msg.generate = 'Click button generate!';
        return;
      } catch (error) {
        console.log('error fn generate: ' + error)
        return;
      }
     }
  }
}
</script>

<style lang="scss">
    .hello{
        text-align: center;
    }
</style>