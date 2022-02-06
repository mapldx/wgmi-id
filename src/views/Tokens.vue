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
      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
          <li class="mr-2" role="presentation">
            <button class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 active"
              id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="true">Wallet 1</button>
          </li>
          <li class="mr-2" role="presentation">
            <button class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300" id="settings-tab"
              data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Wallet 2</button>
          </li>
          <li role="presentation">
            <button disabled class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Wallet 3</button>
          </li>
        </ul>
      </div>
      <div id="myTabContent" class="mb-20">
        <div class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
          <p class="text-sm text-gray-500 dark:text-gray-400">Wallet 1: {{ solAddress }}</p>
        </div>
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
            <div class="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
              <a href="/" aria-label="Item" class="mr-3">
                <div class="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
                  <svg class="w-12 h-12 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </div>
              </a>
              <h3 class="font-sans ml-3 font-semibold leading-none tracking-loose text-gray-900 sm:text-4xl">
                <span class="inline-block mb-2">Your Solana NFTs</span>
                <div class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"></div>
              </h3>
            </div>
          </div>
          <div class="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
            <div>
              <img class="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80" src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
              <p class="mb-2 text-xl font-bold leading-none sm:text-2xl">
                Galaxies Orion
              </p>
              <div class="flex justify-left">
                <div class="form-check form-switch">
                  <div class="grid xl:grid-cols-2 xl:gap-6">
                    <div class="relative z-0 mb-6 w-full group">
                      <select name="floating_first_name" id="floating_first_name" class="block w-full text-gray-900 bg-white rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder="Phantom">
                        <option value="twitter">Show</option>
                        <option value="discord">Hide</option>
                      </select>
                    </div>
                    <div class="w-full group">
                      <button type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
          <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility
            of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
        <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
          <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility
            of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
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
      current: false
    },
    {
      name: 'Manage Profile',
      href: `/${u.attributes.username}/profile`,
      current: false
    },
    {
      name: 'Manage NFTs',
      href: `/${u.attributes.username}/tokens`,
      current: true
    },
      {
        name: 'Upgrade',
        href: '#',
        current: false
      }
    ]

    user = {
      username: '@' + u.attributes.username,
      email: 'tom@example.com',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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

    const chgUname = async () => {
      try {
        const curr = $moralis.User.current()
        console.log(curr)
        curr.set("username", "test")
        await curr.save()
      } catch (error) {
        console.log(error)
      }
    }

    return {
      chgUname,
      logout,
      user,
      navigation,
      isAuthenticated: computed(() => Object.keys(store.state.user).length > 0)
    }
  }
}
</script>
