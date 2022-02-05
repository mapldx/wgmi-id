<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-100">
    <body class="h-full">
    ```
  -->
<div class="min-h-full">
  <Disclosure as="nav" class="bg-logo-30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="w-8" src="../assets/icon.png" alt="Workflow" />
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']"
                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <button type="button" class="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
            <div class="ml-6 flex items-baseline space-x-4">
              <a v-on:click="logout" class="bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Log out</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white">{{ user.name }}</div>
            <div class="text-sm font-medium leading-none text-gray-400">{{ user.email }}</div>
          </div>
          <button type="button" class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-3 px-2 space-y-1">
          <DisclosureButton v-for="item in userNavigation" :key="item.name" as="a" :href="item.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">{{ item.name }}</DisclosureButton>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>

  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Welcome, {{ user.username }}
        <button v-if="user.username.length <= 1" type="button"
          class="align-middle ml-1 py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Set your
          username</button>
        <div class="float-right align-top"><span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{{ encodedid }}</span></div>
      </h1>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div class="relative grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
          <div class="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
            <div class="w-px h-full bg-gray-300 lg:w-full lg:h-px"></div>
          </div>
          <div class="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div class="flex items-center justify-between mb-2">
              <p class="text-lg font-bold leading-5">Page Visits</p>
              <p class="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                1
              </p>
            </div>
            <p class="text-sm text-gray-900">
              Coming soon
            </p>
          </div>
          <div class="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div class="flex items-center justify-between mb-2">
              <p class="text-lg font-bold leading-5">Returning Visitors</p>
              <p class="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                2
              </p>
            </div>
            <p class="text-sm text-gray-900">
              Coming soon
            </p>
          </div>
          <div class="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div class="flex items-center justify-between mb-2">
              <p class="text-lg font-bold leading-5">Incoming Payments</p>
              <p class="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                3
              </p>
            </div>
            <p class="text-sm text-gray-900">
              Coming soon
            </p>
          </div>
          <div class="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div class="flex items-center justify-between mb-2">
              <p class="text-lg font-bold leading-5">NFT Outlinks</p>
              <p class="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                4
              </p>
            </div>
            <p class="text-sm text-gray-900">
              Coming soon
            </p>
          </div>
        </div>
      </div>
      <div class="">
        <div class="relative px-4 py-4 mb-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <iframe src="/" class="w-full h-screen"></iframe>
        </div>
      </div>
      <!-- /End replace -->
    </div>
  </main>
</div>
<Footer />
</template>

<script>
// @ is an alias to /src
import Footer from '../components/Footer.vue'
import {
  inject,
  onBeforeMount,
  computed
} from 'vue'
import {
  useStore
} from 'vuex'
import router from '@/router'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/vue'
import {
  BellIcon
} from '@heroicons/vue/outline'

var vuex = ''
var encodedid = ''
var solAddress = ''
var ethAddress = ''
var navigation = ''

const user = {
  username: '@',
  email: 'tom@example.com',
  imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export default {
  name: 'App',
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    BellIcon,
    Footer
  },
  setup() {
    const store = useStore()
    const $moralis = inject('$moralis')
    const setUser = (payload) => store.commit('setUser', payload)

    vuex = JSON.parse(localStorage.getItem('vuex'))
    encodedid = vuex.user.username
    ethAddress = vuex.user.ethAddress
    solAddress = vuex.user.solAddress
    navigation = [{
        name: 'Preview',
        href: '#',
        current: true
      },
      {
        name: 'Manage Profile',
        href: `/id/${encodedid}/profile`,
        current: false
      },
      {
        name: 'Manage NFTs',
        href: `/id/${encodedid}/tokens`,
        current: false
      },
      {
        name: 'Upgrade',
        href: '#',
        current: false
      }
    ]

    onBeforeMount(() => {
      try {
        let modalBackground = document.querySelector("div[class*='bg-gray-900 bg-opacity-50']")
        if (modalBackground) modalBackground.remove()
      } catch (error) {
        console.log(error)
      }
    })

    const logout = async () => {
      await $moralis.User.logOut()
      setUser({})
      router.push({
        name: 'Home'
      })
    }
    return {
      logout,
      user,
      encodedid,
      ethAddress,
      solAddress,
      navigation,
      isAuthenticated: computed(() => Object.keys(store.state.user).length > 0)
    }
  }
}
</script>
