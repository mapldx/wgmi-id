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
      </h1>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mb-24">
      <div class="py-12 mb-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
        <div class="flex flex-col lg:flex-row">
          <div class="max-w-xl pr-16 mx-auto mb-10">
            <h5 class="mb-6 text-3xl font-extrabold leading-none">
              Your verifiable information
            </h5>
            <p class="mb-6 text-gray-900">
              If your main wallet is an Ethereum-compatible wallet (e.g. MetaMask), you are eligible to get your account verified on the blockchain. We do this by minting an NFT to your wallet, at no cost to you, to:
            <ul class="mt-4 ml-8 mb-4" style="list-style-type: circle">
              <li>verify ownership of your input Ethereum wallet address, and</li>
              <li>show ownership of your wgmi.ID.</li>
            </ul>
            </p>
            <p class="mb-6 text-gray-900">
              This NFT is a proof-of-ownership token on the Polygon Network (MATIC).<a href="" class="text-blue-400"> Why Polygon?</a>
            </p>
            <p class="mb-6 text-gray-900">
              <span class="font-semibold">Do not sell, list, or transfer this NFT as it will make this dashboard inaccessible to you.</span>
            </p>
            <p class="mb-6 text-gray-900">
              By choosing to verify, you will henceforth not be able to change any of the information in this section.
            </p>
            <p class="mb-6 text-gray-900">Verification for Solana-based wallet addresses is coming soon.</p>
            <button type="button" @click="verify"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Verify
              Now</button>
          </div>
          <form class="w-full" ref="info" @submit.prevent="infoForm">
            <div class="relative z-0 mb-6 w-full group">
              <label for="floating_email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
              <div class="flex">
                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-white rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  @
                </span>
                <input v-if="u.attributes.verified == 'true'" type="text" class="block w-full text-gray-900 bg-white rounded-r-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" :value="user.username" disabled />
                <input v-else type="text" v-model="form['new_username']" class="block w-full text-gray-900 bg-white rounded-r-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" :placeholder="user.username" required />
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
                <label for="floating_first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Main Wallet's Network</label>
                <select name="floating_first_name" id="floating_first_name" class="block w-full text-gray-900 bg-gray-200 rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" disabled>
                  <option v-if="user.ethAddress != null" value="ethereum">Ethereum</option>
                  <option v-if="user.solAddress != null" value="solana">Solana</option>
                </select>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Main Address</label>
                <input v-if="u.attributes.ethAddress != null" type="text" name="floating_last_name" id="floating_last_name"
                  class="block w-full text-gray-900 bg-gray-200 rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" :value="u.attributes.ethAddress" disabled />
                <input v-else type="text" name="floating_last_name" id="floating_last_name" class="block w-full text-gray-900 bg-gray-200 rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                  :value="u.attributes.ethAddress" disabled />
              </div>
            </div>
            <!--
            <div class="grid xl:grid-cols-2 xl:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Secondary Wallet's Network</label>
                <select name="floating_first_name" id="floating_first_name" class="block w-full text-gray-900 rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500">
                  <option value="ethereum">Ethereum</option>
                  <option value="solana">Solana</option>
                  <option value="cardano">Cardano</option>
                  <option v-if="user.altNetwork == 'Ethereum'" value="ethereum" selected hidden>Ethereum</option>
                  <option v-if="user.altNetwork == 'Solana'" value="solana" selected hidden>Solana</option>
                  <option v-if="user.altNetwork == 'Cardano'" value="cardano" selected hidden>Cardano</option>
                </select>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Secondary Address</label>
                <input type="text" name="floating_company" id="floating_company" class="block w-full text-gray-900 bg-white rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" :value="user.altAddress" required />
              </div>
            </div>
            -->
            <div class="relative z-0 mb-6 w-full group">
              <label for="floating_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">IPFS Metadata URL</label>
              <input :value="ipfsUrl" type="password" name="floating_password" id="floating_password" class="block w-full text-gray-900 bg-gray-200 rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Unverified" disabled />
            </div>
            <button type="button" @click="info"
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
              Add a fun title and take 160 characters of fun to convey essential information you want the rest of the world to know about who you are across Web 2, communities, DAOs, metaverse worlds, and so much more.
            </p>
          </div>
          <form class="w-full" ref="info" @submit.prevent="infoForm">
            <label for="message" class="block bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 mb-2 rounded dark:bg-yellow-200 dark:text-yellow-900">Title ≤ 20 characters</label>
            <input type="text" id="message" rows="1" v-model="form['new_title']"
              class="block p-2.5 mb-6 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :placeholder="user.profileTitle" />
            <label for="message" class="block bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 mb-2 rounded dark:bg-yellow-200 dark:text-yellow-900">Bio ≤ 160 characters</label>
            <textarea id="message" rows="4" v-model="form['new_bio']"
              class="block p-2.5 mb-6 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              :placeholder="user.profileBio"></textarea>
            <button type="button" @click="bio"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save
              Section</button>
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
          </div>
          <form class="w-full" ref="info" @submit.prevent="infoForm">
            <div class="grid xl:grid-cols-2 xl:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Link</label>
                <input v-model="form['new_link1Platform']" type="text" name="floating_company" id="floating_company" class="block w-full text-gray-900 bg-white rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                  :placeholder="user.profileLink1Platform" required />
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Link Address</label>
                <input v-model="form['new_link1Target']" type="text" name="floating_company" id="floating_company" class="block w-full text-gray-900 bg-white rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                  :placeholder="user.profileLink1Target" required />
              </div>
            </div>
            <div class="grid xl:grid-cols-2 xl:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Second Link</label>
                <input v-model="form['new_link2Platform']" type="text" name="floating_company" id="floating_company" class="block w-full text-gray-900 bg-white rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                  :placeholder="user.profileLink2Platform" required />
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Link Address</label>
                <input v-model="form['new_link2Target']" type="text" name="floating_company" id="floating_company" class="block w-full text-gray-900 bg-white rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                  :placeholder="user.profileLink2Target" required />
              </div>
            </div>
            <!--
            <div class="grid xl:grid-cols-2 xl:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Third Link</label>
                <input type="email" name="floating_email" class="block w-full text-gray-900 bg-gray-200 rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder=" " disabled />
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Link Address</label>
                <input type="text" name="floating_company" id="floating_company" class="block w-full text-gray-900 bg-gray-200 rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder="" disabled />
              </div>
            </div>
            <div class="grid xl:grid-cols-2 xl:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fourth Link</label>
                <input type="email" name="floating_email" class="block w-full text-gray-900 bg-gray-200 rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder=" " disabled />
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <label for="floating_company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Link Address</label>
                <input type="text" name="floating_company" id="floating_company" class="block w-full text-gray-900 bg-gray-200 rounded-md border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500" placeholder=" " disabled />
              </div>
            </div>
          -->
            <button type="submit" @click="links"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save
              Section</button>
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
  data() {
    return {
      form: {}
    }
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
        current: true
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
      verified: u.attributes.verified,
      username: u.attributes.username,
      ethAddress: u.attributes.ethAddress,
      solAddress: u.attributes.solAddress,
      altNetwork: u.attributes.altNetwork,
      altAddress: u.attributes.altAddress,
      ipfsUrl: u.attributes.ipfsUrl,
      profileBio: u.attributes.profileBio,
      profileLink1Platform: u.attributes.profileLink1Platform,
      profileLink1Target: u.attributes.profileLink1Target,
      profileLink2Platform: u.attributes.profileLink2Platform,
      profileLink2Target: u.attributes.profileLink2Target
    }

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
      u,
      user,
      logout,
      navigation,
      isAuthenticated: computed(() => Object.keys(store.state.user).length > 0)
    }
  },
  methods: {
    verify: async () => {
      try {
        const Moralis = require('moralis')
        const u = Moralis.User.current()
        const axios = require('axios')
        const API_KEY = '89b40ed9-dae1-4d72-9af3-61bf14f33a01'
        var obj = {
          data: []
        }
        obj.data.push({
          id: u.id,
          createdAt: u.attributes.createdAt,
          username: u.attributes.username,
          address: 'wgmi.id/' + u.attributes.username,
          ethAddress: u.attributes.ethAddress
        })
        const file = new Moralis.File("verify.json", {
          base64: btoa(JSON.stringify(obj))
        })
        await file.saveIPFS()
        const options = {
          method: 'POST',
          url: 'https://api.nftport.xyz/v0/mints/easy/urls',
          headers: {
            'Content-Type': 'application/json',
            Authorization: API_KEY
          },
          data: {
            chain: 'polygon',
            name: 'wgmi.id/' + u.attributes.username,
            description: 'wgmi.ID verification token for ' + u.attributes.username + '. Verified on ' + Date() + '.',
            file_url: file.ipfs(),
            mint_to_address: u.attributes.ethAddress
          }
        }
        setTimeout(function() {
          axios.request(options).then(function(response) {
            console.log(response.data)
            u.set("ipfsUrl", file.hash())
            u.set("verified", "true")
            u.save()
          }).catch(function(error) {
            console.error(error)
          })
        }, 0)
      } catch (error) {
        console.log(error)
      }
    },
    info() {
      try {
        const Moralis = require('moralis')
        const u = Moralis.User.current()
        u.set("username", this.form.new_username)
        console.log(u)
        u.save().then(() => {
          location.reload()
        })
      } catch (error) {
        console.log(error)
      }
    },
    bio() {
      try {
        const Moralis = require('moralis')
        const u = Moralis.User.current()
        u.set("profileTitle", this.form.new_title)
        u.set("profileBio", this.form.new_bio)
        u.save()
      } catch (error) {
        console.log(error)
      }
    },
    links() {
      try {
        const Moralis = require('moralis')
        const u = Moralis.User.current()
        console.info(this.form.new_link1Target)
        u.set("profileLink1Platform", this.form.new_link1Platform)
        u.set("profileLink1Target", this.form.new_link1Target)
        u.set("profileLink2Platform", this.form.new_link2Platform)
        u.set("profileLink2Target", this.form.new_link2Target)
        u.save()
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
