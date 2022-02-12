<template>
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
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <a v-on:click="logout" class="bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Log out</a>
      </div>
    </DisclosurePanel>
  </Disclosure>

  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Welcome, {{ user.username }}
        <button v-if="user.username.length <= 1" type="button" v-on:click="chgUname"
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
          <iframe :src="'/' + user.username" class="w-full h-screen"></iframe>
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

var navigation = ''
var user = ''

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
    const u = $moralis.User.current()

    navigation = [{
      name: 'Preview',
      href: `/${u.attributes.username}/home`,
      current: true
    },
    {
      name: 'Manage Profile',
      href: `/${u.attributes.username}/profile`,
      current: false
    },
    {
      name: 'Manage NFTs',
      href: `/${u.attributes.username}/tokens`,
      current: false
    },
      {
        name: 'Upgrade',
        href: '#',
        current: false
      }
    ]

    user = {
      username: u.attributes.username,
    }

    onBeforeMount(() => {
      try {
        let modalBackground = document.querySelector("div[class*='bg-gray-900 bg-opacity-50']")
        if (modalBackground) modalBackground.remove()
        console.log(u.attributes)
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
      user,
      logout,
      navigation,
      isAuthenticated: computed(() => Object.keys(store.state.user).length > 0)
    }
  }
}
</script>
