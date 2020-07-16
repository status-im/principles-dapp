import Header from '../components/header'

export default function PrivacyPage() {
  return (
    <div className="max-w-md mx-auto px-4">
      <Header />
      <form className="bg-white rounded p-4 text-center">
        <span className="bg-blue-200 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
          <svg className="fill-current w-12 h-12" width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.4375 16.2991C31.4375 15.2548 31.0226 14.2533 30.2842 13.5148C29.5458 12.7764 28.5443 12.3616 27.5 12.3616C26.4557 12.3616 25.4542 12.7764 24.7157 13.5148C23.9773 14.2533 23.5625 15.2548 23.5625 16.2991V19.6741C23.5625 19.8233 23.6217 19.9663 23.7272 20.0718C23.8327 20.1773 23.9758 20.2366 24.125 20.2366H30.875C31.0242 20.2366 31.1672 20.1773 31.2727 20.0718C31.3782 19.9663 31.4375 19.8233 31.4375 19.6741V16.2991Z" fill="#4360DF"/>
            <path d="M54.5 4.39461C54.4929 3.23106 54.026 2.11754 53.2011 1.29688C52.3762 0.476224 51.2603 0.0150211 50.0967 0.013855H4.90775C3.74324 0.0203971 2.6287 0.487742 1.80778 1.31371C0.986875 2.13968 0.526387 3.25708 0.527 4.42161L0.5 20.9389C0.559044 28.6482 3.2306 36.1097 8.07826 42.1045C12.9259 48.0993 19.6632 52.2731 27.1895 53.9441C27.3332 53.9729 27.4794 53.9872 27.626 53.9869C27.7772 53.9863 27.928 53.9704 28.076 53.9396C35.5872 52.2022 42.2873 47.9692 47.0818 41.9319C51.8763 35.8946 54.4819 28.4099 54.473 20.7004L54.5 4.39461ZM17.375 34.8619V22.4869C17.375 21.8901 17.6121 21.3178 18.034 20.8959C18.456 20.4739 19.0283 20.2369 19.625 20.2369H20.1875V16.2994C20.1875 14.36 20.9579 12.5 22.3293 11.1286C23.7006 9.75728 25.5606 8.98686 27.5 8.98686C29.4394 8.98686 31.2994 9.75728 32.6707 11.1286C34.0421 12.5 34.8125 14.36 34.8125 16.2994V20.2369H35.375C35.9717 20.2369 36.544 20.4739 36.966 20.8959C37.3879 21.3178 37.625 21.8901 37.625 22.4869V34.8619C37.625 35.4586 37.3879 36.0309 36.966 36.4529C36.544 36.8748 35.9717 37.1119 35.375 37.1119H19.625C19.0283 37.1119 18.456 36.8748 18.034 36.4529C17.6121 36.0309 17.375 35.4586 17.375 34.8619Z" fill="#4360DF"/>
            <path d="M27.5 32.6111C29.0533 32.6111 30.3125 31.3519 30.3125 29.7986C30.3125 28.2453 29.0533 26.9861 27.5 26.9861C25.9467 26.9861 24.6875 28.2453 24.6875 29.7986C24.6875 31.3519 25.9467 32.6111 27.5 32.6111Z" fill="#4360DF"/>
          </svg>
        </span>

        <h1 className="font-bold text-2xl mt-4">Privacy</h1>
        <p className="mt-4 text-gray-700">Privacy is the power to selectively reveal oneself to the world Your signature will live on the Ethereum blockchain as well as a public signature board for the world to see. If you hold an ENS name, you can choose to include that ENS or maintain your pseudonimty and only include the ethereum address tied to the signature.</p>
        <div className="flex items-center mt-8 font-bold">
          <input type="radio" name="ens-name" id="inp-check-yes" value="" className="w-5 h-5" checked />
          <label for="inp-check-yes" className="ml-3 cursor-pointer">
            Include my ENS Name
          </label>
        </div>
        <div className="flex items-center mt-2 font-bold">
          <input type="radio" name="ens-name" id="inp-check-no" value="" className="w-5 h-5" />
          <label for="inp-check-no" className="ml-3 cursor-pointer">
            Not include my ENS Name
          </label>
        </div>
        <a href="/thank" title="" className="bg-blue-900 border-2 border-blue-900 hover:border-blue-800 px-4 py-3 rounded text-white text-center block hover:bg-blue-800 cursor-pointer mt-4">Sign in now</a>
      </form>
    </div>
  )
}
