// SPDX-License-Identifier: CC0-1.0

pragma solidity >=0.5.0 <0.7.0;

import "../openzeppelin/token/ERC20/ERC20.sol";

abstract contract TokenClaimer {
    event ClaimedTokens(address indexed token, address indexed controller, uint256 amount, bool success);

    function claimTokens(address _token) virtual external;
    /**
     * @notice This method can be used by the controller to extract mistakenly
     *  sent tokens to this contract.
     * @param _token The address of the token contract that you want to recover
     *  set to 0 in case you want to extract ether.
     */
    function withdrawBalance(address _token, address payable _destination)
        internal
    {
        uint256 balance;
        bool success;
        if (_token == address(0)) {
            balance = address(this).balance;
            (success,) = _destination.call{value: balance}("");
        } else {
            ERC20 token = ERC20(_token);
            balance = token.balanceOf(address(this));
            success = token.transfer(_destination, balance);
        }
        emit ClaimedTokens(_token, _destination, balance, success);
    }
}
