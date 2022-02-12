<template>
<div class="flex flex-wrap h-screen w-screen">
  <div class="lg:w-2/3 bg-gradient-to-r from-logo-10 to-logo-20 w-screen w-full">
    <div class="flex items-center w-full bg-cover card bg-white-200 mt-24">
      <div class="card w-3/5 lg:card-side text-neutral-content bg-white p-8">
        <div class="grid lg:grid-cols-2 items-center align-center text-center">
          <div class="lg:pr-10">
            <div class="inline-flex mb-4">
              <span v-if="verified == 'true'" class="bg-green-100 text-green-800 mr-4 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-lg dark:bg-blue-200 dark:text-blue-800">
                <img src="https://img.icons8.com/ios/50/2e7d32/checked-checkbox--v1.png" class="h-4 mr-2" />
                verified on-chain
              </span>
              <span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-lg dark:bg-blue-200 dark:text-blue-800">
                <img src="https://img.icons8.com/ios/50/1565c0/insurance-agent.png" class="h-4 mr-2" />
                wgmi.id doxxed
              </span>
            </div>
            <h5 class="mb-4 text-4xl font-extrabold leading-none text-black">
              <span class="inline-block text-deep-purple-accent-400">{{ username }}</span>'s {{ title }}
            </h5>
            <p class="mb-6 text-gray-900">
              {{ bio }}
            </p>
          </div>
          <div class="relative text-black">
            <label class="input-group input-group-vertical input-group-md mb-4">
              <span>wgmi.ID Address</span>
              <input type="text" :value=url class="input input-bordered input-md" disabled>
            </label>
            <label class="input-group input-group-vertical input-group-md">
              <span>IPFS Hash</span>
              <input type="text" :value=ipfs class="input input-bordered input-md" disabled>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="px-24 mt-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div class="grid gap-6 row-gap-5 mb-4 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <a v-for="el in nft" v-bind:key="el.name" href="/" aria-label="View Item">
          <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img class="object-cover w-full h-56 md:h-64 xl:h-80" :src=el.image alt="" />
            <div class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p class="mb-4 text-lg font-bold text-gray-100">{{ el.name }}</p>
              <p class="text-sm tracking-wide text-gray-300">
                {{ el.description }}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="w-full lg:w-1/3 bg-white px-20 py-48">
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <li class="mb-10 ml-6">
        <span class="flex absolute -left-3 justify-center items-center w-12 h-12 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
          </svg>
        </span>
        <h3 class="ml-8 flex items-center mb-1 text-xl font-semibold text-gray-900 dark:text-white">Wallet Address<span v-if="verified == true"
            class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Verified</span></h3>
        <p class="ml-8 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ eth }}</p>
        <a href="#" v-if="eth != null"
          class="ml-8 inline-flex items-center py-2 px-4 mr-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg
            class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
              clip-rule="evenodd"></path>
          </svg> Pay with MetaMask</a>
        <a v-if="eth != null" href="#"
          class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg
            class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
              clip-rule="evenodd"></path>
          </svg> View on Etherscan</a>
          <a v-else href="#"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg
              class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                clip-rule="evenodd"></path>
            </svg> View on Solscan</a>
      </li>
      <li class="mb-10 ml-6">
        <span class="flex absolute -left-3 justify-center items-center w-12 h-12 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
          </svg>
        </span>
        <h3 class="ml-8 mb-1 text-xl font-semibold text-gray-900 dark:text-white">{{ l1p }}</h3>
        <p class="ml-8 text-base mb-4 font-normal text-gray-500 dark:text-gray-400">{{ l1t }}</p>
        <a href="#"
          class="ml-8 inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg
            class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
              clip-rule="evenodd"></path>
          </svg> Open Twitter</a>
      </li>
      <li class="mb-10 ml-6">
        <span class="flex absolute -left-3 justify-center items-center w-12 h-12 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
          </svg>
        </span>
        <h3 class="ml-8 mb-1 text-xl font-semibold text-gray-900 dark:text-white">{{ l2p }}</h3>
        <p class="ml-8 text-base mb-4 font-normal text-gray-500 dark:text-gray-400">{{ l2t }}</p>
        <a href="#"
          class="ml-8 inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg
            class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
              clip-rule="evenodd"></path>
          </svg> DM on Discord</a>
      </li>
    </ol>
    <footer class="bg-white rounded-lg dark:bg-gray-800">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="../assets/icon.png" target="_blank" class="flex items-center sm:mb-0">
            <img src="../assets/cover.png" class="mr-2 h-6" />
        </a>
    </div>
    <hr class="border-gray-200 sm:mx-auto dark:border-gray-700 mt-4 mb-4" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 float-left">A product of 🍕  from Manila, Philippines © 2022 mapl Web3 Labs
    </span>
</footer>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import user from '../scripts/user.js'

export default {
  name: 'Public',
  components: {},
  data() {
    return {
      url: null,
      username: null,
      title: null,
      bio: null,
      verified: null,
      irl: null,
      ipfs: null,
      eth: null,
      sol: null,
      l1p: null,
      l1t: null,
      l2p: null,
      l2t: null,
      nft: {}
    }
  },
  // Here the component is yet to be loaded
  beforeRouteEnter(to, from, next) {
    const path = (window.location.pathname).substring(1)
    user(path, (nft, balance) => {
      next(vm => vm.setBalance(nft, balance));
    });
  },
  // On calling beforeRouteUpdate, the component is loaded and the route changes
  beforeRouteUpdate(to, from, next) {
    const path = (window.location.pathname).substring(1)
    this.user = null;
    user(path, (nft, balance) => {
      this.setBalance(nft, balance);
      next();
    });
  },
  methods: {
    setBalance(nft, balance) {
      this.url = 'wgmi.id/' + balance.username
      this.username = balance.username
      this.title = balance.profileTitle
      this.bio = balance.profileBio
      this.verified = balance.verified
      this.irl = balance.profileIrl
      this.ipfs = balance.ipfsUrl
      this.eth = balance.ethAddress
      this.sol = balance.solAddress
      this.l1p = balance.profileLink1Platform
      this.l1t = balance.profileLink1Target
      this.l2p = balance.profileLink2Platform
      this.l2t = balance.profileLink2Target
      this.nft = nft
      console.log(balance)
      console.log(this.nft)
    }
  }
}
</script>
