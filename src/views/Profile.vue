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
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mb-24">
      <!-- Replace with your content -->
      <div class="py-12 mb-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
        <div class="flex flex-col lg:flex-row">
          <div class="max-w-xl pr-16 mx-auto mb-10">
            <h5 class="mb-6 text-3xl font-extrabold leading-none">
              Your verifiable information
            </h5>
            <p class="mb-6 text-gray-900">
              If you authenticated with an Ethereum-compatible wallet (e.g. MetaMask), you are eligible to get your account verified on the blockchain. We do this by minting an NFT to your wallet, at no cost to you, to:
              <ul class="mt-4 ml-8 mb-4" style="list-style-type: circle">
                <li>verify ownership of your input Ethereum wallet address, and</li>
                <li>show ownership of your wgmi.ID.</li>
              </ul>
            </p>
            <p class="mb-6 text-gray-900">
              This NFT is a proof-of-ownership token on the Polygon Network (MATIC). It will contain your wgmi.ID username and address, a scannable QR code, and your status of verification. <a href="" class="text-blue-400"> Why Polygon? </a>
            </p>
            <p class="mb-6 text-gray-900">
              Should you choose to verify your account, all Ethereum-based wallet addresses on your profile will be unchangeable and permanently linked to your wgmi.ID address.
            </p>
            <p class="mb-6 text-gray-900">
              This NFT will be saveable and viewable via OpenSea and your Ethereum-based wallet. <span class="font-semibold">Do not sell, list, or transfer this NFT as it will make this dashboard inaccessible to you. We will be unable to recover your username for your use as well.</span>
            </p>
              Verification for Solana-based wallet addresses are coming soon.
          </div>
          <form class="w-full">
            <div class="relative z-0 mb-6 w-full group">
              <label for="floating_email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
              <div class="flex">
                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-white rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  @
                </span>
                <input type="email" name="floating_email" class="block w-full text-gray-900 bg-white rounded-r-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder=" " required />
              </div>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <label for="floating_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
              <input type="password" name="floating_password" id="floating_password" class="block w-full text-gray-900 bg-gray-200 rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Authenticated via wallet connection" disabled />
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <label for="floating_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Change password</label>
              <input type="password" name="floating_password" id="floating_password" class="block w-full text-gray-900 bg-gray-200 rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Authenticated via wallet connection" disabled />
            </div>
            <div class="grid xl:grid-cols-2 xl:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Main Wallet</label>
                <select name="floating_first_name" id="floating_first_name" class="block w-full text-gray-900 bg-gray-200 rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder="Phantom" disabled>
                  <option value="phantom">Phantom</option>
                  <option value="metamask">MetaMask</option>
                  <option value="walletconnect">WalletConnect</option>
                </select>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Main Address</label>
                <input type="text" name="floating_last_name" id="floating_last_name" class="block w-full text-gray-900 bg-gray-200 rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" :placeholder="solAddress"
                  required />
              </div>
            </div>
            <div class="grid xl:grid-cols-2 xl:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Secondary Wallet</label>
                <select name="floating_first_name" id="floating_first_name" class="block w-full text-gray-900 bg-gray-200 rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder="Phantom">
                  <option value="phantom">Phantom</option>
                  <option value="metamask">MetaMask</option>
                  <option value="walletconnect">WalletConnect</option>
                </select>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Secondary Address</label>
                <input type="text" name="floating_company" id="floating_company" class="block w-full text-gray-900 bg-white rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder=" " required />
              </div>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <label for="floating_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">IPFS Metadata URL</label>
              <input type="password" name="floating_password" id="floating_password" class="block w-full text-gray-900 bg-gray-200 rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder="Unverified"
                disabled />
            </div>
            <button type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save
              Section</button>
          </form>
        </div>
      </div>
      <div class="py-12 mb-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
        <div class="flex flex-col lg:flex-row">
          <div class="max-w-xl pr-16 mx-auto mb-10">
            <h5 class="mb-6 text-3xl font-extrabold leading-none">
              Your bio section
            </h5>
            <p class="mb-6 text-gray-900">
              Take 160 characters of fun to convey essential information you want the rest of the world to know about who you are across Web 2, communities, DAOs, metaverse worlds, and so much more.
            </p>
          </div>
          <form class="w-full">
            <label for="message" class="block bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 mb-2 rounded dark:bg-yellow-200 dark:text-yellow-900">≤ 160 characters</label>
            <textarea id="message" rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."></textarea>
          </form>
        </div>
      </div>
      <div class="py-12 mb-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
        <div class="flex flex-col lg:flex-row">
          <div class="max-w-xl pr-16 mx-auto mb-10">
            <h5 class="mb-6 text-3xl font-extrabold leading-none">
              Your links
            </h5>
            <p class="mb-6 text-gray-900">
              Help connect the rest of the world with you and your content through Web 2 and 3 links. What you choose to link here shows what you consider most important.
            </p>
            <div class="flex items-center">
              <button type="submit"
                class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                Get started
              </button>
              <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
            </div>
          </div>
          <form class="w-full">
            <div class="grid xl:grid-cols-2 xl:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Secondary Wallet</label>
                <select name="floating_first_name" id="floating_first_name" class="block w-full text-gray-900 bg-gray-200 rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder="Phantom">
                  <option value="phantom">Phantom</option>
                  <option value="metamask">MetaMask</option>
                  <option value="walletconnect">WalletConnect</option>
                </select>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Secondary Address</label>
                <input type="text" name="floating_company" id="floating_company" class="block w-full text-gray-900 bg-white rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder=" " required />
              </div>
            </div>
            <div class="grid xl:grid-cols-2 xl:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Secondary Wallet</label>
                <select name="floating_first_name" id="floating_first_name" class="block w-full text-gray-900 bg-gray-200 rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder="Phantom">
                  <option value="phantom">Phantom</option>
                  <option value="metamask">MetaMask</option>
                  <option value="walletconnect">WalletConnect</option>
                </select>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Secondary Address</label>
                <input type="text" name="floating_company" id="floating_company" class="block w-full text-gray-900 bg-white rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder=" " required />
              </div>
            </div>
            <div class="grid xl:grid-cols-2 xl:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Secondary Wallet</label>
                <select name="floating_first_name" id="floating_first_name" class="block w-full text-gray-900 bg-gray-200 rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder="Phantom">
                  <option value="phantom">Phantom</option>
                  <option value="metamask">MetaMask</option>
                  <option value="walletconnect">WalletConnect</option>
                </select>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Secondary Address</label>
                <input type="text" name="floating_company" id="floating_company" class="block w-full text-gray-900 bg-white rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder=" " required />
              </div>
            </div>
            <div class="grid xl:grid-cols-2 xl:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Secondary Wallet</label>
                <select name="floating_first_name" id="floating_first_name" class="block w-full text-gray-900 bg-gray-200 rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder="Phantom">
                  <option value="phantom">Phantom</option>
                  <option value="metamask">MetaMask</option>
                  <option value="walletconnect">WalletConnect</option>
                </select>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Secondary Address</label>
                <input type="text" name="floating_company" id="floating_company" class="block w-full text-gray-900 bg-white rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder=" " required />
              </div>
            </div>
          </form>
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
        current: false
      },
      {
        name: 'Manage Profile',
        href: `/id/${encodedid}/profile`,
        current: true
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
