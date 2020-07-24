// SPDX-License-Identifier: CC0-1.0

pragma solidity >=0.5.0 <0.7.0;

import "./openzeppelin/token/ERC721/ERC721.sol";
import "./openzeppelin/cryptography/ECDSA.sol";
import "./common/Controlled.sol";
import "./common/Signer.sol";
import "./common/TokenClaimer.sol";

/**
 * @author Ricardo Guilherme Schmidt (Status Research & Development GmbH)
 */
contract StatusPrinciplesSigner is Controlled, TokenClaimer, ERC721("Status Principles Signer", "STPS") {
    bytes4 constant internal EIP1271_MAGICVALUE = 0x20c13b0b;
    bytes constant public SIGN_MSG = abi.encode(
        "I commit to Status Principles (hash 0x",PRINCIPLES_HASH,")"
    );
    bytes32 constant public SIGN_MSG_HASH = keccak256(SIGN_MSG);
    bytes32 constant public PRINCIPLES_HASH = keccak256("I. Liberty\r\nWe believe in the sovereignty of individuals. As a platform that stands for the cause of personal liberty, we aim to maximize social, political, and economic freedoms. This includes being coercion-resistant.\r\n\r\nII. Censorship resistance\r\nWe enable free flow of information. No content is under surveillance. We abide by the cryptoeconomic design principle of censorship resistance. Even stronger, Status is an agnostic platform for information.\r\n\r\nIII. Security\r\nWe don't compromise on security when building features. We use state-of-the-art technologies, and research new security methods and technologies to make strong security guarantees.\r\n\r\nIV. Privacy\r\nPrivacy is the power to selectively reveal oneself to the world. For us, it's essential to protect privacy in both communications and transactions, as well as being a pseudo-anonymous platform. Additionally, we strive to provide the right of total anonymity.\r\n\r\nV. Transparency\r\nWe strive for complete openness and symmetry of information within the organization, and have no border between our core contributors and our community. We are frank about our shortcomings, especially when making short-term tradeoffs in service of our long-term goals.\r\n\r\nVI. Openness\r\nThe software we create is a public good. It is made available via a free and open source license, for anyone to share, modify and benefit from. We believe in permission-less participation.\r\n\r\nVII. Decentralization\r\nWe minimize centralization across both the software and the organization itself. In other words, we maximize the number of physical computers composing the network, and maximize the number of individuals who have control over the system(s) we are building.\r\n\r\nVIII. Inclusivity\r\nWe believe in fair and widespread access to our software, with an emphasis on ease-of-use. This also extends to social inclusivity, permissionless participation, interoperability, and investing in educational efforts.\r\n\r\nIX. Continuance\r\nWe create software incentivized to continue to exist and improve, without the stewardship of a single entity or any of the current team members.\r\n\r\nX. Resourcefulness\r\nWe are relentlessly resourceful. As we grow and have ready access to capital, it is our obligation to token holders to fight bureaucracy and inefficiencies within the organization. This means solving problems in the most effective way possible at lower economic costs (in terms of capital, time and resources).\r\n");

    struct Metadata {
        uint256 timestamp;
        address signer;
    }
    
    mapping(uint256 => Metadata) public metadata;

    constructor(
    )
        public
    {
    }

    /**
     * @notice generate token for msg.sender
     * @param _message message being signed, must be SIGN_MSG
     */
    function sign(bytes calldata _message) external {
        require(keccak256(_message) == SIGN_MSG_HASH, "Bad message");
        generateToken(msg.sender);
    }

    /**
     * @notice generate token for another address using a signature
     * @param _signer account signing
     * @param _ensNode optional ens node of signer
     * @param _signature signature of SIGN_MSG_HASH (EIP-1271 for contracts or formatted as EIP-191 for EOA)
     */
    function signFor(address _signer, bytes calldata _signature) external {
        require(
            isContract(_signer) && Signer(_signer).isValidSignature(abi.encodePacked(SIGN_MSG_HASH), _signature) == EIP1271_MAGICVALUE || (
                _signer == ECDSA.recover(keccak256(abi.encodePacked(byte(0x19), byte(0x0), address(this), SIGN_MSG_HASH)), _signature) //EIP-191
            ),
            "Bad signature"
        );
        generateToken(_signer);
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

    function _transfer(address from, address to, uint256 tokenId) internal virtual override {
        revert("Transfers are not allowed");
    }

    /**
     * @notice generate a token
     * @param _signer account being included new token
     * @return tokenId created
     */
    function generateToken(address _signer)
        internal
        returns (uint256 tokenId)
    {
        require(_signer != address(0), "Bad signer");
        tokenId = this.totalSupply();
        metadata[tokenId] = Metadata(block.timestamp, _signer);
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