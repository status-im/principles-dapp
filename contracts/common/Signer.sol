// SPDX-License-Identifier: CC0-1.0

pragma solidity >=0.5.0 <0.7.0;

/**
 * @notice ERC-1271: Standard Signature Validation Method for Contracts
 */
abstract contract Signer {

    //bytes4(keccak256("isValidSignature(bytes,bytes)")
    bytes4 constant internal MAGICVALUE = 0x20c13b0b;

    /**
     * @dev Should return whether the signature provided is valid for the provided data
     * @param _data Arbitrary length data signed on the behalf of address(this)
     * @param _signature Signature byte array associated with _data
     *
     * MUST return the bytes4 magic value 0x20c13b0b when function passes.
     * MUST NOT modify state (using STATICCALL for solc < 0.5, view modifier for solc > 0.5)
     * MUST allow external calls
     */
    function isValidSignature(
        bytes memory _data,
        bytes memory _signature
    )
        public
        view
        virtual
        returns (bytes4 magicValue);
}