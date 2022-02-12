<template>
<!-- Section 1 -->
<section class="w-full antialiased h-screen">
  <canvas id="granim-canvas" class="fixed w-screen h-screen" style="z-index: -9999;"></canvas>
  <div class="mx-auto max-w-7xl" style="z-index: 9999;">
    <div class="px-4 py-5 mx-auto max-w-screen-xl sm:px-24 sm:px-8">
      <div class="relative flex grid items-center mt-8 grid-cols-3">
        <ul class="flex items-center space-x-8">
        </ul>
        <a href="/" aria-label="Company" title="Company" class="inline-flex items-center mx-auto">
          <img src="../assets/vector/isolated-monochrome-white.svg" class="w-32">
        </a>
      </div>
    </div>
    <div class="container py-24 mx-auto text-center sm:px-4">

      <h1 class="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"><span class="block">Your Web 3 identity</span> <span
          class="relative inline-block mt-3 text-transparent text-white">just the way you like it</span></h1>
      <div class="max-w-lg mx-auto mt-6 text-sm text-center font-semibold text-white md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">The future is multi-chain and so are your Punks, Apes, virtual worlds, P2E collectibles, and so
        much more.
      </div>
      <div class="max-w-lg mx-auto text-sm mt-4 text-center font-semibold text-white sm:text-base md:max-w-xl md:text-lg xl:text-xl">Your <span class="bg-gradient-to-r from-logo-10 to-logo-20 p-1 rounded-md"> wgmi.id</span> address is your universal
        Web 2 and 3 address to show 'em all.</div>
      <div class="relative flex items-center max-w-xl mx-auto mt-8 overflow-hidden text-center">
        <span class="relative top-0 right-0 block">
          <span class="inline-flex items-center rounded-l-md w-28 h-12 px-6 text-base font-bold leading-6 text-white bg-indigo-400 border border-transparent">
            wgmi.id/
          </span>
        </span>
        <input type="text" name="email" placeholder="satoshi" class="w-full h-12 px-6 py-2 font-medium text-indigo-800 focus:outline-none">
        <span class="relative top-0 right-0 block">
          <button type="button"
            class="rounded-r-lg inline-flex items-center w-48 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-400 border border-transparent hover:bg-indigo-700 focus:outline-none active:bg-indigo-700">
            Claim username
          </button>
        </span>
      </div>
      <div class="mt-8 text-sm text-white">Already have a wgmi.id address? <button type="button" data-modal-toggle="signin" class="font-semibold">Sign in here →</button></div>

      <!-- Main modal -->
      <div id="signin" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
        <div class="relative px-4 w-full max-w-md h-full md:h-auto">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex justify-between items-center py-4 px-6 rounded-t border-b dark:border-gray-600">
              <h3 class="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                Connect wallet
              </h3>
              <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="signin">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
            <!-- Modal body -->
            <div class="p-6">
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p>
              <ul class="my-4 space-y-3">
                <li>
                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <svg class="h-4" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z" fill="#E17726" />
                      <path d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z" fill="#E27625" />
                      <path d="M32.1656 27.0093L39.7516 27.1537L37.1004 36.1603L27.8438 33.6116L32.1656 27.0093Z" fill="#E27625" />
                      <path d="M7.83409 27.0093L12.1399 33.6116L2.89876 36.1604L0.263672 27.1537L7.83409 27.0093Z" fill="#E27625" />
                      <path d="M17.5203 10.8677L17.8304 20.8807L8.55371 20.4587L11.1924 16.4778L11.2258 16.4394L17.5203 10.8677Z" fill="#E27625" />
                      <path d="M22.3831 10.7559L28.7737 16.4397L28.8067 16.4778L31.4455 20.4586L22.1709 20.8806L22.3831 10.7559Z" fill="#E27625" />
                      <path d="M12.4115 27.0381L17.4768 30.9848L11.5928 33.8257L12.4115 27.0381Z" fill="#E27625" />
                      <path d="M27.5893 27.0376L28.391 33.8258L22.5234 30.9847L27.5893 27.0376Z" fill="#E27625" />
                      <path d="M22.6523 30.6128L28.6066 33.4959L23.0679 36.1282L23.1255 34.3884L22.6523 30.6128Z" fill="#D5BFB2" />
                      <path d="M17.3458 30.6143L16.8913 34.3601L16.9286 36.1263L11.377 33.4961L17.3458 30.6143Z" fill="#D5BFB2" />
                      <path d="M15.6263 22.1875L17.1822 25.4575L11.8848 23.9057L15.6263 22.1875Z" fill="#233447" />
                      <path d="M24.3739 22.1875L28.133 23.9053L22.8184 25.4567L24.3739 22.1875Z" fill="#233447" />
                      <path d="M12.8169 27.0049L11.9606 34.0423L7.37109 27.1587L12.8169 27.0049Z" fill="#CC6228" />
                      <path d="M27.1836 27.0049L32.6296 27.1587L28.0228 34.0425L27.1836 27.0049Z" fill="#CC6228" />
                      <path d="M31.5799 20.0605L27.6165 24.0998L24.5608 22.7034L23.0978 25.779L22.1387 20.4901L31.5799 20.0605Z" fill="#CC6228" />
                      <path d="M8.41797 20.0605L17.8608 20.4902L16.9017 25.779L15.4384 22.7038L12.3988 24.0999L8.41797 20.0605Z" fill="#CC6228" />
                      <path d="M8.15039 19.2314L12.6345 23.7816L12.7899 28.2736L8.15039 19.2314Z" fill="#E27525" />
                      <path d="M31.8538 19.2236L27.2061 28.2819L27.381 23.7819L31.8538 19.2236Z" fill="#E27525" />
                      <path d="M17.6412 19.5088L17.8217 20.6447L18.2676 23.4745L17.9809 32.166L16.6254 25.1841L16.625 25.1119L17.6412 19.5088Z" fill="#E27525" />
                      <path d="M22.3562 19.4932L23.3751 25.1119L23.3747 25.1841L22.0158 32.1835L21.962 30.4328L21.75 23.4231L22.3562 19.4932Z" fill="#E27525" />
                      <path d="M27.7797 23.6011L27.628 27.5039L22.8977 31.1894L21.9414 30.5138L23.0133 24.9926L27.7797 23.6011Z" fill="#F5841F" />
                      <path d="M12.2373 23.6011L16.9873 24.9926L18.0591 30.5137L17.1029 31.1893L12.3723 27.5035L12.2373 23.6011Z" fill="#F5841F" />
                      <path d="M10.4717 32.6338L16.5236 35.5013L16.4979 34.2768L17.0043 33.8323H22.994L23.5187 34.2753L23.48 35.4989L29.4935 32.641L26.5673 35.0591L23.0289 37.4894H16.9558L13.4197 35.0492L10.4717 32.6338Z" fill="#C0AC9D" />
                      <path d="M22.2191 30.231L23.0748 30.8354L23.5763 34.8361L22.8506 34.2234H17.1513L16.4395 34.8485L16.9244 30.8357L17.7804 30.231H22.2191Z" fill="#161616" />
                      <path d="M37.9395 0.351562L39.9998 6.53242L38.7131 12.7819L39.6293 13.4887L38.3895 14.4346L39.3213 15.1542L38.0875 16.2779L38.8449 16.8264L36.8347 19.1742L28.5894 16.7735L28.5179 16.7352L22.5762 11.723L37.9395 0.351562Z"
                        fill="#763E1A" />
                      <path d="M2.06031 0.351562L17.4237 11.723L11.4819 16.7352L11.4105 16.7735L3.16512 19.1742L1.15488 16.8264L1.91176 16.2783L0.678517 15.1542L1.60852 14.4354L0.350209 13.4868L1.30098 12.7795L0 6.53265L2.06031 0.351562Z"
                        fill="#763E1A" />
                      <path d="M28.1861 16.2485L36.9226 18.7921L39.7609 27.5398L32.2728 27.5398L27.1133 27.6049L30.8655 20.2912L28.1861 16.2485Z" fill="#F5841F" />
                      <path d="M11.8139 16.2485L9.13399 20.2912L12.8867 27.6049L7.72971 27.5398H0.254883L3.07728 18.7922L11.8139 16.2485Z" fill="#F5841F" />
                      <path d="M25.5283 5.17383L23.0847 11.7736L22.5661 20.6894L22.3677 23.4839L22.352 30.6225H17.6471L17.6318 23.4973L17.4327 20.6869L16.9139 11.7736L14.4707 5.17383H25.5283Z" fill="#F5841F" />
                    </svg>
                    <span class="flex-1 whitespace-nowrap text-center">MetaMask</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <svg class="h-5" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <radialGradient cx="0%" cy="50%" fx="0%" fy="50%" r="100%" id="radialGradient-1">
                          <stop stop-color="#5D9DF6" offset="0%"></stop>
                          <stop stop-color="#006FFF" offset="100%"></stop>
                        </radialGradient>
                      </defs>
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="logo">
                          <rect id="base" fill="url(#radialGradient-1)" x="0" y="0" width="512" height="512" rx="256"></rect>
                          <path
                            d="M169.209772,184.531136 C217.142772,137.600733 294.857519,137.600733 342.790517,184.531136 L348.559331,190.179285 C350.955981,192.525805 350.955981,196.330266 348.559331,198.676787 L328.82537,217.99798 C327.627045,219.171241 325.684176,219.171241 324.485851,217.99798 L316.547278,210.225455 C283.10802,177.485633 228.89227,177.485633 195.453011,210.225455 L186.951456,218.549188 C185.75313,219.722448 183.810261,219.722448 182.611937,218.549188 L162.877976,199.227995 C160.481326,196.881474 160.481326,193.077013 162.877976,190.730493 L169.209772,184.531136 Z M383.602212,224.489406 L401.165475,241.685365 C403.562113,244.031874 403.562127,247.836312 401.165506,250.182837 L321.971538,327.721548 C319.574905,330.068086 315.689168,330.068112 313.292501,327.721609 C313.292491,327.721599 313.29248,327.721588 313.29247,327.721578 L257.08541,272.690097 C256.486248,272.103467 255.514813,272.103467 254.915651,272.690097 C254.915647,272.690101 254.915644,272.690105 254.91564,272.690108 L198.709777,327.721548 C196.313151,330.068092 192.427413,330.068131 190.030739,327.721634 C190.030725,327.72162 190.03071,327.721606 190.030695,327.721591 L110.834524,250.181849 C108.437875,247.835329 108.437875,244.030868 110.834524,241.684348 L128.397819,224.488418 C130.794468,222.141898 134.680206,222.141898 137.076856,224.488418 L193.284734,279.520668 C193.883897,280.107298 194.85533,280.107298 195.454493,279.520668 C195.454502,279.520659 195.45451,279.520651 195.454519,279.520644 L251.65958,224.488418 C254.056175,222.141844 257.941913,222.141756 260.338618,224.488222 C260.338651,224.488255 260.338684,224.488288 260.338717,224.488321 L316.546521,279.520644 C317.145683,280.107273 318.117118,280.107273 318.71628,279.520644 L374.923175,224.489406 C377.319825,222.142885 381.205562,222.142885 383.602212,224.489406 Z"
                            id="WalletConnect" fill="#FFFFFF" fill-rule="nonzero"></path>
                        </g>
                      </g>
                    </svg>
                    <span class="flex-1 whitespace-nowrap text-center">WalletConnect</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <svg class="h-5" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="64" cy="64" r="64" fill="url(#paint0_linear)" />
                      <path
                        d="M110.584 64.9142H99.142C99.142 41.7651 80.173 23 56.7724 23C33.6612 23 14.8716 41.3057 14.4118 64.0583C13.936 87.577 36.241 108 60.0186 108H63.0094C83.9723 108 112.069 91.7667 116.459 71.9874C117.27 68.3413 114.358 64.9142 110.584 64.9142ZM39.7689 65.9454C39.7689 69.0411 37.2095 71.5729 34.0802 71.5729C30.9509 71.5729 28.3916 69.0399 28.3916 65.9454V56.8414C28.3916 53.7457 30.9509 51.2139 34.0802 51.2139C37.2095 51.2139 39.7689 53.7457 39.7689 56.8414V65.9454ZM59.5224 65.9454C59.5224 69.0411 56.9631 71.5729 53.8338 71.5729C50.7045 71.5729 48.1451 69.0399 48.1451 65.9454V56.8414C48.1451 53.7457 50.7056 51.2139 53.8338 51.2139C56.9631 51.2139 59.5224 53.7457 59.5224 56.8414V65.9454Z"
                        fill="url(#paint1_linear)" />
                      <defs>
                        <linearGradient id="paint0_linear" x1="64" y1="0" x2="64" y2="128" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#534BB1" />
                          <stop offset="1" stop-color="#551BF9" />
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="65.4998" y1="23" x2="65.4998" y2="108" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white" />
                          <stop offset="1" stop-color="white" stop-opacity="0.82" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span class="flex-1 whitespace-nowrap text-center">Phantom</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 border-solid border-2 border-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <span class="flex-1 ml-3 whitespace-nowrap text-center">Log in with email</span>
                  </a>
                </li>
              </ul>
              <div>
                <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="top" type="button" href="#" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                  <svg class="mr-2 w-3 h-3" aria-hidden="true" focusable="false" data-prefix="far" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z">
                    </path>
                  </svg>
                  Why do I need to connect my wallet?</button>
                <div id="tooltip-bottom" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-400 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  By connecting your wallet, we are able to verify your identity on-chain, automagically retrieve new NFTs and update metadata for you, and provide you with earlier access to new features. <br><br>At any given time, we <b class="text-blue-500">cannot</b> make any transactions with your wallet on your behalf.
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
// @ is an alias to /src
import {
  onMounted,
  inject,
  computed
} from 'vue'
import {
  useStore
} from 'vuex'
import router from '@/router'
import granim from 'granim'

export default {
  name: 'Header',
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
  components: {},
  setup() {
    const store = useStore()
    const $moralis = inject('$moralis')
    const setUser = (payload) => store.commit('setUser', payload)

    const authMeta = async () => {
      $moralis.authenticate().then(function(user) {
        var username = user.get('username');
        setUser(user)
        router.push({
          name: 'App',
          params: {
            username: username
          }
        })
      })
    }
    const authPhantom = async () => {
      $moralis.authenticate({
        type: 'sol'
      }).then(function(user) {
        var username = user.get('username');
        setUser(user)
        router.push({
          name: 'App',
          params: {
            username: username
          }
        })
      })
    }
    const authConnect = async () => {
      $moralis.authenticate({
        provider: "walletconnect"
      }).then(function(user) {
        var username = user.get('username');
        setUser(user)
        router.push({
          name: 'App',
          params: {
            username: username
          }
        })
      })
    }
    const logout = async () => {
      await $moralis.User.logOut()
      setUser({})
    }
    const handleCurrentUser = () => {
      const user = $moralis.User.current()
      if (user) {
        setUser(user)
      }
    }
    onMounted(() => {
      handleCurrentUser()
      var granimInstance = new granim({
        element: '#granim-canvas',
        name: 'granim',
        opacity: [1, 1],
        states: {
          "default-state": {
            gradients: [
              ['#8F5BFE', '#D3803E'],
              ['#D3803E', '#8F5BFE'],
              ['#EEEBD0', '#006D77'],
              ['#71816D', '#8F5BFE']
            ]
          }
        }
      })
      granimInstance()
    })
    return {
      authMeta,
      authPhantom,
      authConnect,
      logout,
      isAuthenticated: computed(() => Object.keys(store.state.user).length > 0),
      user: computed(() => store.state.user)
    }
  }
}
</script>
