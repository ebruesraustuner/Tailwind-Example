<template>

  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <div>

<div class="bg-lightpink mx-md md:mx-lg">
<header class="pt-sm pb-sm bg-transparent flex flex-wrap items-center relative">
    <div class="flex-1 flex justify-between items-center">
     <div class="object-left flex pl-sm   py-sm">
      <h3 class="font-bold text-lg">Dream</h3>
      <h3 class="text-lg">Job</h3>
    </div>
  </div>

   <label for="menu-toggle" class="pointer-cursor lg:hidden block"><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
  <input class="hidden" type="checkbox" id="menu-toggle" />

  <div class="hidden lg:flex lg:items-center lg:w-auto w-full lg:static sm:absolute lg:bg-transparent sm:bg-darkpink sm:pt-3 top-11 z-10" id="menu">
    <nav>
     <ul class="flex flex-wrap lg:flex-row  sm:flex-col sm:items-end z-10">
        <li class="pr-md py-sm"><a href="#about" class="font-semibold"> Simple About</a></li>
        <li class="pr-md  py-sm"><a href="#images" class="font-semibold">Images</a></li>
        <li class="pr-md  py-sm"><a href="#tables" class="font-semibold">Tables</a></li>
        <li class="pr-md  py-sm"><a href="#forms" class="font-semibold">Forms</a></li>
        <li class="pr-md ">
            <div class="bg-transparent max-w-xs ">
    <div id="dropdown" class="relative inline-block">
      <button @click="isOpen = true"
        class="inline-flex items-center pl-md  py-sm font-semibold text-black bg-transparent rounded-lg hover:bg-white focus:outline-none focus:shadow-outline active:bg-gray-900">
        DropdownMenu
        <svg class="ml-sm h-6 w-6 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z" />
        </svg>
      </button>

      <div v-if="isOpen" @click="isOpen = false" class="fixed inset-0" tabindex="-1"></div>

      <transition 
        enter-class="opacity-0 transform scale-90 transition-all"
        enter-active-class="transition ease-out duration-75"
        enter-to-class="opacity-100 transform scale-100"
        leave-class="opacity-100 transform scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-to-class="opacity-0 transform scale-90">
        
        <div v-if="isOpen" class="absolute right-0 mt-3 text-left z-75 transform origin-top-right z-10">
          <div class="w-64 bg-white rounded-lg shadow-lg">
            <div class="flex items-center px-6 py-4">
              <img class="h-10 w-10 rounded-full flex-no-shrink"
                src="https://faces.design/faces/m/m17.png"
                alt="" />
              <div class="ml-4">
                <p class="font-semibold text-gray-900 leading-none">
                  Isidro Martínez
                </p>
                <p>
                  <a href="#" class="text-sm text-gray-600 leading-none hover:underline">View Profile</a>
                </p>
              </div>
            </div>
            <div class="border-t-2 border-gray-200 py-1">
              <a href="#" class="block px-6 py-3 leading-tight hover:bg-gray-200">Settings and Privacy</a>
              <a href="#" class="block px-6 py-3 leading-tight hover:bg-gray-200">Language</a>
            </div>
            <div class="border-t-2 border-gray-200 py-1">
              <a href="#" class="block px-6 py-3 leading-tight hover:bg-gray-200">Advertise</a>
              <a href="#" class="block px-6 py-3 leading-tight hover:bg-gray-200">Analytics</a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
        </li>
        <li class="pr-sm  py-sm">
          <button class="bg-black rounded-xl text-white pl-md pr-md"><span class="ml-2 mr-2">Login</span></button>
        </li>
      </ul>
    </nav>


  </div>

  </header>
  <div class="flex flex-wrap flex-row justify-between h-screen pb-xl ">
    <div class="flex flex-wrap justify-start self-end max-w-md pl-lg">
      <h1 class="text-4xl font-bold text-black">It's Your Dream Time</h1>
      <h2 class="text-xl text-black">Create the highest, grandest vision possible for your life, because you become what you believe.</h2>
      <p class="justify-end w-full text-right text-black"><i>Oprah Winfrey</i></p>
    </div>
    <div class="place-content-center self-center  m-3">
      <img src='../src/assets/img/Squares.svg' width="440" class="transform lg:scale-100 sm:scale-75">
    </div>
  </div>
  </div>
  <div id="about" class="flex justify-center flex-wrap flex-row pt-lg pb-lg">
    <div class="max-w-md pr-4">
      <img src='../src/assets/img/Interview.svg' width="440">
    </div>
    <div class="max-w-md pl-8 self-center">
      <h2>About We </h2>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
      </p>
    </div>
  </div>
  <div id="images" class="container mx-auto px-md py-lg ">
  <h1 class="text-3xl font-bold text-black mb-5">Responsive cards</h1>
  <div class="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div v-for="(card, i) in cards" :key="i"   class="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
      <img class="w-full max-h-40 object-cover" :src="card.image" alt="card.imageinfo">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{card.title}}</div>
        <p class="text-gray-700 text-base line-clamp-3"> 
         {{card.desc}}
         </p>
      </div>
    </div>
  </div>
</div>
<div id="tables" class="mx-auto max-w-3xl py-xl px-md">
<table class="table-auto w-full text-left border-collapse shadow-md">
  <thead class="border border-ligtblue bg-lightblue text-darkblue">
    <tr class="border-b-2 border-gray-200 p-md">
      <th class="p-md">Title</th>
      <th class="p-md">Author</th>
      <th class="p-md">Views</th>
    </tr>
  </thead>
  <tbody class="align-baseline">
    <tr class="border border-gray-200 hover:bg-lightpink">
      <td class="p-md">Intro to CSS</td>
      <td class="p-md">Adam</td>
      <td class="p-md">858</td>
    </tr>
    <tr class="border border-gray-200 bg-emerald-200 hover:bg-lightpink">
      <td class="p-md">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
      <td class="p-md">Adam</td>
      <td class="p-md">112</td>
    </tr>
    <tr class="border border-gray-200 hover:bg-lightpink">
      <td class="p-md">Intro to JavaScript</td>
      <td class="p-md">Chris</td>
      <td class="p-md">1,280</td>
    </tr>
  </tbody>
</table>
</div>
<div id="forms" class="py-xl px-md">
  <h3 class="text-xl text-center font-bold w-full">Contact Form</h3>
  <form action="" method="post" class="mx-auto max-w-3xl flex flex-wrap flex-col " >
    <fieldset class="flex flex-wrap flex-col">
      <label class="block py-sm font-semibold"><span>Name &amp; Surname</span></label>
      <input type="text" class="block p-sm rounded-sm shadow-sm border border-black-100 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-blue-100 hover:border-lightpink">
    </fieldset>
    <fieldset class="flex flex-wrap flex-col">
      <label class="block py-sm font-semibold"><span>Email</span></label>
      <input type="text" class="block p-sm rounded-sm shadow-sm border border-black-100 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-blue-100 hover:border-lightpink">
    </fieldset>
    <fieldset class="flex flex-wrap flex-col">
      <label class="block py-sm font-semibold"><span>Message</span></label>
      <textarea type="text" class="block p-sm rounded-sm shadow-sm border border-black-100 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-blue-100 hover:border-lightpink"> </textarea>
    </fieldset>
    <div class="self-end">
    <button type="button" class="align-content-end rounded-md my-md p-sm bg-black text-white">Submit</button>
    </div>
  </form>
</div>
  </div>
  
</template>
<style scoped>
      #menu-toggle:checked + #menu {
        display: block;
      }

</style>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import data from '../public/data.json'
export default {
  name: 'App',
  data() {
    return {
      isOpen: false,
      cards: data.cards
    }
  }
  //components: {
    //HelloWorld}
  
}
</script>
