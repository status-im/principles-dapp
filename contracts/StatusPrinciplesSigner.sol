// SPDX-License-Identifier: CC0-1.0

pragma solidity >=0.5.0 <0.7.0;

import "./openzeppelin/token/ERC721/ERC721.sol";
import "./openzeppelin/cryptography/ECDSA.sol";
import "./common/Controlled.sol";
import "./common/Signer.sol";
import "./common/TokenClaimer.sol";
import "./ens/ENS.sol";
import "./ens/Resolver.sol";

/**
 * @author Ricardo Guilherme Schmidt (Status Research & Development GmbH)
 */
contract StatusPrinciplesSigner is Controlled, TokenClaimer, ERC721("Status Principles Signer", "STPS") {
    bytes4 constant internal EIP1271_MAGICVALUE = 0x20c13b0b;
    bytes constant public SIGN_MSG = abi.encode(
        "I commit to Status Principles (hash 0x",PRINCIPLES_HASH,")"
    );
    bytes32 constant public SIGN_MSG_HASH = keccak256(SIGN_MSG);
    bytes32 constant public PRINCIPLES_HASH = keccak256(
        abi.encode(
            "I. Liberty\r\n",
            "We believe in the sovereignty of individuals. As a platform that stands for the cause of personal liberty, we aim to maximize social, political, and economic freedoms. This includes being coercion-resistant.\r\n",
            "\r\n",
            "II. Censorship resistance\r\n",
            "We enable free flow of information. No content is under surveillance. We abide by the cryptoeconomic design principle of censorship resistance. Even stronger, Status is an agnostic platform for information.\r\n",
            "\r\n",
            "III. Security\r\n",
            "We don't compromise on security when building features. We use state-of-the-art technologies, and research new security methods and technologies to make strong security guarantees.\r\n",
            "\r\n",
            "IV. Privacy\r\n",
            "Privacy is the power to selectively reveal oneself to the world. For us, it's essential to protect privacy in both communications and transactions, as well as being a pseudo-anonymous platform. Additionally, we strive to provide the right of total anonymity.\r\n",
            "\r\n",
            "V. Transparency\r\n",
            "We strive for complete openness and symmetry of information within the organization, and have no border between our core contributors and our community. We are frank about our shortcomings, especially when making short-term tradeoffs in service of our long-term goals.\r\n",
            "\r\n",
            "VI. Openness\r\n",
            "The software we create is a public good. It is made available via a free and open source license, for anyone to share, modify and benefit from. We believe in permission-less participation.\r\n",
            "\r\n",
            "VII. Decentralization\r\n",
            "We minimize centralization across both the software and the organization itself. In other words, we maximize the number of physical computers composing the network, and maximize the number of individuals who have control over the system(s) we are building.\r\n",
            "\r\n",
            "VIII. Inclusivity\r\n",
            "We believe in fair and widespread access to our software, with an emphasis on ease-of-use. This also extends to social inclusivity, permissionless participation, interoperability, and investing in educational efforts.\r\n",
            "\r\n",
            "IX. Continuance\r\n",
            "We create software incentivized to continue to exist and improve, without the stewardship of a single entity or any of the current team members.\r\n",
            "\r\n",
            "X. Resourcefulness\r\n",
            "We are relentlessly resourceful. As we grow and have ready access to capital, it is our obligation to token holders to fight bureaucracy and inefficiencies within the organization. This means solving problems in the most effective way possible at lower economic costs (in terms of capital, time and resources).\r\n"
        )
    );

    ENS public ens;

    mapping(uint256 => bytes32) public ensNode;
    mapping(uint256 => uint256) public signTimestamp;

    /**
     * @param _ens Address of ENS Registry
     **/
    constructor(
        ENS _ens
    )
        public
    {
        ens = _ens;
    }

    /**
     * @notice generate token for msg.sender
     * @param _ensNode optional ens node of signer
     * @param _message message being signed, must be SIGN_MSG
     */
    function sign(bytes32 _ensNode, bytes calldata _message) external {
        require(keccak256(_message) == SIGN_MSG_HASH, "Bad message");
        generateToken(msg.sender, _ensNode);
    }

    /**
     * @notice generate token for another address using a signature
     * @param _signer account signing
     * @param _ensNode optional ens node of signer
     * @param _signature signature of SIGN_MSG_HASH (EIP-1271 for contracts or formatted as EIP-191 for EOA)
     */
    function signFor(address _signer, bytes32 _ensNode, bytes calldata _signature) external {
        require(
            isContract(_signer) && Signer(_signer).isValidSignature(abi.encodePacked(SIGN_MSG_HASH), _signature) == EIP1271_MAGICVALUE || (
                _signer == ECDSA.recover(keccak256(abi.encodePacked(byte(0x19), byte(0x0), address(this), SIGN_MSG_HASH)), _signature) //EIP-191
            ),
            "Bad signature"
        );
        generateToken(_signer, _ensNode);
    }

    /**
     * @notice This method can be used by the controller to extract mistakenly
     *  sent tokens to this contract.
     * @param _token The address of the token contract that you want to recover
     *  set to 0 in case you want to extract ether.
     */
    function claimTokens(address _token)
        external
        override
        onlyController
    {
        withdrawBalance(_token, controller);
    }


    /**
     * @notice sets a ENS node to a token
     * @param _tokenId token being set
     * @param _signer resolved address
     * @param _ensNode ens node being set
     */
    function setENSnode(uint256 _tokenId, address _signer, bytes32 _ensNode) internal {
        require(
            _signer == Resolver(ens.resolver(_ensNode)).addr(_ensNode),
            "Bad ENS node"
        );
        ensNode[_tokenId] = _ensNode;
    }

    /**
     * @notice generate a token
     * @param _signer account being included new token
     * @param _ensNode optional signer ENS node
     * @return tokenId created
     */
    function generateToken(address _signer, bytes32 _ensNode)
        internal
        returns (uint256 tokenId)
    {
        tokenId = this.totalSupply();
        if(_ensNode != bytes32(0)){
            setENSnode(tokenId, _signer, _ensNode);
        }
        signTimestamp[tokenId] = block.timestamp;
        _mint(_signer, tokenId);
    }

    /**
     * @dev Internal function to determine if an address is a contract
     * @param _target The address being queried
     * @return result True if `_addr` is a contract
     */
    function isContract(address _target) internal view returns(bool result) {
        assembly {
            result := gt(extcodesize(_target), 0)
        }
    }
}