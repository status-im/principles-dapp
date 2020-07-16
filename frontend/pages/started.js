import Header from '../components/header'

export default function StartedPage() {
  return (
    <div className="max-w-md mx-auto px-4 pb-48">
      <Header />
      <div className="bg-gray-900 rounded p-4 text-white">
        <h1 className="font-bold text-2xl">Our Principles</h1>
        <p className="font-bold mt-4 text-xl">Instruction</p>
        <div className="flex items-start mt-4 text-gray-500">
          <div className="flex flex-shrink-0 items-center justify-center bg-gray-700 rounded-full w-12 h-12 relative leading-none">
            <span className="absolute font-bold text-white">1</span>
          </div>
          <div className="ml-4">Review the principles below and then tap “Sign Principles”</div>
        </div>
        <div className="flex items-start mt-4 text-gray-500">
          <div className="flex flex-shrink-0 items-center justify-center bg-gray-700 rounded-full w-12 h-12 relative leading-none">
            <span className="absolute font-bold text-white">3</span>
          </div>
          <div className="ml-4">If you own a StateOfUs.eth ENS name, the gas fee to cover the cost of minting your badge will be covered by Status</div>
        </div>
        <div className="flex items-start mt-4 text-gray-500">
          <div className="flex flex-shrink-0 items-center justify-center bg-gray-700 rounded-full w-12 h-12 relative leading-none">
            <span className="absolute font-bold text-white">2</span>
          </div>
          <div className="ml-4">
            If you do not hold a StateOfUs.eth ENS name, you will need to pay the gas cost.
            <div className="mt-4">
              <a href="" title="" className="text-white hover:border-none font-bold">Register ENS Name</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-4">
        <p className="font-bold text-xl p-4">Our Principles</p>
        <div className="py-3 px-4">
          <a href="" title="" className="flex items-center justify-between">
            <div className="grid grid-cols-5 w-full">
              <span className="text-gray-500">I.</span>
              <span className="col-span-4">Liberty</span>
            </div>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4999 16.3316C10.2274 16.3319 9.95785 16.2741 9.70939 16.1621C9.46093 16.05 9.23923 15.8862 9.0591 15.6816L0.883266 6.38827C0.624857 6.08032 0.497191 5.68348 0.527566 5.28262C0.557941 4.88176 0.743946 4.50869 1.04581 4.24318C1.34767 3.97768 1.74143 3.84082 2.14289 3.86186C2.54435 3.8829 2.92164 4.06017 3.1941 4.35577L10.3433 12.4824C10.3628 12.5047 10.3869 12.5226 10.4139 12.5349C10.4409 12.5471 10.4703 12.5534 10.4999 12.5534C10.5296 12.5534 10.5589 12.5471 10.5859 12.5349C10.613 12.5226 10.637 12.5047 10.6566 12.4824L17.8058 4.35577C17.9376 4.19863 18.0996 4.06943 18.2821 3.97577C18.4646 3.8821 18.664 3.82587 18.8685 3.81037C19.0731 3.79487 19.2787 3.82042 19.4732 3.88551C19.6678 3.9506 19.8473 4.05392 20.0014 4.18941C20.1554 4.32489 20.2808 4.4898 20.3702 4.67444C20.4596 4.85907 20.5112 5.05972 20.5219 5.26458C20.5326 5.46944 20.5023 5.67438 20.4327 5.86735C20.3631 6.06032 20.2556 6.23743 20.1166 6.38827L11.9433 15.6783C11.7628 15.8833 11.5408 16.0477 11.2919 16.1603C11.0431 16.273 10.7731 16.3313 10.4999 16.3316V16.3316Z" fill="#5F616A"/>
            </svg>
          </a>
          <p className="mt-4">We believe in the sovereignty of individuals. As a platform that stands for the cause of personal liberty, we aim to maximize social, political, and economic freedoms. This includes being coercion-resistant.</p>
        </div>
        <span className="h-1 bg-gray-100 block"></span>
        <div className="py-3 px-4">
          <a href="" title="" className="flex items-center justify-between">
            <div className="grid grid-cols-5 w-full">
              <span className="text-gray-500">II.</span>
              <span className="col-span-4">Censorship Resistance</span>
            </div>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4999 16.3316C10.2274 16.3319 9.95785 16.2741 9.70939 16.1621C9.46093 16.05 9.23923 15.8862 9.0591 15.6816L0.883266 6.38827C0.624857 6.08032 0.497191 5.68348 0.527566 5.28262C0.557941 4.88176 0.743946 4.50869 1.04581 4.24318C1.34767 3.97768 1.74143 3.84082 2.14289 3.86186C2.54435 3.8829 2.92164 4.06017 3.1941 4.35577L10.3433 12.4824C10.3628 12.5047 10.3869 12.5226 10.4139 12.5349C10.4409 12.5471 10.4703 12.5534 10.4999 12.5534C10.5296 12.5534 10.5589 12.5471 10.5859 12.5349C10.613 12.5226 10.637 12.5047 10.6566 12.4824L17.8058 4.35577C17.9376 4.19863 18.0996 4.06943 18.2821 3.97577C18.4646 3.8821 18.664 3.82587 18.8685 3.81037C19.0731 3.79487 19.2787 3.82042 19.4732 3.88551C19.6678 3.9506 19.8473 4.05392 20.0014 4.18941C20.1554 4.32489 20.2808 4.4898 20.3702 4.67444C20.4596 4.85907 20.5112 5.05972 20.5219 5.26458C20.5326 5.46944 20.5023 5.67438 20.4327 5.86735C20.3631 6.06032 20.2556 6.23743 20.1166 6.38827L11.9433 15.6783C11.7628 15.8833 11.5408 16.0477 11.2919 16.1603C11.0431 16.273 10.7731 16.3313 10.4999 16.3316V16.3316Z" fill="#5F616A"/>
            </svg>
          </a>
          <p className="mt-4 hidden">We enable free flow of information. No content is under surveillance. We abide by the cryptoeconomic design principle of censorship resistance. Even stronger, Status is an agnostic platform for information.</p>
        </div>
        <span className="h-1 bg-gray-100 block"></span>
        <div className="py-3 px-4">
          <a href="" title="" className="flex items-center justify-between">
            <div className="grid grid-cols-5 w-full">
              <span className="text-gray-500">III.</span>
              <span className="col-span-4">Security</span>
            </div>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4999 16.3316C10.2274 16.3319 9.95785 16.2741 9.70939 16.1621C9.46093 16.05 9.23923 15.8862 9.0591 15.6816L0.883266 6.38827C0.624857 6.08032 0.497191 5.68348 0.527566 5.28262C0.557941 4.88176 0.743946 4.50869 1.04581 4.24318C1.34767 3.97768 1.74143 3.84082 2.14289 3.86186C2.54435 3.8829 2.92164 4.06017 3.1941 4.35577L10.3433 12.4824C10.3628 12.5047 10.3869 12.5226 10.4139 12.5349C10.4409 12.5471 10.4703 12.5534 10.4999 12.5534C10.5296 12.5534 10.5589 12.5471 10.5859 12.5349C10.613 12.5226 10.637 12.5047 10.6566 12.4824L17.8058 4.35577C17.9376 4.19863 18.0996 4.06943 18.2821 3.97577C18.4646 3.8821 18.664 3.82587 18.8685 3.81037C19.0731 3.79487 19.2787 3.82042 19.4732 3.88551C19.6678 3.9506 19.8473 4.05392 20.0014 4.18941C20.1554 4.32489 20.2808 4.4898 20.3702 4.67444C20.4596 4.85907 20.5112 5.05972 20.5219 5.26458C20.5326 5.46944 20.5023 5.67438 20.4327 5.86735C20.3631 6.06032 20.2556 6.23743 20.1166 6.38827L11.9433 15.6783C11.7628 15.8833 11.5408 16.0477 11.2919 16.1603C11.0431 16.273 10.7731 16.3313 10.4999 16.3316V16.3316Z" fill="#5F616A"/>
            </svg>
          </a>
          <p className="mt-4 hidden">We don't compromise on security when building features. We use state-of-the-art technologies, and research new security methods and technologies to make strong security guarantees.</p>
        </div>
        <span className="h-1 bg-gray-100 block"></span>
        <div className="py-3 px-4">
          <a href="" title="" className="flex items-center justify-between">
            <div className="grid grid-cols-5 w-full">
              <span className="text-gray-500">IV.</span>
              <span className="col-span-4">Privacy</span>
            </div>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4999 16.3316C10.2274 16.3319 9.95785 16.2741 9.70939 16.1621C9.46093 16.05 9.23923 15.8862 9.0591 15.6816L0.883266 6.38827C0.624857 6.08032 0.497191 5.68348 0.527566 5.28262C0.557941 4.88176 0.743946 4.50869 1.04581 4.24318C1.34767 3.97768 1.74143 3.84082 2.14289 3.86186C2.54435 3.8829 2.92164 4.06017 3.1941 4.35577L10.3433 12.4824C10.3628 12.5047 10.3869 12.5226 10.4139 12.5349C10.4409 12.5471 10.4703 12.5534 10.4999 12.5534C10.5296 12.5534 10.5589 12.5471 10.5859 12.5349C10.613 12.5226 10.637 12.5047 10.6566 12.4824L17.8058 4.35577C17.9376 4.19863 18.0996 4.06943 18.2821 3.97577C18.4646 3.8821 18.664 3.82587 18.8685 3.81037C19.0731 3.79487 19.2787 3.82042 19.4732 3.88551C19.6678 3.9506 19.8473 4.05392 20.0014 4.18941C20.1554 4.32489 20.2808 4.4898 20.3702 4.67444C20.4596 4.85907 20.5112 5.05972 20.5219 5.26458C20.5326 5.46944 20.5023 5.67438 20.4327 5.86735C20.3631 6.06032 20.2556 6.23743 20.1166 6.38827L11.9433 15.6783C11.7628 15.8833 11.5408 16.0477 11.2919 16.1603C11.0431 16.273 10.7731 16.3313 10.4999 16.3316V16.3316Z" fill="#5F616A"/>
            </svg>
          </a>
          <p className="mt-4 hidden">Privacy is the power to selectively reveal oneself to the world. For us, it's essential to protect privacy in both communications and transactions, as well as being a pseudo-anonymous platform. Additionally, we strive to provide the right of total anonymity.</p>
        </div>
        <span className="h-1 bg-gray-100 block"></span>
        <div className="py-3 px-4">
          <a href="" title="" className="flex items-center justify-between">
            <div className="grid grid-cols-5 w-full">
              <span className="text-gray-500">V.</span>
              <span className="col-span-4">Transparency</span>
            </div>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4999 16.3316C10.2274 16.3319 9.95785 16.2741 9.70939 16.1621C9.46093 16.05 9.23923 15.8862 9.0591 15.6816L0.883266 6.38827C0.624857 6.08032 0.497191 5.68348 0.527566 5.28262C0.557941 4.88176 0.743946 4.50869 1.04581 4.24318C1.34767 3.97768 1.74143 3.84082 2.14289 3.86186C2.54435 3.8829 2.92164 4.06017 3.1941 4.35577L10.3433 12.4824C10.3628 12.5047 10.3869 12.5226 10.4139 12.5349C10.4409 12.5471 10.4703 12.5534 10.4999 12.5534C10.5296 12.5534 10.5589 12.5471 10.5859 12.5349C10.613 12.5226 10.637 12.5047 10.6566 12.4824L17.8058 4.35577C17.9376 4.19863 18.0996 4.06943 18.2821 3.97577C18.4646 3.8821 18.664 3.82587 18.8685 3.81037C19.0731 3.79487 19.2787 3.82042 19.4732 3.88551C19.6678 3.9506 19.8473 4.05392 20.0014 4.18941C20.1554 4.32489 20.2808 4.4898 20.3702 4.67444C20.4596 4.85907 20.5112 5.05972 20.5219 5.26458C20.5326 5.46944 20.5023 5.67438 20.4327 5.86735C20.3631 6.06032 20.2556 6.23743 20.1166 6.38827L11.9433 15.6783C11.7628 15.8833 11.5408 16.0477 11.2919 16.1603C11.0431 16.273 10.7731 16.3313 10.4999 16.3316V16.3316Z" fill="#5F616A"/>
            </svg>
          </a>
          <p className="mt-4 hidden">We strive for complete openness and symmetry of information within the organization, and have no border between our core contributors and our community. We are frank about our shortcomings, especially when making short-term tradeoffs in service of our long-term goals.</p>
        </div>
        <span className="h-1 bg-gray-100 block"></span>
        <div className="py-3 px-4">
          <a href="" title="" className="flex items-center justify-between">
            <div className="grid grid-cols-5 w-full">
              <span className="text-gray-500">VI.</span>
              <span className="col-span-4">Openness</span>
            </div>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4999 16.3316C10.2274 16.3319 9.95785 16.2741 9.70939 16.1621C9.46093 16.05 9.23923 15.8862 9.0591 15.6816L0.883266 6.38827C0.624857 6.08032 0.497191 5.68348 0.527566 5.28262C0.557941 4.88176 0.743946 4.50869 1.04581 4.24318C1.34767 3.97768 1.74143 3.84082 2.14289 3.86186C2.54435 3.8829 2.92164 4.06017 3.1941 4.35577L10.3433 12.4824C10.3628 12.5047 10.3869 12.5226 10.4139 12.5349C10.4409 12.5471 10.4703 12.5534 10.4999 12.5534C10.5296 12.5534 10.5589 12.5471 10.5859 12.5349C10.613 12.5226 10.637 12.5047 10.6566 12.4824L17.8058 4.35577C17.9376 4.19863 18.0996 4.06943 18.2821 3.97577C18.4646 3.8821 18.664 3.82587 18.8685 3.81037C19.0731 3.79487 19.2787 3.82042 19.4732 3.88551C19.6678 3.9506 19.8473 4.05392 20.0014 4.18941C20.1554 4.32489 20.2808 4.4898 20.3702 4.67444C20.4596 4.85907 20.5112 5.05972 20.5219 5.26458C20.5326 5.46944 20.5023 5.67438 20.4327 5.86735C20.3631 6.06032 20.2556 6.23743 20.1166 6.38827L11.9433 15.6783C11.7628 15.8833 11.5408 16.0477 11.2919 16.1603C11.0431 16.273 10.7731 16.3313 10.4999 16.3316V16.3316Z" fill="#5F616A"/>
            </svg>
          </a>
          <p className="mt-4 hidden">The software we create is a public good. It is made available via a free and open source license, for anyone to share, modify and benefit from. We believe in permission-less participation.</p>
        </div>
        <span className="h-1 bg-gray-100 block"></span>
        <div className="py-3 px-4">
          <a href="" title="" className="flex items-center justify-between">
            <div className="grid grid-cols-5 w-full">
              <span className="text-gray-500">VII.</span>
              <span className="col-span-4">Decentralization</span>
            </div>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4999 16.3316C10.2274 16.3319 9.95785 16.2741 9.70939 16.1621C9.46093 16.05 9.23923 15.8862 9.0591 15.6816L0.883266 6.38827C0.624857 6.08032 0.497191 5.68348 0.527566 5.28262C0.557941 4.88176 0.743946 4.50869 1.04581 4.24318C1.34767 3.97768 1.74143 3.84082 2.14289 3.86186C2.54435 3.8829 2.92164 4.06017 3.1941 4.35577L10.3433 12.4824C10.3628 12.5047 10.3869 12.5226 10.4139 12.5349C10.4409 12.5471 10.4703 12.5534 10.4999 12.5534C10.5296 12.5534 10.5589 12.5471 10.5859 12.5349C10.613 12.5226 10.637 12.5047 10.6566 12.4824L17.8058 4.35577C17.9376 4.19863 18.0996 4.06943 18.2821 3.97577C18.4646 3.8821 18.664 3.82587 18.8685 3.81037C19.0731 3.79487 19.2787 3.82042 19.4732 3.88551C19.6678 3.9506 19.8473 4.05392 20.0014 4.18941C20.1554 4.32489 20.2808 4.4898 20.3702 4.67444C20.4596 4.85907 20.5112 5.05972 20.5219 5.26458C20.5326 5.46944 20.5023 5.67438 20.4327 5.86735C20.3631 6.06032 20.2556 6.23743 20.1166 6.38827L11.9433 15.6783C11.7628 15.8833 11.5408 16.0477 11.2919 16.1603C11.0431 16.273 10.7731 16.3313 10.4999 16.3316V16.3316Z" fill="#5F616A"/>
            </svg>
          </a>
          <p className="mt-4 hidden">We minimize centralization across both the software and the organization itself. In other words, we maximize the number of physical computers composing the network, and maximize the number of individuals who have control over the system(s) we are building.</p>
        </div>
        <span className="h-1 bg-gray-100 block"></span>
        <div className="py-3 px-4">
          <a href="" title="" className="flex items-center justify-between">
            <div className="grid grid-cols-5 w-full">
              <span className="text-gray-500">VIII.</span>
              <span className="col-span-4">Inclusivity</span>
            </div>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4999 16.3316C10.2274 16.3319 9.95785 16.2741 9.70939 16.1621C9.46093 16.05 9.23923 15.8862 9.0591 15.6816L0.883266 6.38827C0.624857 6.08032 0.497191 5.68348 0.527566 5.28262C0.557941 4.88176 0.743946 4.50869 1.04581 4.24318C1.34767 3.97768 1.74143 3.84082 2.14289 3.86186C2.54435 3.8829 2.92164 4.06017 3.1941 4.35577L10.3433 12.4824C10.3628 12.5047 10.3869 12.5226 10.4139 12.5349C10.4409 12.5471 10.4703 12.5534 10.4999 12.5534C10.5296 12.5534 10.5589 12.5471 10.5859 12.5349C10.613 12.5226 10.637 12.5047 10.6566 12.4824L17.8058 4.35577C17.9376 4.19863 18.0996 4.06943 18.2821 3.97577C18.4646 3.8821 18.664 3.82587 18.8685 3.81037C19.0731 3.79487 19.2787 3.82042 19.4732 3.88551C19.6678 3.9506 19.8473 4.05392 20.0014 4.18941C20.1554 4.32489 20.2808 4.4898 20.3702 4.67444C20.4596 4.85907 20.5112 5.05972 20.5219 5.26458C20.5326 5.46944 20.5023 5.67438 20.4327 5.86735C20.3631 6.06032 20.2556 6.23743 20.1166 6.38827L11.9433 15.6783C11.7628 15.8833 11.5408 16.0477 11.2919 16.1603C11.0431 16.273 10.7731 16.3313 10.4999 16.3316V16.3316Z" fill="#5F616A"/>
            </svg>
          </a>
          <p className="mt-4 hidden">We believe in fair and widespread access to our software, with an emphasis on ease-of-use. This also extends to social inclusivity, permissionless participation, interoperability, and investing in educational efforts.</p>
        </div>
        <span className="h-1 bg-gray-100 block"></span>
        <div className="py-3 px-4">
          <a href="" title="" className="flex items-center justify-between">
            <div className="grid grid-cols-5 w-full">
              <span className="text-gray-500">IX.</span>
              <span className="col-span-4">Continuance</span>
            </div>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4999 16.3316C10.2274 16.3319 9.95785 16.2741 9.70939 16.1621C9.46093 16.05 9.23923 15.8862 9.0591 15.6816L0.883266 6.38827C0.624857 6.08032 0.497191 5.68348 0.527566 5.28262C0.557941 4.88176 0.743946 4.50869 1.04581 4.24318C1.34767 3.97768 1.74143 3.84082 2.14289 3.86186C2.54435 3.8829 2.92164 4.06017 3.1941 4.35577L10.3433 12.4824C10.3628 12.5047 10.3869 12.5226 10.4139 12.5349C10.4409 12.5471 10.4703 12.5534 10.4999 12.5534C10.5296 12.5534 10.5589 12.5471 10.5859 12.5349C10.613 12.5226 10.637 12.5047 10.6566 12.4824L17.8058 4.35577C17.9376 4.19863 18.0996 4.06943 18.2821 3.97577C18.4646 3.8821 18.664 3.82587 18.8685 3.81037C19.0731 3.79487 19.2787 3.82042 19.4732 3.88551C19.6678 3.9506 19.8473 4.05392 20.0014 4.18941C20.1554 4.32489 20.2808 4.4898 20.3702 4.67444C20.4596 4.85907 20.5112 5.05972 20.5219 5.26458C20.5326 5.46944 20.5023 5.67438 20.4327 5.86735C20.3631 6.06032 20.2556 6.23743 20.1166 6.38827L11.9433 15.6783C11.7628 15.8833 11.5408 16.0477 11.2919 16.1603C11.0431 16.273 10.7731 16.3313 10.4999 16.3316V16.3316Z" fill="#5F616A"/>
            </svg>
          </a>
          <p className="mt-4 hidden">We create software incentivized to continue to exist and improve, without the stewardship of a single entity or any of the current team members.</p>
        </div>
        <span className="h-1 bg-gray-100 block"></span>
        <div className="py-3 px-4">
          <a href="" title="" className="flex items-center justify-between">
            <div className="grid grid-cols-5 w-full">
              <span className="text-gray-500">X.</span>
              <span className="col-span-4">Resourcefulness</span>
            </div>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4999 16.3316C10.2274 16.3319 9.95785 16.2741 9.70939 16.1621C9.46093 16.05 9.23923 15.8862 9.0591 15.6816L0.883266 6.38827C0.624857 6.08032 0.497191 5.68348 0.527566 5.28262C0.557941 4.88176 0.743946 4.50869 1.04581 4.24318C1.34767 3.97768 1.74143 3.84082 2.14289 3.86186C2.54435 3.8829 2.92164 4.06017 3.1941 4.35577L10.3433 12.4824C10.3628 12.5047 10.3869 12.5226 10.4139 12.5349C10.4409 12.5471 10.4703 12.5534 10.4999 12.5534C10.5296 12.5534 10.5589 12.5471 10.5859 12.5349C10.613 12.5226 10.637 12.5047 10.6566 12.4824L17.8058 4.35577C17.9376 4.19863 18.0996 4.06943 18.2821 3.97577C18.4646 3.8821 18.664 3.82587 18.8685 3.81037C19.0731 3.79487 19.2787 3.82042 19.4732 3.88551C19.6678 3.9506 19.8473 4.05392 20.0014 4.18941C20.1554 4.32489 20.2808 4.4898 20.3702 4.67444C20.4596 4.85907 20.5112 5.05972 20.5219 5.26458C20.5326 5.46944 20.5023 5.67438 20.4327 5.86735C20.3631 6.06032 20.2556 6.23743 20.1166 6.38827L11.9433 15.6783C11.7628 15.8833 11.5408 16.0477 11.2919 16.1603C11.0431 16.273 10.7731 16.3313 10.4999 16.3316V16.3316Z" fill="#5F616A"/>
            </svg>
          </a>
          <p className="mt-4 hidden">We are relentlessly resourceful. As we grow and have ready access to capital, it is our obligation to token holders to fight bureaucracy and inefficiencies within the organization. This means solving problems in the most effective way possible at lower economic costs (in terms of capital, time and resources).</p>
        </div>
        <span className="h-1 bg-gray-100 block"></span>
      </div>
      <div className="fixed bottom-0 max-w-md w-full -ml-4">
        <div className="bg-gray-900 p-4 text-center text-gray-500 mx-4">
          <p className="text-sm">I hereby join The State of Us and cryptographically sign The Status Principles</p>
          <a href="/privacy" title="" className="bg-blue-900 px-4 py-3 rounded text-white text-center block hover:bg-blue-800 cursor-pointer mt-4">Cryptographically sign the principles</a>
        </div>
      </div>
    </div>
  )
}
